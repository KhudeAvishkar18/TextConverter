function val() {
    let text = document.querySelector(".area1").value;
    // console.log(text);
    return text;
}


// Making Text uppercase
document.querySelector(".upperCase").addEventListener("click", function () {

    let yourText = val();
    let capital = yourText.toUpperCase(yourText);
    document.querySelector(".area2").value = capital;


    let noChars = yourText.length;
    document.querySelector(".nChars").innerHTML = ("No. of characteres : " + noChars);
})


// Making Text uppercase
document.querySelector(".lowerCase").addEventListener("click", function () {


    let yourText = val();
    let small = yourText.toLowerCase(yourText);
    document.querySelector(".area2").value = small;



    let noChars = yourText.length;
    document.querySelector(".nChars").innerHTML = ("No. of characteres : " + noChars);
})


// Clearing the text area
document.querySelector(".clearText").addEventListener("click", function(){
    document.querySelector(".area1").value = "";
    document.querySelector(".area2").value = "";
    
    document.querySelector(".nChars").innerHTML = ("No. of characteres : 0");
    
})