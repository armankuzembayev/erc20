import { task } from "hardhat/config";
import * as Configs from "../config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("transferFrom", "Transfer some amount of token")
    .addParam("sender", "The sender's address")
    .addParam("recipient", "The recipient's address")
    .addParam("amount", "How much to send")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const contract = await ethers.getContractAt(artifact.abi, Configs.contractAddress)
    
    const transferFrom = await contract.transferFrom(taskArgs.sender, taskArgs.recipient, ethers.utils.formatEther(taskArgs.amount))
    await transferFrom.wait()

    const balanceSender = await contract.balanceOf(taskArgs.sender)
    console.log("Current balance of sender after transfer: ", ethers.utils.formatEther(balanceSender))

    const balanceRecipient = await contract.balanceOf(taskArgs.recipient)
    console.log("Current balance of recipient after transfer: ", ethers.utils.formatEther(balanceRecipient))
});