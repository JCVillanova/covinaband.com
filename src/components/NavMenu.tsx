import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, ScrollArea } from 'radix-ui';
import { HamburgerMenu } from 'iconsax-reactjs';

export default function NavMenu() {
    return (
        <div id='navmenu'>
            <Dialog.Root>
                <Dialog.Trigger className='navbar-subitem' asChild>
                    <button className='white-icon-container'
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
                        <Dialog.Title>Navigation</Dialog.Title>
                        <Dialog.Description>
                            Something something something
                        </Dialog.Description>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}