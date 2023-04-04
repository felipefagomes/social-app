import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function CreatePost() {

    const initialValues = {
        title: '',
        postText: '',
        username: ''
    };

    const validationSchema = yup.object().shape( {
        title: yup.string().required('campo obrigatório'),
        postText: yup.string().required('campo obrigatório'),
        username: yup.string().min(3).max(15).required('username must have between 3 and 15 characters')
    });

    const submitHandler = (data) => {
        console.log(data);
    };

    return(
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Title: </label>
                    <ErrorMessage name='title' component='span' />
                    <Field id='inputCreatePost' name='title' placeholder='Title' />
                    <label>Post: </label>
                    <ErrorMessage name='postText' component='span' />
                    <Field id='inputCreatePost' name='postText' placeholder='Post' />
                    <label>Username: </label>
                    <ErrorMessage name='username' component='span' />
                    <Field id='inputCreatePost' name='username' placeholder='Username' />
                    <button type='submit'>Create Post</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreatePost;