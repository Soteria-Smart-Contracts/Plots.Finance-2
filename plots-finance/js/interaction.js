const contractAddress = "0xdCf9db7EE17195122714062F58c1A5c357aC6B67";
const ABI = window.abi;
let account;
let netID;
let LoggedIn = false;

loginWithEth();

async function loginWithEth(){
    if(LoggedIn == false){
    if(window.ethereum){
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.web3 = await new Web3(ethereum);
        await getID();
        if (netID != 5){ //Change and fix
            console.log("The current Metamask/Web3 network is not Goerli, please connect to the Goerli network."); 
            alert("The current Metamask/Web3 network is not Goerli, please connect to the Goerli network.");
            return("Failed to connect")
        }
        accountarray = await web3.eth.getAccounts();
        contract = new window.web3.eth.Contract(ABI, contractAddress, window.web3);
        account = accountarray[0];
        console.log('Logged In')
        LoggedIn = true;
        console.log("LoggedIn")
    } else { 
        alert("No ETHER Wallet available")
    }
    }
}

async function Update(){
    document.getElementById("EthCount").innerText = document.getElementById("input").value;
    document.getElementById("VLND").innerText = document.getElementById("input").value * 100;
    document.getElementById("%").innerText = document.getElementById("input").value * 100;
}

async function pay(){
    gas = await contract.methods.Deposit().estimateGas({from: account});
    await contract.methods.Deposit().send({from: account, value: (document.getElementById("input").value * 10^18), gas: gas*10});
}

async function getID(){
    let idhex = web3.eth._provider.chainId;
    netID = parseInt(idhex, 16);
    return(netID);
}