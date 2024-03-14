let todo = [];

let request = prompt("Please enter your request");
// console.log(request);  

while (true) {

    if (request == "quit") {
        console.log("Quitting the App");
        break;
    }
    if (request == "list") {
        console.log("==================")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("==================")
    }
    else if (request == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if (request == "delete") {
        let indx = prompt("Please enter the index you want to delete");
        todo.splice(indx, 1);
        console.log("Task Deleted");
    }
    else {
        console.log("Wrong Request Read the Menu");
    }

    request = prompt("Please enter your request");

}