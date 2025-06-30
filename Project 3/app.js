document.addEventListener("DOMContentLoaded", main);

function main() {
  document.querySelector(".add-task > button").addEventListener("click", getInputTagValue);

  const searchTasks = document.querySelector(".search-input");
  if(searchTasks) {
    searchTasks.addEventListener("keyup", filterTasks);
  }
}

function filterTasks() {
  const searchValue = this.value;
  const taskItems = document.querySelectorAll(".tasks-buttons");

  taskItems.forEach(Element => {
    const taskText = Element.querySelector(".task-text");

    if(taskText.textContent.includes(searchValue)) {
      Element.style.display = "block";
    }
    else{   
      Element.style.display = "none";
    }
  })
}

function createTodoHTML(toDoValue) {
  const html = `
    <li class="tasks-buttons" data-display="1">
      <p class="task-text">${toDoValue}</p>

      <div class="controls">
        <button class="btn-complete" data-iscompleted="0">Complete</button>
        <button class="btn-delete" data-isdeleted="0">Delete</button>
      </div>
    </li>
  `;

  return html;
}

function getInputTagValue() {
  const inputValue = document.querySelector(".add-task > input").value;
  document.querySelector(".add-task > input").value = "";

  if(inputValue) {
    const todoHTMLString = createTodoHTML(inputValue);

    //Converting HTML string into DOM Node

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = todoHTMLString;
    const todoItem = tempContainer.firstElementChild;

    document.querySelector(".display-tasks").appendChild(todoItem);

    const completeBtnElement = todoItem.querySelector(".btn-complete");
    const deleteBtnElement = todoItem.querySelector(".btn-delete");

    completeBtnElement.addEventListener("click", function() {
      this.dataset.iscompleted = this.dataset.iscompleted === "0" ? "1" : "0";

      if(this.dataset.iscompleted === "1") {
        this.innerText = "Undo";
      }
      else{
        this.innerText = "Complete";
      }
    })

    deleteBtnElement.addEventListener("click", function() {
        const todoItemDOMNode = this.closest(".tasks-buttons");

        if(todoItemDOMNode) {
          todoItemDOMNode.remove();
        }
    })
  }
}