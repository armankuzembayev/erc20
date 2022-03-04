const { expect } = require("chai");
const { ethers } = require("hardhat");

import * as Configs from "../config"

describe("Staking", function ()  {

    let Token: any;
    let hardhatToken: any;
    let owner: any;
    let addr1: any;
    let addr2: any;
    let addr3: any;
    let zeroAddress = ethers.utils.getAddress(Configs.zeroAddress)

    beforeEach(async function() {
        [owner, addr1, addr2, addr3] = await ethers.getSigners();

        Token = await ethers.getContractFactory("Staking");
        const percent = Configs.percent;
        const holdTime = Configs.holdTime;
        const freezeTime = Configs.freezeTime;

        hardhatToken = await Token.deploy(percent, holdTime, freezeTime);
        await hardhatToken.deployed();

    });

    describe("Deployment", function() {

        it("Should initialize correctly", async function() {
            expect(await hardhatToken.percent()).to.equal(Configs.percent);
            expect(await hardhatToken.holdTime()).to.equal(Configs.holdTime);
            expect(await hardhatToken.freezeTime()).to.equal(Configs.freezeTime);

        });

        
    });

    describe("Setters", function() {

        it("Should set correctly", async function() {
            await hardhatToken.setPercent(30);
            expect(await hardhatToken.percent()).to.equal(30);

            await hardhatToken.setHoldTime(1000);
            expect(await hardhatToken.holdTime()).to.equal(1000);

            await hardhatToken.setFreezeTime(1000);
            expect(await hardhatToken.freezeTime()).to.equal(1000);

        });
        
    });

    describe("Stake", function() {
        
        it("Should revert", async function() {
            await expect(hardhatToken.stake(ethers.utils.parseEther("1"))).to.be.revertedWith("Not enough allowance")
        });
        
    });

});