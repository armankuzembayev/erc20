/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_percent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_holdTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_freezeTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freezeTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "holdTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "percent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_freezeTime",
        type: "uint256",
      },
    ],
    name: "setFreezeTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_holdTime",
        type: "uint256",
      },
    ],
    name: "setHoldTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_percent",
        type: "uint256",
      },
    ],
    name: "setPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620023c8380380620023c8833981810160405281019062000037919062000217565b620000697fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42336200008760201b60201c565b82600181905550816002819055508060038190555050505062000291565b6200009982826200009d60201b60201c565b5050565b620000af82826200018e60201b60201c565b6200018a57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200012f620001f860201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600081519050620002118162000277565b92915050565b6000806000606084860312156200022d57600080fd5b60006200023d8682870162000200565b9350506020620002508682870162000200565b9250506040620002638682870162000200565b9150509250925092565b6000819050919050565b62000282816200026d565b81146200028e57600080fd5b50565b61212780620002a16000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370ba1113116100a2578063a694fc3a11610071578063a694fc3a146102e3578063aafc057f146102ff578063d547741f1461031b578063f945530114610337578063fd7e1bee1461035357610116565b806370ba11131461025b5780637154b8b51461027957806391d1485414610295578063a217fddf146102c557610116565b80632def6620116100e95780632def6620146101b75780632f2ff15d146101d557806336568abe146101f15780634e71d92d1461020d57806370a082311461022b57610116565b806301ffc9a71461011b578063097d51551461014b578063248a9ca3146101695780632a0acc6a14610199575b600080fd5b61013560048036038101906101309190611863565b610371565b6040516101429190611b57565b60405180910390f35b6101536103eb565b6040516101609190611c4f565b60405180910390f35b610183600480360381019061017e91906117fe565b6103f1565b6040516101909190611b72565b60405180910390f35b6101a1610410565b6040516101ae9190611b72565b60405180910390f35b6101bf610434565b6040516101cc9190611c4f565b60405180910390f35b6101ef60048036038101906101ea9190611827565b61066d565b005b61020b60048036038101906102069190611827565b610696565b005b610215610719565b6040516102229190611c4f565b60405180910390f35b610245600480360381019061024091906117ac565b6107d0565b6040516102529190611c4f565b60405180910390f35b610263610876565b6040516102709190611c4f565b60405180910390f35b610293600480360381019061028e919061188c565b61087c565b005b6102af60048036038101906102aa9190611827565b6108b9565b6040516102bc9190611b57565b60405180910390f35b6102cd610923565b6040516102da9190611b72565b60405180910390f35b6102fd60048036038101906102f8919061188c565b61092a565b005b6103196004803603810190610314919061188c565b610c34565b005b61033560048036038101906103309190611827565b610c71565b005b610351600480360381019061034c919061188c565b610c9a565b005b61035b610cd7565b6040516103689190611c4f565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103e457506103e382610cdd565b5b9050919050565b60025481565b6000806000838152602001908152602001600020600101549050919050565b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4281565b600080739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016104849190611ab3565b60206040518083038186803b15801561049c57600080fd5b505afa1580156104b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d491906118b5565b1415610515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050c90611bcf565b60405180910390fd5b600061052033610d47565b9050739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff1663095ea7b333836040518363ffffffff1660e01b8152600401610571929190611b2e565b602060405180830381600087803b15801561058b57600080fd5b505af115801561059f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c391906117d5565b50739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610613929190611b2e565b602060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066591906117d5565b508091505090565b610676826103f1565b61068781610682610f76565b610f7e565b610691838361101b565b505050565b61069e610f76565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461070b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070290611c2f565b60405180910390fd5b61071582826110fb565b5050565b600080610725336111dc565b9050735d9f39831843aabac051ae8a6401a5b430ee3b4273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610776929190611b2e565b602060405180830381600087803b15801561079057600080fd5b505af11580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c891906117d5565b508091505090565b6000739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161081f9190611ab3565b60206040518083038186803b15801561083757600080fd5b505afa15801561084b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086f91906118b5565b9050919050565b60015481565b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec426108ae816108a9610f76565b610f7e565b816001819055505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b80739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161097a929190611ace565b60206040518083038186803b15801561099257600080fd5b505afa1580156109a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ca91906118b5565b1015610a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0290611c0f565b60405180910390fd5b80739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610a599190611ab3565b60206040518083038186803b158015610a7157600080fd5b505afa158015610a85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa991906118b5565b1015610aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae190611bef565b60405180910390fd5b739427818cc9d83632dfe349ac274c35d70474972073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610b3b93929190611af7565b602060405180830381600087803b158015610b5557600080fd5b505af1158015610b69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8d91906117d5565b50600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405280838152602001428152602001428152509080600181540180825580915050600190039060005260206000209060030201600090919091909150600082015181600001556020820151816001015560408201518160020155505050565b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42610c6681610c61610f76565b610f7e565b816003819055505050565b610c7a826103f1565b610c8b81610c86610f76565b610f7e565b610c9583836110fb565b505050565b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42610ccc81610cc7610f76565b610f7e565b816002819055505050565b60035481565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610df95783829060005260206000209060030201604051806060016040529081600082015481526020016001820154815260200160028201548152505081526020019060010190610da9565b50505050905060005b8151811015610f6f576000828281518110610e46577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040015142610e5d9190611d72565b90506003548110610f5b57828281518110610ea1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000015184610eb89190611c91565b9350600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610f31577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302016000808201600090556001820160009055600282016000905550505b508080610f6790611e81565b915050610e02565b5050919050565b600033905090565b610f8882826108b9565b61101757610fad8173ffffffffffffffffffffffffffffffffffffffff166014611434565b610fbb8360001c6020611434565b604051602001610fcc929190611a79565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100e9190611b8d565b60405180910390fd5b5050565b61102582826108b9565b6110f757600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061109c610f76565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61110582826108b9565b156111d857600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061117d610f76565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561128e578382906000526020600020906003020160405180606001604052908160008201548152602001600182015481526020016002820154815250508152602001906001019061123e565b5050505090506000805b82518110156114295760008382815181106112dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160200151426112f39190611d72565b905060025481106114155760006002548261130e9190611ce7565b9050606460015486858151811061134e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160000151836113659190611d18565b61136f9190611d18565b6113799190611ce7565b846113849190611c91565b935042600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481106113fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160010181905550505b50808061142190611e81565b915050611298565b508092505050919050565b6060600060028360026114479190611d18565b6114519190611c91565b67ffffffffffffffff811115611490577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156114c25781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611520577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106115aa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026115ea9190611d18565b6115f49190611c91565b90505b60018111156116e0577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061165c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110611699577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806116d990611e57565b90506115f7565b5060008414611724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171b90611baf565b60405180910390fd5b8091505092915050565b60008135905061173d8161207e565b92915050565b60008151905061175281612095565b92915050565b600081359050611767816120ac565b92915050565b60008135905061177c816120c3565b92915050565b600081359050611791816120da565b92915050565b6000815190506117a6816120da565b92915050565b6000602082840312156117be57600080fd5b60006117cc8482850161172e565b91505092915050565b6000602082840312156117e757600080fd5b60006117f584828501611743565b91505092915050565b60006020828403121561181057600080fd5b600061181e84828501611758565b91505092915050565b6000806040838503121561183a57600080fd5b600061184885828601611758565b92505060206118598582860161172e565b9150509250929050565b60006020828403121561187557600080fd5b60006118838482850161176d565b91505092915050565b60006020828403121561189e57600080fd5b60006118ac84828501611782565b91505092915050565b6000602082840312156118c757600080fd5b60006118d584828501611797565b91505092915050565b6118e781611da6565b82525050565b6118f681611db8565b82525050565b61190581611dc4565b82525050565b600061191682611c6a565b6119208185611c75565b9350611930818560208601611e24565b61193981611f28565b840191505092915050565b600061194f82611c6a565b6119598185611c86565b9350611969818560208601611e24565b80840191505092915050565b6000611982602083611c75565b915061198d82611f39565b602082019050919050565b60006119a5600a83611c75565b91506119b082611f62565b602082019050919050565b60006119c8601283611c75565b91506119d382611f8b565b602082019050919050565b60006119eb601483611c75565b91506119f682611fb4565b602082019050919050565b6000611a0e601783611c86565b9150611a1982611fdd565b601782019050919050565b6000611a31601183611c86565b9150611a3c82612006565b601182019050919050565b6000611a54602f83611c75565b9150611a5f8261202f565b604082019050919050565b611a7381611e1a565b82525050565b6000611a8482611a01565b9150611a908285611944565b9150611a9b82611a24565b9150611aa78284611944565b91508190509392505050565b6000602082019050611ac860008301846118de565b92915050565b6000604082019050611ae360008301856118de565b611af060208301846118de565b9392505050565b6000606082019050611b0c60008301866118de565b611b1960208301856118de565b611b266040830184611a6a565b949350505050565b6000604082019050611b4360008301856118de565b611b506020830184611a6a565b9392505050565b6000602082019050611b6c60008301846118ed565b92915050565b6000602082019050611b8760008301846118fc565b92915050565b60006020820190508181036000830152611ba7818461190b565b905092915050565b60006020820190508181036000830152611bc881611975565b9050919050565b60006020820190508181036000830152611be881611998565b9050919050565b60006020820190508181036000830152611c08816119bb565b9050919050565b60006020820190508181036000830152611c28816119de565b9050919050565b60006020820190508181036000830152611c4881611a47565b9050919050565b6000602082019050611c646000830184611a6a565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611c9c82611e1a565b9150611ca783611e1a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cdc57611cdb611eca565b5b828201905092915050565b6000611cf282611e1a565b9150611cfd83611e1a565b925082611d0d57611d0c611ef9565b5b828204905092915050565b6000611d2382611e1a565b9150611d2e83611e1a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d6757611d66611eca565b5b828202905092915050565b6000611d7d82611e1a565b9150611d8883611e1a565b925082821015611d9b57611d9a611eca565b5b828203905092915050565b6000611db182611dfa565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611e42578082015181840152602081019050611e27565b83811115611e51576000848401525b50505050565b6000611e6282611e1a565b91506000821415611e7657611e75611eca565b5b600182039050919050565b6000611e8c82611e1a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ebf57611ebe611eca565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f4e6f2062616c616e636500000000000000000000000000000000000000000000600082015250565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b7f4e6f7420656e6f75676820616c6c6f77616e6365000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b61208781611da6565b811461209257600080fd5b50565b61209e81611db8565b81146120a957600080fd5b50565b6120b581611dc4565b81146120c057600080fd5b50565b6120cc81611dce565b81146120d757600080fd5b50565b6120e381611e1a565b81146120ee57600080fd5b5056fea26469706673582212207aaa2fb7de8b2525b792661a67f4d45f607b66a4532036ac2ffaae6ea2e9115c64736f6c63430008040033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Staking";
  }

  deploy(
    _percent: BigNumberish,
    _holdTime: BigNumberish,
    _freezeTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      _percent,
      _holdTime,
      _freezeTime,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    _percent: BigNumberish,
    _holdTime: BigNumberish,
    _freezeTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _percent,
      _holdTime,
      _freezeTime,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly contractName: "Staking";
  public readonly contractName: "Staking";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
