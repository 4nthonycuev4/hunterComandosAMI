var axios = require("axios");

async function getAssetCommands(assetId, api, auth) {
  try {
    const response = await axios.get(`${api}/asset-command/`, {
      params: {
        asset: assetId,
      },
      auth,
    });
    return response.data.results.map((command) => {
      return {
        id: command.id,
        command: command.command,
        status: command.status,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = getAssetCommands;
