import { task } from "hardhat/config";
import * as Configs from "../config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("burn", "Burn some amount from user")
.addParam("account", "The recipient's address")
.addParam("amount", "How much to approve")
.setAction(async  (taskArgs, { ethers }) => {

const contract = await ethers.getContractAt(artifact.abi, Configs.contractAddress)

const mint = await contract.burn(taskArgs.account, ethers.utils.parseEther(taskArgs.amount))
await mint.wait()

const balance = await contract.balanceOf(taskArgs.account)
console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});