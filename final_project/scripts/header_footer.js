const now =new Date();
currentyear= document.querySelector("#currentyear");
currentyear.textContent = now.getFullYear();

menubutton = document.querySelector("#menu_button")

menubutton.addEventListener('click', () =>
{
    document.querySelector('#navbar').classList.toggle('active');
    document.querySelector('#menu_open').classList.toggle('active');
    document.querySelector('#menu_open').classList.toggle('active');
}

)