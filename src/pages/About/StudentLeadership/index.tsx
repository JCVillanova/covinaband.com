import * as React from 'react';
import { useState } from 'react';
import { Separator } from 'radix-ui';
import ClickableButton from '../../../components/Button';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

// TODO: ADD STUDENT BIOS

export default function StudentLeadership() {
    return (
        <div>
            <div className='primary-bg'>
                <NavBar />
                <h2 className='center-text'>STUDENT LEADERSHIP</h2>
                <Separator.Root className='horizontal-divider' decorative />
            </div>
            <Footer />
        </div>
    );
}