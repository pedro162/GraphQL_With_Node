const query  = `{
    olaMundo
}`

let url = "http://localhost:4000/graphql"
let options ={
    method:'POST',
    headers: {
        'Content-Type': 'application/JSON'
    },
    body:JSON.stringify({
        query
    })
}

const crateHelloWorld = (data)=>{
    const body = document.querySelector('body')
    body.innerHTML = data
}

fetch(url, options)
.then(response =>response.json())
.then(response =>crateHelloWorld(response?.data?.olaMundo))