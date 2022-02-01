import { ReactComponent as Check } from '@icons/check.svg';
import { ReactComponent as Error } from '@icons/error.svg';
import { ReactComponent as Question } from '@icons/question-circle-outlined.svg';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  StyledEyeHidden,
  StyledEyeVisible,
  StyledInput,
  StyledInputBlur,
  StyledInputOverlayBadge,
  StyledInputPrompt,
  StyledInputTitle,
  StyledInputTitleContainer,
  StyledInputTitleWrapper,
  StyledInputWrapper,
  StyledTooltip,
  StyledUploadInput,
} from './styled';
import { ReactComponent as UploadIcon } from '@icons/upload.svg';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  title?: string;
  badge?: string;
  promptText?: string;
  blur?: boolean;
  error?: boolean;
  input?: boolean;
}

/**
 * This hooks create overlay for input
 * @returns boolean - if true - need's to show overlay. If false - hide
 */
function useOverlayHook<T extends HTMLElement>(
  isActive: boolean,
  ref: React.RefObject<T>
): boolean {
  if (!isActive) {
    return false;
  }

  const [overlay, setOverlay] = useState(false);

  const eventHandler = useCallback(function () {
    setOverlay((state) => !state);
  }, []);

  useEffect(() => {
    ref.current?.addEventListener('focus', eventHandler);
    ref.current?.addEventListener('blur', eventHandler);

    return () => {
      ref.current?.removeEventListener('focus', eventHandler);
      ref.current?.removeEventListener('blur', eventHandler);
    };
  }, []);

  return overlay;
}

type BadgeComponentType = Pick<IInput, 'error'>;

function useShowPasswordComponent({
  type,
}: Pick<IInput, 'type'>): [
  React.HTMLInputTypeAttribute,
  (props: React.HTMLProps<HTMLDivElement>) => JSX.Element
] {
  if (type !== 'password') return useMemo(() => [type, () => <></>], []);
  const [currentType, setCurrentType] =
    useState<React.HTMLInputTypeAttribute>('password');

  const clickOnShowPassword = useCallback(function () {
    setCurrentType((state) => (state === 'password' ? 'text' : 'password'));
  }, []);

  return useMemo(
    () => [
      currentType,
      () => (
        <StyledInputOverlayBadge key={0}>
          {currentType !== 'password' ? (
            <StyledEyeHidden onClick={clickOnShowPassword} />
          ) : (
            <StyledEyeVisible onClick={clickOnShowPassword} />
          )}
        </StyledInputOverlayBadge>
      ),
    ],
    [currentType]
  );
}

const ErrorComponent = React.memo(function ErrorComponent({
  error,
}: BadgeComponentType): JSX.Element {
  const isErrorExist = typeof error !== 'undefined';
  return (
    <>
      {isErrorExist && (
        <StyledInputOverlayBadge key={0}>
          {error ? <Error /> : <Check />}
        </StyledInputOverlayBadge>
      )}
    </>
  );
});

type BadgeFactoryComponentType = {
  [x in React.HTMLInputTypeAttribute | 'general']?: JSX.Element;
};

function BadgeFactoryComponent({
  type,
  components,
  ...props
}: {
  type: React.HTMLInputTypeAttribute;
  components: BadgeFactoryComponentType;
}): JSX.Element {
  const MyComponent = components[type] ?? components['general'] ?? <></>;
  return <div {...props}>{MyComponent}</div>;
}

const Input = ({
  type = 'text',
  title,
  badge,
  promptText,
  blur = false,
  error,
  input,
  ...props
}: IInput): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);
  const overlayState = useOverlayHook(blur, inputEl);

  const [currentType, PasswordComponent] = useShowPasswordComponent({
    type,
  });

  const overlayClick = useCallback(function () {
    inputEl.current?.focus();
  }, []);

  return (
    <StyledInputWrapper data-error={!!error} {...props}>
      {blur && (
        <StyledInputBlur
          onClick={overlayClick}
          data-component="blur"
          className={(overlayState && 'hidden') || undefined}
        />
      )}
      <BadgeFactoryComponent
        type={type}
        data-component="badge"
        components={{
          password: <PasswordComponent />,
          general: <ErrorComponent error={error} />,
        }}
      />
      {title && (
        <StyledInputTitleContainer>
          <StyledInputTitleWrapper data-component="title_container">
            <StyledInputTitle>{title}</StyledInputTitle>
            {badge && (
              <>
                <a data-tip="React-tooltip" data-for="input-tip">
                  <Question />
                </a>
                <StyledTooltip id='input-tip' place="right" effect="solid">
                  {badge}
                </StyledTooltip>
              </>
            )}
          </StyledInputTitleWrapper>
          {input && (
            <label>
              <StyledUploadInput type={'file'} />
              <UploadIcon />
              <p>UPLOAD KEY</p>
            </label>
          )}
        </StyledInputTitleContainer>
      )}
      <StyledInput
        ref={inputEl}
        autoFocus={overlayState}
        data-badge={true}
        data-error={!!error}
        data-component="input"
        type={currentType}
        {...props}
      />
      {promptText && (
        <StyledInputPrompt data-component="prompt">
          {promptText}
        </StyledInputPrompt>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
