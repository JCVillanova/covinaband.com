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
                            <button className='right-link'>
                                <Link className='right-link' href='/About'>About</Link>
                            </button>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navbar-dropdown'>
                            <ul>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/About/Staff'>Staff</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/About/Boosters'>Band Boosters</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/About/StudentLeadership'>Student Leadership</Link>
                                    </button>
                                </li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='navbar-item'>
                        <NavigationMenu.Trigger asChild>
                            <button>
                                <Link className='right-link' href='/Ensembles'>Ensembles</Link>
                            </button>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navbar-dropdown'>
                            <ul>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/MarchingBand'>Marching Band</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/ColorGuard'>Color Guard</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/WinterGuard'>Winter Guard</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/ConcertBand'>Concert Band</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/JazzBand'>Jazz Band</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/LatinBand'>Latin Band</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Ensembles/PitOrchestra'>Pit Orchestra</Link>
                                    </button>
                                </li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

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
                                        <Link className='right-link' href='/Shows/Slither'>Slither (2024)</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Shows/OnStage'>On Stage (2023)</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Shows/Rise'>Rise (2022)</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/Shows/Loop'>Loop (2021)</Link>
                                    </button>
                                </li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='navbar-item'>
                        <NavigationMenu.Link asChild>
                            <button>
                                <Link className='right-link' href='/Schedule'>Schedule</Link>
                            </button>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='navbar-item'>
                        <NavigationMenu.Trigger asChild>
                            <button>
                                <Link className='right-link' href='/GetInvolved'>Get Involved</Link>
                            </button>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className='navbar-dropdown right-dropdown'>
                            <ul>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/GetInvolved/Contact'>Contact</Link>
                                    </button>
                                </li>
                                <li className='navbar-subitem'>
                                    <button>
                                        <Link className='right-link' href='/GetInvolved/Donate'>Donate</Link>
                                    </button>
                                </li>
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
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