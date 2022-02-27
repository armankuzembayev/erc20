import { task } from "hardhat/config";
import * as Configs from "../config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("transfer", "Transfer some amount of token")
.addParam("recipient", "The recipient's address")
.addParam("amount", "How much to send")
.setAction(async  (taskArgs, { ethers }) => {

const contract = await ethers.getContractAt(artifact.abi, Configs.contractAddress)

const transfer = await contract.transfer(taskArgs.recipient, ethers.utils.formatEther(taskArgs.amount))
await transfer.wait()

const balance = await contract.balanceOf(taskArgs.recipient)
console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});