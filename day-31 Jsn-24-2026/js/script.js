const heads = document.getElementById("heads");
const details = document.getElementById("details");

for (let i = 0; i < heads.children.length; i++) {
    heads.children[i].addEventListener("click", () => {
        for (let j = 0; j < heads.children.length; j++) {
            if(i === j) {
                heads.children[j].classList.add("active");
                details.children[j].classList.add("active");
            }else{
                heads.children[j].classList.remove("active");
                details.children[j].classList.remove("active");
            }
        }
    })
}