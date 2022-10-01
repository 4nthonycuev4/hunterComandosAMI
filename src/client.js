require("dotenv").config();

const requests = require("./requests");

class Client {
  constructor(username, password) {
    this.auth = { username, password };
    this.api = process.env.TELEMATICS_API;
  }

  async getAssetId(cod_sys) {
    return await requests.getAssetId(cod_sys, this.api, this.auth);
  }

  async getAssetCommands(assetId) {
    return await requests.getAssetCommands(assetId, this.api, this.auth);
  }

  async getUserAssetCommands(assetId) {
    return await requests.getUserAssetCommands(assetId, this.api, this.auth);
  }

  async patchAssetCommand(commandId, status) {
    return await requests.patchAssetCommand(
      commandId,
      status,
      this.api,
      this.auth
    );
  }

  async patchUserAssetCommand(commandId, canExecute) {
    return await requests.patchUserAssetCommand(
      commandId,
      canExecute,
      this.api,
      this.auth
    );
  }
}

module.exports = Client;
