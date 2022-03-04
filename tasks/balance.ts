import { task } from "hardhat/config";
// import * as Configs from "../config"


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


task("balance", "Get balance of")
    .addParam("token", "Token address")
    .addParam("user", "The user's address")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const arm = await ethers.getContractAt(abiERC20, taskArgs.token);
    
    const balance = await arm.balanceOf(taskArgs.user);
    console.log("User's balance is: ", ethers.utils.formatEther(balance));
});