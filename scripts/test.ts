import { ethers } from "ethers";

const weiValue = "1"; // 1 ether en wei
const etherValue = ethers.formatUnits(weiValue, "wei");

const amountTokenDesired = ethers.parseUnits("10000", 18);
const amountETHDesired = ethers.parseUnits("100", 18);

const amountADesired = ethers.parseUnits("40000000", 18)
const amountBDesired = ethers.parseUnits("50000", 6)


let swapAmt = ethers.parseUnits('50000', 18);
let maxAmt = ethers.parseUnits('500000', 6);
console.log("swapAmt: ", swapAmt.toString());
console.log("maxAmt: ", maxAmt.toString()); 

console.log("swapAmt - maxAmt = ", swapAmt - maxAmt);