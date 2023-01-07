const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const UserTable = await hre.ethers.getContractFactory("userTable");
  const userTable = await UserTable.deploy();
  await userTable.deployed();
  console.log("userTable Contract deployed to:", userTable.address);

  fs.writeFileSync('./config2.js', `
  export const fileShareAddress = "${userTable.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
