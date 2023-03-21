import { ListResult } from "./utils"

export type SubscriptionSchedule =  {
    object: 'subscription_schedule',
    id: string,
    name: string,
}

export type Subscription = {
    object: 'subscription',
    id: string,
    name: string,
    description: string,
    schedules?: ListResult<SubscriptionSchedule>,
}

export type Resources = 
    SubscriptionSchedule | 
    Subscription;
