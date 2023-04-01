import axios from "axios"
const dogBreedAPI = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogbreedapi_get_random_read(payload) {
  return dogBreedAPI.get(`/random`)
}
export const apiService = { dogbreedapi_get_random_read }
