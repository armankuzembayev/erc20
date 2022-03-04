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


task("allowance", "Allowance")
    .addParam("token", "Token address")
    .addParam("owner", "The owner's address")
    .addParam("spender", "The spender's address")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const contract = await ethers.getContractAt(abiERC20, taskArgs.token)

    const allowance = await contract.allowance(taskArgs.owner, taskArgs.spender)

    console.log("Current allwoance for this user: ", ethers.utils.formatEther(allowance))
});