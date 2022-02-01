export enum UserStatusType {
  AUTHED = 'auth',
  VISITOR = 'visitor',
}

export enum WalletType {
  METAMASK = 'metamask',
  WALLETCONNECT = 'walletconnect',
}

export enum NetworkType {
  ETHEREUM = 'ethereum',
  TRON = 'tron',
}

export interface IUser {
  accountName: string;
  status: UserStatusType;
  walletType: WalletType | '';
}
