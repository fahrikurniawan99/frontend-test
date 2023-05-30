import { JobApplication } from "@prisma/client";
import axios from "axios";

type Payload = {
  jobVacancyId: number;
  userId: number;
};

const JobApplicationService = {
  apply(payload: Payload) {
    return axios.post("/api/job-application", payload);
  },
  getAll() {
    return axios.get("/api/job-application");
  },
};

export default JobApplicationService;
