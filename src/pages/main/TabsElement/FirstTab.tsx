import Dropdown, {
  MyReactSelectOptionType,
  OnChange,
} from '@/components/Dropdown';
import DropdownSchema from '@/components/Dropdown/validator';
import { UserStatusType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import { FormatDigit } from '@/utils/functions';
import { MINIMUM_VALUE_NUMBER, REQUIRED } from '@/validation/messages';
import { StyledTabWrapper } from '@components/MainPageTabs/styled';
import SecretKey from '@components/SecretKey';
import { openConnectWallet, openSecretKey } from '@redux/modal';
import { useAppDispatch } from '@utils/hooks';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useMemo } from 'react';
import * as Yup from 'yup';
import {
  StyledCustomSliderDeposit,
  StyledDropdownContainer,
  StyledGradientButtonTabs,
  StyledInfo,
  StyledLabel,
} from './styled';

const options = [
  { value: 'shra', label: 'SHRA' },
  { value: 'dgc', label: 'DGC' },
];

const MIN = 1;

const WithDrawSchema = Yup.object().shape({
  amount: Yup.number().min(MIN, MINIMUM_VALUE_NUMBER(MIN)).required(REQUIRED()),
  token: DropdownSchema,
});
type MarksStyle<T = number> = { [x: number]: T };

class Marks {
  private readonly marks: MarksStyle;
  constructor(data: MarksStyle) {
    this.marks = data;
  }
  public toMathematicalView() {
    return this.marks;
  }

  public toSliderView(): MarksStyle<string> {
    return Object.entries(this.marks).reduce((accum, [key, value]) => {
      return {
        ...accum,
        [key]: FormatDigit(value, { minimumFractionDigits: 0 }),
      };
    }, {});
  }
}

const marks = new Marks({
  0: 1,
  25: 10,
  50: 100,
  75: 1000,
  100: 10000,
});

const VisitorButton = withAuthType([UserStatusType.VISITOR])(
  StyledGradientButtonTabs
);
const AuthedButton = withAuthType([UserStatusType.AUTHED])(
  StyledGradientButtonTabs
);

const FirstTab = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sliderMarks = useMemo(() => marks.toSliderView(), []);

  const openConnectWalletModal = function () {
    dispatch(openConnectWallet(true));
    document.body.style.overflowY = 'hidden';
  };

  const sliderValueOnChange = function ({ field, form }: FieldProps) {
    return function onChange(value: number) {
      const ourValue = marks.toMathematicalView();
      //save at amount field selected amount
      form.setFieldValue(field.name, ourValue[value]);
    };
  };

  return (
    <Formik
      initialValues={{
        amount: 1,
        token: options[0],
      }}
      validationSchema={WithDrawSchema}
      onSubmit={(values) => {
        console.log(values);
        dispatch(openSecretKey(true));
        document.body.style.overflowY = 'hidden';
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <StyledTabWrapper className="deposit">
            <StyledDropdownContainer>
              <StyledLabel>Token</StyledLabel>
              <Field name="token">
                {({ field, form, ...props }: FieldProps) => (
                  <Dropdown
                    onChange={
                      ((value: MyReactSelectOptionType<string>) => {
                        form.setFieldValue(field.name, value);
                      }) as OnChange<unknown>
                    }
                    defaultValue={options[0]}
                    options={options}
                    {...props}
                  />
                )}
              </Field>
            </StyledDropdownContainer>
            <Field name="amount">
              {({ field, form, ...props }: FieldProps) => (
                <StyledCustomSliderDeposit
                  min={0}
                  marks={sliderMarks}
                  step={null}
                  defaultValue={0}
                  onChange={sliderValueOnChange({ field, form, ...props })}
                  errorMessage={
                    errors.amount && touched.amount ? errors.amount : undefined
                  }
                />
              )}
            </Field>
            <StyledInfo>
              Anonymity Level:{' '}
              {FormatDigit(values.amount, { minimumFractionDigits: 0 }) ?? 0}{' '}
              equal deposits
            </StyledInfo>
            <VisitorButton
              textContent="CONNECT WALLET"
              type='button'
              onClick={openConnectWalletModal}
            />
            <AuthedButton
              disabled={!values.amount}
              type="submit"
              textContent="DEPOSIT"
            />
            <SecretKey />
          </StyledTabWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default FirstTab;
