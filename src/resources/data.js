import { leagueAPI } from './leagueAPI.js'

console.log(leagueAPI)

export const data = {

  champFreeRot: () => {

    fetch('https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-5eb1de0b-3841-4926-8cfd-63927a9fa0c1')
    .then((r) => r.json())
    .then((data) => data.maxNewPlayerLevel)
  },

  updatedURL: () => {
    return `${leagueAPI.base_url}?${leagueAPI.api_token}`
  }

}