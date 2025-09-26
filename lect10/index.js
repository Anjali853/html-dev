// 
// let h1= document.getElementsByClassName("two")
// console.log(h1);

// let h1=document.getElementById("one")
// h1.style.color="red"
// console.log(h1);


// let h1 = document.getElementById("one")
// h1.style.color="red"
// console.log(h1);

// let h1= document.querySelector("#one")
// h1.innerText = "hii"
// console.log(h1.innerText)

// let h1 = document.querySelector("#one")
// h1.getAttribute("class")
// h1.setAttribute("herf","http://filpkart.com")
// console.log(h1);

// const arr=[
//     'https://wallpaperaccess.com/full/536225.jpg'
//     'https://th.bing.com/th/id/R.1895cd13753044256244a4022fc22965?rik=2fuH8BwIsSd9lQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f6%2f1%2f947646-cute-baby-animals-wallpapers-1920x1080-for-4k-monitor.jpg&ehk=S%2fo1e1IWkKWdfIuui83hdPmpVxknr4o%2bAVjHFz88NQg%3d&risl=&pid=ImgRaw&r=0'
//     'https://bestfarmanimals.com/wp-content/uploads/2024/03/baby-rabbit-eyes-1024x585.jpg'

// ]
// const imageEL = document.querySelector('img');



  
// let num = 0;

// setInterval(function(){
//     imageEL.setAttribute('src',arr[num]);
//     num = (num + 1) % arr.length;
// },2000);


// let body= document.querySelector("body")
// function fun1(){
//     body.style.backgroundColor="red"
// }

// let btn= document.querySelector("button")
// let body= document.querySelector("body")


// btn.addEventListener("click",()=>{
//     body.style.background="red"
// })

// btn.onclick=function(){
//     console.log("hello");
//     body.style.backgroundColor="blue"
    
// }


// let inp = document.querySelector("input")

// inp.addEventListener("input",(e)=>{
//     h2.innerText=e.target.value
//     console.log(e.target.value);
    
// })


let formEl= document.querySelector("form")
formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    let saveDate = localStorage.getItem("formData")
    let dataobj=JSON.parse(saveDate)


    let loginobj = {
    name:formEl[0].value,
    email:formEl[1].value


    form2.addEventListener("submit",(e)=>{
        let loginobj={
        }
        if(dataobj.email==loginobj.email &&.pass==loginobj)
            prompt("login done")
    }else{
        prompt("errrrr")
    }
    })
    

    
    // console.log(data);
    localStorage.setItem("formData","data")
      
})