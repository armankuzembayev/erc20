const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20", function ()  {

    let Token: any;
    let hardhatToken: any;
    let owner: any;
    let addr1: any;
    let addr2: any;
    let addr3: any;
    let zeroAddress = ethers.utils.getAddress("0x0000000000000000000000000000000000000000")

    beforeEach(async function() {
        [owner, addr1, addr2, addr3] = await ethers.getSigners();

        Token = await ethers.getContractFactory("Erc20");
        const name = "ArmanToken";
        const symbol = "ARM";
        const decimals = 8;
        const totalSupply = 100000000;

        hardhatToken = await Token.deploy(name, symbol, decimals, totalSupply);
        await hardhatToken.deployed();

        await hardhatToken.mint(owner.address, 1000);
        await hardhatToken.mint(addr1.address, 1000);
        await hardhatToken.mint(addr2.address, 1000);
    });

    describe("Deployment", function() {

        it("Should initialize correctly", async function() {
            expect(await hardhatToken.name()).to.equal("ArmanToken");
            expect(await hardhatToken.symbol()).to.equal("ARM");
            expect(await hardhatToken.decimals()).to.equal(8);
            expect(await hardhatToken.totalSupply()).to.equal(100003000);
            expect(await hardhatToken.balanceOf(owner.address)).to.equal(1000);
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1000);
            expect(await hardhatToken.balanceOf(addr2.address)).to.equal(1000);
            expect(await hardhatToken.balanceOf(addr3.address)).to.equal(0);
        });
    });

    describe("Transfer", function() {

        it("Should transfer right amount", async function() {

            await expect(hardhatToken.transfer(addr1.address, 100)).
            to.emit(hardhatToken, "Transfer").withArgs(owner.address, addr1.address, 100)

            expect(await hardhatToken.balanceOf(owner.address)).to.equal(900)
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1100)
            expect(await hardhatToken.balanceOf(addr2.address)).to.equal(1000)
            expect(await hardhatToken.balanceOf(addr3.address)).to.equal(0)
        });

        it("Should revert due to not enough balance", async function() {
            await expect(hardhatToken.transfer(addr1.address, 10000)).to.be.reverted;
        });

        it("Should revert due to zero address", async function() {
            await expect(hardhatToken.transfer(zeroAddress, 10000)).to.be.reverted;
        });
    })

    describe("TransferFrom", function() {

        
        it("Should revert due to not enough balance", async function() {
            await expect(hardhatToken.transferFrom(addr1.address, addr2, 10)).to.be.reverted
        });

        it("Should revert due to zero address", async function() {
            await expect(hardhatToken.transferFrom(addr1.address, zeroAddress, 10000)).to.be.reverted;
            await expect(hardhatToken.transferFrom(zeroAddress, addr1.address, 10000)).to.be.reverted;
        });

        it("Should transfer from owner to addr2 by addr1", async function() {
            await expect(hardhatToken.approve(zeroAddress, 10000)).to.be.reverted;

            await expect(hardhatToken.approve(addr1.address, 100)).to.emit(hardhatToken, "Approval").
            withArgs(owner.address, addr1.address, 100)

            expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(100)

            await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 1000)).
            to.be.reverted

            await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 100)).
            to.emit(hardhatToken, "Transfer").withArgs(owner.address, addr2.address, 100)

            expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(0)

            expect(await hardhatToken.balanceOf(owner.address)).to.equal(900)
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1000)
            expect(await hardhatToken.balanceOf(addr2.address)).to.equal(1100)
            expect(await hardhatToken.balanceOf(addr3.address)).to.equal(0)

            await expect(hardhatToken.approve(addr1.address, 2000)).to.emit(hardhatToken, "Approval").
            withArgs(owner.address, addr1.address, 2000)

            await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 1500)).
            to.be.reverted

        });

        describe("Increase and Decrease Allowance", function() {

            it("Should revert due to zero address", async function() {
                await expect(hardhatToken.increaseAllowance(zeroAddress, 10000)).to.be.reverted;
                await expect(hardhatToken.decreaseAllowance(zeroAddress, 10000)).to.be.reverted;
            });
    
            it("Should increase allowance and transfer from owner to addr2 by addr1", async function() {
                await hardhatToken.increaseAllowance(addr1.address, 100)
                
                await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 1000)).
                to.be.reverted

                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(100)
    
                await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 100)).
                to.emit(hardhatToken, "Transfer").withArgs(owner.address, addr2.address, 100)
    
                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(0)
    
                expect(await hardhatToken.balanceOf(owner.address)).to.equal(900)
                expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1000)
                expect(await hardhatToken.balanceOf(addr2.address)).to.equal(1100)
                expect(await hardhatToken.balanceOf(addr3.address)).to.equal(0)
            });

            it("Should decrease allowance and transfer from owner to addr2 by addr1", async function() {
                await hardhatToken.increaseAllowance(addr1.address, 1000)
                
                await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 10000)).
                to.be.reverted

                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(1000)

                await hardhatToken.decreaseAllowance(addr1.address, 100)

                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(900)
    
                await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 100)).
                to.emit(hardhatToken, "Transfer").withArgs(owner.address, addr2.address, 100)
    
                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(800)
    
                expect(await hardhatToken.balanceOf(owner.address)).to.equal(900)
                expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1000)
                expect(await hardhatToken.balanceOf(addr2.address)).to.equal(1100)
                expect(await hardhatToken.balanceOf(addr3.address)).to.equal(0)
            });

            it("Should decrease allowance to 0 when amount is larger than current allowance", async function() {
                await hardhatToken.increaseAllowance(addr1.address, 1000)
                
                await expect(hardhatToken.connect(addr1).transferFrom(owner.address, addr2.address, 10000)).
                to.be.reverted

                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(1000)

                await hardhatToken.decreaseAllowance(addr1.address, 2000)

                expect(await hardhatToken.allowance(owner.address, addr1.address)).to.equal(0)
            });
        });


        describe("Mint and burn", function() {

            it("Should mint", async function() {

                await expect(hardhatToken.mint(owner.address, 1000)).to.emit(hardhatToken, "Transfer").
                withArgs(zeroAddress, owner.address, 1000)

                expect(await hardhatToken.totalSupply()).to.equal(100004000);
                expect(await hardhatToken.balanceOf(owner.address)).to.equal(2000)
            });

            it("Should burn", async function() {

                await expect(hardhatToken.burn(owner.address, 1000000000)).to.be.reverted;

                await expect(hardhatToken.burn(owner.address, 1000)).to.emit(hardhatToken, "Transfer").
                withArgs(owner.address, zeroAddress, 1000)

                await expect(hardhatToken.burn(owner.address, 2000)).to.be.reverted;

                expect(await hardhatToken.totalSupply()).to.equal(100002000);
                expect(await hardhatToken.balanceOf(owner.address)).to.equal(0)
            });

            it("Should revert due to zero address", async function() {
                await expect(hardhatToken.burn(zeroAddress, 10000)).to.be.reverted;
                await expect(hardhatToken.mint(zeroAddress, 10000)).to.be.reverted;
            });
        });


    })
});