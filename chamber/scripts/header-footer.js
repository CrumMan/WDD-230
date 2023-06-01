const now =new Date();
currentyear= document.querySelector("#currentyear");
currentyear.textContent = now.getFullYear();

const lastupdated = document.querySelector("#lastupdated")
lastupdated.textContent = document.lastModified

const fulldate = new Intl.DateTimeFormat("en-US", {dataStyle:'full'}).format(new Date());
document.querySelector("#date").textContent=fulldate
menubutton = document.querySelector("#menu_button")

menubutton.addEventListener('click', () =>
{
    document.querySelector('#navbar').classList.toggle('active');
    document.querySelector('#menu_open').classList.toggle('active');
    document.querySelector('#menu_open').classList.toggle('active');
}

)