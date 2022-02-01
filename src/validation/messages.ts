export const MINIMUM_VALUE_STRING = (number: number): string =>
  `The string must be at least ${number} characters long`;
export const MAXIMUM_VALUE_STRING = (number: number): string =>
  `The string must be ${number} characters maximum`;

export const MINIMUM_VALUE_NUMBER = (number: number): string =>
  `Number must be at least ${number}`;
// export const MAXIMUM_VALUE_NUMBER = (number: number): string =>
//   `Number must be ${number} maximum`;

export const LENGTH = (): string => `Please check the Secret key format`;
export const REG_EXP = (): string => `Please check the address format`;
export const REQUIRED = (): string => 'Field can’t be empty';
