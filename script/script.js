// alert("working");

function handleReadAll(event) {
    var notifications = document.querySelectorAll(".notification");
    for(var i = 0; i<notifications.length; i++) {
        if(notifications[i].classList.length===2) {
            notifications[i].classList.remove("unread");
            notifications[i].querySelector(".circle").classList.add("displayNone");
            countN = 0;
            document.querySelector(".count").textContent = countN;
        }
        // console.log(notifications[i].classList.length);
    }
}


function handleClick(event) {
    console.log(event);
    // console.log(this.children[1].children[0].children[2].classList);
    // console.log(event.target);
    // console.log(this.querySelector(".circle").classList.remove("circle"));
    this.querySelector(".circle").classList.add("displayNone");
    this.classList.remove("unread");
    if(countN>0) {
        countN--;
        document.querySelector(".count").textContent = countN;
    }
}



document.querySelector(".mark").addEventListener("click", handleReadAll);

var countN = 0;
var notification = document.querySelectorAll(".notification");
for(var i = 0; i<notification.length; i++) {
    if((notification[i].classList.length)===2) {
        countN++;
    }
    notification[i].addEventListener("click", handleClick);
}
document.querySelector(".count").textContent = countN;

