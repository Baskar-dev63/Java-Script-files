// Example for keyup and keydown event ..
// But we can write on real time using input event. in html oninput
var a = document.getElementById("one");
var b = document.getElementById("two");
b.textContent = "Type Something..."
a.addEventListener("keyup", () => {
    b.textContent = a.value;
    console.log(a.value);
    if (b.textContent.length === 0) {
        b.textContent = "Type Something..."
    }
})
// color changes..
var color = document.getElementById("cod");
var isRed = true;
function d() {
    if (isRed) {
        color.style.backgroundColor = "red";
    }
    else {

        color.style.backgroundColor = "green";
    }
    isRed = !isRed;
}
// Event passing in function and set textContent..
var n = document.getElementById("name")
function change(event) {
    n.textContent = event.target.textContent;
}

// Remove() method in js
function erase(event) {
    event.target.remove();

}