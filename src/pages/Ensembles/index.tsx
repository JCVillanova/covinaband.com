import * as React from 'react';
import useState from 'react';
import ClickableButton from '../../components/Button';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Ensembles() {
    return (
        <div>
            <div className='primary-bg'>
                <NavBar />
                <h2>Ensembles</h2>
            </div>
            <Footer />
        </div>
    );
}