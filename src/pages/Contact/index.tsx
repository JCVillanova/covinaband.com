import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';

export default function Contact() {
    return (
        <div className='secondary-bg'>
            <NavBar />
            <div className='secondary-bg'
                style={{
                    height: '94vh',
                    padding: '2rem 0',
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
                    <form>
                        <label className='form-label'>Name <span className='required'>*</span></label>
                        <div className='same-line-inputs'
                            style={{
                                display: 'flex',
                            }}
                        >
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
                        </div>

                        <label className='form-label'>Email <span className='required'>*</span></label>
                        <input type='email' name='email'
                            style={{
                                width: '100%',
                            }}
                        />
                        
                        <label className='form-label'>Phone</label>
                        <input type='number' name='phone'
                            style={{
                                width: '100%',
                            }}
                        />
                        <label className='form-label'>Message <span className='required'>*</span></label>
                        <textarea name='message' rows={4}
                            style={{
                                width: '100%',
                            }}
                        />

                        <ClickableButton className='submit-button' buttonSize='medium' buttonText='Submit' style={{}}/>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}