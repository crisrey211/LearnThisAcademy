import React from 'react'
import style from './InputChexbox.module.css'
import CheckIcon from './../icons/CheckIcon'
const InputChexbox = ({ className, ...props }) =>
    <label className={`${style.label} ${className || ''}`}>
        <input {...props} type="checkbox" className={style.input}></input>
        <CheckIcon className={style.check} />
    </label>

export default InputChexbox