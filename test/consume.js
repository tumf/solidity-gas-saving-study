const { ethers } = require("hardhat");

describe("Consumer", () => {
	let consumer;
	before(async () => {
		const Consumer = await ethers.getContractFactory("Consumer");
		consumer = await Consumer.deploy();
		await consumer.deployed();
	});
	it("#counter1", async () => {
		await consumer.counter1();
	});
	it("#counter2", async () => {
		await consumer.counter2();
	});
});
