require("dotenv").config();
const Client = require("../client");

async function main() {
  const client = new Client(
    process.env.TELEMATICS_USERNAME,
    process.env.TELEMATICS_PASSWORD
  );
  const assetIt = await client.getAssetId("1101085864");
  console.log("assetIt", assetIt);
}

main();
