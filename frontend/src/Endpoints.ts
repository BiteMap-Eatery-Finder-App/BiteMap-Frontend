const baseURL = process.env.REACT_APP_API_URL
export const url = `${baseURL}/getAll`;
export const getById = `${baseURL}/api/establishments/`
export const login = `${baseURL}/api/Auth/login`
export const signUp = `${baseURL}/api/Auth/register`
export const getUserByUsername = `${baseURL}/api/User/GetUserByUsername?username=`