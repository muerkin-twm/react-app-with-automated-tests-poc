import React, { useState } from 'react';
import {
  QC_SAMPLE_FORM_CONTAINER,
  QC_SAMPLE_FORM_EMAIL_LABEL,
  QC_SAMPLE_FORM_EMAIL_INPUT,
  QC_SAMPLE_FORM_PASSWORD_LABEL,
  QC_SAMPLE_FORM_PASSWORD_INPUT,
  QC_SAMPLE_FORM_SUBMIT,
  QC_SAMPLE_FORM_EMAIL_HELP_MESSAGE,
} from '../qcClasses/SampleFormPage';

const SampleForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      `Submitting form\nEmail: ${email}\nPassword: ${password}\nOpps, just shared your password with everyone watching :)`
    );
  };

  return (
    <div>
      <div className='.container'>
        <div className='row'>
          <h2>React App Testing Demo</h2>
        </div>
        <div className='row mb-5'>
          <h3>By Test Autoation Team</h3>
        </div>
        <div className='row'>
          <form id={QC_SAMPLE_FORM_CONTAINER}>
            <div className='form-group'>
              <label
                htmlFor={QC_SAMPLE_FORM_EMAIL_INPUT}
                id={QC_SAMPLE_FORM_EMAIL_LABEL}
              >
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id={QC_SAMPLE_FORM_EMAIL_INPUT}
                aria-describedby='emailHelp'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small
                id={QC_SAMPLE_FORM_EMAIL_HELP_MESSAGE}
                className='form-text text-muted'
              >
                We'll never share your email with anyone else.
                <br />
                No promises, but we will try.
              </small>
            </div>
            <div className='form-group'>
              <label
                htmlFor={QC_SAMPLE_FORM_PASSWORD_INPUT}
                id={QC_SAMPLE_FORM_PASSWORD_LABEL}
              >
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id={QC_SAMPLE_FORM_PASSWORD_INPUT}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='submit-container mt-4'>
              <button
                type='submit'
                className='btn btn-primary'
                id={QC_SAMPLE_FORM_SUBMIT}
                onClick={(e) => submitForm(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SampleForm;
