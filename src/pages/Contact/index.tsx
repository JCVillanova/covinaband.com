import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';

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
                                <legend>Name</legend>
                                <input type='text' name='firstname'
                                    style={{
                                        flex: '1 1 auto',
                                    }}
                                />
                                <input type='text' name='lastname'
                                    style={{
                                        flex: '1 1 auto',
                                    }}
                                />
                            </fieldset>
                        </div>

                        <label className='form-label' htmlFor='email'>Email <span className='required'>*</span></label>
                        <input type='email' name='email'
                            style={{
                                width: '100%',
                            }}
                        />
                        
                        <label className='form-label' htmlFor='phone'>Phone</label>
                        <input type='number' name='phone'
                            style={{
                                width: '100%',
                            }}
                        />
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