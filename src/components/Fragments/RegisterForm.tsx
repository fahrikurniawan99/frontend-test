import * as React from "react";
import { Formik, FormikProps, Form, FormikHelpers } from "formik";
import RegisterSchema from "@/utils/schema/register";
import AuthCard from "../Layout/AuthCard";
import { signIn } from "next-auth/react";

export type RegisterValue = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
};

type Props = {
  initialValue: RegisterValue;
  onSubmit: (
    values: RegisterValue,
    formikHelpers: FormikHelpers<RegisterValue>
  ) => void;
  children: (props: FormikProps<RegisterValue>) => React.ReactNode;
};

const RegisterForm = ({ initialValue, onSubmit, children }: Props) => {
  return (
    <AuthCard
      title="Buat akun kamu sekarang"
      description={
        <>
          Jika sudah punya akun,{" "}
          <span
            onClick={() => signIn()}
            className="text-blue-600 font-medium cursor-pointer"
          >
            klik ini untuk masuk.
          </span>
        </>
      }
    >
      <Formik
        initialValues={initialValue}
        onSubmit={(
          values: RegisterValue,
          formikHelpers: FormikHelpers<RegisterValue>
        ) => {
          const { passwordConfirmation, ...valuesWithoutPasswordConfirmation } =
            values;
          onSubmit(valuesWithoutPasswordConfirmation, formikHelpers);
        }}
        validationSchema={RegisterSchema}
      >
        {(props: FormikProps<RegisterValue>) => {
          return <Form className="mt-6 space-y-5">{children(props)}</Form>;
        }}
      </Formik>
    </AuthCard>
  );
};

export default RegisterForm;
