
var count = 2



document.querySelector(".smile").addEventListener("click", function(){


    if (count%2 === 0) { 

    document.querySelector(".smile").src= "logo.png";
    document.querySelector(".logo").src= "smile.png";

        }

    else {
        document.querySelector(".smile").src= "smile.png";
        document.querySelector(".logo").src= "logo.png";
    }

    count++;

});


