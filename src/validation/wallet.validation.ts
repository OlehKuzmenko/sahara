import * as Yup from 'yup';
import {
  MINIMUM_VALUE_STRING,
  MAXIMUM_VALUE_STRING,
  REG_EXP,
} from './messages';
const min = 16;
const max = 42;

const walletValidation = Yup.string()
  .min(min, MINIMUM_VALUE_STRING(min))
  .max(max, MAXIMUM_VALUE_STRING(max))
  .matches(new RegExp('^0x[a-fA-F0-9]{40}$'), REG_EXP());
export default walletValidation;
