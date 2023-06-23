window.abi = [ { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }, { "internalType": "uint256", "name": "_toChainID", "type": "uint256" }, { "internalType": "uint256", "name": "_flags", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" } ], "name": "anyCall", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "anyExecute", "outputs": [ { "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "result", "type": "bytes" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "executor", "outputs": [ { "internalType": "address", "name": "executor", "type": "address" } ], "stateMutability": "view", "type": "function" } ]