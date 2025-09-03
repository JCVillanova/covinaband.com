import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import InteractableInput from '../../components/Input';
import InteractableTextArea from '../../components/TextArea';

export default function Contact() {
    return (
        <div className='secondary-bg'
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <NavBar />
            <div className='contact-content'
                style={{
                    display: 'flex',
                    flexGrow: '1',
                }}
            >
                <div className='contact-card'
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flex: '0 1 80vw',
                        justifyContent: 'center',
                        margin: 'auto',
                    }}
                >
                    <div className='contact-form'
                        style={{
                            backgroundColor: 'var(--color-lightgray-light)',
                            borderRadius: '2rem 0 0 2rem',
                            flex: '1 1 auto',
                            margin: '0',
                            height: '48rem',
                            padding: '2rem',
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
                                        <legend className='form-label' title='required'>Name <span className='required' aria-hidden='true'>*</span></legend>
                                        <label className='visually-hidden' htmlFor='first'>First name</label>
                                        <InteractableInput className='' style={{flex: '1 1 auto'}} autofocus={false} inputID='first' inputType='text' inputName='firstname' placeholder='' required={true}/>
                                        <label className='visually-hidden' htmlFor='last'>Last name</label>
                                        <InteractableInput className='' style={{flex: '1 1 auto'}} autofocus={false} inputID='last' inputType='text' inputName='lastname' placeholder='' required={true}/>
                                    </fieldset>
                                </div>

                            <label className='form-label' htmlFor='email' title='required'>Email <span className='required' aria-hidden='true'>*</span></label>
                            <InteractableInput className='' style={{}} autofocus={false} inputID='email' inputType='email' inputName='email' placeholder='' required={true}/>
                            
                            <label className='form-label' htmlFor='phone-number'>Phone</label>
                            <InteractableInput className='' style={{}} autofocus={false} inputID='phone-number' inputType='tel' inputName='phone' placeholder='(XXX) XXX-XXXX' required={false}/>

                            <label className='form-label' htmlFor='message' title='required'>Message <span className='required' aria-hidden='true'>*</span></label>
                            <InteractableTextArea className='' autofocus={false} inputID='message' inputName='message' placeholder='' numRows={4} required={true} spellcheck={true} style={{}} />

                            <ClickableButton className='submit-button' buttonSize='medium' buttonColor='light' buttonText='Send Message' style={{}}/>
                        </form>
                        
                    </div>
                    <div className='contact-image'
                        style={{
                            display: 'flex',
                            flex: 'none',
                        }}
                    >
                        <img className='screen-height-image'
                            alt="Covina High School's 2024-2025 drum majors and guard captains"
                            src='/assets/images/drum-majors-and-guard-captains.png'
                            style={{
                                borderRadius: '0 2rem 2rem 0',
                                flex: 'none',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}