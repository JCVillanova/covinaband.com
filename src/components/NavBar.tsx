import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ContentList() {
    const { basePath } = useRouter();

    return (
        <div id='navbar'>
            <ul className='left-navbar'>
                <li className="navbar-logo">
                    <img
                        alt="Covina High School's logo"
                        src={`${basePath}/assets/images/icons/covina-logo.png`}
                    />
                </li>
                <li id='logo-text'>
                    <button>
                        <Link href='/'>
                            <span className='red-text'>COVINA</span>
                            <span>BAND&GUARD</span>
                        </Link>
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
                        <Link className='right-link' href='/Shows'>Shows</Link>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <Link className='right-link' href='/Ensembles'>Ensembles</Link>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <Link className='right-link' href='/Staff'>Staff</Link>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <Link className='right-link' href='/Schedule'>Schedule</Link>
                    </button>
                </li>
                <li className='navbar-item'>
                    <button>
                        <Link className='right-link' href='/Contact'>Contact</Link>
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