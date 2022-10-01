var axios = require("axios");

async function patchUserAssetCommand(commandId, can_execute, api, auth) {
  try {
    const response = await axios.patch(
      `${api}/user-asset-command/${commandId}/`,
      {
        can_execute: can_execute,
      },
      {
        auth,
      }
    );
    return {
      id: response.data.id,
      command: response.data.command,
      can_execute: response.data.can_execute,
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = patchUserAssetCommand;
