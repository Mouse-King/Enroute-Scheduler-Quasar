import { SchedulingAPI } from "./scheduling/scheduling";
import { GoogleMapsAPI } from "./google/maps";
import { UserAuthenticationAPI } from "./auth/auth";

const api = {
  scheduling: SchedulingAPI,
  maps: GoogleMapsAPI,
  auth: UserAuthenticationAPI,
};

export default api;
