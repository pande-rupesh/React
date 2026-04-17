import React from 'react'
import Card from './Components/Card'
import './app.css'

const App = () => {

 const arr = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    username: "User1",
    experience: "1 year",
    technologies: ["Java", "Spring"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "User2",
    experience: "2 years",
    technologies: ["React", "Node"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    username: "User3",
    experience: "3 years",
    technologies: ["Python", "Django"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    username: "User4",
    experience: "4 years",
    technologies: ["Java", "Hibernate"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    username: "User5",
    experience: "2 years",
    technologies: ["Angular", "TypeScript"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    username: "User6",
    experience: "1 year",
    technologies: ["C++", "DSA"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    username: "User7",
    experience: "5 years",
    technologies: ["React", "Firebase"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    username: "User8",
    experience: "3 years",
    technologies: ["Java", "Microservices"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    username: "User9",
    experience: "2 years",
    technologies: ["Python", "Flask"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    username: "User10",
    experience: "4 years",
    technologies: ["Node", "MongoDB"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    username: "User11",
    experience: "1 year",
    technologies: ["HTML", "CSS"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "User12",
    experience: "6 years",
    technologies: ["DevOps", "AWS"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "User12",
    experience: "6 years",
    technologies: ["DevOps", "AWS"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "User12",
    experience: "6 years",
    technologies: ["DevOps", "AWS"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "User12",
    experience: "6 years",
    technologies: ["DevOps", "AWS"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    username: "User12",
    experience: "6 years",
    technologies: ["DevOps", "AWS"]
  }
];
  return (
    <>
    <div className='parent'>
     {arr.map(function(elem,idx){

        return <div key={idx}> 
        <Card image={elem.image} name={elem.username} exp={elem.experience} t1={elem.technologies[0]}
          t2={elem.technologies[1]}
        /></div>
     })}
    </div>
    </>
  )
}

export default App