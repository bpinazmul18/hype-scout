import React, { Component } from 'react'
import Input from "./Input";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    handleChange = () => {
        console.log('handle change fired!')
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    renderedInput (label: string, type: string, name: string) {
        const {data, errors} = this.state
        return <Input label={label} type={type} name={name} value={'nazu'} onChange={this.handleChange} error={'hi'}/>
    }
}

export default Form