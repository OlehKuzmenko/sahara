import { REQUIRED } from '@/validation/messages';
import * as Yup from 'yup';

const DropdownSchema = Yup.object().shape({
  label: Yup.string().required(REQUIRED()),
  value: Yup.string().required(REQUIRED()),
  icon: Yup.string(),
});

export default DropdownSchema;
