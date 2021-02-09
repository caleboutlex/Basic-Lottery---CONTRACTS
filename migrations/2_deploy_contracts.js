require('babel-register');
require('babel-polyfill');
require('dotenv').config();


const compoundFarmer = artifacts.require('compoundFarmer.sol');


module.exports = async function (deployer) {

  await deployer.deploy(
    compoundFarmer,
    );
  const compoundfarmer = await compoundFarmer.deployed()
  const _compoundfarmer = compoundfarmer.address;
  console.log(_compoundfarmer);

  
}
