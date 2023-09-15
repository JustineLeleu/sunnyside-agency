let burgerMenu = document.getElementById("burger-menu");
let title = document.getElementById("title");

function DeployBurger()
{
    if(burgerMenu.style.display == "none")
    {
        burgerMenu.style.display = "block";
        title.style.display = "none";
    }
    else
    {
        burgerMenu.style.display = "none";
        title.style.display = "flex";
    }
}