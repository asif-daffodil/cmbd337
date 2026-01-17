document.getElementById("demoText").innerHTML = "<h1>Hello World!</h1>";
        // document.getElementById("memoText").innerText = "<p>Hello Universe!</p>";
        document.getElementById("memoText").textContent = "<p>Hello Universe!</p>";
        document.getElementsByClassName("dhaka")[1].textContent = "Dhaka is the capital of Bangladesh!";
        document.getElementsByTagName("p")[0].textContent = "Pabna";

        // query selector
        // document.querySelector(".dhaka").style.color = "red";
        document.querySelectorAll(".dhaka")[1].style.color = "red";


        // console.log(document.getElementById("child").parentNode);
       document.getElementById("child").parentElement.style.backgroundColor = "yellow";

        const cityList = document.getElementById("cityList");
        console.log(cityList.children);
        console.log(cityList.childNodes);
        console.log(cityList.firstElementChild);
        console.log(cityList.lastElementChild);
        cityList.children[2].style.color = "blue";
        cityList.childNodes[3].style.color = "green";

        const ctg = document.getElementById("ctg");
        ctg.nextElementSibling.textContent = "Feni"
        ctg.previousElementSibling.textContent = "Cox's Bazar"
         