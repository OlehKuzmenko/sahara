import { EColorScheme } from '@/redux/css';

export type IBgrImg = {
  [x in EColorScheme]: string;
};

export interface IRoute {
  name: string;
  path: string;
  exact?: boolean;
  link: boolean | string;
  bgrImg?: IBgrImg;
  icon?: () => JSX.Element;
  main: () => JSX.Element;
  comingSoon?: true;
  pageTitle?: string;
}
