import React from 'react';
import './ContactForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  represented: '',
  date: new Date(),
  message: '',
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const PhoneRegExp =
  /^((\\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too Short!')
    .max(50, 'Name is too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .trim()
    .matches(PhoneRegExp, 'Phone number is invalid')
    .required('Phone number required'),
  represented: Yup.string(),
  date: Yup.date().required('Date is Required'),
  message: Yup.string()
    .min(2, 'Message is too short')
    .max(1600, 'Message is too long')
    .required('Message is Required'),
});

const ContactForm = ({ handleClose }) => {
  const onSubmit = (values, actions) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        toast.success('✔ Form Submission Successful!', {
          position: 'top-center',
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
        });
        actions.resetForm();
        setTimeout(() => {
          handleClose();
        }, 5000);
      })
      .catch(() => {
        toast.error('❌ Submit Failed, please try again!', {
          position: 'top-center',
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form name='contact' data-netlify={true}>
          <div className='Form'>
            <div className='primary-information'>
              <div className='name'>
                <label htmlFor='name'>Name: </label>
                <Field type='text' id='name' name='name' />
                <ErrorMessage name='name' component={TextError} />
              </div>

              <div className='email'>
                <label htmlFor='email'>Email: </label>
                <Field type='email' id='email' name='email' />
                <ErrorMessage name='email' component={TextError} />
              </div>
              <div className='phone'>
                <label htmlFor='phone'>Phone: </label>
                <Field type='phone' id='phone' name='phone' />
                <ErrorMessage name='phone' component={TextError} />
              </div>
            </div>

            <div className='secondary-information'>
              <div className='leftExtraInfo'>
                <div className='represented'>
                  Are you currently represented by another lawyer?
                </div>
                <div
                  className='radioGroup'
                  role='group'
                  aria-labelledby='my-radio-group'
                >
                  <label>
                    <Field type='radio' name='represented' value='Yes' />
                    Yes
                  </label>
                  <label>
                    <Field type='radio' name='represented' value='No' />
                    No
                  </label>

                  <ErrorMessage name='represented' component={TextError} />
                </div>
              </div>
              <div className='rightExtraInfo'>
                <div className='date'>
                  <label className='date-label' htmlFor='date'>
                    Date of the incident:
                  </label>
                  <Field id='date' name='date'>
                    {({ form, field }) => {
                      const { setFieldValue } = form;
                      const { value } = field;
                      return (
                        <DatePicker
                          {...field}
                          id='date'
                          selected={value}
                          onChange={(val) => {
                            setFieldValue('date', val);
                          }}
                          dateFormat='MMMM d, yyyy'
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          minDate={new Date('1950-1-1')}
                          maxDate={addDays(new Date(), 5)}
                          popperPlacement='auto'
                        />
                      );
                    }}
                  </Field>
                  <ErrorMessage name='date' component={TextError} />
                </div>
              </div>
            </div>

            <div className='detailed-information'>
              <div className='message'>
                <label htmlFor='message'>
                  Describe your legal issues and the causes:
                </label>
                <Field name='message' id='message' as='textarea' />
                <ErrorMessage name='message' component={TextError} />
              </div>

              <button className='submitBtn' type='submit'>
                Submit Form
              </button>
            </div>
          </div>
          <ToastContainer className='toaster' />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
