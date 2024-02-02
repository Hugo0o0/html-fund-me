import { ethers } from "ethers";
import { abi, contractAddress } from "./constants";

/**
 *
 * @param {number} ethAmount
 * @returns {Promise<void>}
 * @author Şükrü Tanrıverdi
 *
 */

export function getContract(signer) {
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return contract;
}

export async function fund(ethAmount = "32") {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = getContract(signer);

  const txResponse = await contract.fund({
    value: ethers.parseEther(ethAmount),
  });
}
