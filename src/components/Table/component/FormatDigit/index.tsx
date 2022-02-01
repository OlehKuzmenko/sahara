import { FormatDigit } from '@/utils/functions';

export default function FormatDigitInTable(value: number): string {
  return FormatDigit(value, { minimumFractionDigits: 0 });
}
