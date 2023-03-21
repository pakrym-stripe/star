import { Subscription, SubscriptionSchedule } from "./resources";
import { Endpoint, ListResult, Resource, UpdateParams } from "./utils";

export type Endpoints =
    ['POST /v1/subscription_schedules/from_subscription',
        {
            from_subscription: string
        },
        SubscriptionSchedule
    ] |
    ['POST /v1/subscription_schedules/:id',
        {id: string} & UpdateParams<SubscriptionSchedule>,
        SubscriptionSchedule
    ] |
    ['GET /v1/subscription_schedules',
        {},
        ListResult<SubscriptionSchedule>
    ] |
    ['GET /v1/subscriptions',
        {},
        ListResult<Subscription>
    ];