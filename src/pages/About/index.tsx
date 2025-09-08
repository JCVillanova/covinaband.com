import * as React from 'react';
import { useState } from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
export default function Staff() {
    return (
        <div className='primary-bg'>
            <NavBar />
            <h2>About</h2>
            <Footer />
        </div>
    );
}