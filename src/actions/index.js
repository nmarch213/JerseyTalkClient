import axios from 'axios';

export const FETCH_CORE_INFORMATION = 'FETCH_CORE_INFORMATION';
export const FETCH_SCHOOL = 'FETCH_SCHOOL';
export const CREATE_REVIEW = 'CREATE_REVIEW';

const ROOT_URL = 'http://jerseytalkdev.herokuapp.com';

export function fetchCoreInformation() {
  const request = axios.get(`${ROOT_URL}/getUniversityCoreInfo`);
  return {
    type: FETCH_CORE_INFORMATION,
    payload: request,
  };
}

export function fetchSchool(id) {
  const request = axios.get(`${ROOT_URL}/getSchool/${id}`);
  return {
    type: FETCH_SCHOOL,
    payload: request,
  };
}

export function postSchoolReview(values, id) {
  const request = axios.post(`${ROOT_URL}/schools/${id}/review`, values);

  return {
    type: CREATE_REVIEW,
    payload: request,
  };
}
