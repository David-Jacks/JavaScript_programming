// creating an interactive list page

const container = document.getElementById("container");

const listInput = createEle("input", "my_inp", container);
const addBtn = createEle("button", "add_btn", container);
addBtn.textContent = "Add to list";
const listStructure = createEle("ul", "ul_list", container);
const listData = [];
window.addEventListener("DOMContentLoaded", (e)=>{
    const listFromStorage = JSON.parse(localStorage.getItem("listData"));
    // console.log(listFromStorage);
    listFromStorage.forEach(element => {
        addToLIst(element);
    });
})
addBtn.addEventListener("click", (e)=>{
    const val  = listInput.value;
    addToLIst(val);
    listInput.value = "";
    console.log(listData);
})

// fucntion to add a new list item
function addToLIst(listElement)
{
    listData.push(listElement);
    const listItem = createEle("li", "li_items", listStructure);
    const span1 = createEle("span", "info", listItem);
    span1.textContent = listElement;
    const span2 = createEle("span", "edit", listItem);
    span2.textContent = "Edit";
    const span3 = createEle("span", "del", listItem);
    span3.textContent = "Delete";

    span2.addEventListener("click", (e)=>{
        if (span2.textContent === "Edit")
        {
            span1.style.backgroundColor = "red";
            span1.setAttribute("contenteditable", "true");
            span2.textContent = "save";
        }else
        {
            span1.style.backgroundColor = "white";
            span1.setAttribute("contenteditable", "false");
            span2.textContent = "Edit";
            updateListData();
        }
    })

    span3.addEventListener("click", (e)=>{
        listItem.remove();
        updateListData();
    })

    localStorage.setItem("listData", JSON.stringify(listData))
}

function updateListData()
{
    const temp = document.querySelectorAll(".info");
    listData.length = 0;//making the array empty
    temp.forEach((element)=>{
        listData.push(element.textContent);
    })

    localStorage.setItem("listData", JSON.stringify(listData));
}

function createEle(eleType, eleClass, eleParent)
{
    const newElement = document.createElement(eleType);
    newElement.classList.add(eleClass);
    eleParent.append(newElement);

    return newElement;
}