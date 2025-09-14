import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Separator } from 'radix-ui';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import InteractableInput from '../../../components/Input';
import InteractableTextArea from '../../../components/TextArea';
import { FormMessage } from '@radix-ui/react-form';

export default function Contact() {
    const { basePath } = useRouter();

    const [firstNameMissing, setFirstNameMissing] = useState(false);
    const [lastNameMissing, setLastNameMissing] = useState(false);

    const nameMessage = (firstNameMissing && lastNameMissing) ? 'Please enter your first and last name' :
    firstNameMissing ? 'Please enter your first name' :
    lastNameMissing ? 'Please enter your last name' : ' ';

    return (
        <div>
            <div className='primary-bg'
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
                            <Separator.Root className='horizontal-divider' decorative/>
                            <Form.Root action='/contact-form-submissions' method='post'>
                                <Form.Field className='same-line-inputs' name='name'
                                    style={{
                                        paddingTop: '0.5rem',
                                    }}
                                >
                                    <div className='horizontal-spread'>
                                        <p className='form-label' title='required'>Name <span className='required' aria-hidden='true'>*</span></p>
                                        <FormMessage className='form-message' name='name'>
                                            {nameMessage}
                                        </FormMessage>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '1rem',
                                        }}
                                    >
                                        <Form.Label className='visually-hidden' htmlFor='first'>First name</Form.Label>
                                        <InteractableInput className='' style={{flex: '1 1 auto'}}
                                            autofocus={false}
                                            inputID='first'
                                            inputType='text'
                                            inputName='firstname'
                                            placeholder=''
                                            required={true}
                                            onInvalid={() => setFirstNameMissing(true)}
                                            onInput={() => setFirstNameMissing(false)}
                                        />
                                        <Form.Label className='visually-hidden' htmlFor='last'>Last name</Form.Label>
                                        <InteractableInput className='' style={{flex: '1 1 auto'}}
                                            autofocus={false}
                                            inputID='last'
                                            inputType='text'
                                            inputName='lastname'
                                            placeholder=''
                                            required={true}
                                            onInvalid={() => setLastNameMissing(true)}
                                            onInput={() => setLastNameMissing(false)}
                                        />
                                    </div>
                                </Form.Field>

                                <Form.Field name='email'>
                                    <div className='horizontal-spread'>
                                        <Form.Label className='form-label' htmlFor='email' title='required'>Email <span className='required' aria-hidden='true'>*</span></Form.Label>
                                        <Form.Message className='form-message' match='valueMissing'>Please enter an email address</Form.Message>
                                        <Form.Message className='form-message' match='typeMismatch'>Please enter a valid email address</Form.Message>
                                    </div>
                                    <InteractableInput className='' style={{}}
                                        autofocus={false}
                                        inputID='email'
                                        inputType='email'
                                        inputName='email'
                                        placeholder=''
                                        required={true}
                                        onInvalid={null}
                                        onInput={null}
                                    />
                                </Form.Field>
            
                                <Form.Field name='phone'>
                                    <div className='horizontal-spread'>
                                        <Form.Label className='form-label' htmlFor='phone-number'>Phone</Form.Label>
                                        <Form.Message className='form-message' match='typeMismatch'>Please enter a valid phone number</Form.Message>
                                    </div>
                                    <Form.Control asChild>
                                        <InteractableInput className='' style={{}}
                                            autofocus={false}
                                            inputID='phone-number'
                                            inputType='tel'
                                            inputName='phone'
                                            placeholder='(XXX) XXX-XXXX'
                                            required={false}
                                            onInvalid={null}
                                            onInput={null}
                                        />
                                    </Form.Control>
                                </Form.Field>

                                <Form.Field name='message'>
                                    <div className='horizontal-spread'>
                                        <Form.Label className='form-label' htmlFor='message' title='required'>Message <span className='required' aria-hidden='true'>*</span></Form.Label>
                                        <Form.Message className='form-message' match='valueMissing'>Please enter a message</Form.Message>
                                    </div>
                                    <InteractableTextArea className='' autofocus={false} inputID='message' inputName='message' placeholder='' numRows={4} required={true} spellcheck={true} style={{}} />
                                </Form.Field>

                                <Form.Submit asChild>
                                    <ClickableButton className='submit-button' buttonSize='medium' buttonColor='light' buttonText='Send Message' style={{}}/>
                                </Form.Submit>
                            </Form.Root>
            
                        </div>
                        <div className='contact-image'
                            style={{
                                display: 'flex',
                                flex: 'none',
                            }}
                        >
                            <img className='screen-height-image'
                                alt="Covina High School's 2024-2025 drum majors and guard captains"
                                src={`${basePath}/assets/images/drum-majors-and-guard-captains.png`}
                                style={{
                                    borderRadius: '0 2rem 2rem 0',
                                    flex: 'none',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}