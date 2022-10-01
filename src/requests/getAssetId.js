var axios = require("axios");

async function getAssetId(cod_sys, api, auth) {
  try {
    const response = await axios.get(`${api}/asset`, {
      params: {
        attributes__attribute__name: "cod_sys",
        attributes__value: cod_sys,
      },
      auth,
    });
    return response.data.results[0].id;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getAssetId;
