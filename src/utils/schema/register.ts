import * as yup from "yup";

const RegisterSchema = yup.object({
  email: yup
    .string()
    .required("Masukan alamat email")
    .email("Format email tidak valid")
    .min(3, "Alamat email minimal terdiri 3 karakter"),
  name: yup
    .string()
    .required("Masukan nama")
    .min(3, "Nama minimal terdiri 3 karakter"),
  password: yup
    .string()
    .required("Masukan password")
    .min(8, "Password minimal terdiri 8 karakter"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password tidak sama")
    .required("Ulangi password"),
});

export default RegisterSchema;
