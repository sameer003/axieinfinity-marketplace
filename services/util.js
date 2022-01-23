import Web3 from "web3";

//@this function return eth upto 3 decimals
export function getEtherFromWei(weiValue) {
  let ethe =  (Web3.utils.fromWei(weiValue, "ether")).split('.');
  return `${ethe[0]}.${ethe[1] ? ethe[1].substring(0,3): 0}`
}