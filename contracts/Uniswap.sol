//SPDX-License-Identifier: Unlicense
pragma solidity  ^0.8.0;

// import "./interfaces/IErc20.sol";
// import "./interfaces/IUniswap.sol";

// contract Liquidity {
    
//     address private constant FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
//     address private constant ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
//     address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
//     address private constant ARM = 0x5D9F39831843AAbaC051ae8a6401A5B430ee3b42;

//     function getPair(address _tokenA, address _tokenB) external returns (address) {
//         address pair = IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);
//         if ( pair == address(0)) {
//             pair = IUniswapV2Factory(FACTORY).createPair(_tokenA, _tokenB);
//         }
//         return pair;
//     }

//     function addLiquidity(address _token, uint256 _amount) external payable {
//         IErc20(ARM).approve(_token, _amount);
//         IUniswapV2Router(ROUTER).addLiquidityETH(_token, _amo    unt, _amount, amountETHMin, msg.sender, block.timestamp);
//     } 
// }