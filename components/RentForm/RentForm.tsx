'use client'

import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  name: string;
  email: string;
  comment: string;
}

export default function RentForm() {
  return (
    <>
      <div className='flex flex-col p-8 mt-21 mx-auto w-160 rounded-2xl bg-white'>
        <h2 className='my-none mb-2 text-xl leading-[1.2] font-semibold'>Book your car now</h2>
        <p className='mb-6 leading-[1.25] font-medium text-gray'>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          comment: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values)
        }}
      >
        <Form className='flex flex-col'>
          <label className='sr-only' htmlFor="name">Name</label>
          <Field className="mb-4 py-3 px-5 w-full h-12 rounded-xl font-medium leading-[1.25] bg-inputs placeholder-gray focus:outline-none" id="name" name="name" placeholder="Name*" />

          <label className='sr-only' htmlFor="email">Email</label>
          <Field className="mb-4 py-3 px-5 w-full h-12 rounded-xl font-medium leading-[1.25] bg-inputs placeholder-gray focus:outline-none" id="email" name="email" placeholder="Email*" type="email"/>
            
          <label className='sr-only' htmlFor="comment">Comment</label>
          <Field className="mb-6 py-3 px-5 w-144 h-22 rounded-xl font-medium leading-[1.25] bg-inputs placeholder-gray focus:outline-none resize-none" as="textarea" id="comment" name="comment" placeholder="Comment" rows="5"/>

          <button className="flex justify-center items-center w-full h-11 rounded-xl font-semibold leading-[1.25] text-white bg-light-blue hover:bg-dark-blue focus:bg-dark-blue focus:outline-none transition-background duration-250 ease-in-out" type="submit">Send</button>
        </Form>
      </Formik>
    </div>
    </>
  );
}
