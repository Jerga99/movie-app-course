
import React from 'react'

// functional component - arrow function
const About = () => {
  const message = 'Hello World'
  return (
    <h1>Hello About Page - {message}</h1>
  )
}
// WHEN TO USE:
// 1. for smaller components
// 2. reusable components
// 3. presentional components , patialy right, we can use HOOKS and specify state

// const About = () => {
//   const message = 'Hello World'
//   return (
//     <h1>Hello About Page - {message}</h1>
//   )
// }

// const About = () => {
//   const message = 'Hello World'
//   return React.createElement('h1', null, 'I am genereting this with createElement')
// }

// unctional component - normal function
// functional component - normal function
// function About() {
//   return (
//     <h1>Hello About Page</h1>
//   )
// }


// class About extends React.Component {
//   render() {
//     return (
//       <h1>Hello I am class component</h1>
//     )
//   }
// }




export default About
