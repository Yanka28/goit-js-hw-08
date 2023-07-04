import throttle from 'lodash.throttle';

const formEl = document.querySelector('form')
const inputEl = document.querySelector('input')
const textareaEl = document.querySelector('textarea')
console.dir(inputEl);
console.dir(textareaEl)
console.dir(formEl);

formEl.addEventListener('input', throttle(onInput,500))
formEl.addEventListener('submit', onSubmit)
window.addEventListener('load', (event) => { 
    if (FFS_GET) { fillForm() }
})
   
const FFS = 'feedback-form-state'

function onInput(event) {
    const formObj = Object.fromEntries(new FormData(event.currentTarget))
    localStorage.setItem(FFS, JSON.stringify(formObj)) 
   
}
 
function onSubmit(event) { 
    event.preventDefault()
    const { email, message } = event.currentTarget.elements
    console.log({ email: `${email.value}`, message: `${message.value}` });
    event.currentTarget.reset()
    localStorage.clear();

}

const FFS_GET = localStorage.getItem(FFS)
console.log(FFS_GET);

function fillForm() {

    try {
        inputEl.value = JSON.parse(FFS_GET).email
        textareaEl.value = JSON.parse(FFS_GET).message
        console.log(inputEl.value);
        console.log(textareaEl.value);
    }
      
    catch (error) {
        console.log(error);
    }
}
   


    
