import * as Yup from 'yup';
import { LENGTH } from './messages';
const length = 51;

const secretValidation = Yup.string().length(length, LENGTH());
export default secretValidation;
