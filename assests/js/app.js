// let age = 23

// let brand = 'hello'
// console.log(typeof brand)
// console.log(brand)
// console.log(typeof [2,3,4])

//Assignment Operators

// let age = 20
// // age += 9
// console.log(age++)
// console.log(age)

// const age = 80
// console.log(age)

// let a = 10
// let b = 15 
// console.log(a > b)
// console.log(a < b)
// console.log(a == b)

// let a = 10
// let b = '10'

// console.log(a === b)

//arithmatic operators
//  let a = 10
// let b = "1.10"

// console.log(Number(b)+a)

// //logical opeators

// console.log("true && true ", true && true)
// console.log("true && false ", true && false)
// console.log("false && true ", false && true)
// console.log("false && false ", false && false)

// console.log("true && true ", true || true)
// console.log("true && false ", true || false)
// console.log("false && true ", false || true)
// console.log("false && false ", false || false)

// function greet1() {
    //     console.log("good morning")
    // }
    
// let greet2 = () => {
//     console.log("good morning")
//    }
// // greet1()
// greet2()

// const temp ={
//     age: 18,
//     brand: "mercerdes",
//     getBrand: function() { console.log(this.brand) }
// }

// console.log(temp.age)
// console.log(temp['brand'])

// temp.getBrand()
// console.log(window.innerWidth)

// window.alert("this is alert")
// console.warn("this is alert")
// console.error("this is alert")
// console.log("this is alert")

// let arr = [1,2.3,35,"strings","b"]

// // console.log(arr[0])

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [1, 2, 3, 4, 5]

// const callback = function(){
//     console.log("you called me")
// }

// arr.forEach(callback)
// day-19
// let elements = document.querySelectorAll('div.temp');

// let arr = [1,2,3,4,5];

// console.log(elements);

// console.log(arr);

// elements.forEach((ele, i) => {
//     ele.innerHTML = `Element ${i} ${i % 2 == 0 ? 'even' : "odd"}`
// })

// const body = document.querySelector('body')

// const ele = document.createElement("div")

// const textNode = document.createTextNode('this is a dynamic element')

// console.log(ele);
// console.log(textNode)

// ele.appendChild(textNode)

// console.log(ele)

// body.appendChild(ele)

// ele.remove()


// const body = document.querySelector('body')

// const tasks = ['Go to the GYM', 'Take Medicine', "Eat", "SLeep"]

// const ol = document.createElement('ol')

// tasks.forEach(task => {
//     const li = document.createElement("li")
//     const textNode = document.createTextNode(task)
//     li.appendChild(textNode)
//     ol.appendChild(li)
// })

// body.appendChild(ol);




// const button = document.querySelector('button')

// const bmw = (e) => {
//     const ele = e.target
//     ele.style = "background:red"
// }

// button.addEventListener('click', bmw)

// button.addEventListener('dblclick', e => {
//     e.target.style = "background:orange"
// })

// button.addEventListener('mouseover', e => {
//     e.target.style = "background:pink"

// })


// const button = document.querySelector('button')
// const input = document.querySelector('input#todo_input')
// const list = document.querySelector('ol')


// input.addEventListener('keydown', e => {
//     const key = e.key
//     if (key === 'Enter') {
//         // console.log("ENter key")
//         handleAdd()
//     }
// })


// const handleAdd = (e) => {

//     const textToAdd = input.value

//     if (textToAdd.length > 0) {
//         const ele = document.createElement('li')
//         const text_node = document.createTextNode(textToAdd)

//         ele.appendChild(text_node)
//         list.appendChild(ele)
//         // create a dynamic button element
//         const button = document.createElement('button')
//         button.innerHTML = "Delete"
//         ele.appendChild(button)

//         button.addEventListener('click', (e) => {
//             ele.remove()
//         })


//         // clear the list
//         input.value = ''
//     } else {
//         window.alert("Task can not be empty")
//     }

// }

// button.addEventListener('click', handleAdd)


// const button = document.querySelector('button')
// const div = document.querySelector('div')
// const body = document.querySelector('body')



// button.addEventListener('click', (e) => {
//     // check if the body has dark class
//     //  yes  -> remove it
//     //  no  -> add it
//     body.classList.toggle('dark')
// })


const random = () => {
    const val = Math.floor(Math.random().toFixed(1) * 3)
    switch (val) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"

        default:
            return "paper"
    }
}

console.log(random())

