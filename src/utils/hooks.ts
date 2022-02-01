import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@redux/index';
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ICallbackEvent {
  timeout?: number;
}

interface IHandleCopyClick {
  beforeCopy?: () => void;
  afterCopy?: () => void;
  afterCopyTimeoutFired?: () => void;
  onError?: (error: ErrorEvent) => void;
}

export const useCopyText = function (
  mainProps: ICallbackEvent = {}
): [boolean, (copyText: string, functions?: IHandleCopyClick) => void] {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (
    copyText: string,
    functions: IHandleCopyClick = {}
  ) => {
    // Asynchronously call copyTextToClipboard

    if (functions.beforeCopy) {
      functions.beforeCopy();
    }
    copyTextToClipboard(copyText ?? '')
      .then(() => {
        setIsCopied(true);
        if (functions.afterCopy) {
          functions.afterCopy();
        }
        setTimeout(() => {
          setIsCopied(false);
          if (functions.afterCopyTimeoutFired) {
            functions.afterCopyTimeoutFired();
          }
        }, mainProps?.timeout ?? 1500);
      })
      .catch(functions.onError ?? console.log);
  };
  return [isCopied, handleCopyClick];
};
export function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): {
  width: number;
  height: number;
} {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

type CopyStatus = 'inactive' | 'copied' | 'failed';
export const useCopyToClipboard = (
  text: string,
  notifyTimeout = 2500
): [CopyStatus, () => void] => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('inactive');
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed')
    );
  }, [text]);

  useEffect(() => {
    if (copyStatus === 'inactive') {
      return;
    }

    const timeoutId = setTimeout(
      () => setCopyStatus('inactive'),
      notifyTimeout
    );

    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  return [copyStatus, copy];
};
