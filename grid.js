const openMenu = () =>{document.querySelector(".sidebar").classList.add("open")}
const closeMenu= () =>{document.querySelector(".sidebar").classList.remove("open")}

// const img = document.querySelector("#img");

//    const dblclick= img.addEventListener("dblclick",()=>
//     {
//         img.style.transform="translateY(200%)";
        
//     })
    

//    const click = img.addEventListener("click",()=>
//     {
//         img.style.transform="translateY(0%)";
        
//     })


// if(dblclick){

//     dblclick
// }
// else if(click){
//     click
// }

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}