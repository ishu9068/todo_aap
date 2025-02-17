let listContainer = document.getElementById('list-container');
let head = document.querySelector('head');
let inputBox = document.getElementById('input-box');


function addTask() {
    if (inputBox.value == '') {
        alert('Please Enter the Text')
    }
    else {
        const task = document.createElement('li')
        task.textContent = inputBox.value;
        listContainer.prepend(task)
        let span = document.createElement('span')
        span.textContent = "x";
        task.appendChild(span); 
        span.style.right = '0px';
        let edit = document.createElement("strong");
        edit.innerHTML = "✏";
        edit.id = "edit";
        task.append(edit);
        edit.style.right = '40px';
         
    }
    inputBox.value = '';
    saveData()
}




listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    } else if(e.target.tagName === "STRONG"){
        let li = document.querySelector("li");
        console.log("hoga kaam");
        console.log(li.innerText);
        inputBox.value = li.innerText;
        e.target.parentElement.remove()
    }

})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()