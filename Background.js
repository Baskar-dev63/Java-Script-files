let arr = ["#ff8d00",
    "#9fc5e8",
    "#aebf49",
    "#a6d5be",
    "#d5a57f",
    "#dfb586",
    "#bb7640",
    "#a33c04",
    "#a85720",
    "#210f04",
    "#452103",
    "#690500",
    "#934b00",
    "#bb6b00",
    "#d0953c",
    "#bd7e39",
    "#23342f",
    "#4f5e4d",
    "#72493d",
    "#68382e",
    "#fbeea2",
    "#3689e6",
    "#c6845b",
    "#006ad4",
    "#af5a50",
    "#421829",
    "#c17a31",
    "#5e1212",
    "#5e8555",
    "#065535 ",
    "#c09f9a"
];
let h1=document.querySelector("h1");
let hexValues = document.getElementById("hex");
function change(event) {
    h1.style.color="white";
    let random = Math.floor(Math.random() * arr.length);
    console.log(random);
    hexValues.textContent = `Colors: ${arr[random]}`;
    event.target.parentElement.parentElement.style.backgroundColor = `${arr[random]}`;
    event.target.style.backgroundColor=`${arr[random]}`;
}

