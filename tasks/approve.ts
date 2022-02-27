import { task } from "hardhat/config";
import * as Configs from "../config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("approve", "Approve amount")
.addParam("spender", "The spender's address")
.addParam("amount", "How much to approve")
.setAction(async  (taskArgs, { ethers }) => {

const [signer] = await ethers.getSigners();
const contract = await ethers.getContractAt(artifact.abi, Configs.contractAddress)

const approve = await contract.approve(taskArgs.spender, ethers.utils.parseEther(taskArgs.amount))
await approve.wait()

const allowance = await contract.allowance(signer.address, taskArgs.spender)
console.log("Current allwoance for this user: ", ethers.utils.formatEther(allowance))
});