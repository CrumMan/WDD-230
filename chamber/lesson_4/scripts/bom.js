const button = document.querySelector("button")
const userinput = document.querySelector("#favchap")
const mylist = document.querySelector("#list")
button.addEventListener('click', () =>{
										if(userinput.value== ""){return}														newlistitem=document.createElement('li')
deletebutton= document.createElement('button')
newlistitem.textContent=userinput.value
deletebutton.textContent= '❌'
newlistitem.append(deletebutton)
mylist.append(newlistitem)
deletebutton.addEventListner('click',() =>{mylist.remove.newlistitem})
userinput.focus()
userinput.value = ''
})