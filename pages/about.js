
import React from 'react'

// functional component - arrow function
const About = () => {
  const message = 'Hello World'
  return (
    <h1>Hello About Page - {message}</h1>
  )
}

// const About = () => {
//   const message = 'Hello World'
//   return React.createElement('h1', null, 'I am genereting this with createElement')
// }

// unctional component - normal function
// function About() {
//   return (
//     <h1>Hello About Page</h1>
//   )
// }


export default About
