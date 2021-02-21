import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import isNumber from 'validator/lib/isNumeric'

const messages = {
    email: "Enter Valid Email Address",
    mobile: "Enter Valid Mobile Number"
}


export default function useFormField(name) {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const message = messages[name] || "Enter valid Data"



    const handleChange = (event) => {
        let { value } = event.target
        value = value ? value.trim() : ''
        setValue(value)
        var flag = true
        if (name === 'email') {
            flag = !isEmail(value)
        }
        else if (name === 'mobile') {
            flag = !isNumber(value) || value.length != 10
        }
        else {
            flag = value ? false : true;
        }
        setError(flag)
    }

    useEffect(() => {
        handleChange({ target: '' })
    }, [])

    return { value, handleChange, error, message, setValue }
}
