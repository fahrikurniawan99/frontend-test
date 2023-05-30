import * as yup from "yup";

const LoginSchema = yup.object({
  email: yup
    .string()
    .required("Masukan alamat email")
    .email("Format email tidak valid")
    .min(3, "Alamat email minimal terdiri 3 karakter"),
  password: yup
    .string()
    .required("Masukan password")
    .min(8, "Password minimal terdiri 8 karakter"),
});

export default LoginSchema;
