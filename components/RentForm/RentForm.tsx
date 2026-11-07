'use client'

import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { RiErrorWarningLine } from "react-icons/ri";
import { useMutation } from '@tanstack/react-query';
import { createBookingRequest } from '@/lib/api/api';
import toast, { Toaster } from 'react-hot-toast';

const RentFormSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'The name is too short.')
     .max(20, 'The name is too long.')
     .required('Please enter your name.'),
   email: Yup.string().email('Invalid email').required('Please enter your email.'),
   comment: Yup.string()
     .min(2, 'The comment is too short.')
     .max(300, 'The comment is too long.')
     .required('Comment is required'),
});

interface Values {
  name: string;
  email: string;
  comment: string;
}

interface RentFormProps {
  carId: string;
}

export default function RentForm({ carId }: RentFormProps) {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createBookingRequest,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: () => {
      toast.error('Something went wrong.');
    }
  });

  return (
    <>
      <div className='flex flex-col p-8 mt-8 w-160 rounded-2xl bg-white'>
        <h2 className='my-none mb-2 text-xl leading-[1.2] font-semibold'>Book your car now</h2>
        <p className='mb-6 leading-[1.25] font-medium text-gray'>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          comment: '',
        }}
        validationSchema={RentFormSchema}
         onSubmit={async (
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          try {
            await mutateAsync({
              carId,
              body: values
            });
            
            resetForm();
          } catch (err) {
            
          } finally {
            setSubmitting(false);
          }
        }}
        >
         
        {({ errors, touched }) => (
          <Form className='flex flex-col'>
            <label className='sr-only' htmlFor="name">Name</label>
              <div className="relative">
                <Field className={`py-3 pl-5 pr-10 w-full h-12 rounded-xl font-medium leading-[1.25] placeholder-gray focus:outline-none ${errors.name && touched.name ? "border border-error bg-error-light" : "bg-inputs"}`} id="name" name="name" placeholder="Name*" />
                {errors.name && touched.name ? (
                  <>
                    <p className="absolute left-3 -top-2 inline-block rounded-lg px-2 text-xs text-error leading-[1.33] bg-error-light">Name*</p>
                    <RiErrorWarningLine className="absolute top-3 right-3" color="#ec383b" size={24}/>
                  </>
              ) : null}
              </div>
              
              {errors.name && touched.name ? (
                <div className="text-xs text-error leading-[1.33]">{errors.name}</div>
              ) : null}

            <label className='sr-only' htmlFor="email">Email</label>
              <div className="relative">
                <Field className={`mt-4 py-3 pl-5 pr-10 w-full h-12 rounded-xl font-medium leading-[1.25] placeholder-gray focus:outline-none ${errors.email && touched.email ? "border border-error bg-error-light" : "bg-inputs"}`} id="email" name="email" placeholder="Email*" type="email" />
                {errors.email && touched.email ? (
                  <>
                    <p className="absolute left-3 top-2 inline-block rounded-lg px-2 text-xs text-error leading-[1.33] bg-error-light">Email*</p>
                    <RiErrorWarningLine className="absolute top-7 right-3" color="#ec383b" size={24}/>
                  </>
              ) : null}
              </div>

              {errors.email && touched.email ? (
                <div className="text-xs text-error leading-[1.33]">{errors.email}</div>
              ) : null}
                
            <label className='sr-only' htmlFor="comment">Comment</label>
              <div className="relative">
                <Field className={`mt-4 py-3 pl-5 pr-10 w-144 h-22 rounded-xl font-medium leading-[1.25] placeholder-gray focus:outline-none resize-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${errors.comment && touched.comment ? "border border-error bg-error-light" : "bg-inputs"}`} as="textarea" id="comment" name="comment" placeholder="Comment" rows="5" />
                {errors.comment && touched.comment ? (
                  <>
                    <RiErrorWarningLine className="absolute top-12 right-3" color="#ec383b" size={24}/>
                  </>
              ) : null}
              </div>
              
              {errors.comment && touched.comment ? (
                <div className="text-xs text-error leading-[1.33]">{errors.comment}</div>
              ) : null}

            <button className="mt-6 flex justify-center items-center w-full h-11 rounded-xl font-semibold leading-[1.25] text-white bg-light-blue hover:bg-dark-blue focus:bg-dark-blue focus:outline-none transition-background duration-250 ease-in-out" type="submit" disabled={isPending}>Send</button>
          </Form>
        )}
      </Formik>
      </div>
      
      <Toaster />
    </>
  );
}
