
const hre = require("hardhat");

async function main() {

  const Voteapp = await hre.ethers.getContractFactory("Voteapp");
  const voteapp = await Voteapp.deploy();

  await voteapp.deployed();

  console.log(" Voteapp deployed to:", voteapp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
