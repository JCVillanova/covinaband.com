import * as React from 'react';
import useState from 'react';
import ClickableButton from '../components/Button';
import NavBar from '../components/NavBar';

export default function Homepage() {
    return (
        <div className='primary-bg'>
            <NavBar />
            <div
                style={{
                    margin: '1.5rem 1rem',
                    width: '45vw',
                }}
            >
                <h1>COVINA HIGH SCHOOL</h1>
                <h2>BAND & GUARD</h2>
                <hr />
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ornare parturient feugiat diam molestie hac. Auctor curae mi platea purus hendrerit. Mus lectus urna tellus auctor quisque egestas fames efficitur. Molestie potenti convallis, rutrum ante semper diam ultricies montes.
                </p>
                <ClickableButton className='' buttonSize='large' buttonText='Join now' style={{}} />
            </div>
        </div>
    );
}