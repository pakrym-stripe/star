import { Endpoints } from "./endpoints";

export const Examples: Array<Endpoints> = [
    [
        'POST /v1/subscription_schedules/:id', 
        { id: 'sub_123' },
        {
            id: '123',
            object: 'subscription_schedule',
            name: 'string',
        }
    ],
    [
        'GET /v1/subscription_schedules', 
        { id: 'sub_123' },
        {
            object: 'list',
            data: [],
            has_next: true
        }
    ],
    [
        'GET /v1/subscription_schedules', 
        { id: 'sub_123' },
        {
            object: 'list',
            data: [
                {
                    id: '123',
                    object: 'subscription_schedule',
                    name: 's',
                }
            ],
            has_next: false
        }
    ]
];