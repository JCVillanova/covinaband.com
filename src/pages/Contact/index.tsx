import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import InteractableInput from '../../components/Input';

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
                        <label className='form-label' htmlFor='name'>Name <span className='required'>*</span></label>
                        <div className='same-line-inputs'>
                            <fieldset
                                style={{
                                    display: 'flex',
                                    gap: '1rem',
                                }}
                            >
                                <legend className='no-display'>Name</legend>
                                <InteractableInput className='' style={{flex: '1 1 auto'}} inputType='text' inputName='firstname'/>
                                <InteractableInput className='' style={{flex: '1 1 auto'}} inputType='text' inputName='lastname'/>
                            </fieldset>
                        </div>

                        <label className='form-label' htmlFor='email'>Email <span className='required'>*</span></label>
                        <InteractableInput className='' style={{}} inputType='email' inputName='email'/>
                        
                        <label className='form-label' htmlFor='phone'>Phone</label>
                        <InteractableInput className='' style={{}} inputType='number' inputName='phone'/>

                        <label className='form-label' htmlFor='msg'>Message <span className='required'>*</span></label>
                        <textarea name='message' rows={4}
                            style={{
                                width: '100%',
                            }}
                        />

                        <ClickableButton className='submit-button' buttonSize='medium' buttonColor='light' buttonText='Submit' style={{}}/>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}