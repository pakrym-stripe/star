import { Endpoint, ListResult, Resource, UpdateParams } from "./utils";

export type Endpoints =
    ['POST /v1/subscription_schedules/from_subscription',
        {
            from_subscription: string
        },
        Resource<'subscription_schedule'>
    ] |
    ['POST /v1/subscription_schedules/:id',
        {id: string} & UpdateParams<'subscription_schedule'>,
        Resource<'subscription_schedule'>
    ] |
    ['GET /v1/subscription_schedules',
        {},
        ListResult<'subscription_schedule'>
    ] |
    ['GET /v1/subscriptions',
        {},
        ListResult<'subscription'>
    ];