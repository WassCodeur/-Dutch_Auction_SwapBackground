/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DutschAuction,
  DutschAuctionInterface,
} from "../../contracts/DutschAuction";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decreaseRate",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "decreaseRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenBAddr",
        type: "address",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_decreaseRate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "createAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decreaseRate",
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
    name: "endTime",
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
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "getCurrentPrice",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
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
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Token",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610d2b806100326000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c806378e979251161007157806378e97925146101c95780637deb6025146101d2578063819c9e4c146101e55780638da5cb5b146101f8578063c55d0f561461020b578063fc0c546a1461021e57600080fd5b8062f714ce146100ad5780632897183d146100c25780633197cbb6146100de578063571a26a0146100e75780637150d8ae1461019e575b600080fd5b6100c06100bb366004610bbd565b610231565b005b6100cb60025481565b6040519081526020015b60405180910390f35b6100cb60045481565b6101506100f5366004610be9565b600760208190526000918252604090912080546001820154600283015460038401546004850154600586015460068701549787015460089097015495976001600160a01b039586169794969395929491939092918216911689565b60408051998a526001600160a01b0398891660208b01528901969096526060880194909452608087019290925260a086015260c0850152821660e084015216610100820152610120016100d5565b6001546101b1906001600160a01b031681565b6040516001600160a01b0390911681526020016100d5565b6100cb60035481565b6100c06101e0366004610bbd565b6103e9565b6100c06101f3366004610c02565b6107d2565b6000546101b1906001600160a01b031681565b6100cb610219366004610be9565b610b5a565b6006546101b1906001600160a01b031681565b600082815260076020819052604090912001546001600160a01b031633146102a05760405162461bcd60e51b815260206004820152601760248201527f4f6e6c79206f776e65722063616e20776974686472617700000000000000000060448201526064015b60405180910390fd5b60008281526008602052604090205460ff166102fe5760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206973206e6f742066696e616c697a656400000000000000006044820152606401610297565b6000546040516370a0823160e01b81523060048201526001600160a01b038381169263a9059cbb9291169083906370a0823190602401602060405180830381865afa158015610351573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103759190610c41565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156103c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e49190610c5a565b505050565b60008281526008602052604090205460ff16156104485760405162461bcd60e51b815260206004820152601c60248201527f41756374696f6e20697320616c72656164792066696e616c697a6564000000006044820152606401610297565b600082815260076020526040902060060154421061049c5760405162461bcd60e51b8152602060048201526011602482015270105d58dd1a5bdb881a185cc8195b991959607a1b6044820152606401610297565b60008281526007602081905260409091200154336001600160a01b03909116036104fc5760405162461bcd60e51b815260206004820152601160248201527053656c6c65722063616e6e6f742062757960781b6044820152606401610297565b6000828152600760205260409020600801546001600160a01b0316156105645760405162461bcd60e51b815260206004820152601760248201527f41756374696f6e20697320616c726561647920736f6c640000000000000000006044820152606401610297565b600082815260076020819052604090912001546001600160a01b03166105cc5760405162461bcd60e51b815260206004820152601760248201527f41756374696f6e20646f657374206e6f742065786973740000000000000000006044820152606401610297565b60006105d783610b5a565b6040516370a0823160e01b815233600482015290915081906001600160a01b038416906370a0823190602401602060405180830381865afa158015610620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106449190610c41565b10156106895760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610297565b6040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107009190610c5a565b506000838152600760208190526040918290206001810154910154915163a9059cbb60e01b81526001600160a01b0392831660048201526024810184905291169063a9059cbb906044016020604051808303816000875af1158015610769573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078d9190610c5a565b5050506000908152600760209081526040808320600880820180546001600160a01b03191633179055426006909201919091559091529020805460ff19166001179055565b600084116108225760405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e2030000000006044820152606401610297565b600083116108725760405162461bcd60e51b815260206004820152601f60248201527f4475726174696f6e206d7573742062652067726561746572207468616e2030006044820152606401610297565b600082116108ce5760405162461bcd60e51b8152602060048201526024808201527f44656372656173652072617465206d75737420626520677265617465722074686044820152630616e20360e41b6064820152608401610297565b6040516370a0823160e01b815233600482015284906001600160a01b038316906370a0823190602401602060405180830381865afa158015610914573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109389190610c41565b101561097d5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610297565b6040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b038216906323b872dd906064016020604051808303816000875af11580156109d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f49190610c5a565b5060006005546001610a069190610c99565b9050604051806101200160405280828152602001836001600160a01b031681526020018681526020018581526020018481526020014281526020018542610a4d9190610c99565b81523360208083019190915260006040928301819052848152600780835283822085518155928501516001840180546001600160a01b03199081166001600160a01b0393841617909155948601516002850155606086015160038501556080860151600485015560a086015160058086019190915560c0870151600686015560e087015192850180548716938316939093179092556101009095015160089093018054909416929094169190911790915581549190610b0b83610cb2565b9091555050604080518681526020810186905290810184905233907fbfc2001685f147773956c30c745f1b33e40df1ad4c1084b4d39c7c41bb7f66859060600160405180910390a25050505050565b60008060035442610b6b9190610ccb565b9050600081600254610b7d9190610cde565b600085815260076020526040902060020154610b999190610ccb565b949350505050565b80356001600160a01b0381168114610bb857600080fd5b919050565b60008060408385031215610bd057600080fd5b82359150610be060208401610ba1565b90509250929050565b600060208284031215610bfb57600080fd5b5035919050565b60008060008060808587031215610c1857600080fd5b843593506020850135925060408501359150610c3660608601610ba1565b905092959194509250565b600060208284031215610c5357600080fd5b5051919050565b600060208284031215610c6c57600080fd5b81518015158114610c7c57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610cac57610cac610c83565b92915050565b600060018201610cc457610cc4610c83565b5060010190565b81810381811115610cac57610cac610c83565b8082028115828204841417610cac57610cac610c8356fea2646970667358221220efdd2492dd4a8fabdf300b96933c391c27b0873dcca3e1b459d21a8b3402f8ef64736f6c63430008140033";

type DutschAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DutschAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DutschAuction__factory extends ContractFactory {
  constructor(...args: DutschAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DutschAuction & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DutschAuction__factory {
    return super.connect(runner) as DutschAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DutschAuctionInterface {
    return new Interface(_abi) as DutschAuctionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DutschAuction {
    return new Contract(address, _abi, runner) as unknown as DutschAuction;
  }
}
