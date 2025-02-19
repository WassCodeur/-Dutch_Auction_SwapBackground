import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("DutschAuction", function () {
    async function deployDutschAuctionFixture() {
        const [owner, seller, buyer] = await hre.ethers.getSigners();

        const Token = await hre.ethers.getContractFactory("ERC20Token");
        const tokenB = await Token.deploy("TestTokenA", "TTKA", 1000000);

        const tokenA = await Token.deploy("TestTokenB", "TTKB", 1000000);
      

        const DutschAuction = await hre.ethers.getContractFactory("DutschAuction");
        const auction = await DutschAuction.deploy();
        

        return { auction, tokenB, tokenA, owner, seller, buyer };
    }

    describe("Deployment", function () {
        it("should deploy the contract correctly", async function () {
            const { auction, owner } = await loadFixture(deployDutschAuctionFixture);
            expect(await auction.owner()).to.equal(owner.address);
        });
    });

    describe("Creating an Auction", function () {
        it("should allow a seller to create an auction", async function () {
            const { auction, tokenA, tokenB, seller } = await loadFixture(deployDutschAuctionFixture);
            const price = 100;
            const duration = 300;
            const decreaseRate = 1;

            await tokenA.transfer(seller.address, price);
            await tokenA.connect(seller).approve(auction.target, price);

          await auction.connect(seller).createAuction(price, duration, decreaseRate, tokenA.target);
        });
        it("should not allow a seller to create an auction if they do not have enough balance", async function () {
            const { auction, tokenA, tokenB, seller } = await loadFixture(deployDutschAuctionFixture);
            const price = 100;
            const duration = 300;
            const decreaseRate = 1;

            await tokenA.transfer(seller.address, price - 1);
            await tokenA.connect(seller).approve(auction.target, price - 1);

            await expect(auction.connect(seller).createAuction(price, duration, decreaseRate, tokenA.target))
                .to.be.revertedWith("Insufficient balance");
        }
        );
    });

    describe("Buying from Auction", function () {
        it("should allow a buyer TO BUY", async function () {
            const { auction, tokenA, tokenB, seller, buyer } = await loadFixture(deployDutschAuctionFixture);
            const price = 100;
            const duration = 300;
            const decreaseRate = 1;

            await tokenA.transfer(seller.address, price);
            await tokenA.connect(seller).approve(auction.target, price);
            await auction.connect(seller).createAuction(price, duration, decreaseRate, tokenA.target);

            await tokenB.transfer(buyer.address, price);
            await tokenB.connect(buyer).approve(auction.target, price);

            await expect(auction.connect(buyer).buy(1, tokenB.target))
                .to.not.be.reverted;
        });
        it("should not allow a buyer to buy if the auction is not active", async function () {
            const { auction, tokenA, tokenB, seller, buyer } = await loadFixture(deployDutschAuctionFixture);
            const price = 100;
            const duration = 1;
            const decreaseRate = 1;

            await tokenA.transfer(seller.address, price);
            await tokenA.connect(seller).approve(auction.target, price);
            await auction.connect(seller).createAuction(price, duration, decreaseRate, tokenA.target);

            await tokenB.transfer(buyer.address, price);
            await tokenB.connect(buyer).approve(auction.target, price);

            
            await expect(auction.connect(buyer).buy(1, tokenB.target))
                .to.be.revertedWith("Auction has ended");
        })

        it("should not allow a buyer to buy if the auction is sold", async function () {
            const { auction, tokenA, tokenB, seller, buyer } = await loadFixture(deployDutschAuctionFixture);
            const price = 100;
            const duration = 300;
            const decreaseRate = 1;

            await tokenA.transfer(seller.address, price);
            await tokenA.connect(seller).approve(auction.target, price);
            await auction.connect(seller).createAuction(price, duration, decreaseRate, tokenA.target);

            await tokenB.transfer(buyer.address, price);
            await tokenB.connect(buyer).approve(auction.target, price);

            await auction.connect(buyer).buy(1, tokenB.target);
            await expect(auction.connect(buyer).buy(1, tokenB.target))
                .to.be.revertedWith("Auction is already finalized");
        }
        );
        
    });

    describe("Withdraw", function () {
        

        it("should not allow a seller to withdraw if the auction is not finalized", async function () {
            const { auction, tokenA, tokenB, seller } = await loadFixture(deployDutschAuctionFixture);
            const price = 100;
            const duration = 300;
            const decreaseRate = 1;

            await tokenA.transfer(seller.address, price);
            await tokenA.connect(seller).approve(auction.target, price);
            await auction.connect(seller).createAuction(price, duration, decreaseRate, tokenA.target);

            await expect(auction.connect(seller).withdraw(1, tokenA.target))
                .to.be.revertedWith("Auction is not finalized");
        });
    }
    );
    
});
