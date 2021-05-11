import { api } from './api.js'

export const data = {

  champFreeRot: () => {

    fetch(data.updatedURL)
    .then((r) => r.json())
    .then((data) => data)
  },

  updatedURL: () => {
    return `${api.base_url}?${api.api_token}`
  }

}