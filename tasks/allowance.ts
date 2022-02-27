import { task } from "hardhat/config";
import * as Configs from "../config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("allowance", "Allowance")
    .addParam("owner", "The owner's address")
    .addParam("spender", "The spender's address")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const contract = await ethers.getContractAt(artifact.abi, Configs.contractAddress)

    const allowance = await contract.alowance(taskArgs.owner, taskArgs.spender)

    console.log("Current allwoance for this user: ", ethers.utils.formatEther(allowance))
});