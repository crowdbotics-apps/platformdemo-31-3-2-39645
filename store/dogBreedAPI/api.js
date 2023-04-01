import axios from "axios"
const dogBreedAPI = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogbreed2api_get_random_read(payload) {
  return dogBreedAPI.get(`/random`)
}
export const apiService = { dogbreed2api_get_random_read }
