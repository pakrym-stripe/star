import { Endpoints } from "./endpoints";

export const Examples: Array<Endpoints> = [
    [
        'post /v1/subscription_schedules/{schedule}', 
        { schedule: 'sub_123' },
        {
            id: '123',
            object: 'subscription_schedule',
            completed_at: 123,
            created: 123
        }
    ]
];