import { Beta, ListResult } from "./utils"

// Edited by product teams
export type Resources = {
    ['subscription_schedule']: {
        object: 'subscription_schedule',
        id: string,
        name: string,
    },
    ['subscription']: {
        object: 'subscription',
        id: string,
        name: string,
        description: Beta<string>,
        schedules?: ListResult<'subscription_schedule'>,
    }
}
