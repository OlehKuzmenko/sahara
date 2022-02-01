export interface IVesting {
  round: string;
  token: string;
  cliffPeriod: number;
  unlockedToken: number;
  totalToken: number;
}
