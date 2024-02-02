import { ethers } from "ethers";
import { connect } from "./connect";
import { fund, getContract } from "./fund";
import { contractAddress } from "./constants";

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
const withdrawButton = document.getElementById("withdrawButton");
const balanceButton = document.getElementById("balanceButton");

const amountInput = document.getElementById("amountInput");

const getBalance = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const balance = await provider.getBalance(contractAddress);
  console.log(balance);
};

const withdraw = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = getContract(signer);
  const txResponse = await contract.withdraw();
};

withdrawButton.addEventListener("click", withdraw);
connectButton.addEventListener("click", connect);
fundButton.addEventListener("click", async () => {
  await fund(amountInput.value);
});
balanceButton.addEventListener("click", getBalance);
