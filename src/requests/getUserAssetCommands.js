var axios = require("axios");

async function getUserAssetCommands(assetId, api, auth) {
  try {
    const response = await axios.get(`${api}/user-asset-command/`, {
      params: {
        asset: assetId,
      },
      auth,
    });
    return response.data.results.map((command) => {
      return {
        id: command.id,
        command: command.command,
        can_execute: command.can_execute,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = getUserAssetCommands;
