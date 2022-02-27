import { task } from "hardhat/config";
import * as Configs from "../config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("mint", "Mint some amount")
.addParam("recipient", "The recipient's address")
.addParam("amount", "How much to approve")
.setAction(async  (taskArgs, { ethers }) => {

const contract = await ethers.getContractAt(artifact.abi, Configs.contractAddress)

const mint = await contract.mint(taskArgs.recipient, ethers.utils.parseEther(taskArgs.amount))
await mint.wait()

const balance = await contract.balanceOf(taskArgs.recipient)
console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});