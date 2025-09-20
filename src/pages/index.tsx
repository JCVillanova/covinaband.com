import * as React from 'react';
import useState from 'react';
import { Separator } from 'radix-ui';
import ClickableButton from '../components/Button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Homepage() {
    return (
        <div>
            <div className='primary-bg'>
                <NavBar />
                <div className='homepage-intro'>
                    <h1>COVINA HIGH SCHOOL</h1>
                    <h2
                        style={{
                            left: 0,
                        }}
                    >BAND & GUARD</h2>
                    <Separator.Root className='contact-divider' decorative
                        style={{
                            marginLeft: '1rem',
                            width: '100%',
                        }}
                    />
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes.
                    </p>
                    <ClickableButton className='' buttonSize='large' buttonColor='dark' buttonText='Join now'
                        style={{
                            marginLeft: '1rem',
                        }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}