let hello = "hello"
let world = `hello ${'world'}`

let h4 = `<h6>${hello}</h6>`

document.getElementById("demo").innerHTML = world;
document.getElementById("demo").innerHTML = h4;