var axios = require("axios");

async function patchAssetCommand(commandId, status, api, auth) {
  try {
    const response = await axios.patch(
      `${api}/asset-command/${commandId}/`,
      {
        status: status,
      },
      {
        auth,
      }
    );
    return {
      id: response.data.id,
      command: response.data.command,
      status: response.data.status,
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = patchAssetCommand;
