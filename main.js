// setting up varaibles
let theInput = document.querySelector(".add-task input"),
  theAddButton = document.querySelector(".add-task .plus"),
  tasksContainer = document.querySelector(".tasks-content"),
  tasksCount = document.querySelector(".tasks-count span"),
  tasksCompleted = document.querySelector(".tasks-completed span");

// focus on input field
window.onload = function () {
  theInput.focus();
};

// adding the task
theAddButton.onclick = function () {
  
  // if input is empty
  if (theInput.value === null || theInput.value === "") {
    swal("you must enter the task before you add it");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");

    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      // remove no tasks message
    noTasksMsg.remove();

    }
    

    // create span element
    let mainSpan = document.createElement("span");
    // create delete button
    let deleteBtn = document.createElement("span");
    // create text to span
    let text = document.createTextNode(`${theInput.value}`);

    // create text to delete
    let deleteText = document.createTextNode(`Delete`);

    // add text to main span
    mainSpan.appendChild(text);
    // add class to main span
    mainSpan.classList.add("task-box");

    // add text to delete btn
    deleteBtn.appendChild(deleteText);
    // add class to delete
    deleteBtn.classList.add("delete");

    // add delete btn to main span
    mainSpan.appendChild(deleteBtn);

    // add main span to tasks content

    tasksContainer.appendChild(mainSpan);

    // empty the input and focus on it
    theInput.value = "";
    theInput.focus();
    // calculate tasks
    calculateTasks(); 

  }
};

document.addEventListener("click", (e) => {
  // delete task
  if (e.target.className == "delete") {
    // remove current task
    e.target.parentNode.remove();
    // check number of tasks in side container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  // finish task
  if (e.target.classList.contains("task-box")) {
    // toggle class finished
    e.target.classList.toggle("finished");
  }
  // calculate tasks 
  calculateTasks();
});

// function to create no tasks message
function createNoTasks() {
  // create message span element
  let msgSpan = document.createElement("span");
  // create text message
  let msgText = document.createTextNode("No tasks to show");

  // add text to span
  msgSpan.appendChild(msgText);
  msgSpan.className = "no-tasks-message";
  // append tme msgspan to task container
  tasksContainer.appendChild(msgSpan);
}

// functiopn to calculate tasks
function calculateTasks() {
  // calculate all tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  // calculate completed tasks
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;


}
