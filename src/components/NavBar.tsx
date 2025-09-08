import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavigationMenu } from 'radix-ui';

function ContentList() {
    const { basePath } = useRouter();

    return (
        <NavigationMenu.Root>
            <NavigationMenu.List id='navbar'>
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
                        flex: '4 1 auto',
                    }}
                />
                <ul className='right-navbar'>
                    <NavigationMenu.Item className='navbar-item'>
                        <NavigationMenu.Trigger asChild>
                            <button>
                                <Link className='right-link' href='/Shows'>Shows</Link>
                            </button>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navbar-dropdown'>
                            <ul>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Shows/Slither'>Slither</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Shows/OnStage'>On Stage</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Shows/Rise'>Rise</Link>
                                    </button>
                                </li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
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
                            <Link className='right-link' href='/GetInvolved'>Get Involved</Link>
                        </button>
                    </li>
                </ul>
            </NavigationMenu.List>
        </NavigationMenu.Root>  
    );
}

export default function NavBar() {
    return (
        <ContentList></ContentList>
    );
}