// let arr=[1,2,-3,4,-5,-3,5]
// let max = arr[0]
// function max(){
//     for(i=0; i<arr.length;i++)
//         if(arr[i]>max){
//             max= arr[i]
//         }
// console.log(max)

// }

// sum{
//     ()
    



// if(false){
//     var a =5
// }
// console.log(a);f

let ul = document.querySelector("ul")
fetch("https://jsonplaceholder.typicode.com/todos").
then((data)=>{
    return data.json()

}).then((res)=>{
    console.log(res);
    show(res)

})



function show(res){
    for(let i of res){
    let li = document.createElement("li")
    let h4 = document.createElement("h4")
        li.innerText=i.id
        h4.innerText=i.title
        ul.append(li,h4)
    }

}


