import React from 'react'

interface InputProps {
    label: string,
    type: string,
    name: string,
    value?: string,
    error?: string,
    onChange: () => void,
}

const Input = ({ label, type, name, value, error, onChange }: InputProps) => {

    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label text-light">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                id={name} 
                className="form-control rounded-pill" 
                placeholder={`Enter ${name}...`}
             />
            {error && <div className="alert alert-danger my-3 rounded-3">{error}</div> }
        </div>
     );
}
 
export default Input;