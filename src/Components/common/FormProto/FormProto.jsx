import React from "react"
import { Field } from "redux-form"
import style from "./FormProto.module.css"

export const Element = Element => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
  <div className={style.formControl + " " + (hasError && style.error)}>
    <Element {...props} {...input} className={style.formInput}/>
    {hasError ? <span>{meta.error}</span> : ""}
    </div>)
}

export const createField = (fieldComponent, fieldPlaceholder, fieldName, fieldValidators, fieldText, fieldType) => {
  return <div>
    <Field type={fieldType} component={fieldComponent} placeholder={fieldPlaceholder} name={fieldName} validate={[...fieldValidators]}></Field>{fieldText}
    
  </div>
}