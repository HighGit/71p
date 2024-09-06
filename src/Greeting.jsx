import React from 'react'

const Greeting = (props)=>{
    return <div>
        <h1> Welcome   {props.htext}</h1>
        <p> {props.ptext} </p>
    </div>

}
export default Greeting