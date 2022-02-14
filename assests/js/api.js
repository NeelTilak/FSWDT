const application_id = 'dcc56aa9'
const application_key = '8966e1d3936d7b46d539f8615ea5a0b9'


// const getRecipe = async (query) => {

//     const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${application_key}`

//     console.log(endpoint)

//     const res = await fetch(endpoint)
//     const data = await res.json()
//     console.log(data)
// }

const input = document.querySelector('#search input')
const button = document.querySelector('#search button')


const getRecipe = async (query) => {

    const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${application_key}`

    console.log(endpoint)



const res = await fetch(endpoint)
    const data = await res.json()
    console.log(data)
}


const handleSearch = () => {
    console.log(input.value)
}


button.addEventListener('click', handleSearch)