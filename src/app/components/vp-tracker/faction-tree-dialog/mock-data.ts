import { FactionNode } from "src/app/shared/models/FactionNode";

export const FACTION_DATA: FactionNode[] = [
    {
        name: 'Astra Militarium',
        children: [
            {
                name: 'Adeptus Astartes',
                children: [
                { name: 'Ultra Marines' },
                { name: 'Space Wolves' },
                { name: 'Blood Angels' },
                { name: 'Gray Knights' },
                { name: 'Imperial Fist' },
                { name: 'Iron Hands' },
                ],
            },
            {
                name: 'Adeptus Mechanicus',
                children: [
                ],
            },
            {
                name: 'The Inquisition',
                children: [
                ],
            },
        ],
    },
    {
        name: 'Orkks',
        children: [
        ],
    },
    {
        name: 'Eldar',
        children: [
        ],
    },
    {
        name: 'Chaos',
        children: [
            {
                name: 'Renegades',
                children: [
                ],
            },
            {
                name: 'Alpha Legion',
                children: [
                ],
            },
            {
                name: 'Fallen',
                children: [
                ],
            },
            {
                name: 'Thousand Sons',
                children: [
                ],
            },
        ],
    },
    
];