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


task("burn", "Burn some amount from user")
    .addParam("account", "The recipient's address")
    .addParam("amount", "How much to approve")
    .setAction(async  (taskArgs, { ethers }) => {

const contract = await ethers.getContractAt(abiERC20, taskArgs.token)

const mint = await contract.burn(taskArgs.account, ethers.utils.parseEther(taskArgs.amount))
await mint.wait()

const balance = await contract.balanceOf(taskArgs.account)
console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});