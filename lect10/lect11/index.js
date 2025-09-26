let inp= document.querySelector('input')
let btn= document.querySelector('button')
let ul= document.querySelector('ul')

// localStorage.setItem()

btn.addEventListener("click",()=>{
    let data=inp.value

    let li=document.createElement("li")
    li.innerText=data
    ul.append(li)
    inp.value=" "
    li.addEventListener("click",()=>{
        li.remove()
         localStorage.setItem("user",JSON.stringify(data))
         let arr=[]

    })
})


