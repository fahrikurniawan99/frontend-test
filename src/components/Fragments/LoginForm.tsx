import * as React from "react";
import { Formik, FormikProps, Form, FormikHelpers } from "formik";
import LoginSchema from "@/utils/schema/login";
import AuthCard from "../Layout/AuthCard";
import Link from "next/link";

export type LoginValue = {
  email: string;
  password: string;
};

type Props = {
  initialValue: LoginValue;
  onSubmit: (
    values: LoginValue,
    formikHelpers: FormikHelpers<LoginValue>
  ) => void;
  children: (props: FormikProps<LoginValue>) => React.ReactNode;
};

const LoginForm = ({ initialValue, onSubmit, children }: Props) => {
  return (
    <AuthCard
      title="Masuk akun untuk melanjutkan"
      description={
        <>
          Jika belum punya akun,{" "}
          <Link href={"/register"} className="text-blue-600 font-medium">
            klik ini untuk daftar.
          </Link>
        </>
      }
    >
      <Formik
        initialValues={initialValue}
        onSubmit={(
          values: LoginValue,
          formikHelpers: FormikHelpers<LoginValue>
        ) => {
          onSubmit(values, formikHelpers);
        }}
        validationSchema={LoginSchema}
      >
        {(props: FormikProps<LoginValue>) => {
          return <Form className="mt-6 space-y-5">{children(props)}</Form>;
        }}
      </Formik>
    </AuthCard>
  );
};

export default LoginForm;
