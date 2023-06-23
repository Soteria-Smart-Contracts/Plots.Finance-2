const contractAddress = "0xf5c9e57e177B4F5CCfCb13b18e4154774E917401";
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

async function getID(){
    let idhex = web3.eth._provider.chainId;
    netID = parseInt(idhex, 16);
    return(netID);
}