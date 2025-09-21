const fs = require('fs');
const filePath = "tasks.json";

//Load tasks from a file or return an empty array

function loadTasks(){
    try{
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err){
        return [];
    }
}

function saveTasks(tasks){
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Add a task

function addTasks(task){
    const tasks = loadTasks();
    tasks.push({task, done: false});
    saveTasks(tasks);
    console.log(`Task added: ${task}`);   
}

function listTasks() {
    const tasks = loadTasks();
    console.log("\n Your Tasks: ");
    tasks.forEach((t, i) => {
        console.log(`${i + 1}. ${t.done ? "✔️" :"❌"} ${t.task}`);
    })
}

function removeTasks(index){
    const tasks = loadTasks();
    if( index < 1 || index > tasks.length) {
        console.log("Invalid task number");
        return;
    }
    const removed = tasks.splice(index -1, 1);
    saveTasks(tasks);
    console.log(` Task remove:"${removed[0].task}"`);
}

const [,, command, ...args] = process.argv;

if (command === "add") {
    addTasks(args.join(" "));
}else if (command === "list"){
    listTasks();
}else if (command === "remove") {
    removeTasks(parseInt(args[0]));
}else {
    console.log("Usage: ");
    console.log("  node index.js  add\task description\"");
    console.log("  node index.js list");
    console.log("  node index.js remove <task-number>");
}