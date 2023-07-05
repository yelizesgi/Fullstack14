import { useState } from "react"

const UseStateObject = () => {
   
    // const [name, setName] = useState("Ahmet Can")
    // const [age, setAge] = useState(30)
    // const [salary, setSalary] = useState(50000)


    const [kisi, setKisi] = useState({
        name: "Ahmet Kan",
        age: 30,
        salary: 50000,
    })


    const [toggle, setToggle] = useState(true)
    
    const handleToggle= ()=>{
        // toggle = !toggle
        setToggle(!toggle)
        if(toggle){
            setKisi({name: "Canan can",
            age: 40,
            salary: 60000,})           
        }else{
            setKisi({ name: "Ahmet Kan",
            age: 30,
            salary: 50000,})
        }
    }
  return (
    <div>
        <h1>USE STATE OBJECT</h1>
        <h2>Name:{kisi.name}</h2>
        <h2>Age:{kisi.age}</h2>
        <h2>Salary:{kisi.salary}</h2>

        <button onClick={()=> setKisi({...kisi, name:"Mehmet Kan"})}>Change Name</button>
        <button onClick={()=> setKisi({...kisi, age: kisi.age+1})}>Inc Age</button>
        <button onClick={()=> setKisi({...kisi, salary: kisi.salary+10000})}>Inc Salary</button>
        <button onClick={()=> setKisi({ name: "Canan can",
        age: 40,
        salary: 60000,})}>Full Change</button>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default UseStateObject