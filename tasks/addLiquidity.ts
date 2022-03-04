import { task } from "hardhat/config";
import * as Configs from "../config"

const abiUniswapRouter = [
    "function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)"
]

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


task("addLiquidity", "Get pair")
    .addParam("token", "Token address")
    .addParam("amounttokendesired", "The amount of token to add as liquidity")
    .addParam("amountethdesired", "The amount of ETH to add as liquidity")
    .addParam("amounttokenmin", "The minimum amount of token to add as liquidity")
    .addParam("amountethmin", "The minimum amount of ETH to add as liquidity")
    .addParam("to", "Address where to send LP tokens")
    .setAction(async  (taskArgs, { ethers }) => {

    const [signer] = await ethers.getSigners();
    const arm = await ethers.getContractAt(abiERC20, taskArgs.token);
    await arm.approve(Configs.routerAddress, ethers.utils.parseEther(taskArgs.amounttokendesired));
    
    // const allowance = await arm.allowance(Configs.myAddress, Configs.routerAddress)
    // console.log("Current allowance for this user: ", ethers.utils.formatEther(allowance))
    
    const router = await ethers.getContractAt(abiUniswapRouter, Configs.routerAddress);
    const overrides = {value: ethers.utils.parseEther(taskArgs.amountethdesired)};
    const t = Date.now() + 300;

    await router.addLiquidityETH(taskArgs.token, ethers.utils.parseEther(taskArgs.amountethdesired), ethers.utils.parseEther(taskArgs.amounttokenmin), ethers.utils.parseEther(taskArgs.amountethmin), taskArgs.to, t, overrides);
    
});