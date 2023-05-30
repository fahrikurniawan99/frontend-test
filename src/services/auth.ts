import axios from "axios";

type Values = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
};

const AuthService = {
  register(values: Values) {
    return axios.post("/api/auth/register", values);
  },
};

export default AuthService;
