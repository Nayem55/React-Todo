import React,{useState} from 'react'


export default function Form() {
 
// useState using object
const [user, setUser] = useState({name:'', email:'', password:'',bd:''})

// Distructure
const {name,email,password,bd}=user

// EventHandeler 
const handleChange=(e)=>{
    const fieldname= e.target.name;
    setUser({...user,[fieldname] : e.target.value})
   
}
const handlesubmit=(e)=>{
    console.log("submitted");  
    
    console.log(user);
    e.preventDefault();
}
    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handlesubmit}>
                <label for="name"> Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={handleChange} required />
                <br/> <br/>
                <label for="email"> Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
                <br/> <br/>
                <label for="password"> Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
                <br/> <br/>
                <label for="bd"> Birth date:</label>
                <input type="date" name="bd" id="bd" value={bd} onChange={handleChange} required />
                <br/> <br/>
                <button type="submit">register</button>

            </form>
            
        </div>
    )
}
