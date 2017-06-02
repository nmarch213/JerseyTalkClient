import axios from 'axios';

export const FETCH_CORE_INFORMATION = 'FETCH_CORE_INFORMATION';
export const FETCH_SCHOOL = 'FETCH_SCHOOL'

const ROOT_URL = "http://localhost:3000"

export function fetchCoreInformation(){
  const request = axios.get(`${ROOT_URL}/getUniversityCoreInfo`);
  return {
    type: FETCH_CORE_INFORMATION,
    payload: request
  };
}

export function fetchSchool(id){
  const request = axios.get(`${ROOT_URL}/getSchool/${id}`);
  return {
    type: FETCH_SCHOOL,
    payload: request
  };
}
