import { DIGIT_FORMAT } from './consts';
interface SettingsProps {
  minimumFractionDigits?: number;
}

export function FormatDigit(
  number: number,
  settings: SettingsProps = {
    minimumFractionDigits: 4,
  }
): string {
  return number.toLocaleString(DIGIT_FORMAT, settings);
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function differenceBetweenTwoDates(date1: Date, date2: Date): Date {
  return new Date(date1.getTime() - date2.getTime());
}

export function timeDifferenceInObject(
  date1: Date,
  date2: Date
): { year: number; day: number; month: number } {
  const diff = differenceBetweenTwoDates(date1, date2);

  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth(),
    day: diff.getUTCDate(),
  };
}
