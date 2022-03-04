import { task } from "hardhat/config";
import * as Configs from "../config"

const abiUniswapFactory = [
    "event PairCreated(address indexed token0, address indexed token1, address pair, uint)",
    "function getPair(address tokenA, address tokenB) external view returns (address pair)",
    "function createPair(address tokenA, address tokenB) external returns (address pair)"
]

task("getPair", "Get pair")
    .addParam("token1", "First token")
    .addParam("token2", "Second token")
    .setAction(async  (taskArgs, { ethers }) => {

    const factory = await ethers.getContractAt(abiUniswapFactory, Configs.factoryAddress);
    let pair = await factory.getPair(taskArgs.token1, taskArgs.token2);
    if (pair == Configs.zeroAddress) {
        pair = await factory.createPair(taskArgs.token1, taskArgs.token2);
    }

    console.log(pair);
    
});