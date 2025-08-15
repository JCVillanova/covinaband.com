import * as React from 'react';
import { useState } from 'react';

function ContentList() {
    return (
        <div id='navbar'>
            <ul className='left-navbar'>
                <li className="navbar-logo">
                    <img
                        alt="Covina High School's logo"
                        src="/assets/images/icons/covina-logo.png"
                    />
                </li>
                <li id='logo-text'>
                    <button>
                        <a href='/'>
                            <span className='red-text'>COVINA</span>
                            <span>BAND&GUARD</span>
                        </a>
                    </button>
                </li>
            </ul>
            <div
                style={{
                    width: '50rem',
                }}
            />
            <ul className='right-navbar'>
                <li className='navbar-item'>
                    <button>
                        <a className='right-link' href='/Shows'>Shows</a>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <a className='right-link' href='/Ensembles'>Ensembles</a>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <a className='right-link' href='/Staff'>Staff</a>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <a className='right-link' href='/Schedule'>Schedule</a>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <a className='right-link' href='/Contact'>Contact</a>
                    </button>
                </li>
            </ul>
        </div>  
    );
}

export default function NavBar() {
    return (
        <ContentList></ContentList>
    );
}