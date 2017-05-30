import axios from 'axios';

export const FETCH_CORE_INFORMATION = 'FETCH_CORE_INFORMATION';

const ROOT_URL = "http://localhost:3000"

export function fetchCoreInformation(){
  const request = axios.get(`${ROOT_URL}/getUniversityCoreInfo`);
  return {
    type: FETCH_CORE_INFORMATION,
    payload: request
  };
}
