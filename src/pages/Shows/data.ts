import * as React from 'react';

export interface Award {
    id: number;
    name: string;
    text: string;
}


export const slitherAwards: Award[] = [{
    id: 0,
    name: 'BOA Regional Medalist',
    text: '1st place in class AA at Flagstaff Regional Championship',
}, {
    id: 1,
    name: 'SCSBOA 2A Championships',
    text: '9th place with a score of 78.45',
}];

export const loopAwards: Award[] = [{
    id: 0,
    name: '',
    text: '',
}];