import React, { useState } from 'react'
import { Form,Field,ErrorMessage, Formik} from 'formik'
import TextError from './TextError'
import * as Yup from 'yup';
function Form1() {
  const [data,setData]=useState({
    name:'',
    email:''
  })
  const initialValues = {
    name: "Guru",
    email: "nvguravaiah@gmail.com"
  }
  const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email().required('Required')
  })
  const onSubmit=values=>{
    console.log('Form data',values  )
  }
  return (
    <>
    <Formik 
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize  
      >
        <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component={TextError} />
              
            </div>
            <button type='button' onClick={()=>setData(initialValues)}>Edit</button>  
            <button type='submit'>Submit</button>
            <button type='reset' onClick={()=>setData({
              name:'',
              email:''
            })}>Reset</button>
        </Form>
      </Formik>
    </>
  )
}

export default Form1