import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];

const showMenu = () => {
    console.log(" 1: Add A Task");
    console.log(" 2: View Task");
    console.log("3: Exit");
    rl.question("Choose An Option (Like 1,2,3): ", handleINput)
}

const handleINput = (option) => {
    if (option === "1") {
        rl.question("Enter The Task : ", (task) => {
            todos.push(task);
            console.log("Task Added : ", task);
            showMenu();
        })
    }
    else if (option === "2") {
        console.log("\n Your Todo List");
        todos.forEach((task, index) => {
            console.log(`${index} .  ${task}`);

        })
        showMenu();
    }
    else if (option === "3") {
        console.log("You Clicked Exit");

    }
    else {
        console.log("To Many Try - Wait For A Second");
    }
}

showMenu();