require("dotenv").config();
const Client = require("../client");

async function enableAssetCommands(cod_sys, commandsToEnable) {
  const client = new Client(
    process.env.TELEMATICS_USERNAME,
    process.env.TELEMATICS_PASSWORD
  );

  const assetId = await client.getAssetId(cod_sys);
  console.log("assetId", assetId);

  // Asset Commands
  const assetCommands = await client.getAssetCommands(assetId);
  console.log("assetCommands", assetCommands);

  const assetCommandsToPatch = assetCommands.filter((command) =>
    commandsToEnable.includes(command.command)
  );
  console.log("assetCommandsToPatch", assetCommandsToPatch);

  const patchedAssetCommands = await Promise.all(
    assetCommandsToPatch.map(async (command) => {
      return await client.patchAssetCommand(command.id, 1);
    })
  );
  console.log("patchedAssetCommands", patchedAssetCommands);

  // User Asset Commands
  const userAssetCommands = await client.getUserAssetCommands(assetId);
  console.log("userAssetCommands", userAssetCommands);

  const userAssetCommandsToPatch = userAssetCommands.filter((command) =>
    commandsToEnable.includes(command.command)
  );
  console.log("userAssetCommandsToPatch", userAssetCommandsToPatch);

  const patchedUserAssetCommands = await Promise.all(
    userAssetCommandsToPatch.map(async (command) => {
      return await client.patchUserAssetCommand(command.id, true);
    })
  );
  console.log("patchedUserAssetCommands", patchedUserAssetCommands);
}

enableAssetCommands("1101085864", ["CAR_LOCK", "CAR_UNLOCK"]);
