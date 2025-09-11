import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Dialog, NavigationMenu, ScrollArea } from 'radix-ui';
import { ArrowDown2, HamburgerMenu } from 'iconsax-reactjs';

export default function NavMenu() {
    return (
        <div id='navmenu'>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button className='white-icon-container' id='navmenu-trigger'
                        style={{
                            border: 'none',
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        <HamburgerMenu size='2rem' variant='Outline' />
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay id='navmenu-overlay' />
                    <Dialog.Content id='navmenu-content'>
                        <ScrollArea.Root className='scrollable-navmenu'>
                            <ScrollArea.Viewport className='scroll-viewport'>
                                <Accordion.Root type='single' collapsible>
                                        <Accordion.Item value='item-1'>
                                            <div className="navmenu-item">
                                                <Link className='navmenu-link' href='/About'>
                                                    About
                                                </Link>
                                                <Accordion.Trigger asChild>
                                                    <button>
                                                        <div className='dropdown-arrow'>
                                                            <ArrowDown2 className='navbar-arrow' size='1rem' variant='Outline' aria-hidden='true' />
                                                        </div>
                                                    </button>
                                                </Accordion.Trigger>
                                            </div>
                                            <Accordion.Content className='navmenu-subcategory'>
                                                <ul>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/About/Staff'>Staff</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/About/Boosters'>Band Boosters</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/About/StudentLeadership'>Student Leadership</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Accordion.Content>
                                        </Accordion.Item>
                                        <Accordion.Item value='item-2'>
                                            <div className="navmenu-item">
                                                <Link className='navmenu-link' href='/Ensembles'>
                                                    Ensembles
                                                </Link>
                                                <Accordion.Trigger asChild>
                                                    <button>
                                                        <div className='dropdown-arrow'>
                                                            <ArrowDown2 className='navbar-arrow' size='1rem' variant='Outline' aria-hidden='true' />
                                                        </div>
                                                    </button>
                                                </Accordion.Trigger>
                                            </div>
                                            <Accordion.Content className='navmenu-subcategory'>
                                                <ul>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/MarchingBand'>Marching Band</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/ColorGuard'>Color Guard</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/WinterGuard'>Winter Guard</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/ConcertBand'>Concert Band</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/JazzBand'>Jazz Band</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/LatinBand'>Latin Band</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Ensembles/PitOrchestra'>Pit Orchestra</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Accordion.Content>
                                        </Accordion.Item>
                                        <Accordion.Item value='item-3'>
                                            <div className="navmenu-item">
                                                <Link className='navmenu-link' href='/Shows'>
                                                    Shows
                                                </Link>
                                                <Accordion.Trigger asChild>
                                                    <button>
                                                        <div className='dropdown-arrow'>
                                                            <ArrowDown2 className='navbar-arrow' size='1rem' variant='Outline' aria-hidden='true' />
                                                        </div>
                                                    </button>
                                                </Accordion.Trigger>
                                            </div>
                                            <Accordion.Content className='navmenu-subcategory'>
                                                <ul>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/Slither'>Slither (2024)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/OnStage'>On Stage (2023)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/Rise'>Rise (2022)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/Loop'>Loop (2021)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/Poltergeist'>Poltergeist (2019)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/TheFourDimensions'>The Four Dimensions (2018)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/TheAncientArtOfWar'>The Ancient Art of War (2017)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/Daredevil'>Daredevil (2016)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/MirrorMirror'>Mirror Mirror (2015)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/Arabia'>Arabia (2014)</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Shows/EveryPassionHasItsDestiny'>Every Passion Has Its Destiny (2013)</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Accordion.Content>
                                        </Accordion.Item>
                                        <Accordion.Item value='item-4'>
                                            <div className="navmenu-item">
                                                <Link className='navmenu-link' href='/Events'>
                                                    Events
                                                </Link>
                                                <Accordion.Trigger asChild>
                                                    <button>
                                                        <div className='dropdown-arrow'>
                                                            <ArrowDown2 className='navbar-arrow' size='1rem' variant='Outline' aria-hidden='true' />
                                                        </div>
                                                    </button>
                                                </Accordion.Trigger>
                                            </div>
                                            <Accordion.Content className='navmenu-subcategory'>
                                                <ul>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/Events/Calendar'>Calendar</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Accordion.Content>
                                        </Accordion.Item>
                                        <Accordion.Item value='item-5'>
                                            <div className='navmenu-item'>
                                                <Link className='navmenu-link' href='/GetInvolved'>
                                                    Get Involved
                                                </Link>
                                                <Accordion.Trigger asChild>
                                                    <button>
                                                        <div className='dropdown-arrow'>
                                                            <ArrowDown2 className='navbar-arrow' size='1rem' variant='Outline' aria-hidden='true' />
                                                        </div>
                                                    </button>
                                                </Accordion.Trigger>
                                            </div>
                                            <Accordion.Content className='navmenu-subcategory'>
                                                <ul>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/GetInvolved/Contact'>Contact</Link>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <Link className='navmenu-link' href='/GetInvolved/Donate'>Donate</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Accordion.Content>
                                        </Accordion.Item>
                                </Accordion.Root>
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar orientation='vertical'>
                                <ScrollArea.Thumb />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Scrollbar orientation='horizontal'>
                                <ScrollArea.Thumb />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Corner />
                        </ScrollArea.Root>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}