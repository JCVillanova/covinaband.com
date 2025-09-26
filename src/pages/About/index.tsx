import * as React from 'react';
import { useState } from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// TODO: POPULATE ABOUT PAGE

export default function About() {
    return (
        <div>
            <div className='primary-bg'>
                <NavBar />
                <h2>About</h2>
            </div>
            <Footer />
        </div>
    );
}