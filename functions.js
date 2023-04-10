// ----------------------------------- PRACTICE 2 -----------------------------------
function alert_paragraph_color(){
    const border_R = document.getElementById("border_R").value;
    const border_G = document.getElementById("border_G").value;
    const border_B = document.getElementById("border_B").value;

    //store background colors
    const bg_R = document.getElementById("bg_R").value;
    const bg_G = document.getElementById("bg_G").value;
    const bg_B = document.getElementById("bg_B").value;

    //store border width
    const border_width = document.getElementById("border_width").value;

    document.getElementById("paragraph").style.backgroundColor = `rgb(${bg_R}, ${bg_G}, ${bg_B})`;
    document.getElementById("paragraph").style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
    document.getElementById("paragraph").style.borderWidth = `${border_width}px`;
}

// ----------------------------------- PRACTICE 3 -----------------------------------


function validate(){
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (pass1.length < 8){
        alert("Password must be at least 8 characters.")
    } 
    else if (pass1 != pass2){
        alert("Passwords must match.")
    } else {
        alert("Password successfully created.")
    }
}