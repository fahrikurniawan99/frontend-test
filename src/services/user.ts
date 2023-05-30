import axios from "axios";

type PayloadType = {
  education?: string;
  major?: string;
};

const UserService = {
  update(payload: PayloadType) {
    return axios.put("/api/user", payload);
  },
  get() {
    return axios.get("/api/user");
  },
};

export default UserService;
