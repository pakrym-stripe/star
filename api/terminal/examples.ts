import {Endpoints} from "./index";

export const Examples: Array<Endpoints> = [
    [
        'post /v1/terminal/configurations',
        {
            tipping: {
                aud:
                    {
                        fixed_amounts: [100, 200]
                    }
            }
        },
        {
            id: '123',
            object: 'terminal.configuration',
            livemode: true,
            is_account_default: true,
            tipping: {
                aud:
                    {
                        fixed_amounts: [100, 200]
                    }
            }
        }
    ],
    [
        'post /v1/terminal/readers',
        {

        },
        {
            object: 'terminal.reader',
            action: {
                failure_code: ''
            }
        }
    ]
];
