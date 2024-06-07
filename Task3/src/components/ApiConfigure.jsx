import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
const methodOptions = [
  { key: "select a method", value: "" },
  { key: "GET", value: "get" },
  { key: "POST", value: "post" },
  { key: "PUT", value: "put" },
  { key: "DELETE", value: "delete" },
];
const initialValues = {
  api: "",
  method: "",
  payload: [{ key: "", value: "" }],
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validationSchema = Yup.object({
  api: Yup.string().url('Invalid URL').required("Required"),
  method: Yup.string().required("Required"),
  payload: Yup.array().of(
    Yup.object().shape({
        key:Yup.string().required('Required'),
        value:Yup.string().required('Required')
    })
  ),
});
function ApiConfigure() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="api">API</label>
              <Field name="api" type="text" />
              <ErrorMessage name="api" component={TextError}/>
            </div>
            <div className="form-control">
              <label htmlFor="method">Method</label>
              <Field as="select" name="method">
                {methodOptions.map((method) => (
                  // console.log(method)
                  <option key={method.key} value={method.value}>
                    {method.key}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="method" component={TextError}/>
            </div>
            <div className="form-control">
              <label htmlFor="payload">PayLoad</label>
              <FieldArray name="payload">
                {(props) => {
                  console.log(props)
                  const { insert, remove, push } = props;
                //   console.log(values)
                  return (
                    <div>
                      {formik.values.payload.length > 0 &&
                        formik.values.payload.map((payloadField, index) => (
                          <div key={index}>
                            <Field
                              name={`payload.${index}.key`}
                              type="text"
                              placeholder="key"
                            />
                            <ErrorMessage
                              name={`payload.${index}.key`}
                              component={TextError}
                            />
                            <Field
                              name={`payload.${index}.value`}
                              type="text"
                              placeholder="value"
                              
                            />
                            <ErrorMessage
                              name={`payload.${index}.value`}
                              component={TextError}
                            />

                            <button type="button" onClick={()=>remove(index)}>Remove</button>
                          </div>
                        ))}

                        {formik.values.payload.length>0 && 
                         <button type="button" onClick={()=>
                            push({key:'',value:''})}>Add keys</button>}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ApiConfigure;
