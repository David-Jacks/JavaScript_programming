// sellecting the element to add eventlistner to  from the page

// const clickElement = document.querySelectorAll("p");
// clickElement.forEach(element => {
//     element.addEventListener("click", clickMe);
//     element.val = 0;
//     element.flagged = false;
// });

// function clickMe(e)
// {
//     let targetElement = e.target;
//     if (targetElement.val >= 10 || targetElement.flagged)
//         {
//             let val = targetElement.val;
//             targetElement.textContent = `I am disabled at ${val}`;
//             reduceMe(targetElement);
//             return
//         }
//     let val  = targetElement.val;
//     val++;
//     targetElement.val = val;
//     targetElement.textContent = `I have been clicked ${val} times`;
//     console.log(val);
// }

// function reduceMe(e)
// {
//     e.flagged = true;
//     if (e.val <= 0)
//         {
//             let val = e.val;
//             e.textContent = `I am disabled ${val}`;
//             return
//         }
//     let val  = e.val;
//     val--;
//     e.val = val;
//     e.textContent = `I have been reduced ${val} times`;
//     console.log(val);
// }


// creating an interactive page, by creating all elements dynamically with javascript

// // selecting the elements from the page using the id
// const container = document.getElementById("display_container");
// // creating a label for display purposes
// const myLabel = document.createElement("h3");
// // creating an input element as a child of the container element
// const myInput = document.createElement("input");
// // creating a button
// const myBtn = document.createElement("button");

// // adding elements that are created to the conatainer element as it children
// container.append(myLabel);
// myLabel.textContent = "watch closely";

// container.append(myInput);
// container.append(myBtn);
// myBtn.textContent = "Click me";

// myBtn.addEventListener("click", (e)=>{
//     if (myInput.value === "")
//         {
//             alert("Input is empty");
//             return;
//         }
//     myLabel.textContent = myInput.value;
//     myInput.value = "";
// })

// 

// making use of requestAnimationFrame 
// creating an object to manage animation
const animationManager = {ani: null, aniPlay: false, x:0, speed: 8};
const boxElement = document.createElement("div");
boxElement.classList.add("box");

const container = document.getElementById("display_container");
container.append(boxElement);

container.addEventListener("click", (e)=>{
    if (!animationManager.aniPlay)
    {   
        console.log("clicked")
        animationManager.ani = window.requestAnimationFrame(mover);
        animationManager.aniPlay = true;
    }
    else
    {
        window.cancelAnimationFrame(animationManager.ani);
        animationManager.aniPlay = false;
    }
})

function mover()
{
    if ((animationManager.x > container.getBoundingClientRect().width - 35) || (animationManager.x < 0))
        {
            animationManager.speed *= -1;
        }
    animationManager.x += animationManager.speed;
    boxElement.style.left = animationManager.x + "px";
    animationManager.ani = window.requestAnimationFrame(mover);

}