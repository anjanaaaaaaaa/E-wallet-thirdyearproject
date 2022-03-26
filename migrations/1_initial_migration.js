const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Minting 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0x6Cf48a1B6f4F1025d46eD1aB4040f832A70F8cd2',
    '1000000000000000000000'
  )
};
