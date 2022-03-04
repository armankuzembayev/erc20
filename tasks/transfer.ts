import { task } from "hardhat/config";
// import * as Configs from "../config"

// const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')

const abiERC20 = [
    "event Transfer(address indexed _from, address indexed _to, uint256 _amount)",
    "event Approval(address indexed _owner, address indexed _spender, uint256 _amount)",
    "function transfer(address _recipient, uint256 _amount) external returns (bool)",
    "function transferFrom(address _sender, address _recipient, uint256 _amount) external returns (bool)",
    "function approve(address _spender, uint256 _amount) external returns (bool)",
    "function increaseAllowance(address _spender, uint256 _amount) external returns (bool)",
    "function decreaseAllowance(address _spender, uint256 _amount) external returns (bool)",
    "function allowance(address _owner, address _spender) external view returns (uint256)",
    "function balanceOf(address _user) external view returns (uint256)"
]

task("transfer", "Transfer some amount of token")
    .addParam("token", "Token address")
    .addParam("recipient", "The recipient's address")
    .addParam("amount", "How much to send")
    .setAction(async  (taskArgs, { ethers }) => {

const contract = await ethers.getContractAt(abiERC20, taskArgs.token)

const transfer = await contract.transfer(taskArgs.recipient, ethers.utils.parseEther(taskArgs.amount))
await transfer.wait()

const balance = await contract.balanceOf(taskArgs.recipient)
console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});