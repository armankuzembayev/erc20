import { task } from "hardhat/config";
import * as Configs from "../hardhat.config"

const artifact = require('../artifacts/contracts/Erc20.sol/Erc20.json')


task("transfer", "Transfer some amount of token")
    .addParam("recipient", "The recipient's address")
    .addParam("amount", "How much to send")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const provider = new ethers.providers.AlchemyProvider(Configs.network, Configs.api_key)

    const signer = new ethers.Wallet(Configs.private_key, provider)
    
    const contract = new ethers.Contract(
        Configs.contractAddress,
        artifact.abi,
        signer
    )

    const transfer = await contract.transfer(taskArgs.recipient, ethers.utils.formatEther(taskArgs.amount))
    await transfer.wait()

    const balance = await contract.balanceOf(taskArgs.recipient)
    console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});

task("transferFrom", "Transfer some amount of token")
    .addParam("sender", "The sender's address")
    .addParam("recipient", "The recipient's address")
    .addParam("amount", "How much to send")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const provider = new ethers.providers.AlchemyProvider(Configs.network, Configs.api_key)

    const signer = new ethers.Wallet(Configs.private_key, provider)
    
    const contract = new ethers.Contract(
        Configs.contractAddress,
        artifact.abi,
        signer
    )
    console.log("Signer's address: ", signer.address)
    const transferFrom = await contract.transferFrom(taskArgs.sender, taskArgs.recipient, ethers.utils.formatEther(taskArgs.amount))
    await transferFrom.wait()

    const balanceSender = await contract.balanceOf(taskArgs.sender)
    console.log("Current balance of sender after transfer: ", ethers.utils.formatEther(balanceSender))

    const balanceRecipient = await contract.balanceOf(taskArgs.recipient)
    console.log("Current balance of recipient after transfer: ", ethers.utils.formatEther(balanceRecipient))
});


task("approve", "Approve amount")
    .addParam("spender", "The spender's address")
    .addParam("amount", "How much to approve")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const provider = new ethers.providers.AlchemyProvider(Configs.network, Configs.api_key)

    const signer = new ethers.Wallet(Configs.private_key, provider)
    
    const contract = new ethers.Contract(
        Configs.contractAddress,
        artifact.abi,
        signer
    )

    const approve = await contract.approve(taskArgs.spender, ethers.utils.parseEther(taskArgs.amount))
    await approve.wait()

    const allowance = await contract.allowance(signer.address, taskArgs.spender)
    console.log("Current allwoance for this user: ", ethers.utils.formatEther(allowance))
});


task("mint", "Mint some amount")
    .addParam("recipient", "The recipient's address")
    .addParam("amount", "How much to approve")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const provider = new ethers.providers.AlchemyProvider(Configs.network, Configs.api_key)

    const signer = new ethers.Wallet(Configs.private_key, provider)
    
    const contract = new ethers.Contract(
        Configs.contractAddress,
        artifact.abi,
        signer
    )

    const mint = await contract.mint(taskArgs.recipient, ethers.utils.parseEther(taskArgs.amount))
    await mint.wait()

    const balance = await contract.balanceOf(taskArgs.recipient)
    console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});


task("burn", "Burn some amount from user")
    .addParam("account", "The recipient's address")
    .addParam("amount", "How much to approve")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const provider = new ethers.providers.AlchemyProvider(Configs.network, Configs.api_key)

    const signer = new ethers.Wallet(Configs.private_key, provider)
    
    const contract = new ethers.Contract(
        Configs.contractAddress,
        artifact.abi,
        signer
    )

    const mint = await contract.burn(taskArgs.account, ethers.utils.parseEther(taskArgs.amount))
    await mint.wait()

    const balance = await contract.balanceOf(taskArgs.account)
    console.log("Current balance of recipient: ", ethers.utils.formatEther(balance))
});


task("allowance", "Allowance")
    .addParam("owner", "The owner's address")
    .addParam("spender", "The spender's address")
    .setAction(async  (taskArgs, { ethers }) => {
    
    const provider = new ethers.providers.AlchemyProvider(Configs.network, Configs.api_key)

    const signer = new ethers.Wallet(Configs.private_key, provider)
    
    const contract = new ethers.Contract(
        Configs.contractAddress,
        artifact.abi,
        signer
    )

    const allowance = await contract.alowance(taskArgs.owner, taskArgs.spender)

    console.log("Current allwoance for this user: ", ethers.utils.formatEther(allowance))
});


module.exports = {};