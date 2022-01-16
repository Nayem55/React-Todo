import React, {useState} from 'react'

export default function Hook() {

    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1);
    }

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
