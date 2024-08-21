#! /usr/bin/env node
import inquirer from "inquirer";
//Class Worker represent a Worker
class Worker {
    name;
    constructor(n) {
        this.name = n;
    }
}
//Class Factory with workers
class Factory {
    workers = [];
    addWorkers(obj) {
        this.workers.push(obj);
    }
}
// Create an instance of the factory class
const factory = new Factory();
const programStart = async (factory) => {
    do {
        console.log("Welcome to the System!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "What do you want to interact with?",
            choices: ["Staff", "Worker", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("You approach the staff room. Feel free to ask!");
        }
        else if (ans.select == "Worker") {
            // Prompt the user to enter a worker's name
            const ans = await inquirer.prompt({
                name: "workerName",
                type: "input",
                message: "Enter the worker's name you wish to engage with:"
            });
            const worker = factory.workers.find(w => w.name === ans.workerName);
            if (!worker) {
                // If the worker doesn't exist, add the new worker
                const name = new Worker(ans.workerName);
                factory.addWorkers(name);
                console.log(`Hello, I am ${name.name}. Nice to meet you!`);
                console.log("A new worker has been added.");
                console.log("Current list of workers:");
                console.log(factory.workers);
            }
            else {
                // If the worker already exists, greet the worker
                console.log(`${worker.name} you already exist in the list.`);
                console.log("Current list of workers:");
                console.log(factory.workers);
            }
        }
        else if (ans.select === "Exit") {
            // Exit the program
            console.log("Exiting the program.....");
            process.exit();
        }
    } while (true);
};
// Start the program
programStart(factory);
