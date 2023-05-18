const button = document.querySelector("button")
const userinput = document.querySelector("#favchap")
const mylist = document.querySelector("#list")
  // create an li element

let newlistitem = document.createElement('li')

  // create a delete button

 let deletebutton = document.createElement('button')
button.addEventListener('click', () =>{
	if(userinput.value== ""){return}														
newlistitem=document.createElement('li')
deletebutton= document.createElement('button')
newlistitem.textContent=userinput.value
deletebutton.textContent= '❌'
newlistitem.append(deletebutton)
mylist.append(newlistitem)
deletebutton.addEventListener('click',() =>{newlistitem.remove()})
userinput.focus()
userinput.value = ''
})