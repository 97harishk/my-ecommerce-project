import React from 'react'
import './Input.css'
const Input = (props) =>{
    let inputElement = null;
   
    switch(props.inputtype){
        case('input'):
            inputElement = <input className="InputElement"  {...props} />
        break;
        case('textarea'):
            inputElement = <textarea  className="InputElement"  {...props}/>
        break;
        case('select'):
        let options = props.options.map(option =>{
            return <option value={option._id} key={option._id}>{option.name}</option>;
        })
            inputElement = <select  className="InputElement"  {...props} ><option>--Select--</option>{options}</select>
        break;
        default:
            inputElement = <input className="InputElement" {...props} />
    }
    return(
        <div className="Input-container">
            <div className="Input">
                <label className="Label">{props.label}</label>
                {inputElement}
            </div>
        </div>
    )
}
export default Input    