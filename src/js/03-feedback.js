import throttle from 'lodash.throttle';

const formEl = document.querySelector('form')

formEl.addEventListener('input', throttle(onInput,500))
formEl.addEventListener('submit', onSubmit)

const FFS = 'feedback-form-state'
let formObj = {}

function onInput(e) {
   formObj[e.target.name] = e.target.value.trim()
   localStorage.setItem(FFS, JSON.stringify(formObj)) 
}
 
function onSubmit(event) { 
    event.preventDefault()
    console.log(formObj);
    formObj = {}
    event.currentTarget.reset()
    localStorage.removeItem(FFS);
}

const onLoad = () => { 
    try { 
        const data = localStorage.getItem(FFS)
        if (!data) return
        formObj = JSON.parse(data)
        Object.entries(formObj).forEach(([key, val]) => { 
           formEl.elements[key].value = val
        })
    } catch (error) { 
        console.log(error.message);
    }
}
   
window.addEventListener('load', onLoad)

    
