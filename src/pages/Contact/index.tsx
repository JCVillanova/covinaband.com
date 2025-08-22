import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import InteractableInput from '../../components/Input';
import InteractableTextArea from '../../components/TextArea';

export default function Contact() {
    return (
        <div className='secondary-bg' style={{ height: '100vh' }}>
            <NavBar />
            <div
                style={{
                    padding: '2rem 0 0',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'var(--color-lightgray-light)',
                        borderRadius: '2rem',
                        margin: 'auto',
                        padding: '2rem',
                        width: '45vw',
                    }}
                >
                    <h2
                        style={{
                            margin: '0 0 1.5rem',
                            textAlign: 'center',
                        }}
                    >
                        CONTACT US
                    </h2>
                    <hr />
                    <form action='/contact-form-submissions' method='post'>
                            <div className='same-line-inputs'
                                style={{
                                    paddingTop: '0.5rem',
                                }}
                            >
                                <fieldset
                                    style={{
                                        display: 'flex',
                                        gap: '1rem',
                                    }}
                                >
                                    <legend className='form-label'>Name <span className='required' aria-hidden='true'>*</span></legend>
                                    <label className='visually-hidden' htmlFor='first'>First name</label>
                                    <InteractableInput className='' style={{flex: '1 1 auto'}} inputID='first' inputType='text' inputName='firstname' required={true}/>
                                    <label className='visually-hidden' htmlFor='last'>Last name</label>
                                    <InteractableInput className='' style={{flex: '1 1 auto'}} inputID='last' inputType='text' inputName='lastname' required={true}/>
                                </fieldset>
                            </div>

                        <label className='form-label' htmlFor='email'>Email <span className='required' aria-hidden='true'>*</span></label>
                        <InteractableInput className='' style={{}} inputID='email' inputType='email' inputName='email' required={true}/>
                        
                        <label className='form-label' htmlFor='phone-number'>Phone</label>
                        <InteractableInput className='' style={{}} inputID='phone-number' inputType='tel' inputName='phone' required={false}/>

                        <label className='form-label' htmlFor='message'>Message <span className='required' aria-hidden='true'>*</span></label>
                        <InteractableTextArea className='' inputID='message' inputName='message' numRows={4} required={true} style={{}} />

                        <ClickableButton className='submit-button' buttonSize='medium' buttonColor='light' buttonText='Submit' style={{}}/>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}