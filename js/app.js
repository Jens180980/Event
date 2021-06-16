// Toggles burgermenu on small screens
 const burger = document.getElementById('burger')
 const ul = document.getElementById('ul')
 burger.onclick = function(){ ul.classList.toggle('show')}


 // Formvalidering
 const message = document.getElementById('message-wrap')
 const inputs = document.querySelectorAll(':required')
 
 function validate(){
     let status = true
     for(let input of inputs){
         if(!input.value){
             setError(input)
             status = false
             return false
         }
     }
 if(status) {
         message.style.display = "block"
         message.style.color = "black"
         message.style.border = "2px solid rgba(0, 240, 0, 0.5"
         message.innerText = "Formularen er sendt"
     }
 }
 
 function setError(element){
     
     message.innerText =`Du skal udfylde feltet!`
     message.style.color = "red"
     message.style.display = "block"
     element.style.border = "1px solid red"
 
     element.focus()
 
     element.addEventListener('keydown', function(){
         if(message.style.display = "block"){
             message.style.display = "none"
         }
         element.style.border = "1px solid green"
     })
 }