let name = document.getElementById("getName");
let age = document.getElementById("getAge");
let email = document.getElementById("getEmail");
let course=document.getElementById("getCourse");
//selecting the tbody for add the student form;
let form = document.getElementById("getForm");
function AddStudentForm() {
    let tr = document.createElement('tr');
    let cash = form.appendChild(tr);
    //For Gender:
    let gender = document.querySelector('input[name="gender"]:checked');
    /* In this template literal at gender portion
    a small ternary operator used to get value if value is gived or an empty string value is given for not to throw error.
    */
    cash.innerHTML =
        `<td>${name.value}</td>
            <td>${age.value}</td>
            <td>${gender ? gender.value :""}</td>
            <td>${course.value}</td>
            <td>${email.value}</td>
            <td><button class='btn' onclick='deleteItems(event)'>Delete</button></td>`;
}

//Using event of button to  remove the whole tr element.
function deleteItems(event) {
    //button's parent td at td's parent tr so it remove tr element.
    event.target.parentElement.parentElement.remove();
}