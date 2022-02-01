import { MyReactSelectOptionType, OnChange } from '@/components/Dropdown';
import { UserStatusType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import { openConnectWallet } from '@/redux/modal';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { REG_EXP, REQUIRED } from '@/validation/messages';
import secretValidation from '@/validation/secret.validation';
import walletValidation from '@/validation/wallet.validation';
import Input from '@components/Input';
import List from '@components/List';
import { StyledTabWrapper } from '@components/MainPageTabs/styled';
import {
  StyledErrorMessage,
  StyledGradientButtonTabs,
  StyledSelect,
} from '@pages/main/TabsElement/styled';
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { authWalletAddress } from '@redux/auth';

const ListData1 = {
  Amount: '10 pSHRA',
  'Time passed after deposit': '10 hours',
  'Subsequent deposits': '12 deposits',
};

const ListData2 = {
  'Secret Key balance': '100.0000 pSHRA',
  'Platform fee 5%:': '5.0000 pSHRA',
  'Relayer fee:': '0 pSHRA',
  'Tokens to receive': '95.0000 SHRA',
};

const options = [
  { value: 'Relayer 1.ETH (0.01% fee)', label: 'Relayer 1.ETH (0.01% fee)' },
  { value: 'Relayer 2.ETH (0.02% fee)', label: 'Relayer 2.ETH (0.02% fee)' },
  { value: 'Relayer 3.ETH (0.03% fee)', label: 'Relayer 3.ETH (0.03% fee)' },
];

const defaultValue = {
  value: 'Select value...',
  label: 'Select value...',
};

const VisitorButton = withAuthType([UserStatusType.VISITOR])(
  StyledGradientButtonTabs
);

const AuthedButton = withAuthType([UserStatusType.AUTHED])(
  StyledGradientButtonTabs
);
const AuthedList = withAuthType([UserStatusType.AUTHED])(List);

const WithDrawSchema = Yup.object().shape({
  recipient: walletValidation.required(REQUIRED()),
  secret: secretValidation.required(REQUIRED()),
  layer: Yup.object().shape({
    label: Yup.string()
      .matches(/^(?!Select value...$)/, REG_EXP())
      .required(REQUIRED()),
    value: Yup.string()
      .matches(/^(?!Select value...$)/, REG_EXP())
      .required(REQUIRED()),
  }),
});

const isValidated = (
  errors: FormikErrors<{
    recipient: string;
    secret: string;
    layer: { value: string; label: string };
  }>,
  touched: FormikTouched<{
    recipient: string;
    secret: string;
    layer: { value: string; label: string };
  }>
) => {
  return (
    !errors.recipient && !errors.secret && touched.secret
  );
};

const SecondTab = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const openConnectWalletModal = function () {
    dispatch(openConnectWallet(true));
    document.body.style.overflowY = 'hidden';
  };

  const accountNameHash = useAppSelector(authWalletAddress);

  return (
    <Formik
      initialValues={{
        recipient: accountNameHash,
        secret: '',
        layer: defaultValue,
      }}
      validationSchema={WithDrawSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <StyledTabWrapper className="withdraw">
            <Field
              name="recipient"
              as={Input}
              title="RECIPIENT ADDRESS"
              error={errors.recipient}
            />
            {errors.recipient && touched.recipient ? (
              <StyledErrorMessage>{errors.recipient}</StyledErrorMessage>
            ) : null}
            <Field
              name="secret"
              as={Input}
              autoComplete='off'
              blur={true}
              title="SECRET KEY"
              badge="Please enter here your Secret Key which you received when deposited funds on your Sahara account. Never provide your secret key to anyone, including Sahara team, even if they say they're from customer service"
              error={errors.secret}
              input={true}
            />
            {errors.secret && touched.secret ? (
              <StyledErrorMessage>{errors.secret}</StyledErrorMessage>
            ) : null}
            <AuthedList
              list={ListData1}
              validated={isValidated(errors, touched)}
            />
            <Field name="layer">
              {({ field, form, ...props }: FieldProps) => (
                <StyledSelect
                  options={options}
                  value={
                    options
                      ? options.find((option) => option.value === field.value)
                      : defaultValue
                  }
                  defaultValue={defaultValue}
                  isSearchable={false}
                  placeholder="Select value..."
                  onBlur={field.onBlur}
                  onChange={
                    ((selectedOption: MyReactSelectOptionType<string>) => {
                      form.setFieldValue(field.name, selectedOption);
                    }) as OnChange<unknown>
                  }
                  title="SELECT RELAYER"
                  {...props}
                />
              )}
            </Field>
            {errors.layer && touched.layer ? (
              <StyledErrorMessage>{errors.layer.label}</StyledErrorMessage>
            ) : null}
            <AuthedList
              list={ListData2}
              title="SUMMARY"
              validated={isValidated(errors, touched)}
            />
            <AuthedButton type="submit" textContent="WITHDRAW" disabled={!isValidated(errors, touched)} />
            <VisitorButton
              textContent="CONNECT WALLET"
              onClick={openConnectWalletModal}
            />
          </StyledTabWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SecondTab;
