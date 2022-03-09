import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component{

    renderInput({input, label, meta}){
        const errorState = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
                <div className={errorState} >
                    <label>{label}</label>
                    <input {...input} />
                    {meta.error && meta.touched?<div className="ui error message">{meta.error}</div>: ""}
                </div>
                );
                 // <input {...formProps.input} />
                // <input 
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
                //  />
    }
    onSubmit = formValue =>{
       this.props.createStream(formValue);
    }

    render(){
      
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label = "Enter Title" />
                <Field name="description" component={this.renderInput} label = "Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    } 
}

const validate = (formValues) =>{
    const errors = {};

    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description = "You must enter a description";
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'StreamCreate',
    validate
}) (StreamCreate);

export default connect(null, { createStream }) (formWrapped);

// OR
// export default connect() (reduxForm({
//     form: 'StreamCreate',
//     validate
// }) (StreamCreate));