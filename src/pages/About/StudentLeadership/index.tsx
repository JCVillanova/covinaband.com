import * as React from 'react';
import { useState } from 'react';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

// TODO: ADD STUDENT BIOS

export default function StudentLeadership() {
    return (
        <div>
            <div className='primary-bg'>
                <NavBar />
                <h2>Student Leadership</h2>
            </div>
            <Footer />
        </div>
    );
}