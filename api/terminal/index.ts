import {List, Deleted} from '../../src/utils';
// File generated from our OpenAPI spec
export type File = {};
export type DeviceTypeSpecificConfig = {splashscreen?: File | string};
export type CurrencySpecificConfig = {
  fixed_amounts?: Array<number> | null,
  percentages?: Array<number> | null,
  smart_tip_threshold?: number,
};
export type Tipping = {
  aud?: CurrencySpecificConfig,
  cad?: CurrencySpecificConfig,
  chf?: CurrencySpecificConfig,
  czk?: CurrencySpecificConfig,
  dkk?: CurrencySpecificConfig,
  eur?: CurrencySpecificConfig,
  gbp?: CurrencySpecificConfig,
  hkd?: CurrencySpecificConfig,
  myr?: CurrencySpecificConfig,
  nok?: CurrencySpecificConfig,
  nzd?: CurrencySpecificConfig,
  sek?: CurrencySpecificConfig,
  sgd?: CurrencySpecificConfig,
  usd?: CurrencySpecificConfig,
};
export type TerminalConfiguration = {
  bbpos_wisepos_e?: DeviceTypeSpecificConfig,
  id: string,
  is_account_default: boolean | null,
  livemode: boolean,
  object: 'terminal.configuration',
  tipping?: Tipping,
  verifone_p400?: DeviceTypeSpecificConfig,
};
export type TerminalConnectionToken = {
  location?: string,
  object: 'terminal.connection_token',
  secret: string,
};
export type Address = {
  city: string | null,
  country: string | null,
  line1: string | null,
  line2: string | null,
  postal_code: string | null,
  state: string | null,
};
export type TerminalLocation = {
  address: Address,
  configuration_overrides?: string,
  display_name: string,
  id: string,
  livemode: boolean,
  metadata: unknown /*map*/,
  object: 'terminal.location',
};
export type PaymentIntent = {};
export type TippingConfig = {amount_eligible?: number};
export type ProcessConfig = {skip_tipping?: boolean, tipping?: TippingConfig};
export type ProcessPaymentIntentAction = {
  payment_intent: PaymentIntent | string,
  process_config?: ProcessConfig,
};
export type SetupIntent = {};
export type ProcessSetupIntentAction = {
  generated_card?: string,
  setup_intent: SetupIntent | string,
};
export type Charge = {};
export type Refund = {};
export type RefundPaymentAction = {
  amount?: number,
  charge?: Charge | string,
  metadata?: unknown /*map*/,
  payment_intent?: PaymentIntent | string,
  reason?: 'duplicate' | 'fraudulent' | 'requested_by_customer',
  refund?: Refund | string,
  refund_application_fee?: boolean,
  reverse_transfer?: boolean,
};
export type LineItem = {amount: number, description: string, quantity: number};
export type Cart = {
  currency: string,
  line_items: Array<LineItem>,
  tax: number | null,
  total: number,
};
export type SetReaderDisplayAction = {cart: Cart | null, type: 'cart'};
export type ReaderAction = {
  failure_code: string | null,
  failure_message: string | null,
  process_payment_intent?: ProcessPaymentIntentAction,
  process_setup_intent?: ProcessSetupIntentAction,
  refund_payment?: RefundPaymentAction,
  set_reader_display?: SetReaderDisplayAction,
  status: 'failed' | 'in_progress' | 'succeeded',
  type:
    | 'process_payment_intent'
    | 'process_setup_intent'
    | 'refund_payment'
    | 'set_reader_display',
};
export type TerminalReader = {
  action: ReaderAction | null,
  device_sw_version: string | null,
  device_type:
    | 'bbpos_chipper2x'
    | 'bbpos_wisepad3'
    | 'bbpos_wisepos_e'
    | 'simulated_wisepos_e'
    | 'stripe_m2'
    | 'verifone_P400',
  id: string,
  ip_address: string | null,
  label: string,
  livemode: boolean,
  title: string,
  location: TerminalLocation | string | null,
  metadata: unknown /*map*/,
  object: 'terminal.reader',
  serial_number: string,
  status: string | null,
};
export type Resources =
  | TerminalConfiguration
  | TerminalConnectionToken
  | TerminalLocation
  | TerminalReader;
export type Endpoints =
  | [
    'post /v1/terminal/configurations',
    {
      bbpos_wisepos_e?: {splashscreen?: string | ''},
      expand?: Array<string>,
      tipping?:
        | {
          aud?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          cad?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          chf?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          czk?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          dkk?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          eur?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          gbp?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          hkd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          myr?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          nok?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          nzd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          sek?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          sgd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          usd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
        }
        | '',
      verifone_p400?: {splashscreen?: string | ''},
    },
    TerminalConfiguration,
  ]
  | [
    'get /v1/terminal/configurations',
    {
      ending_before?: string,
      expand?: Array<string>,
      is_account_default?: boolean,
      limit?: number,
      limit2?: number,
      starting_after?: string,
    },
    List<TerminalConfiguration>,
  ]
  | [
    'get /v1/terminal/configurations/{configuration}',
    {configuration: string, expand?: Array<string>},
    TerminalConfiguration,
  ]
  | [
    'post /v1/terminal/configurations/{configuration}',
    {
      configuration: string,
      bbpos_wisepos_e?: {splashscreen?: string | ''} | '',
      expand?: Array<string>,
      tipping?:
        | {
          aud?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          cad?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          chf?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          czk?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          dkk?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          eur?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          gbp?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          hkd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          myr?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          nok?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          nzd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          sek?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          sgd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
          usd?: {
            fixed_amounts?: Array<number>,
            percentages?: Array<number>,
            smart_tip_threshold?: number,
          },
        }
        | '',
      verifone_p400?: {splashscreen?: string | ''} | '',
    },
    TerminalConfiguration,
  ]
  | [
    'delete /v1/terminal/configurations/{configuration}',
    {configuration: string},
    Deleted<TerminalConfiguration>,
  ]
  | [
    'post /v1/terminal/connection_tokens',
    {expand?: Array<string>, location?: string},
    TerminalConnectionToken,
  ]
  | [
    'get /v1/terminal/locations/{location}',
    {location: string, expand?: Array<string>},
    TerminalLocation,
  ]
  | [
    'post /v1/terminal/locations/{location}',
    {
      location: string,
      address?: {
        city?: string,
        country?: string,
        line1?: string,
        line2?: string,
        postal_code?: string,
        state?: string,
      },
      configuration_overrides?: string,
      display_name?: string,
      expand?: Array<string>,
      metadata?: unknown /*map*/ | '',
    },
    TerminalLocation,
  ]
  | [
    'delete /v1/terminal/locations/{location}',
    {location: string},
    Deleted<TerminalLocation>,
  ]
  | [
    'post /v1/terminal/locations',
    {
      address: {
        city?: string,
        country: string,
        line1?: string,
        line2?: string,
        postal_code?: string,
        state?: string,
      },
      configuration_overrides?: string,
      display_name: string,
      expand?: Array<string>,
      metadata?: unknown /*map*/ | '',
    },
    TerminalLocation,
  ]
  | [
    'get /v1/terminal/locations',
    {
      ending_before?: string,
      expand?: Array<string>,
      limit?: number,
      starting_after?: string,
    },
    List<TerminalLocation>,
  ]
  | [
    'post /v1/terminal/readers/{reader}',
    {
      reader: string,
      expand?: Array<string>,
      label?: string,
      metadata?: unknown /*map*/ | '',
    },
    TerminalReader,
  ]
  | [
    'get /v1/terminal/readers/{reader}',
    {reader: string, expand?: Array<string>},
    TerminalReader,
  ]
  | [
    'delete /v1/terminal/readers/{reader}',
    {reader: string},
    Deleted<TerminalReader>,
  ]
  | [
    'post /v1/terminal/readers',
    {
      expand?: Array<string>,
      label?: string,
      location?: string,
      metadata?: unknown /*map*/ | '',
      registration_code: number,
      title: string,
    },
    TerminalReader,
  ]
  | [
    'get /v1/terminal/readers',
    {
      device_type?:
        | 'bbpos_chipper2x'
        | 'bbpos_wisepad3'
        | 'bbpos_wisepos_e'
        | 'simulated_wisepos_e'
        | 'stripe_m2'
        | 'verifone_P400',
      ending_before?: string,
      expand?: Array<string>,
      limit?: number,
      location?: string,
      starting_after?: string,
      status?: 'offline' | 'online',
    },
    List<TerminalReader>,
  ]
  | [
    'post /v1/terminal/readers/{reader}/process_payment_intent',
    {
      reader: string,
      expand?: Array<string>,
      payment_intent: string,
      process_config?: {
        skip_tipping?: boolean,
        tipping?: {amount_eligible?: number},
      },
    },
    TerminalReader,
  ]
  | [
    'post /v1/terminal/readers/{reader}/process_setup_intent',
    {
      reader: string,
      customer_consent_collected: boolean,
      expand?: Array<string>,
      setup_intent: string,
    },
    TerminalReader,
  ]
  | [
    'post /v1/terminal/readers/{reader}/cancel_action',
    {reader: string, expand?: Array<string>},
    TerminalReader,
  ]
  | [
    'post /v1/terminal/readers/{reader}/set_reader_display',
    {
      reader: string,
      cart?: {
        currency: string,
        line_items: Array<{
          amount: number,
          description: string,
          quantity: number,
        }>,
        tax?: number,
        total: number,
      },
      expand?: Array<string>,
      type: 'cart',
    },
    TerminalReader,
  ]
  | [
    'post /v1/terminal/readers/{reader}/refund_payment',
    {
      reader: string,
      amount?: number,
      charge?: string,
      expand?: Array<string>,
      metadata?: unknown /*map*/,
      payment_intent?: string,
      refund_application_fee?: boolean,
      reverse_transfer?: boolean,
    },
    TerminalReader,
  ];
