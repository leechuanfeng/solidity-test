import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Get Hello World from contract", () => {
    it("should get the hello world from function", async () => {
        const hello_contract = await ethers.getContractFactory("HelloWorld");
        const hello_obj = await hello_contract.deploy();

        expect(await hello_obj.getHelloWorld()).to.equal("Hello world");
    });
});