import { time } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";




async function main() {

    console.log("-----------------------deploy contract---------------\n\n")

    const [owner, seller, buyer] = await ethers.getSigners();




    const tonkenA = "tonkenA";
    const tokenASymbol = "WTK4";
    const totalSupply = ethers.parseEther("10000000000000"
    )

    const tonkenB = "tonkenB";
    const tokenBSymbol = "WTK4";

   




    const ERC20TokenA= await ethers.deployContract("ERC20Token", [tonkenA, tokenASymbol, totalSupply]);
    const ERC20TokenB = await ethers.deployContract("ERC20Token", [tonkenB, tokenBSymbol, totalSupply]);

    await ERC20TokenA.waitForDeployment();
    await ERC20TokenB.waitForDeployment();

 


    console.log("-----------------------Deployement--------------\n\n")
    const auction = await ethers.deployContract("DutschAuction")
    await auction.waitForDeployment()

    console.log("AUction contract deployed to:", auction.target)




    console.log("-----------------------create auction--------------\n\n")
    const price = 100;
    const duration = await time.latest() + 860000;
    const decreaseRate = 1;
    await ERC20TokenA.transfer(seller.address, price);
    await ERC20TokenA.approve(auction.target, price);
    const tx = await auction.createAuction(price, duration, decreaseRate, ERC20TokenA.target);

    await tx.wait();

    console.log("Auction created");
    console.log(tx);


    console.log("-----------------------buy auction--------------\n\n")


    await ERC20TokenB.transfer(buyer.address, price);
    await ERC20TokenB.approve(auction.target, price);
    const tx2 = await auction.buy(1, ERC20TokenB.target);
    await tx2.wait();
    console.log("Auction bought");
    console.log(tx2);



}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});