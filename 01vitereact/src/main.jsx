import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App</h1>
//         </div>
//     )
// }

// ReactElement is the representing of the parsed tree from HTML code
// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

// const AnotherElement = (
//     <a href="https://google.com">Click here to visit google</a>
// )

const anotherUser = 'pulto23'

const ReactElement = React.createElement('a',{
    href:'https://google.com',
    target:'_blank'
},'Click me to visit google',
anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // App is basically a function
    <App />
    // MyApp()
    // <MyApp/>
    // ReactElement //problem is the fields are not same as the orginal documentation
    // AnotherElement
    // ReactElement
)
