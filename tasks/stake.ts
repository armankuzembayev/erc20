import { task } from "hardhat/config";


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

const abiStaking = [
    "function stake(uint256 _amount) external",
    "function unstake() external",
    "function claim() external",
    "function balanceOf(address _user) public view returns (uint256)"
]


task("stake", "Stake LP Tokens")
    .addParam("contract", "Contract address")
    .addParam("amount", "The amount of lp tokens")
    .addParam("user", "The user's address")
    .setAction(async  (taskArgs, { ethers }) => {

    const contract = await ethers.getContractAt(abiStaking, taskArgs.contract);
    await contract.stake(ethers.utils.parseEther(taskArgs.amount));

    // const balance = await contract.balanceOf(taskArgs.user);
    // console.log("LP Balance left: ", ethers.utils.formatEther(balance));

});
