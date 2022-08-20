import http from "./http";

export const fetchProfiles = () => http.get('/users')