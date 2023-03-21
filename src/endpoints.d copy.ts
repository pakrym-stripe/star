// File generated from our OpenAPI spec
export type Address = {
  city?: string;
  country?: string;
  line1: string;
  line2?: string;
  postal_code?: string;
  state?: string;
};
export type AccountBusinessProfile = {
  mcc: string | null;
  name: string | null;
  product_description?: string | null;
  support_address: Address | null;
  support_email: string | null;
  support_phone: string | null;
  support_url: string | null;
  url: string | null;
};
export type AccountCapabilities = {
  acss_debit_payments?: "active" | "inactive" | "pending";
  affirm_payments?: "active" | "inactive" | "pending";
  afterpay_clearpay_payments?: "active" | "inactive" | "pending";
  au_becs_debit_payments?: "active" | "inactive" | "pending";
  bacs_debit_payments?: "active" | "inactive" | "pending";
  bancontact_payments?: "active" | "inactive" | "pending";
  bank_transfer_payments?: "active" | "inactive" | "pending";
  blik_payments?: "active" | "inactive" | "pending";
  boleto_payments?: "active" | "inactive" | "pending";
  card_issuing?: "active" | "inactive" | "pending";
  card_payments?: "active" | "inactive" | "pending";
  cartes_bancaires_payments?: "active" | "inactive" | "pending";
  cashapp_payments?: "active" | "inactive" | "pending";
  eps_payments?: "active" | "inactive" | "pending";
  fpx_payments?: "active" | "inactive" | "pending";
  giropay_payments?: "active" | "inactive" | "pending";
  grabpay_payments?: "active" | "inactive" | "pending";
  ideal_payments?: "active" | "inactive" | "pending";
  india_international_payments?: "active" | "inactive" | "pending";
  jcb_payments?: "active" | "inactive" | "pending";
  klarna_payments?: "active" | "inactive" | "pending";
  konbini_payments?: "active" | "inactive" | "pending";
  legacy_payments?: "active" | "inactive" | "pending";
  link_payments?: "active" | "inactive" | "pending";
  oxxo_payments?: "active" | "inactive" | "pending";
  p24_payments?: "active" | "inactive" | "pending";
  paynow_payments?: "active" | "inactive" | "pending";
  promptpay_payments?: "active" | "inactive" | "pending";
  sepa_debit_payments?: "active" | "inactive" | "pending";
  sofort_payments?: "active" | "inactive" | "pending";
  tax_reporting_us_1099_k?: "active" | "inactive" | "pending";
  tax_reporting_us_1099_misc?: "active" | "inactive" | "pending";
  transfers?: "active" | "inactive" | "pending";
  treasury?: "active" | "inactive" | "pending";
  us_bank_account_ach_payments?: "active" | "inactive" | "pending";
};
export type LegalEntityJapanAddress = {
  city: string | null;
  country: string | null;
  line1: string | null;
  line2: string | null;
  postal_code: string | null;
  state: string | null;
  town: string | null;
};
export type LegalEntityUboDeclaration = {
  date: number | null;
  ip: string | null;
  user_agent: string | null;
};
export type LegalEntityCompanyVerificationDocument = {
  back: File | string | null;
  details: string | null;
  details_code: string | null;
  front: File | string | null;
};
export type LegalEntityCompanyVerification = {
  document: LegalEntityCompanyVerificationDocument;
};
export type LegalEntityCompany = {
  address?: Address;
  address_kana?: LegalEntityJapanAddress | null;
  address_kanji?: LegalEntityJapanAddress | null;
  directors_provided?: boolean;
  executives_provided?: boolean;
  name?: string | null;
  name_kana?: string | null;
  name_kanji?: string | null;
  owners_provided?: boolean;
  ownership_declaration?: LegalEntityUboDeclaration | null;
  phone?: string | null;
  structure?:
    | "free_zone_establishment"
    | "free_zone_llc"
    | "government_instrumentality"
    | "governmental_unit"
    | "incorporated_non_profit"
    | "limited_liability_partnership"
    | "llc"
    | "multi_member_llc"
    | "private_company"
    | "private_corporation"
    | "private_partnership"
    | "public_company"
    | "public_corporation"
    | "public_partnership"
    | "single_member_llc"
    | "sole_establishment"
    | "sole_proprietorship"
    | "tax_exempt_government_instrumentality"
    | "unincorporated_association"
    | "unincorporated_non_profit";
  tax_id_provided?: boolean;
  tax_id_registrar?: string;
  vat_id_provided?: boolean;
  verification?: LegalEntityCompanyVerification | null;
};
export type AccountUnificationAccountController = {
  is_controller?: boolean;
  type: "account" | "application";
};
export type AccountRequirementsAlternative = {
  alternative_fields_due: Array<string>;
  original_fields_due: Array<string>;
};
export type AccountRequirementsError = {
  code:
    | "invalid_address_city_state_postal_code"
    | "invalid_dob_age_under_18"
    | "invalid_representative_country"
    | "invalid_street_address"
    | "invalid_tos_acceptance"
    | "invalid_value_other"
    | "verification_document_address_mismatch"
    | "verification_document_address_missing"
    | "verification_document_corrupt"
    | "verification_document_country_not_supported"
    | "verification_document_dob_mismatch"
    | "verification_document_duplicate_type"
    | "verification_document_expired"
    | "verification_document_failed_copy"
    | "verification_document_failed_greyscale"
    | "verification_document_failed_other"
    | "verification_document_failed_test_mode"
    | "verification_document_fraudulent"
    | "verification_document_id_number_mismatch"
    | "verification_document_id_number_missing"
    | "verification_document_incomplete"
    | "verification_document_invalid"
    | "verification_document_issue_or_expiry_date_missing"
    | "verification_document_manipulated"
    | "verification_document_missing_back"
    | "verification_document_missing_front"
    | "verification_document_name_mismatch"
    | "verification_document_name_missing"
    | "verification_document_nationality_mismatch"
    | "verification_document_not_readable"
    | "verification_document_not_signed"
    | "verification_document_not_uploaded"
    | "verification_document_photo_mismatch"
    | "verification_document_too_large"
    | "verification_document_type_not_supported"
    | "verification_failed_address_match"
    | "verification_failed_business_iec_number"
    | "verification_failed_document_match"
    | "verification_failed_id_number_match"
    | "verification_failed_keyed_identity"
    | "verification_failed_keyed_match"
    | "verification_failed_name_match"
    | "verification_failed_other"
    | "verification_failed_residential_address"
    | "verification_failed_tax_id_match"
    | "verification_failed_tax_id_not_issued"
    | "verification_missing_executives"
    | "verification_missing_owners"
    | "verification_requires_additional_memorandum_of_associations";
  reason: string;
  requirement: string;
};
export type AccountFutureRequirements = {
  alternatives: Array<AccountRequirementsAlternative> | null;
  current_deadline: number | null;
  currently_due: Array<string> | null;
  disabled_reason: string | null;
  errors: Array<AccountRequirementsError> | null;
  eventually_due: Array<string> | null;
  past_due: Array<string> | null;
  pending_verification: Array<string> | null;
};
export type AccountRequirements = {
  alternatives: Array<AccountRequirementsAlternative> | null;
  current_deadline: number | null;
  currently_due: Array<string> | null;
  disabled_reason: string | null;
  errors: Array<AccountRequirementsError> | null;
  eventually_due: Array<string> | null;
  past_due: Array<string> | null;
  pending_verification: Array<string> | null;
};
export type AccountBacsDebitPaymentsSettings = { display_name?: string };
export type AccountBrandingSettings = {
  icon: File | string | null;
  logo: File | string | null;
  primary_color: string | null;
  secondary_color: string | null;
};
export type CardIssuingAccountTermsOfService = {
  date: number | null;
  ip: string | null;
  user_agent?: string;
};
export type AccountCardIssuingSettings = {
  tos_acceptance?: CardIssuingAccountTermsOfService;
};
export type AccountDeclineChargeOn = {
  avs_failure: boolean;
  cvc_failure: boolean;
};
export type AccountCardPaymentsSettings = {
  decline_on?: AccountDeclineChargeOn;
  statement_descriptor_prefix: string | null;
  statement_descriptor_prefix_kana: string | null;
  statement_descriptor_prefix_kanji: string | null;
};
export type AccountDashboardSettings = {
  display_name: string | null;
  timezone: string | null;
};
export type AccountPaymentsSettings = {
  statement_descriptor: string | null;
  statement_descriptor_kana: string | null;
  statement_descriptor_kanji: string | null;
  statement_descriptor_prefix_kana: string | null;
  statement_descriptor_prefix_kanji: string | null;
};
export type TransferSchedule = {
  delay_days: number;
  interval: string;
  monthly_anchor?: number;
  weekly_anchor?: string;
};
export type AccountPayoutSettings = {
  debit_negative_balances: boolean;
  schedule: TransferSchedule;
  statement_descriptor: string | null;
};
export type AccountSepaDebitPaymentsSettings = { creditor_id?: string };
export type AccountTermsOfService = {
  date: number | null;
  ip: string | null;
  user_agent?: string;
};
export type AccountTreasurySettings = {
  tos_acceptance?: AccountTermsOfService;
};
export type AccountSettings = {
  bacs_debit_payments?: AccountBacsDebitPaymentsSettings;
  branding: AccountBrandingSettings;
  card_issuing?: AccountCardIssuingSettings;
  card_payments: AccountCardPaymentsSettings;
  dashboard: AccountDashboardSettings;
  payments: AccountPaymentsSettings;
  payouts?: AccountPayoutSettings;
  sepa_debit_payments?: AccountSepaDebitPaymentsSettings;
  treasury?: AccountTreasurySettings;
};
export type AccountTosAcceptance = {
  date?: number | null;
  ip?: string | null;
  service_agreement?: string;
  user_agent?: string | null;
};
export type Account = {
  business_profile?: AccountBusinessProfile | null;
  business_type?:
    | "company"
    | "government_entity"
    | "individual"
    | "non_profit"
    | null;
  capabilities?: AccountCapabilities;
  charges_enabled?: boolean;
  company?: LegalEntityCompany;
  controller?: AccountUnificationAccountController;
  country?: string;
  created?: number;
  default_currency?: string;
  details_submitted?: boolean;
  email?: string | null;
  external_accounts?: List<BankAccount | Card>;
  future_requirements?: AccountFutureRequirements;
  id: string;
  individual?: Person;
  metadata?: unknown /*map*/;
  object: "account";
  payouts_enabled?: boolean;
  requirements?: AccountRequirements;
  settings?: AccountSettings | null;
  tos_acceptance?: AccountTosAcceptance;
  type?: "custom" | "express" | "standard";
};
export type AccountCapabilityFutureRequirements = {
  alternatives: Array<AccountRequirementsAlternative> | null;
  current_deadline: number | null;
  currently_due: Array<string>;
  disabled_reason: string | null;
  errors: Array<AccountRequirementsError>;
  eventually_due: Array<string>;
  past_due: Array<string>;
  pending_verification: Array<string>;
};
export type AccountCapabilityRequirements = {
  alternatives: Array<AccountRequirementsAlternative> | null;
  current_deadline: number | null;
  currently_due: Array<string>;
  disabled_reason: string | null;
  errors: Array<AccountRequirementsError>;
  eventually_due: Array<string>;
  past_due: Array<string>;
  pending_verification: Array<string>;
};
export type AccountCapability = {
  account: Account | string;
  future_requirements?: AccountCapabilityFutureRequirements;
  id: string;
  object: "capability";
  requested: boolean;
  requested_at: number | null;
  requirements?: AccountCapabilityRequirements;
  status: "active" | "disabled" | "inactive" | "pending" | "unrequested";
};
export type Polymorphic = {};
export type LoginLink = { created: number; object: "login_link"; url: string };
export type LegalEntityDob = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type PersonFutureRequirements = {
  alternatives: Array<AccountRequirementsAlternative> | null;
  currently_due: Array<string>;
  errors: Array<AccountRequirementsError>;
  eventually_due: Array<string>;
  past_due: Array<string>;
  pending_verification: Array<string>;
};
export type PersonRelationship = {
  director: boolean | null;
  executive: boolean | null;
  owner: boolean | null;
  percent_ownership: number | null;
  representative: boolean | null;
  title: string | null;
};
export type PersonRequirements = {
  alternatives: Array<AccountRequirementsAlternative> | null;
  currently_due: Array<string>;
  errors: Array<AccountRequirementsError>;
  eventually_due: Array<string>;
  past_due: Array<string>;
  pending_verification: Array<string>;
};
export type LegalEntityPersonVerificationDocument = {
  back: File | string | null;
  details: string | null;
  details_code: string | null;
  front: File | string | null;
};
export type LegalEntityPersonVerification = {
  additional_document?: LegalEntityPersonVerificationDocument | null;
  details?: string | null;
  details_code?: string | null;
  document?: LegalEntityPersonVerificationDocument;
  status: string;
};
export type Person = {
  account?: string;
  address?: Address;
  address_kana?: LegalEntityJapanAddress | null;
  address_kanji?: LegalEntityJapanAddress | null;
  created: number;
  dob?: LegalEntityDob;
  email?: string | null;
  first_name?: string | null;
  first_name_kana?: string | null;
  first_name_kanji?: string | null;
  full_name_aliases?: Array<string>;
  future_requirements?: PersonFutureRequirements | null;
  gender?: string | null;
  id: string;
  id_number_provided?: boolean;
  id_number_secondary_provided?: boolean;
  last_name?: string | null;
  last_name_kana?: string | null;
  last_name_kanji?: string | null;
  maiden_name?: string | null;
  metadata?: unknown /*map*/;
  nationality?: string | null;
  object: "person";
  phone?: string | null;
  political_exposure?: "existing" | "none";
  registered_address?: Address;
  relationship?: PersonRelationship;
  requirements?: PersonRequirements | null;
  ssn_last_4_provided?: boolean;
  verification?: LegalEntityPersonVerification;
};
export type AccountLink = {
  created: number;
  expires_at: number;
  object: "account_link";
  url: string;
};
export type ApiErrors = {
  charge?: string;
  code?: string;
  decline_code?: string;
  doc_url?: string;
  message?: string;
  param?: string;
  payment_intent?: PaymentIntent;
  payment_method?: PaymentMethod;
  payment_method_type?: string;
  request_log_url?: string;
  setup_intent?: SetupIntent;
  source?: Account | BankAccount | Card | Source;
  type:
    | "api_error"
    | "card_error"
    | "idempotency_error"
    | "invalid_request_error";
};
export type ApplePayDomain = {
  created: number;
  domain_name: string;
  id: string;
  livemode: boolean;
  object: "apple_pay_domain";
};
export type Application = {
  id: string;
  name: string | null;
  object: "application";
};
export type PlatformFee = {
  account: Account | string;
  amount: number;
  amount_refunded: number;
  application: Application | string;
  balance_transaction: BalanceTransaction | string | null;
  charge: Charge | string;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  object: "application_fee";
  originating_transaction: Charge | string | null;
  refunded: boolean;
  refunds: List<FeeRefund>;
};
export type FeeRefund = {
  amount: number;
  balance_transaction: BalanceTransaction | string | null;
  created: number;
  currency: string;
  fee: ApplicationFee | string;
  id: string;
  metadata: unknown /*map*/ | null;
  object: "fee_refund";
};
export type SecretServiceResourceScope = {
  type: "account" | "user";
  user?: string;
};
export type AppsSecretServiceResourceSecret = {
  created: number;
  deleted?: boolean;
  expires_at: number | null;
  id: string;
  livemode: boolean;
  name: string;
  object: "apps.secret";
  payload: string | null;
  scope: SecretServiceResourceScope;
};
export type BalanceAmountBySourceType = {
  bank_account?: number;
  card?: number;
  fpx?: number;
};
export type BalanceAmount = {
  amount: number;
  currency: string;
  source_types?: BalanceAmountBySourceType;
};
export type BalanceDetail = { available: Array<BalanceAmount> };
export type Balance = {
  available: Array<BalanceAmount>;
  connect_reserved?: Array<BalanceAmount>;
  instant_available?: Array<BalanceAmount>;
  issuing?: BalanceDetail;
  livemode: boolean;
  object: "balance";
  pending: Array<BalanceAmount>;
};
export type Fee = {
  amount: number;
  application: string | null;
  currency: string;
  description: string | null;
  type: string;
};
export type BalanceTransaction = {
  amount: number;
  available_on: number;
  created: number;
  currency: string;
  description: string | null;
  exchange_rate: number | null;
  fee: number;
  fee_details: Array<Fee>;
  id: string;
  net: number;
  object: "balance_transaction";
  reporting_category: string;
  source:
    | ApplicationFee
    | Charge
    | ConnectCollectionTransfer
    | Dispute
    | FeeRefund
    | IssuingAuthorization
    | IssuingDispute
    | IssuingTransaction
    | Payout
    | PlatformTaxFee
    | Refund
    | ReserveTransaction
    | TaxDeductedAtSource
    | Topup
    | Transfer
    | TransferReversal
    | string
    | null;
  status: string;
  type:
    | "adjustment"
    | "advance"
    | "advance_funding"
    | "anticipation_repayment"
    | "application_fee"
    | "application_fee_refund"
    | "charge"
    | "connect_collection_transfer"
    | "contribution"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "issuing_dispute"
    | "issuing_transaction"
    | "payment"
    | "payment_failure_refund"
    | "payment_refund"
    | "payout"
    | "payout_cancel"
    | "payout_failure"
    | "refund"
    | "refund_failure"
    | "reserve_transaction"
    | "reserved_funds"
    | "stripe_fee"
    | "stripe_fx_fee"
    | "tax_fee"
    | "topup"
    | "topup_reversal"
    | "transfer"
    | "transfer_cancel"
    | "transfer_failure"
    | "transfer_refund";
};
export type ExternalAccountRequirements = {
  currently_due: Array<string> | null;
  errors: Array<AccountRequirementsError> | null;
  past_due: Array<string> | null;
  pending_verification: Array<string> | null;
};
export type BankAccount = {
  account?: Account | string | null;
  account_holder_name: string | null;
  account_holder_type: string | null;
  account_type: string | null;
  available_payout_methods?: Array<"instant" | "standard"> | null;
  bank_name: string | null;
  country: string;
  currency: string;
  customer?: Customer | string | null;
  default_for_currency?: boolean | null;
  fingerprint: string | null;
  future_requirements?: ExternalAccountRequirements | null;
  id: string;
  last4: string;
  metadata?: unknown /*map*/ | null;
  object: "bank_account";
  requirements?: ExternalAccountRequirements | null;
  routing_number: string | null;
  status: string;
};
export type PortalBusinessProfile = {
  headline: string | null;
  privacy_policy_url: string | null;
  terms_of_service_url: string | null;
};
export type PortalCustomerUpdate = {
  allowed_updates: Array<
    "address" | "email" | "name" | "phone" | "shipping" | "tax_id"
  >;
  enabled: boolean;
};
export type PortalInvoiceList = { enabled: boolean };
export type PortalPaymentMethodUpdate = { enabled: boolean };
export type PortalSubscriptionCancellationReason = {
  enabled: boolean;
  options: Array<
    | "customer_service"
    | "low_quality"
    | "missing_features"
    | "other"
    | "switched_service"
    | "too_complex"
    | "too_expensive"
    | "unused"
  >;
};
export type PortalSubscriptionCancel = {
  cancellation_reason: PortalSubscriptionCancellationReason;
  enabled: boolean;
  mode: "at_period_end" | "immediately";
  proration_behavior: "always_invoice" | "create_prorations" | "none";
};
export type PortalSubscriptionPause = { enabled: boolean };
export type PortalSubscriptionUpdateProduct = {
  prices: Array<string>;
  product: string;
};
export type PortalSubscriptionUpdate = {
  default_allowed_updates: Array<"price" | "promotion_code" | "quantity">;
  enabled: boolean;
  products: Array<PortalSubscriptionUpdateProduct> | null;
  proration_behavior: "always_invoice" | "create_prorations" | "none";
};
export type PortalFeatures = {
  customer_update: PortalCustomerUpdate;
  invoice_history: PortalInvoiceList;
  payment_method_update: PortalPaymentMethodUpdate;
  subscription_cancel: PortalSubscriptionCancel;
  subscription_pause: PortalSubscriptionPause;
  subscription_update: PortalSubscriptionUpdate;
};
export type PortalLoginPage = { enabled: boolean; url: string | null };
export type BillingPortalPortalConfiguration = {
  active: boolean;
  application: Application | string | null;
  business_profile: PortalBusinessProfile;
  created: number;
  default_return_url: string | null;
  features: PortalFeatures;
  id: string;
  is_default: boolean;
  livemode: boolean;
  login_page: PortalLoginPage;
  metadata: unknown /*map*/ | null;
  object: "billing_portal.configuration";
  updated: number;
};
export type PortalFlowsAfterCompletionHostedConfirmation = {
  custom_message: string | null;
};
export type PortalFlowsAfterCompletionRedirect = { return_url: string };
export type PortalFlowsFlowAfterCompletion = {
  hosted_confirmation: PortalFlowsAfterCompletionHostedConfirmation | null;
  redirect: PortalFlowsAfterCompletionRedirect | null;
  type: "hosted_confirmation" | "portal_homepage" | "redirect";
};
export type PortalFlowsFlowSubscriptionCancel = { subscription: string };
export type PortalFlowsFlow = {
  after_completion: PortalFlowsFlowAfterCompletion;
  subscription_cancel: PortalFlowsFlowSubscriptionCancel | null;
  type: "payment_method_update" | "subscription_cancel";
};
export type BillingPortalPortalSession = {
  configuration: BillingPortalConfiguration | string;
  created: number;
  customer: string;
  flow: PortalFlowsFlow | null;
  id: string;
  livemode: boolean;
  locale:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-IE"
    | "en-IN"
    | "en-NZ"
    | "en-SG"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW"
    | null;
  object: "billing_portal.session";
  on_behalf_of: string | null;
  return_url: string | null;
  url: string;
};
export type Card = {
  account?: Account | string | null;
  address_city: string | null;
  address_country: string | null;
  address_line1: string | null;
  address_line1_check: string | null;
  address_line2: string | null;
  address_state: string | null;
  address_zip: string | null;
  address_zip_check: string | null;
  available_payout_methods?: Array<"instant" | "standard"> | null;
  brand: string;
  country: string | null;
  currency?: string | null;
  customer?: Customer | string | null;
  cvc_check: string | null;
  default_for_currency?: boolean | null;
  description?: string;
  dynamic_last4: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string;
  id: string;
  iin?: string;
  issuer?: string;
  last4: string;
  metadata: unknown /*map*/ | null;
  name: string | null;
  object: "card";
  status?: string | null;
  tokenization_method: string | null;
};
export type AlternateStatementDescriptors = { kana?: string; kanji?: string };
export type BillingDetails = {
  address: Address | null;
  email: string | null;
  name: string | null;
  phone: string | null;
};
export type ChargeFraudDetails = {
  stripe_report?: string;
  user_report?: string;
};
export type Level3LineItems = {
  discount_amount: number | null;
  product_code: string;
  product_description: string;
  quantity: number | null;
  tax_amount: number | null;
  unit_cost: number | null;
};
export type Level3 = {
  customer_reference?: string;
  line_items: Array<Level3LineItems>;
  merchant_reference: string;
  shipping_address_zip?: string;
  shipping_amount?: number;
  shipping_from_zip?: string;
};
export type RadarRadarRule = { action: string; id: string; predicate: string };
export type ChargeOutcome = {
  network_status: string | null;
  reason: string | null;
  risk_level?: string;
  risk_score?: number;
  rule?: RadarRadarRule | string;
  seller_message: string | null;
  type: string;
};
export type PaymentMethodDetailsAchCreditTransfer = {
  account_number: string | null;
  bank_name: string | null;
  routing_number: string | null;
  swift_code: string | null;
};
export type PaymentMethodDetailsAchDebit = {
  account_holder_type: "company" | "individual" | null;
  bank_name: string | null;
  country: string | null;
  fingerprint: string | null;
  last4: string | null;
  routing_number: string | null;
};
export type PaymentMethodDetailsAcssDebit = {
  bank_name: string | null;
  fingerprint: string | null;
  institution_number: string | null;
  last4: string | null;
  mandate?: string;
  transit_number: string | null;
};
export type PaymentMethodDetailsAffirm = {};
export type PaymentMethodDetailsAfterpayClearpay = { reference: string | null };
export type PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
  buyer_id?: string;
  fingerprint: string | null;
  transaction_id: string | null;
};
export type PaymentMethodDetailsAuBecsDebit = {
  bsb_number: string | null;
  fingerprint: string | null;
  last4: string | null;
  mandate?: string;
};
export type PaymentMethodDetailsBacsDebit = {
  fingerprint: string | null;
  last4: string | null;
  mandate: string | null;
  sort_code: string | null;
};
export type PaymentMethodDetailsBancontact = {
  bank_code: string | null;
  bank_name: string | null;
  bic: string | null;
  generated_sepa_debit: PaymentMethod | string | null;
  generated_sepa_debit_mandate: Mandate | string | null;
  iban_last4: string | null;
  preferred_language: "de" | "en" | "fr" | "nl" | null;
  verified_name: string | null;
};
export type PaymentMethodDetailsBlik = {};
export type PaymentMethodDetailsBoleto = { tax_id: string };
export type PaymentMethodDetailsCardChecks = {
  address_line1_check: string | null;
  address_postal_code_check: string | null;
  cvc_check: string | null;
};
export type PaymentMethodDetailsCardInstallmentsPlan = {
  count: number | null;
  interval: "month" | null;
  type: "fixed_count";
};
export type PaymentMethodDetailsCardInstallments = {
  plan: PaymentMethodDetailsCardInstallmentsPlan | null;
};
export type ThreeDSecureDetails = {
  authentication_flow: "challenge" | "frictionless" | null;
  result:
    | "attempt_acknowledged"
    | "authenticated"
    | "exempted"
    | "failed"
    | "not_supported"
    | "processing_error"
    | null;
  result_reason:
    | "abandoned"
    | "bypassed"
    | "canceled"
    | "card_not_enrolled"
    | "network_not_supported"
    | "protocol_error"
    | "rejected"
    | null;
  version: "1.0.2" | "2.1.0" | "2.2.0" | null;
};
export type PaymentMethodDetailsCardWalletAmexExpressCheckout = {};
export type PaymentMethodDetailsCardWalletApplePay = {};
export type PaymentMethodDetailsCardWalletGooglePay = {};
export type PaymentMethodDetailsCardWalletMasterpass = {
  billing_address: Address | null;
  email: string | null;
  name: string | null;
  shipping_address: Address | null;
};
export type PaymentMethodDetailsCardWalletSamsungPay = {};
export type PaymentMethodDetailsCardWalletVisaCheckout = {
  billing_address: Address | null;
  email: string | null;
  name: string | null;
  shipping_address: Address | null;
};
export type PaymentMethodDetailsCardWallet = {
  amex_express_checkout?: PaymentMethodDetailsCardWalletAmexExpressCheckout;
  apple_pay?: PaymentMethodDetailsCardWalletApplePay;
  dynamic_last4: string | null;
  google_pay?: PaymentMethodDetailsCardWalletGooglePay;
  masterpass?: PaymentMethodDetailsCardWalletMasterpass;
  samsung_pay?: PaymentMethodDetailsCardWalletSamsungPay;
  type:
    | "amex_express_checkout"
    | "apple_pay"
    | "google_pay"
    | "masterpass"
    | "samsung_pay"
    | "visa_checkout";
  visa_checkout?: PaymentMethodDetailsCardWalletVisaCheckout;
};
export type PaymentMethodDetailsCard = {
  brand: string | null;
  checks: PaymentMethodDetailsCardChecks | null;
  country: string | null;
  description?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string | null;
  iin?: string | null;
  installments: PaymentMethodDetailsCardInstallments | null;
  issuer?: string | null;
  last4: string | null;
  mandate: string | null;
  moto?: boolean | null;
  network: string | null;
  three_d_secure: ThreeDSecureDetails | null;
  wallet: PaymentMethodDetailsCardWallet | null;
};
export type PaymentMethodDetailsCardPresentReceipt = {
  account_type?: "checking" | "credit" | "prepaid" | "unknown";
  application_cryptogram: string | null;
  application_preferred_name: string | null;
  authorization_code: string | null;
  authorization_response_code: string | null;
  cardholder_verification_method: string | null;
  dedicated_file_name: string | null;
  terminal_verification_results: string | null;
  transaction_status_information: string | null;
};
export type PaymentMethodDetailsCardPresent = {
  amount_authorized: number | null;
  brand: string | null;
  capture_before?: number;
  cardholder_name: string | null;
  country: string | null;
  description?: string | null;
  emv_auth_data: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint: string | null;
  funding: string | null;
  generated_card: string | null;
  iin?: string | null;
  incremental_authorization_supported: boolean;
  issuer?: string | null;
  last4: string | null;
  network: string | null;
  overcapture_supported: boolean;
  read_method:
    | "contact_emv"
    | "contactless_emv"
    | "contactless_magstripe_mode"
    | "magnetic_stripe_fallback"
    | "magnetic_stripe_track2"
    | null;
  receipt: PaymentMethodDetailsCardPresentReceipt | null;
};
export type PaymentMethodDetailsCashapp = {};
export type PaymentMethodDetailsCustomerBalance = {};
export type PaymentMethodDetailsEps = {
  bank:
    | "arzte_und_apotheker_bank"
    | "austrian_anadi_bank_ag"
    | "bank_austria"
    | "bankhaus_carl_spangler"
    | "bankhaus_schelhammer_und_schattera_ag"
    | "bawag_psk_ag"
    | "bks_bank_ag"
    | "brull_kallmus_bank_ag"
    | "btv_vier_lander_bank"
    | "capital_bank_grawe_gruppe_ag"
    | "deutsche_bank_ag"
    | "dolomitenbank"
    | "easybank_ag"
    | "erste_bank_und_sparkassen"
    | "hypo_alpeadriabank_international_ag"
    | "hypo_bank_burgenland_aktiengesellschaft"
    | "hypo_noe_lb_fur_niederosterreich_u_wien"
    | "hypo_oberosterreich_salzburg_steiermark"
    | "hypo_tirol_bank_ag"
    | "hypo_vorarlberg_bank_ag"
    | "marchfelder_bank"
    | "oberbank_ag"
    | "raiffeisen_bankengruppe_osterreich"
    | "schoellerbank_ag"
    | "sparda_bank_wien"
    | "volksbank_gruppe"
    | "volkskreditbank_ag"
    | "vr_bank_braunau"
    | null;
  verified_name: string | null;
};
export type PaymentMethodDetailsFpx = {
  account_holder_type: "company" | "individual" | null;
  bank:
    | "affin_bank"
    | "agrobank"
    | "alliance_bank"
    | "ambank"
    | "bank_islam"
    | "bank_muamalat"
    | "bank_of_china"
    | "bank_rakyat"
    | "bsn"
    | "cimb"
    | "deutsche_bank"
    | "hong_leong_bank"
    | "hsbc"
    | "kfh"
    | "maybank2e"
    | "maybank2u"
    | "ocbc"
    | "pb_enterprise"
    | "public_bank"
    | "rhb"
    | "standard_chartered"
    | "uob";
  transaction_id: string | null;
};
export type PaymentMethodDetailsGiropay = {
  bank_code: string | null;
  bank_name: string | null;
  bic: string | null;
  verified_name: string | null;
};
export type PaymentMethodDetailsGrabpay = { transaction_id: string | null };
export type PaymentMethodDetailsIdeal = {
  bank:
    | "abn_amro"
    | "asn_bank"
    | "bunq"
    | "handelsbanken"
    | "ing"
    | "knab"
    | "moneyou"
    | "rabobank"
    | "regiobank"
    | "revolut"
    | "sns_bank"
    | "triodos_bank"
    | "van_lanschot"
    | "yoursafe"
    | null;
  bic:
    | "ABNANL2A"
    | "ASNBNL21"
    | "BITSNL2A"
    | "BUNQNL2A"
    | "FVLBNL22"
    | "HANDNL2A"
    | "INGBNL2A"
    | "KNABNL2H"
    | "MOYONL21"
    | "RABONL2U"
    | "RBRBNL21"
    | "REVOLT21"
    | "SNSBNL2A"
    | "TRIONL2U"
    | null;
  generated_sepa_debit: PaymentMethod | string | null;
  generated_sepa_debit_mandate: Mandate | string | null;
  iban_last4: string | null;
  verified_name: string | null;
};
export type PaymentMethodDetailsInteracPresentReceipt = {
  account_type?: "checking" | "savings" | "unknown";
  application_cryptogram: string | null;
  application_preferred_name: string | null;
  authorization_code: string | null;
  authorization_response_code: string | null;
  cardholder_verification_method: string | null;
  dedicated_file_name: string | null;
  terminal_verification_results: string | null;
  transaction_status_information: string | null;
};
export type PaymentMethodDetailsInteracPresent = {
  brand: string | null;
  cardholder_name: string | null;
  country: string | null;
  description?: string | null;
  emv_auth_data: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint: string | null;
  funding: string | null;
  generated_card: string | null;
  iin?: string | null;
  issuer?: string | null;
  last4: string | null;
  network: string | null;
  preferred_locales: Array<string> | null;
  read_method:
    | "contact_emv"
    | "contactless_emv"
    | "contactless_magstripe_mode"
    | "magnetic_stripe_fallback"
    | "magnetic_stripe_track2"
    | null;
  receipt: PaymentMethodDetailsInteracPresentReceipt | null;
};
export type PaymentMethodDetailsKlarna = {
  payment_method_category: string | null;
  preferred_locale: string | null;
};
export type PaymentMethodDetailsKonbiniStore = {
  chain: "familymart" | "lawson" | "ministop" | "seicomart" | null;
};
export type PaymentMethodDetailsKonbini = {
  store: PaymentMethodDetailsKonbiniStore | null;
};
export type PaymentMethodDetailsLink = { country: string | null };
export type PaymentMethodDetailsMultibanco = {
  entity: string | null;
  reference: string | null;
};
export type PaymentMethodDetailsOxxo = { number: string | null };
export type PaymentMethodDetailsP24 = {
  bank:
    | "alior_bank"
    | "bank_millennium"
    | "bank_nowy_bfg_sa"
    | "bank_pekao_sa"
    | "banki_spbdzielcze"
    | "blik"
    | "bnp_paribas"
    | "boz"
    | "citi_handlowy"
    | "credit_agricole"
    | "envelobank"
    | "etransfer_pocztowy24"
    | "getin_bank"
    | "ideabank"
    | "ing"
    | "inteligo"
    | "mbank_mtransfer"
    | "nest_przelew"
    | "noble_pay"
    | "pbac_z_ipko"
    | "plus_bank"
    | "santander_przelew24"
    | "tmobile_usbugi_bankowe"
    | "toyota_bank"
    | "volkswagen_bank"
    | null;
  reference: string | null;
  verified_name: string | null;
};
export type PaymentMethodDetailsPaynow = { reference: string | null };
export type PaymentMethodDetailsPix = { bank_transaction_id?: string | null };
export type PaymentMethodDetailsPromptpay = { reference: string | null };
export type PaymentMethodDetailsSepaCreditTransfer = {
  bank_name: string | null;
  bic: string | null;
  iban: string | null;
};
export type PaymentMethodDetailsSepaDebit = {
  bank_code: string | null;
  branch_code: string | null;
  country: string | null;
  fingerprint: string | null;
  last4: string | null;
  mandate: string | null;
};
export type PaymentMethodDetailsSofort = {
  bank_code: string | null;
  bank_name: string | null;
  bic: string | null;
  country: string | null;
  generated_sepa_debit: PaymentMethod | string | null;
  generated_sepa_debit_mandate: Mandate | string | null;
  iban_last4: string | null;
  preferred_language: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl" | null;
  verified_name: string | null;
};
export type PaymentMethodDetailsStripeAccount = {};
export type PaymentMethodDetailsUsBankAccount = {
  account_holder_type: "company" | "individual" | null;
  account_type: "checking" | "savings" | null;
  bank_name: string | null;
  fingerprint: string | null;
  last4: string | null;
  routing_number: string | null;
};
export type PaymentMethodDetailsWechat = {};
export type PaymentMethodDetailsWechatPay = {
  fingerprint: string | null;
  transaction_id: string | null;
};
export type PaymentMethodDetails = {
  ach_credit_transfer?: PaymentMethodDetailsAchCreditTransfer;
  ach_debit?: PaymentMethodDetailsAchDebit;
  acss_debit?: PaymentMethodDetailsAcssDebit;
  affirm?: PaymentMethodDetailsAffirm;
  afterpay_clearpay?: PaymentMethodDetailsAfterpayClearpay;
  alipay?: PaymentFlowsPrivatePaymentMethodsAlipayDetails;
  au_becs_debit?: PaymentMethodDetailsAuBecsDebit;
  bacs_debit?: PaymentMethodDetailsBacsDebit;
  bancontact?: PaymentMethodDetailsBancontact;
  blik?: PaymentMethodDetailsBlik;
  boleto?: PaymentMethodDetailsBoleto;
  card?: PaymentMethodDetailsCard;
  card_present?: PaymentMethodDetailsCardPresent;
  cashapp?: PaymentMethodDetailsCashapp;
  customer_balance?: PaymentMethodDetailsCustomerBalance;
  eps?: PaymentMethodDetailsEps;
  fpx?: PaymentMethodDetailsFpx;
  giropay?: PaymentMethodDetailsGiropay;
  grabpay?: PaymentMethodDetailsGrabpay;
  ideal?: PaymentMethodDetailsIdeal;
  interac_present?: PaymentMethodDetailsInteracPresent;
  klarna?: PaymentMethodDetailsKlarna;
  konbini?: PaymentMethodDetailsKonbini;
  link?: PaymentMethodDetailsLink;
  multibanco?: PaymentMethodDetailsMultibanco;
  oxxo?: PaymentMethodDetailsOxxo;
  p24?: PaymentMethodDetailsP24;
  paynow?: PaymentMethodDetailsPaynow;
  pix?: PaymentMethodDetailsPix;
  promptpay?: PaymentMethodDetailsPromptpay;
  sepa_credit_transfer?: PaymentMethodDetailsSepaCreditTransfer;
  sepa_debit?: PaymentMethodDetailsSepaDebit;
  sofort?: PaymentMethodDetailsSofort;
  stripe_account?: PaymentMethodDetailsStripeAccount;
  type: string;
  us_bank_account?: PaymentMethodDetailsUsBankAccount;
  wechat?: PaymentMethodDetailsWechat;
  wechat_pay?: PaymentMethodDetailsWechatPay;
};
export type RadarRadarOptions = { session?: string };
export type Shipping = {
  address: Address;
  carrier?: string;
  name: string;
  phone?: string;
  tracking_number?: string;
};
export type ChargeTransferData = {
  amount: number | null;
  destination: Account | string;
};
export type Charge = {
  alternate_statement_descriptors?: AlternateStatementDescriptors;
  amount: number;
  amount_captured: number;
  amount_refunded: number;
  application: Application | string | null;
  application_fee: ApplicationFee | string | null;
  application_fee_amount: number | null;
  authorization_code?: string;
  balance_transaction: BalanceTransaction | string | null;
  billing_details: BillingDetails;
  calculated_statement_descriptor: string | null;
  captured: boolean;
  created: number;
  currency: string;
  customer: Customer | string | null;
  description: string | null;
  destination: Account | string | null;
  dispute: Dispute | string | null;
  disputed: boolean;
  failure_balance_transaction: BalanceTransaction | string | null;
  failure_code: string | null;
  failure_message: string | null;
  fraud_details: ChargeFraudDetails | null;
  id: string;
  invoice: Invoice | string | null;
  level3?: Level3;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "charge";
  on_behalf_of: Account | string | null;
  outcome: ChargeOutcome | null;
  paid: boolean;
  payment_intent: PaymentIntent | string | null;
  payment_method: string | null;
  payment_method_details: PaymentMethodDetails | null;
  radar_options?: RadarRadarOptions;
  receipt_email: string | null;
  receipt_number: string | null;
  receipt_url: string | null;
  refunded: boolean;
  refunds: List<Refund> | null;
  review: Review | string | null;
  shipping: Shipping | null;
  source: Account | BankAccount | Card | Source | null;
  source_transfer: Transfer | string | null;
  statement_descriptor: string | null;
  statement_descriptor_suffix: string | null;
  status: "failed" | "pending" | "succeeded";
  transfer?: Transfer | string;
  transfer_data: ChargeTransferData | null;
  transfer_group: string | null;
};
export type PaymentPagesCheckoutSessionAfterExpirationRecovery = {
  allow_promotion_codes: boolean;
  enabled: boolean;
  expires_at: number | null;
  url: string | null;
};
export type PaymentPagesCheckoutSessionAfterExpiration = {
  recovery: PaymentPagesCheckoutSessionAfterExpirationRecovery | null;
};
export type PaymentPagesCheckoutSessionAutomaticTax = {
  enabled: boolean;
  status: "complete" | "failed" | "requires_location_inputs" | null;
};
export type PaymentPagesCheckoutSessionConsent = {
  promotions: "opt_in" | "opt_out" | null;
  terms_of_service: "accepted" | null;
};
export type PaymentPagesCheckoutSessionConsentCollection = {
  promotions: "auto" | "none" | null;
  terms_of_service: "none" | "required" | null;
};
export type PaymentPagesCheckoutSessionCustomFieldsOption = {
  label: string;
  value: string;
};
export type PaymentPagesCheckoutSessionCustomFieldsDropdown = {
  options: Array<PaymentPagesCheckoutSessionCustomFieldsOption>;
  value: string | null;
};
export type PaymentPagesCheckoutSessionCustomFieldsLabel = {
  custom: string | null;
  type: "custom";
};
export type PaymentPagesCheckoutSessionCustomFieldsNumeric = {
  value: string | null;
};
export type PaymentPagesCheckoutSessionCustomFieldsText = {
  value: string | null;
};
export type PaymentPagesCheckoutSessionCustomFields = {
  dropdown: PaymentPagesCheckoutSessionCustomFieldsDropdown | null;
  key: string;
  label: PaymentPagesCheckoutSessionCustomFieldsLabel;
  numeric: PaymentPagesCheckoutSessionCustomFieldsNumeric | null;
  optional: boolean;
  text: PaymentPagesCheckoutSessionCustomFieldsText | null;
  type: "dropdown" | "numeric" | "text";
};
export type PaymentPagesCheckoutSessionCustomTextPosition = { message: string };
export type PaymentPagesCheckoutSessionCustomText = {
  shipping_address: PaymentPagesCheckoutSessionCustomTextPosition | null;
  submit: PaymentPagesCheckoutSessionCustomTextPosition | null;
};
export type PaymentPagesCheckoutSessionTaxId = {
  type:
    | "ae_trn"
    | "au_abn"
    | "au_arn"
    | "bg_uic"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "hk_br"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ph_tin"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "th_vat"
    | "tr_tin"
    | "tw_vat"
    | "ua_vat"
    | "unknown"
    | "us_ein"
    | "za_vat";
  value: string | null;
};
export type PaymentPagesCheckoutSessionCustomerDetails = {
  address: Address | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  tax_exempt: "exempt" | "none" | "reverse" | null;
  tax_ids: Array<PaymentPagesCheckoutSessionTaxId> | null;
};
export type InvoiceSettingCustomField = { name: string; value: string };
export type InvoiceSettingRenderingOptions = {
  amount_tax_display: string | null;
};
export type PaymentPagesCheckoutSessionInvoiceSettings = {
  account_tax_ids: Array<TaxId | string> | null;
  custom_fields: Array<InvoiceSettingCustomField> | null;
  description: string | null;
  footer: string | null;
  metadata: unknown /*map*/ | null;
  rendering_options: InvoiceSettingRenderingOptions | null;
};
export type PaymentPagesCheckoutSessionInvoiceCreation = {
  enabled: boolean;
  invoice_data: PaymentPagesCheckoutSessionInvoiceSettings;
};
export type CheckoutAcssDebitMandateOptions = {
  custom_mandate_url?: string;
  default_for?: Array<"invoice" | "subscription">;
  interval_description: string | null;
  payment_schedule: "combined" | "interval" | "sporadic" | null;
  transaction_type: "business" | "personal" | null;
};
export type CheckoutAcssDebitPaymentMethodOptions = {
  currency?: "cad" | "usd";
  mandate_options?: CheckoutAcssDebitMandateOptions;
  setup_future_usage?: "none" | "off_session" | "on_session";
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type CheckoutAffirmPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutAfterpayClearpayPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutAlipayPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutAuBecsDebitPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutBacsDebitPaymentMethodOptions = {
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type CheckoutBancontactPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutBoletoPaymentMethodOptions = {
  expires_after_days: number;
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type CheckoutCardInstallmentsOptions = { enabled?: boolean };
export type CheckoutCardPaymentMethodOptions = {
  installments?: CheckoutCardInstallmentsOptions;
  setup_future_usage?: "none" | "off_session" | "on_session";
  statement_descriptor_suffix_kana?: string;
  statement_descriptor_suffix_kanji?: string;
};
export type CheckoutCashappPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsCustomerBalanceEuBankAccount = {
  country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
};
export type CheckoutCustomerBalanceBankTransferPaymentMethodOptions = {
  eu_bank_transfer?: PaymentMethodOptionsCustomerBalanceEuBankAccount;
  requested_address_types?: Array<
    "iban" | "sepa" | "sort_code" | "spei" | "zengin"
  >;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer"
    | null;
};
export type CheckoutCustomerBalancePaymentMethodOptions = {
  bank_transfer?: CheckoutCustomerBalanceBankTransferPaymentMethodOptions;
  funding_type: "bank_transfer" | null;
  setup_future_usage?: "none";
};
export type CheckoutEpsPaymentMethodOptions = { setup_future_usage?: "none" };
export type CheckoutFpxPaymentMethodOptions = { setup_future_usage?: "none" };
export type CheckoutGiropayPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutGrabPayPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutIdealPaymentMethodOptions = { setup_future_usage?: "none" };
export type CheckoutKlarnaPaymentMethodOptions = {
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type CheckoutKonbiniPaymentMethodOptions = {
  expires_after_days: number | null;
  setup_future_usage?: "none";
};
export type CheckoutOxxoPaymentMethodOptions = {
  expires_after_days: number;
  setup_future_usage?: "none";
};
export type CheckoutP24PaymentMethodOptions = { setup_future_usage?: "none" };
export type CheckoutPaynowPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type CheckoutPixPaymentMethodOptions = {
  expires_after_seconds: number | null;
};
export type CheckoutSepaDebitPaymentMethodOptions = {
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type CheckoutSofortPaymentMethodOptions = {
  setup_future_usage?: "none";
};
export type LinkedAccountOptionsUsBankAccount = {
  permissions?: Array<
    "balances" | "ownership" | "payment_method" | "transactions"
  >;
  return_url?: string;
};
export type CheckoutUsBankAccountPaymentMethodOptions = {
  financial_connections?: LinkedAccountOptionsUsBankAccount;
  setup_future_usage?: "none" | "off_session" | "on_session";
  verification_method?: "automatic" | "instant";
};
export type CheckoutSessionPaymentMethodOptions = {
  acss_debit?: CheckoutAcssDebitPaymentMethodOptions;
  affirm?: CheckoutAffirmPaymentMethodOptions;
  afterpay_clearpay?: CheckoutAfterpayClearpayPaymentMethodOptions;
  alipay?: CheckoutAlipayPaymentMethodOptions;
  au_becs_debit?: CheckoutAuBecsDebitPaymentMethodOptions;
  bacs_debit?: CheckoutBacsDebitPaymentMethodOptions;
  bancontact?: CheckoutBancontactPaymentMethodOptions;
  boleto?: CheckoutBoletoPaymentMethodOptions;
  card?: CheckoutCardPaymentMethodOptions;
  cashapp?: CheckoutCashappPaymentMethodOptions;
  customer_balance?: CheckoutCustomerBalancePaymentMethodOptions;
  eps?: CheckoutEpsPaymentMethodOptions;
  fpx?: CheckoutFpxPaymentMethodOptions;
  giropay?: CheckoutGiropayPaymentMethodOptions;
  grabpay?: CheckoutGrabPayPaymentMethodOptions;
  ideal?: CheckoutIdealPaymentMethodOptions;
  klarna?: CheckoutKlarnaPaymentMethodOptions;
  konbini?: CheckoutKonbiniPaymentMethodOptions;
  oxxo?: CheckoutOxxoPaymentMethodOptions;
  p24?: CheckoutP24PaymentMethodOptions;
  paynow?: CheckoutPaynowPaymentMethodOptions;
  pix?: CheckoutPixPaymentMethodOptions;
  sepa_debit?: CheckoutSepaDebitPaymentMethodOptions;
  sofort?: CheckoutSofortPaymentMethodOptions;
  us_bank_account?: CheckoutUsBankAccountPaymentMethodOptions;
};
export type PaymentPagesCheckoutSessionPhoneNumberCollection = {
  enabled: boolean;
};
export type PaymentPagesCheckoutSessionShippingAddressCollection = {
  allowed_countries: Array<
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CV"
    | "CW"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | "ZZ"
  >;
};
export type LineItemsTaxAmount = { amount: number; rate: TaxRate };
export type PaymentPagesCheckoutSessionShippingCost = {
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  shipping_rate: ShippingRate | string | null;
  taxes?: Array<LineItemsTaxAmount>;
};
export type PaymentPagesCheckoutSessionShippingOption = {
  shipping_amount: number;
  shipping_rate: ShippingRate | string;
};
export type PaymentPagesCheckoutSessionTaxIdCollection = { enabled: boolean };
export type LineItemsDiscountAmount = { amount: number; discount: Discount };
export type PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown = {
  discounts: Array<LineItemsDiscountAmount>;
  taxes: Array<LineItemsTaxAmount>;
};
export type PaymentPagesCheckoutSessionTotalDetails = {
  amount_discount: number;
  amount_shipping: number | null;
  amount_tax: number;
  breakdown?: PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown;
};
export type CheckoutSession = {
  after_expiration: PaymentPagesCheckoutSessionAfterExpiration | null;
  allow_promotion_codes: boolean | null;
  amount_subtotal: number | null;
  amount_total: number | null;
  automatic_tax: PaymentPagesCheckoutSessionAutomaticTax;
  billing_address_collection: "auto" | "required" | null;
  cancel_url: string | null;
  client_reference_id: string | null;
  consent: PaymentPagesCheckoutSessionConsent | null;
  consent_collection: PaymentPagesCheckoutSessionConsentCollection | null;
  created: number;
  currency: string | null;
  custom_fields: Array<PaymentPagesCheckoutSessionCustomFields>;
  custom_text: PaymentPagesCheckoutSessionCustomText;
  customer: Customer | string | null;
  customer_creation: "always" | "if_required" | null;
  customer_details: PaymentPagesCheckoutSessionCustomerDetails | null;
  customer_email: string | null;
  expires_at: number;
  id: string;
  invoice: Invoice | string | null;
  invoice_creation: PaymentPagesCheckoutSessionInvoiceCreation | null;
  line_items?: List<LineItem>;
  livemode: boolean;
  locale:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-GB"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW"
    | null;
  metadata: unknown /*map*/ | null;
  mode: "payment" | "setup" | "subscription";
  object: "checkout.session";
  payment_intent: PaymentIntent | string | null;
  payment_link: PaymentLink | string | null;
  payment_method_collection: "always" | "if_required" | null;
  payment_method_options: CheckoutSessionPaymentMethodOptions | null;
  payment_method_types: Array<string>;
  payment_status: "no_payment_required" | "paid" | "unpaid";
  phone_number_collection?: PaymentPagesCheckoutSessionPhoneNumberCollection;
  recovered_from: string | null;
  setup_intent: SetupIntent | string | null;
  shipping_address_collection: PaymentPagesCheckoutSessionShippingAddressCollection | null;
  shipping_cost: PaymentPagesCheckoutSessionShippingCost | null;
  shipping_details: Shipping | null;
  shipping_options: Array<PaymentPagesCheckoutSessionShippingOption>;
  status: "complete" | "expired" | "open" | null;
  submit_type: "auto" | "book" | "donate" | "pay" | null;
  subscription: Subscription | string | null;
  success_url: string;
  tax_id_collection?: PaymentPagesCheckoutSessionTaxIdCollection;
  total_details: PaymentPagesCheckoutSessionTotalDetails | null;
  url: string | null;
};
export type ConnectCollectionTransfer = {
  amount: number;
  currency: string;
  destination: Account | string;
  id: string;
  livemode: boolean;
  object: "connect_collection_transfer";
};
export type CountrySpecVerificationFieldDetails = {
  additional: Array<string>;
  minimum: Array<string>;
};
export type CountrySpecVerificationFields = {
  company: CountrySpecVerificationFieldDetails;
  individual: CountrySpecVerificationFieldDetails;
};
export type CountrySpec = {
  default_currency: string;
  id: string;
  object: "country_spec";
  supported_bank_account_currencies: unknown /*map*/;
  supported_payment_currencies: Array<string>;
  supported_payment_methods: Array<string>;
  supported_transfer_countries: Array<string>;
  verification_fields: CountrySpecVerificationFields;
};
export type CouponAppliesTo = { products: Array<string> };
export type Coupon = {
  amount_off: number | null;
  applies_to?: CouponAppliesTo;
  created: number;
  currency: string | null;
  currency_options?: unknown /*map*/;
  duration: "forever" | "once" | "repeating";
  duration_in_months: number | null;
  id: string;
  livemode: boolean;
  max_redemptions: number | null;
  metadata: unknown /*map*/ | null;
  name: string | null;
  object: "coupon";
  percent_off: number | null;
  redeem_by: number | null;
  times_redeemed: number;
  valid: boolean;
};
export type DiscountsResourceDiscountAmount = {
  amount: number;
  discount: Discount | string;
};
export type InvoicesShippingCost = {
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  shipping_rate: ShippingRate | string | null;
  taxes?: Array<LineItemsTaxAmount>;
};
export type CreditNoteTaxAmount = {
  amount: number;
  inclusive: boolean;
  tax_rate: TaxRate | string;
};
export type CreditNote = {
  amount: number;
  amount_shipping: number;
  created: number;
  currency: string;
  customer: Customer | string;
  customer_balance_transaction: CustomerBalanceTransaction | string | null;
  discount_amount: number;
  discount_amounts: Array<DiscountsResourceDiscountAmount>;
  id: string;
  invoice: Invoice | string;
  lines: List<CreditNoteLineItem>;
  livemode: boolean;
  memo: string | null;
  metadata: unknown /*map*/ | null;
  number: string;
  object: "credit_note";
  out_of_band_amount: number | null;
  pdf: string;
  reason:
    | "duplicate"
    | "fraudulent"
    | "order_change"
    | "product_unsatisfactory"
    | null;
  refund: Refund | string | null;
  shipping_cost: InvoicesShippingCost | null;
  status: "issued" | "void";
  subtotal: number;
  subtotal_excluding_tax: number | null;
  tax_amounts: Array<CreditNoteTaxAmount>;
  total: number;
  total_excluding_tax: number | null;
  type: "post_payment" | "pre_payment";
  voided_at: number | null;
};
export type CreditNoteLineItem = {
  amount: number;
  amount_excluding_tax: number | null;
  description: string | null;
  discount_amount: number;
  discount_amounts: Array<DiscountsResourceDiscountAmount>;
  id: string;
  invoice_line_item?: string;
  livemode: boolean;
  object: "credit_note_line_item";
  quantity: number | null;
  tax_amounts: Array<CreditNoteTaxAmount>;
  tax_rates: Array<TaxRate>;
  type: "custom_line_item" | "invoice_line_item";
  unit_amount: number | null;
  unit_amount_decimal: unknown /*primitive*/ | null;
  unit_amount_excluding_tax: unknown /*primitive*/ | null;
};
export type InvoiceSettingCustomerSetting = {
  custom_fields: Array<InvoiceSettingCustomField> | null;
  default_payment_method: PaymentMethod | string | null;
  footer: string | null;
  rendering_options: InvoiceSettingRenderingOptions | null;
};
export type CustomerTaxLocation = {
  country: string;
  source:
    | "billing_address"
    | "ip_address"
    | "payment_method"
    | "shipping_destination";
  state: string | null;
};
export type CustomerTax = {
  automatic_tax:
    | "failed"
    | "not_collecting"
    | "supported"
    | "unrecognized_location";
  ip_address: string | null;
  location: CustomerTaxLocation | null;
};
export type Customer = {
  address?: Address | null;
  balance?: number;
  cash_balance?: CashBalance | null;
  created: number;
  currency?: string | null;
  default_source: Account | BankAccount | Card | Source | string | null;
  delinquent?: boolean | null;
  description: string | null;
  discount?: Discount | null;
  email: string | null;
  id: string;
  invoice_credit_balance?: unknown /*map*/;
  invoice_prefix?: string | null;
  invoice_settings?: InvoiceSettingCustomerSetting;
  livemode: boolean;
  metadata?: unknown /*map*/;
  name?: string | null;
  next_invoice_sequence?: number;
  object: "customer";
  phone?: string | null;
  preferred_locales?: Array<string> | null;
  shipping: Shipping | null;
  sources?: List<Account | BankAccount | Card | Source>;
  subscriptions?: List<Subscription>;
  tax?: CustomerTax;
  tax_exempt?: "exempt" | "none" | "reverse" | null;
  tax_ids?: List<TaxId>;
  test_clock?: TestHelpersTestClock | string | null;
};
export type CustomerBalanceCustomerBalanceSettings = {
  reconciliation_mode: "automatic" | "manual";
  using_merchant_default: boolean;
};
export type CashBalance = {
  available: unknown /*map*/ | null;
  customer: string;
  livemode: boolean;
  object: "cash_balance";
  settings: CustomerBalanceCustomerBalanceSettings;
};
export type CustomerBalanceTransaction = {
  amount: number;
  created: number;
  credit_note: CreditNote | string | null;
  currency: string;
  customer: Customer | string;
  description: string | null;
  ending_balance: number;
  id: string;
  invoice: Invoice | string | null;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  object: "customer_balance_transaction";
  type:
    | "adjustment"
    | "applied_to_invoice"
    | "credit_note"
    | "initial"
    | "invoice_overpaid"
    | "invoice_too_large"
    | "invoice_too_small"
    | "migration"
    | "unapplied_from_invoice"
    | "unspent_receiver_credit";
};
export type CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction =
  {
    payment_intent: PaymentIntent | string;
  };
export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer =
  {
    bic: string | null;
    iban_last4: string | null;
    sender_name: string | null;
  };
export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer =
  {
    eu_bank_transfer?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer;
    reference: string | null;
    type:
      | "eu_bank_transfer"
      | "gb_bank_transfer"
      | "jp_bank_transfer"
      | "mx_bank_transfer";
  };
export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction =
  {
    bank_transfer: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer;
  };
export type CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction =
  {
    refund: Refund | string;
  };
export type CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction =
  {
    payment_intent: PaymentIntent | string;
  };
export type CustomerCashBalanceTransaction = {
  applied_to_payment?: CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction;
  created: number;
  currency: string;
  customer: Customer | string;
  ending_balance: number;
  funded?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction;
  id: string;
  livemode: boolean;
  net_amount: number;
  object: "customer_cash_balance_transaction";
  refunded_from_payment?: CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction;
  type:
    | "applied_to_payment"
    | "funded"
    | "funding_reversed"
    | "refunded_from_payment"
    | "return_canceled"
    | "return_initiated"
    | "unapplied_from_payment";
  unapplied_from_payment?: CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction;
};
export type TaxIdVerification = {
  status: "pending" | "unavailable" | "unverified" | "verified";
  verified_address: string | null;
  verified_name: string | null;
};
export type TaxId = {
  country: string | null;
  created: number;
  customer: Customer | string | null;
  id: string;
  livemode: boolean;
  object: "tax_id";
  type:
    | "ae_trn"
    | "au_abn"
    | "au_arn"
    | "bg_uic"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "hk_br"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ph_tin"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "th_vat"
    | "tr_tin"
    | "tw_vat"
    | "ua_vat"
    | "unknown"
    | "us_ein"
    | "za_vat";
  value: string;
  verification: TaxIdVerification | null;
};
export type Discount = {
  checkout_session: string | null;
  coupon: Coupon;
  customer: Customer | string | null;
  end: number | null;
  id: string;
  invoice: string | null;
  invoice_item: string | null;
  object: "discount";
  promotion_code: PromotionCode | string | null;
  start: number;
  subscription: string | null;
};
export type DisputeEvidence = {
  access_activity_log: string | null;
  billing_address: string | null;
  cancellation_policy: File | string | null;
  cancellation_policy_disclosure: string | null;
  cancellation_rebuttal: string | null;
  customer_communication: File | string | null;
  customer_email_address: string | null;
  customer_name: string | null;
  customer_purchase_ip: string | null;
  customer_signature: File | string | null;
  duplicate_charge_documentation: File | string | null;
  duplicate_charge_explanation: string | null;
  duplicate_charge_id: string | null;
  product_description: string | null;
  receipt: File | string | null;
  refund_policy: File | string | null;
  refund_policy_disclosure: string | null;
  refund_refusal_explanation: string | null;
  service_date: string | null;
  service_documentation: File | string | null;
  shipping_address: string | null;
  shipping_carrier: string | null;
  shipping_date: string | null;
  shipping_documentation: File | string | null;
  shipping_tracking_number: string | null;
  uncategorized_file: File | string | null;
  uncategorized_text: string | null;
};
export type DisputeEvidenceDetails = {
  due_by: number | null;
  has_evidence: boolean;
  past_due: boolean;
  submission_count: number;
};
export type Dispute = {
  amount: number;
  balance_transactions: Array<BalanceTransaction>;
  charge: Charge | string;
  created: number;
  currency: string;
  evidence: DisputeEvidence;
  evidence_details: DisputeEvidenceDetails;
  id: string;
  is_charge_refundable: boolean;
  livemode: boolean;
  metadata: unknown /*map*/;
  network_reason_code?: string | null;
  object: "dispute";
  payment_intent: PaymentIntent | string | null;
  reason: string;
  status:
    | "charge_refunded"
    | "lost"
    | "needs_response"
    | "under_review"
    | "warning_closed"
    | "warning_needs_response"
    | "warning_under_review"
    | "won";
};
export type EphemeralKey = {
  created: number;
  expires: number;
  id: string;
  livemode: boolean;
  object: "ephemeral_key";
  secret?: string;
};
export type NotificationEventData = {
  object: unknown /*map*/;
  previous_attributes?: unknown /*map*/;
};
export type NotificationEventRequest = {
  id: string | null;
  idempotency_key: string | null;
};
export type NotificationEvent = {
  account?: string;
  api_version: string | null;
  created: number;
  data: NotificationEventData;
  id: string;
  livemode: boolean;
  object: "event";
  pending_webhooks: number;
  request: NotificationEventRequest | null;
  type: string;
};
export type ExchangeRate = {
  id: string;
  object: "exchange_rate";
  rates: unknown /*map*/;
};
export type File = {
  created: number;
  expires_at: number | null;
  filename: string | null;
  id: string;
  links?: List<FileLink> | null;
  object: "file";
  purpose:
    | "account_requirement"
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "document_provider_identity_document"
    | "finance_report_run"
    | "identity_document"
    | "identity_document_downloadable"
    | "pci_document"
    | "selfie"
    | "sigma_scheduled_query"
    | "tax_document_user_upload"
    | "terminal_reader_splashscreen";
  size: number;
  title: string | null;
  type: string | null;
  url: string | null;
};
export type FileLink = {
  created: number;
  expired: boolean;
  expires_at: number | null;
  file: File | string;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "file_link";
  url: string | null;
};
export type BankConnectionsResourceAccountholder = {
  account?: Account | string;
  customer?: Customer | string;
  type: "account" | "customer";
};
export type BankConnectionsResourceBalanceApiResourceCashBalance = {
  available: unknown /*map*/ | null;
};
export type BankConnectionsResourceBalanceApiResourceCreditBalance = {
  used: unknown /*map*/ | null;
};
export type BankConnectionsResourceBalance = {
  as_of: number;
  cash?: BankConnectionsResourceBalanceApiResourceCashBalance;
  credit?: BankConnectionsResourceBalanceApiResourceCreditBalance;
  current: unknown /*map*/;
  type: "cash" | "credit";
};
export type BankConnectionsResourceBalanceRefresh = {
  last_attempted_at: number;
  status: "failed" | "pending" | "succeeded";
};
export type BankConnectionsResourceOwnershipRefresh = {
  last_attempted_at: number;
  status: "failed" | "pending" | "succeeded";
};
export type FinancialConnectionsBankConnectionsResourceLinkedAccount = {
  account_holder: BankConnectionsResourceAccountholder | null;
  balance: BankConnectionsResourceBalance | null;
  balance_refresh: BankConnectionsResourceBalanceRefresh | null;
  category: "cash" | "credit" | "investment" | "other";
  created: number;
  display_name: string | null;
  id: string;
  institution_name: string;
  last4: string | null;
  livemode: boolean;
  object: "financial_connections.account";
  ownership: FinancialConnectionsAccountOwnership | string | null;
  ownership_refresh: BankConnectionsResourceOwnershipRefresh | null;
  permissions: Array<
    "balances" | "ownership" | "payment_method" | "transactions"
  > | null;
  status: "active" | "disconnected" | "inactive";
  subcategory:
    | "checking"
    | "credit_card"
    | "line_of_credit"
    | "mortgage"
    | "other"
    | "savings";
  supported_payment_method_types: Array<"link" | "us_bank_account">;
};
export type FinancialConnectionsBankConnectionsResourceOwner = {
  email: string | null;
  id: string;
  name: string;
  object: "financial_connections.account_owner";
  ownership: string;
  phone: string | null;
  raw_address: string | null;
  refreshed_at: number | null;
};
export type FinancialConnectionsBankConnectionsResourceOwnership = {
  created: number;
  id: string;
  object: "financial_connections.account_ownership";
  owners: List<FinancialConnectionsAccountOwner>;
};
export type BankConnectionsResourceLinkAccountSessionFilters = {
  countries: Array<string> | null;
};
export type FinancialConnectionsBankConnectionsResourceLinkAccountSession = {
  account_holder: BankConnectionsResourceAccountholder | null;
  accounts: List<FinancialConnectionsAccount>;
  client_secret: string;
  filters?: BankConnectionsResourceLinkAccountSessionFilters;
  id: string;
  livemode: boolean;
  object: "financial_connections.session";
  permissions: Array<
    "balances" | "ownership" | "payment_method" | "transactions"
  >;
  return_url?: string;
};
export type FundingInstructionsBankTransferIbanRecord = {
  account_holder_name: string;
  bic: string;
  country: string;
  iban: string;
};
export type FundingInstructionsBankTransferSortCodeRecord = {
  account_holder_name: string;
  account_number: string;
  sort_code: string;
};
export type FundingInstructionsBankTransferSpeiRecord = {
  bank_code: string;
  bank_name: string;
  clabe: string;
};
export type FundingInstructionsBankTransferZenginRecord = {
  account_holder_name: string | null;
  account_number: string | null;
  account_type: string | null;
  bank_code: string | null;
  bank_name: string | null;
  branch_code: string | null;
  branch_name: string | null;
};
export type FundingInstructionsBankTransferFinancialAddress = {
  iban?: FundingInstructionsBankTransferIbanRecord;
  sort_code?: FundingInstructionsBankTransferSortCodeRecord;
  spei?: FundingInstructionsBankTransferSpeiRecord;
  supported_networks?: Array<"bacs" | "fps" | "sepa" | "spei" | "zengin">;
  type: "iban" | "sort_code" | "spei" | "zengin";
  zengin?: FundingInstructionsBankTransferZenginRecord;
};
export type FundingInstructionsBankTransfer = {
  country: string;
  financial_addresses: Array<FundingInstructionsBankTransferFinancialAddress>;
  type: "eu_bank_transfer" | "jp_bank_transfer";
};
export type CustomerBalanceFundingInstructionsCustomerBalanceFundingInstructions =
  {
    bank_transfer: FundingInstructionsBankTransfer;
    currency: string;
    funding_type: "bank_transfer";
    livemode: boolean;
    object: "funding_instructions";
  };
export type GelatoDataDocumentReportDateOfBirth = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type GelatoDocumentReportError = {
  code:
    | "document_expired"
    | "document_type_not_supported"
    | "document_unverified_other"
    | null;
  reason: string | null;
};
export type GelatoDataDocumentReportExpirationDate = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type GelatoDataDocumentReportIssuedDate = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type GelatoDocumentReport = {
  address: Address | null;
  dob: GelatoDataDocumentReportDateOfBirth | null;
  error: GelatoDocumentReportError | null;
  expiration_date: GelatoDataDocumentReportExpirationDate | null;
  files: Array<string> | null;
  first_name: string | null;
  issued_date: GelatoDataDocumentReportIssuedDate | null;
  issuing_country: string | null;
  last_name: string | null;
  number: string | null;
  status: "unverified" | "verified";
  type: "driving_license" | "id_card" | "passport" | null;
};
export type GelatoDataIdNumberReportDate = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type GelatoIdNumberReportError = {
  code:
    | "id_number_insufficient_document_data"
    | "id_number_mismatch"
    | "id_number_unverified_other"
    | null;
  reason: string | null;
};
export type GelatoIdNumberReport = {
  dob: GelatoDataIdNumberReportDate | null;
  error: GelatoIdNumberReportError | null;
  first_name: string | null;
  id_number: string | null;
  id_number_type: "br_cpf" | "sg_nric" | "us_ssn" | null;
  last_name: string | null;
  status: "unverified" | "verified";
};
export type GelatoReportDocumentOptions = {
  allowed_types?: Array<"driving_license" | "id_card" | "passport">;
  require_id_number?: boolean;
  require_live_capture?: boolean;
  require_matching_selfie?: boolean;
};
export type GelatoReportIdNumberOptions = {};
export type GelatoVerificationReportOptions = {
  document?: GelatoReportDocumentOptions;
  id_number?: GelatoReportIdNumberOptions;
};
export type GelatoSelfieReportError = {
  code:
    | "selfie_document_missing_photo"
    | "selfie_face_mismatch"
    | "selfie_manipulated"
    | "selfie_unverified_other"
    | null;
  reason: string | null;
};
export type GelatoSelfieReport = {
  document: string | null;
  error: GelatoSelfieReportError | null;
  selfie: string | null;
  status: "unverified" | "verified";
};
export type IdentityGelatoVerificationReport = {
  created: number;
  document?: GelatoDocumentReport;
  id: string;
  id_number?: GelatoIdNumberReport;
  livemode: boolean;
  object: "identity.verification_report";
  options: GelatoVerificationReportOptions;
  selfie?: GelatoSelfieReport;
  type: "document" | "id_number";
  verification_session: string | null;
};
export type GelatoSessionLastError = {
  code:
    | "abandoned"
    | "consent_declined"
    | "country_not_supported"
    | "device_not_supported"
    | "document_expired"
    | "document_type_not_supported"
    | "document_unverified_other"
    | "id_number_insufficient_document_data"
    | "id_number_mismatch"
    | "id_number_unverified_other"
    | "selfie_document_missing_photo"
    | "selfie_face_mismatch"
    | "selfie_manipulated"
    | "selfie_unverified_other"
    | "under_supported_age"
    | null;
  reason: string | null;
};
export type GelatoSessionDocumentOptions = {
  allowed_types?: Array<"driving_license" | "id_card" | "passport">;
  require_id_number?: boolean;
  require_live_capture?: boolean;
  require_matching_selfie?: boolean;
};
export type GelatoSessionIdNumberOptions = {};
export type GelatoVerificationSessionOptions = {
  document?: GelatoSessionDocumentOptions;
  id_number?: GelatoSessionIdNumberOptions;
};
export type VerificationSessionRedaction = {
  status: "processing" | "redacted";
};
export type GelatoDataVerifiedOutputsDate = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type GelatoVerifiedOutputs = {
  address: Address | null;
  dob: GelatoDataVerifiedOutputsDate | null;
  first_name: string | null;
  id_number: string | null;
  id_number_type: "br_cpf" | "sg_nric" | "us_ssn" | null;
  last_name: string | null;
};
export type IdentityGelatoVerificationSession = {
  client_secret: string | null;
  created: number;
  id: string;
  last_error: GelatoSessionLastError | null;
  last_verification_report: IdentityVerificationReport | string | null;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "identity.verification_session";
  options: GelatoVerificationSessionOptions;
  redaction: VerificationSessionRedaction | null;
  status: "canceled" | "processing" | "requires_input" | "verified";
  type: "document" | "id_number";
  url: string | null;
  verified_outputs: GelatoVerifiedOutputs | null;
};
export type AutomaticTax = {
  enabled: boolean;
  status: "complete" | "failed" | "requires_location_inputs" | null;
};
export type InvoicesResourceInvoiceTaxId = {
  type:
    | "ae_trn"
    | "au_abn"
    | "au_arn"
    | "bg_uic"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "hk_br"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ph_tin"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "th_vat"
    | "tr_tin"
    | "tw_vat"
    | "ua_vat"
    | "unknown"
    | "us_ein"
    | "za_vat";
  value: string | null;
};
export type InvoicesFromInvoice = { action: string; invoice: Invoice | string };
export type InvoicePaymentMethodOptionsAcssDebitMandateOptions = {
  transaction_type: "business" | "personal" | null;
};
export type InvoicePaymentMethodOptionsAcssDebit = {
  mandate_options?: InvoicePaymentMethodOptionsAcssDebitMandateOptions;
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type InvoicePaymentMethodOptionsBancontact = {
  preferred_language: "de" | "en" | "fr" | "nl";
};
export type InvoiceInstallmentsCard = { enabled: boolean | null };
export type InvoicePaymentMethodOptionsCard = {
  installments?: InvoiceInstallmentsCard;
  request_three_d_secure: "any" | "automatic" | null;
};
export type InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer =
  {
    country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
  };
export type InvoicePaymentMethodOptionsCustomerBalanceBankTransfer = {
  eu_bank_transfer?: InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer;
  type: string | null;
};
export type InvoicePaymentMethodOptionsCustomerBalance = {
  bank_transfer?: InvoicePaymentMethodOptionsCustomerBalanceBankTransfer;
  funding_type: "bank_transfer" | null;
};
export type InvoicePaymentMethodOptionsKonbini = {};
export type InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions = {
  permissions?: Array<"balances" | "payment_method" | "transactions">;
};
export type InvoicePaymentMethodOptionsUsBankAccount = {
  financial_connections?: InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions;
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type InvoicesPaymentMethodOptions = {
  acss_debit: InvoicePaymentMethodOptionsAcssDebit | null;
  bancontact: InvoicePaymentMethodOptionsBancontact | null;
  card: InvoicePaymentMethodOptionsCard | null;
  customer_balance: InvoicePaymentMethodOptionsCustomerBalance | null;
  konbini: InvoicePaymentMethodOptionsKonbini | null;
  us_bank_account: InvoicePaymentMethodOptionsUsBankAccount | null;
};
export type InvoicesPaymentSettings = {
  default_mandate: string | null;
  payment_method_options: InvoicesPaymentMethodOptions | null;
  payment_method_types: Array<
    | "ach_credit_transfer"
    | "ach_debit"
    | "acss_debit"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "boleto"
    | "card"
    | "cashapp"
    | "customer_balance"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "konbini"
    | "link"
    | "paynow"
    | "promptpay"
    | "sepa_credit_transfer"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay"
  > | null;
};
export type InvoicesStatusTransitions = {
  finalized_at: number | null;
  marked_uncollectible_at: number | null;
  paid_at: number | null;
  voided_at: number | null;
};
export type InvoiceItemThresholdReason = {
  line_item_ids: Array<string>;
  usage_gte: number;
};
export type InvoiceThresholdReason = {
  amount_gte: number | null;
  item_reasons: Array<InvoiceItemThresholdReason>;
};
export type InvoiceTaxAmount = {
  amount: number;
  inclusive: boolean;
  tax_rate: TaxRate | string;
};
export type InvoiceTransferData = {
  amount: number | null;
  destination: Account | string;
};
export type Invoice = {
  account_country: string | null;
  account_name: string | null;
  account_tax_ids: Array<TaxId | string> | null;
  amount_due: number;
  amount_paid: number;
  amount_remaining: number;
  amount_shipping: number;
  application: Application | string | null;
  application_fee_amount: number | null;
  attempt_count: number;
  attempted: boolean;
  auto_advance?: boolean;
  automatic_tax: AutomaticTax;
  billing_reason:
    | "automatic_pending_invoice_item_invoice"
    | "manual"
    | "quote_accept"
    | "subscription"
    | "subscription_create"
    | "subscription_cycle"
    | "subscription_threshold"
    | "subscription_update"
    | "upcoming"
    | null;
  charge: Charge | string | null;
  collection_method: "charge_automatically" | "send_invoice";
  created: number;
  currency: string;
  custom_fields: Array<InvoiceSettingCustomField> | null;
  customer: Customer | string | null;
  customer_address: Address | null;
  customer_email: string | null;
  customer_name: string | null;
  customer_phone: string | null;
  customer_shipping: Shipping | null;
  customer_tax_exempt: "exempt" | "none" | "reverse" | null;
  customer_tax_ids?: Array<InvoicesResourceInvoiceTaxId> | null;
  default_payment_method: PaymentMethod | string | null;
  default_source: Account | BankAccount | Card | Source | string | null;
  default_tax_rates: Array<TaxRate>;
  description: string | null;
  discount: Discount | null;
  discounts: Array<Discount | string> | null;
  due_date: number | null;
  ending_balance: number | null;
  footer: string | null;
  from_invoice: InvoicesFromInvoice | null;
  hosted_invoice_url?: string | null;
  id?: string;
  invoice_pdf?: string | null;
  last_finalization_error: ApiErrors | null;
  latest_revision: Invoice | string | null;
  lines: List<InvoiceLineItem>;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  next_payment_attempt: number | null;
  number: string | null;
  object: "invoice";
  on_behalf_of: Account | string | null;
  paid: boolean;
  paid_out_of_band: boolean;
  payment_intent: PaymentIntent | string | null;
  payment_settings: InvoicesPaymentSettings;
  period_end: number;
  period_start: number;
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  quote: Quote | string | null;
  receipt_number: string | null;
  rendering_options: InvoiceSettingRenderingOptions | null;
  shipping_cost: InvoicesShippingCost | null;
  shipping_details: Shipping | null;
  starting_balance: number;
  statement_descriptor: string | null;
  status:
    | "deleted"
    | "draft"
    | "open"
    | "paid"
    | "uncollectible"
    | "void"
    | null;
  status_transitions: InvoicesStatusTransitions;
  subscription: Subscription | string | null;
  subscription_proration_date?: number;
  subtotal: number;
  subtotal_excluding_tax: number | null;
  tax: number | null;
  test_clock: TestHelpersTestClock | string | null;
  threshold_reason?: InvoiceThresholdReason;
  total: number;
  total_discount_amounts: Array<DiscountsResourceDiscountAmount> | null;
  total_excluding_tax: number | null;
  total_tax_amounts: Array<InvoiceTaxAmount>;
  transfer_data: InvoiceTransferData | null;
  webhooks_delivered_at: number | null;
};
export type InvoiceLineItemPeriod = { end: number; start: number };
export type InvoicesLineItemsCreditedItems = {
  invoice: string;
  invoice_line_items: Array<string>;
};
export type InvoicesLineItemsProrationDetails = {
  credited_items: InvoicesLineItemsCreditedItems | null;
};
export type InvoiceLineItem = {
  amount: number;
  amount_excluding_tax: number | null;
  currency: string;
  description: string | null;
  discount_amounts: Array<DiscountsResourceDiscountAmount> | null;
  discountable: boolean;
  discounts: Array<Discount | string> | null;
  id: string;
  invoice_item?: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "line_item";
  period: InvoiceLineItemPeriod;
  plan: Plan | null;
  price: Price | null;
  proration: boolean;
  proration_details: InvoicesLineItemsProrationDetails | null;
  quantity: number | null;
  subscription: string | null;
  subscription_item?: string;
  tax_amounts?: Array<InvoiceTaxAmount>;
  tax_rates?: Array<TaxRate>;
  type: "invoiceitem" | "subscription";
  unit_amount_excluding_tax: unknown /*primitive*/ | null;
};
export type InvoiceItem = {
  amount: number;
  currency: string;
  customer: Customer | string;
  date: number;
  description: string | null;
  discountable: boolean;
  discounts: Array<Discount | string> | null;
  id: string;
  invoice: Invoice | string | null;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  object: "invoiceitem";
  period: InvoiceLineItemPeriod;
  plan: Plan | null;
  price: Price | null;
  proration: boolean;
  quantity: number;
  subscription: Subscription | string | null;
  subscription_item?: string;
  tax_rates: Array<TaxRate> | null;
  test_clock: TestHelpersTestClock | string | null;
  unit_amount: number | null;
  unit_amount_decimal: unknown /*primitive*/ | null;
};
export type IssuingAuthorizationAmountDetails = { atm_fee: number | null };
export type IssuingAuthorizationMerchantData = {
  category: string;
  category_code: string;
  city: string | null;
  country: string | null;
  name: string | null;
  network_id: string;
  postal_code: string | null;
  state: string | null;
};
export type IssuingAuthorizationNetworkData = {
  acquiring_institution_id: string | null;
};
export type IssuingAuthorizationPendingRequest = {
  amount: number;
  amount_details: IssuingAuthorizationAmountDetails | null;
  currency: string;
  is_amount_controllable: boolean;
  merchant_amount: number;
  merchant_currency: string;
};
export type IssuingAuthorizationRequest = {
  amount: number;
  amount_details: IssuingAuthorizationAmountDetails | null;
  approved: boolean;
  created: number;
  currency: string;
  merchant_amount: number;
  merchant_currency: string;
  reason:
    | "account_disabled"
    | "card_active"
    | "card_inactive"
    | "cardholder_inactive"
    | "cardholder_verification_required"
    | "insufficient_funds"
    | "not_allowed"
    | "spending_controls"
    | "suspected_fraud"
    | "verification_failed"
    | "webhook_approved"
    | "webhook_declined"
    | "webhook_error"
    | "webhook_timeout";
  reason_message: string | null;
};
export type IssuingAuthorizationTreasury = {
  received_credits: Array<string>;
  received_debits: Array<string>;
  transaction: string | null;
};
export type IssuingAuthorizationVerificationData = {
  address_line1_check: "match" | "mismatch" | "not_provided";
  address_postal_code_check: "match" | "mismatch" | "not_provided";
  cvc_check: "match" | "mismatch" | "not_provided";
  expiry_check: "match" | "mismatch" | "not_provided";
};
export type IssuingIssuingAuthorization = {
  amount: number;
  amount_details: IssuingAuthorizationAmountDetails | null;
  approved: boolean;
  authorization_method:
    | "chip"
    | "contactless"
    | "keyed_in"
    | "online"
    | "swipe";
  balance_transactions: Array<BalanceTransaction>;
  card: IssuingCard;
  cardholder: IssuingCardholder | string | null;
  created: number;
  currency: string;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: IssuingAuthorizationMerchantData;
  metadata: unknown /*map*/;
  network_data: IssuingAuthorizationNetworkData | null;
  object: "issuing.authorization";
  pending_request: IssuingAuthorizationPendingRequest | null;
  request_history: Array<IssuingAuthorizationRequest>;
  status: "closed" | "pending" | "reversed";
  transactions: Array<IssuingTransaction>;
  treasury?: IssuingAuthorizationTreasury | null;
  verification_data: IssuingAuthorizationVerificationData;
  wallet: string | null;
};
export type IssuingCardShippingCustoms = { eori_number: string | null };
export type IssuingCardShipping = {
  address: Address;
  carrier: "dhl" | "fedex" | "royal_mail" | "usps" | null;
  customs: IssuingCardShippingCustoms | null;
  eta: number | null;
  name: string;
  phone_number: string | null;
  require_signature: boolean | null;
  service: "express" | "priority" | "standard";
  status:
    | "canceled"
    | "delivered"
    | "failure"
    | "pending"
    | "returned"
    | "shipped"
    | null;
  tracking_number: string | null;
  tracking_url: string | null;
  type: "bulk" | "individual";
};
export type IssuingCardSpendingLimit = {
  amount: number;
  categories: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  > | null;
  interval:
    | "all_time"
    | "daily"
    | "monthly"
    | "per_authorization"
    | "weekly"
    | "yearly";
};
export type IssuingCardAuthorizationControls = {
  allowed_categories: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  > | null;
  blocked_categories: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  > | null;
  spending_limits: Array<IssuingCardSpendingLimit> | null;
  spending_limits_currency: string | null;
};
export type IssuingCardApplePay = {
  eligible: boolean;
  ineligible_reason:
    | "missing_agreement"
    | "missing_cardholder_contact"
    | "unsupported_region"
    | null;
};
export type IssuingCardGooglePay = {
  eligible: boolean;
  ineligible_reason:
    | "missing_agreement"
    | "missing_cardholder_contact"
    | "unsupported_region"
    | null;
};
export type IssuingCardWallets = {
  apple_pay: IssuingCardApplePay;
  google_pay: IssuingCardGooglePay;
  primary_account_identifier: string | null;
};
export type IssuingIssuingCard = {
  brand: string;
  cancellation_reason: "design_rejected" | "lost" | "stolen" | null;
  cardholder: IssuingCardholder;
  created: number;
  currency: string;
  cvc?: string;
  exp_month: number;
  exp_year: number;
  financial_account?: string | null;
  id: string;
  last4: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  number?: string;
  object: "issuing.card";
  replaced_by: IssuingCard | string | null;
  replacement_for: IssuingCard | string | null;
  replacement_reason: "damaged" | "expired" | "lost" | "stolen" | null;
  shipping: IssuingCardShipping | null;
  spending_controls: IssuingCardAuthorizationControls;
  status: "active" | "canceled" | "inactive";
  type: "physical" | "virtual";
  wallets: IssuingCardWallets | null;
};
export type IssuingCardholderAddress = { address: Address };
export type IssuingCardholderCompany = { tax_id_provided: boolean };
export type IssuingCardholderUserTermsAcceptance = {
  date: number | null;
  ip: string | null;
  user_agent: string | null;
};
export type IssuingCardholderCardIssuing = {
  user_terms_acceptance: IssuingCardholderUserTermsAcceptance | null;
};
export type IssuingCardholderIndividualDob = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type IssuingCardholderIdDocument = {
  back: File | string | null;
  front: File | string | null;
};
export type IssuingCardholderVerification = {
  document: IssuingCardholderIdDocument | null;
};
export type IssuingCardholderIndividual = {
  card_issuing: IssuingCardholderCardIssuing | null;
  dob: IssuingCardholderIndividualDob | null;
  first_name: string | null;
  last_name: string | null;
  verification: IssuingCardholderVerification | null;
};
export type IssuingCardholderRequirements = {
  disabled_reason:
    | "listed"
    | "rejected.listed"
    | "requirements.past_due"
    | "under_review"
    | null;
  past_due: Array<
    | "company.tax_id"
    | "individual.card_issuing.user_terms_acceptance.date"
    | "individual.card_issuing.user_terms_acceptance.ip"
    | "individual.dob.day"
    | "individual.dob.month"
    | "individual.dob.year"
    | "individual.first_name"
    | "individual.last_name"
    | "individual.verification.document"
  > | null;
};
export type IssuingCardholderSpendingLimit = {
  amount: number;
  categories: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  > | null;
  interval:
    | "all_time"
    | "daily"
    | "monthly"
    | "per_authorization"
    | "weekly"
    | "yearly";
};
export type IssuingCardholderAuthorizationControls = {
  allowed_categories: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  > | null;
  blocked_categories: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  > | null;
  spending_limits: Array<IssuingCardholderSpendingLimit> | null;
  spending_limits_currency: string | null;
};
export type IssuingIssuingCardholder = {
  billing: IssuingCardholderAddress;
  company: IssuingCardholderCompany | null;
  created: number;
  email: string | null;
  id: string;
  individual: IssuingCardholderIndividual | null;
  livemode: boolean;
  metadata: unknown /*map*/;
  name: string;
  object: "issuing.cardholder";
  phone_number: string | null;
  requirements: IssuingCardholderRequirements;
  spending_controls: IssuingCardholderAuthorizationControls | null;
  status: "active" | "blocked" | "inactive";
  type: "company" | "individual";
};
export type IssuingDisputeCanceledEvidence = {
  additional_documentation: File | string | null;
  canceled_at: number | null;
  cancellation_policy_provided: boolean | null;
  cancellation_reason: string | null;
  expected_at: number | null;
  explanation: string | null;
  product_description: string | null;
  product_type: "merchandise" | "service" | null;
  return_status: "merchant_rejected" | "successful" | null;
  returned_at: number | null;
};
export type IssuingDisputeDuplicateEvidence = {
  additional_documentation: File | string | null;
  card_statement: File | string | null;
  cash_receipt: File | string | null;
  check_image: File | string | null;
  explanation: string | null;
  original_transaction: string | null;
};
export type IssuingDisputeFraudulentEvidence = {
  additional_documentation: File | string | null;
  explanation: string | null;
};
export type IssuingDisputeMerchandiseNotAsDescribedEvidence = {
  additional_documentation: File | string | null;
  explanation: string | null;
  received_at: number | null;
  return_description: string | null;
  return_status: "merchant_rejected" | "successful" | null;
  returned_at: number | null;
};
export type IssuingDisputeNotReceivedEvidence = {
  additional_documentation: File | string | null;
  expected_at: number | null;
  explanation: string | null;
  product_description: string | null;
  product_type: "merchandise" | "service" | null;
};
export type IssuingDisputeOtherEvidence = {
  additional_documentation: File | string | null;
  explanation: string | null;
  product_description: string | null;
  product_type: "merchandise" | "service" | null;
};
export type IssuingDisputeServiceNotAsDescribedEvidence = {
  additional_documentation: File | string | null;
  canceled_at: number | null;
  cancellation_reason: string | null;
  explanation: string | null;
  received_at: number | null;
};
export type IssuingDisputeEvidence = {
  canceled?: IssuingDisputeCanceledEvidence;
  duplicate?: IssuingDisputeDuplicateEvidence;
  fraudulent?: IssuingDisputeFraudulentEvidence;
  merchandise_not_as_described?: IssuingDisputeMerchandiseNotAsDescribedEvidence;
  not_received?: IssuingDisputeNotReceivedEvidence;
  other?: IssuingDisputeOtherEvidence;
  reason:
    | "canceled"
    | "duplicate"
    | "fraudulent"
    | "merchandise_not_as_described"
    | "not_received"
    | "other"
    | "service_not_as_described";
  service_not_as_described?: IssuingDisputeServiceNotAsDescribedEvidence;
};
export type IssuingDisputeTreasury = {
  debit_reversal: string | null;
  received_debit: string;
};
export type IssuingIssuingDispute = {
  amount: number;
  balance_transactions: Array<BalanceTransaction> | null;
  created: number;
  currency: string;
  evidence: IssuingDisputeEvidence;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "issuing.dispute";
  status: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
  transaction: IssuingTransaction | string;
  treasury?: IssuingDisputeTreasury | null;
};
export type IssuingTransactionAmountDetails = { atm_fee: number | null };
export type IssuingTransactionFlightDataLeg = {
  arrival_airport_code: string | null;
  carrier: string | null;
  departure_airport_code: string | null;
  flight_number: string | null;
  service_class: string | null;
  stopover_allowed: boolean | null;
};
export type IssuingTransactionFlightData = {
  departure_at: number | null;
  passenger_name: string | null;
  refundable: boolean | null;
  segments: Array<IssuingTransactionFlightDataLeg> | null;
  travel_agency: string | null;
};
export type IssuingTransactionFuelData = {
  type: string;
  unit: string;
  unit_cost_decimal: unknown /*primitive*/;
  volume_decimal: unknown /*primitive*/ | null;
};
export type IssuingTransactionLodgingData = {
  check_in_at: number | null;
  nights: number | null;
};
export type IssuingTransactionReceiptData = {
  description: string | null;
  quantity: number | null;
  total: number | null;
  unit_cost: number | null;
};
export type IssuingTransactionPurchaseDetails = {
  flight: IssuingTransactionFlightData | null;
  fuel: IssuingTransactionFuelData | null;
  lodging: IssuingTransactionLodgingData | null;
  receipt: Array<IssuingTransactionReceiptData> | null;
  reference: string | null;
};
export type IssuingTransactionTreasury = {
  received_credit: string | null;
  received_debit: string | null;
};
export type IssuingIssuingTransaction = {
  amount: number;
  amount_details: IssuingTransactionAmountDetails | null;
  authorization: IssuingAuthorization | string | null;
  balance_transaction: BalanceTransaction | string | null;
  card: IssuingCard | string;
  cardholder: IssuingCardholder | string | null;
  created: number;
  currency: string;
  dispute: IssuingDispute | string | null;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: IssuingAuthorizationMerchantData;
  metadata: unknown /*map*/;
  object: "issuing.transaction";
  purchase_details: IssuingTransactionPurchaseDetails | null;
  treasury?: IssuingTransactionTreasury | null;
  type: "capture" | "refund";
  wallet: "apple_pay" | "google_pay" | "samsung_pay" | null;
};
export type LineItem = {
  amount: number;
  description: string;
  quantity: number;
};
export type OfflineAcceptance = {};
export type OnlineAcceptance = {
  ip_address: string | null;
  user_agent: string | null;
};
export type CustomerAcceptance = {
  accepted_at: number | null;
  offline?: OfflineAcceptance;
  online?: OnlineAcceptance;
  type: "offline" | "online";
};
export type MandateMultiUse = {};
export type MandateAcssDebit = {
  default_for?: Array<"invoice" | "subscription">;
  interval_description: string | null;
  payment_schedule: "combined" | "interval" | "sporadic";
  transaction_type: "business" | "personal";
};
export type MandateAuBecsDebit = { url: string };
export type MandateBacsDebit = {
  network_status: "accepted" | "pending" | "refused" | "revoked";
  reference: string;
  url: string;
};
export type MandateOptionsOffSessionDetailsBlik = {
  amount: number | null;
  currency: string | null;
  interval: "day" | "month" | "week" | "year" | null;
  interval_count: number | null;
};
export type MandateBlik = {
  expires_after: number | null;
  off_session?: MandateOptionsOffSessionDetailsBlik;
  type: "off_session" | "on_session" | null;
};
export type CardMandatePaymentMethodDetails = {};
export type MandateCashapp = {};
export type MandateLink = {};
export type MandateSepaDebit = { reference: string; url: string };
export type MandateUsBankAccount = {};
export type MandatePaymentMethodDetails = {
  acss_debit?: MandateAcssDebit;
  au_becs_debit?: MandateAuBecsDebit;
  bacs_debit?: MandateBacsDebit;
  blik?: MandateBlik;
  card?: CardMandatePaymentMethodDetails;
  cashapp?: MandateCashapp;
  link?: MandateLink;
  sepa_debit?: MandateSepaDebit;
  type: string;
  us_bank_account?: MandateUsBankAccount;
};
export type MandateSingleUse = { amount: number; currency: string };
export type Mandate = {
  customer_acceptance: CustomerAcceptance;
  id: string;
  livemode: boolean;
  multi_use?: MandateMultiUse;
  object: "mandate";
  payment_method: PaymentMethod | string;
  payment_method_details: MandatePaymentMethodDetails;
  single_use?: MandateSingleUse;
  status: "active" | "inactive" | "pending";
  type: "multi_use" | "single_use";
};
export type PaymentFlowsAmountDetailsResourceTip = { amount?: number };
export type PaymentFlowsAmountDetails = {
  tip?: PaymentFlowsAmountDetailsResourceTip;
};
export type PaymentFlowsAutomaticPaymentMethodsPaymentIntent = {
  enabled: boolean;
};
export type PaymentIntentNextActionAlipayHandleRedirect = {
  native_data: string | null;
  native_url: string | null;
  return_url: string | null;
  url: string | null;
};
export type PaymentIntentNextActionBoleto = {
  expires_at: number | null;
  hosted_voucher_url: string | null;
  number: string | null;
  pdf: string | null;
};
export type PaymentIntentNextActionCardAwaitNotification = {
  charge_attempt_at: number | null;
  customer_approval_required: boolean | null;
};
export type PaymentIntentNextActionCashappQrCode = {
  expires_at: number;
  image_url_png: string;
  image_url_svg: string;
};
export type PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode = {
  hosted_instructions_url: string;
  mobile_auth_url: string;
  qr_code: PaymentIntentNextActionCashappQrCode;
};
export type PaymentIntentNextActionDisplayBankTransferInstructions = {
  amount_remaining: number | null;
  currency: string | null;
  financial_addresses?: Array<FundingInstructionsBankTransferFinancialAddress>;
  hosted_instructions_url: string | null;
  reference: string | null;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer";
};
export type PaymentIntentNextActionKonbiniFamilymart = {
  confirmation_number?: string;
  payment_code: string;
};
export type PaymentIntentNextActionKonbiniLawson = {
  confirmation_number?: string;
  payment_code: string;
};
export type PaymentIntentNextActionKonbiniMinistop = {
  confirmation_number?: string;
  payment_code: string;
};
export type PaymentIntentNextActionKonbiniSeicomart = {
  confirmation_number?: string;
  payment_code: string;
};
export type PaymentIntentNextActionKonbiniStores = {
  familymart: PaymentIntentNextActionKonbiniFamilymart | null;
  lawson: PaymentIntentNextActionKonbiniLawson | null;
  ministop: PaymentIntentNextActionKonbiniMinistop | null;
  seicomart: PaymentIntentNextActionKonbiniSeicomart | null;
};
export type PaymentIntentNextActionKonbini = {
  expires_at: number;
  hosted_voucher_url: string | null;
  stores: PaymentIntentNextActionKonbiniStores;
};
export type PaymentIntentNextActionDisplayOxxoDetails = {
  expires_after: number | null;
  hosted_voucher_url: string | null;
  number: string | null;
};
export type PaymentIntentNextActionPaynowDisplayQrCode = {
  data: string;
  hosted_instructions_url: string | null;
  image_url_png: string;
  image_url_svg: string;
};
export type PaymentIntentNextActionPixDisplayQrCode = {
  data?: string;
  expires_at?: number;
  hosted_instructions_url?: string;
  image_url_png?: string;
  image_url_svg?: string;
};
export type PaymentIntentNextActionPromptpayDisplayQrCode = {
  data: string;
  hosted_instructions_url: string;
  image_url_png: string;
  image_url_svg: string;
};
export type PaymentIntentNextActionRedirectToUrl = {
  return_url: string | null;
  url: string | null;
};
export type PaymentIntentNextActionVerifyWithMicrodeposits = {
  arrival_date: number;
  hosted_verification_url: string;
  microdeposit_type: "amounts" | "descriptor_code" | null;
};
export type PaymentIntentNextActionWechatPayDisplayQrCode = {
  data: string;
  hosted_instructions_url: string;
  image_data_url: string;
  image_url_png: string;
  image_url_svg: string;
};
export type PaymentIntentNextActionWechatPayRedirectToAndroidApp = {
  app_id: string;
  nonce_str: string;
  package: string;
  partner_id: string;
  prepay_id: string;
  sign: string;
  timestamp: string;
};
export type PaymentIntentNextActionWechatPayRedirectToIosApp = {
  native_url: string;
};
export type PaymentIntentNextAction = {
  alipay_handle_redirect?: PaymentIntentNextActionAlipayHandleRedirect;
  boleto_display_details?: PaymentIntentNextActionBoleto;
  card_await_notification?: PaymentIntentNextActionCardAwaitNotification;
  cashapp_handle_redirect_or_display_qr_code?: PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode;
  display_bank_transfer_instructions?: PaymentIntentNextActionDisplayBankTransferInstructions;
  konbini_display_details?: PaymentIntentNextActionKonbini;
  oxxo_display_details?: PaymentIntentNextActionDisplayOxxoDetails;
  paynow_display_qr_code?: PaymentIntentNextActionPaynowDisplayQrCode;
  pix_display_qr_code?: PaymentIntentNextActionPixDisplayQrCode;
  promptpay_display_qr_code?: PaymentIntentNextActionPromptpayDisplayQrCode;
  redirect_to_url?: PaymentIntentNextActionRedirectToUrl;
  type: string;
  use_stripe_sdk?: unknown /*map*/;
  verify_with_microdeposits?: PaymentIntentNextActionVerifyWithMicrodeposits;
  wechat_pay_display_qr_code?: PaymentIntentNextActionWechatPayDisplayQrCode;
  wechat_pay_redirect_to_android_app?: PaymentIntentNextActionWechatPayRedirectToAndroidApp;
  wechat_pay_redirect_to_ios_app?: PaymentIntentNextActionWechatPayRedirectToIosApp;
};
export type PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit = {
  custom_mandate_url?: string;
  interval_description: string | null;
  payment_schedule: "combined" | "interval" | "sporadic" | null;
  transaction_type: "business" | "personal" | null;
};
export type PaymentIntentPaymentMethodOptionsAcssDebit = {
  mandate_options?: PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit;
  setup_future_usage?: "none" | "off_session" | "on_session";
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type PaymentMethodOptionsAffirm = {
  capture_method?: "manual";
  preferred_locale?: string;
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsAfterpayClearpay = {
  capture_method?: "manual";
  reference: string | null;
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsAlipay = {
  setup_future_usage?: "none" | "off_session";
};
export type PaymentIntentPaymentMethodOptionsAuBecsDebit = {
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type PaymentMethodOptionsBacsDebit = {
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type PaymentMethodOptionsBancontact = {
  preferred_language: "de" | "en" | "fr" | "nl";
  setup_future_usage?: "none" | "off_session";
};
export type PaymentIntentPaymentMethodOptionsBlik = {};
export type PaymentMethodOptionsBoleto = {
  expires_after_days: number;
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type PaymentMethodOptionsCardInstallments = {
  available_plans: Array<PaymentMethodDetailsCardInstallmentsPlan> | null;
  enabled: boolean;
  plan: PaymentMethodDetailsCardInstallmentsPlan | null;
};
export type PaymentMethodOptionsCardMandateOptions = {
  amount: number;
  amount_type: "fixed" | "maximum";
  description: string | null;
  end_date: number | null;
  interval: "day" | "month" | "sporadic" | "week" | "year";
  interval_count: number | null;
  reference: string;
  start_date: number;
  supported_types: Array<"india"> | null;
};
export type PaymentIntentPaymentMethodOptionsCard = {
  capture_method?: "manual";
  installments: PaymentMethodOptionsCardInstallments | null;
  mandate_options: PaymentMethodOptionsCardMandateOptions | null;
  network:
    | "amex"
    | "cartes_bancaires"
    | "diners"
    | "discover"
    | "interac"
    | "jcb"
    | "mastercard"
    | "unionpay"
    | "unknown"
    | "visa"
    | null;
  request_three_d_secure: "any" | "automatic" | "challenge_only" | null;
  setup_future_usage?: "none" | "off_session" | "on_session";
  statement_descriptor_suffix_kana?: string;
  statement_descriptor_suffix_kanji?: string;
};
export type PaymentMethodOptionsCardPresent = {
  request_extended_authorization: boolean | null;
  request_incremental_authorization_support: boolean | null;
};
export type PaymentMethodOptionsCashapp = {
  capture_method?: "manual";
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type PaymentMethodOptionsCustomerBalanceBankTransfer = {
  eu_bank_transfer?: PaymentMethodOptionsCustomerBalanceEuBankAccount;
  requested_address_types?: Array<
    "iban" | "sepa" | "sort_code" | "spei" | "zengin"
  >;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer"
    | null;
};
export type PaymentMethodOptionsCustomerBalance = {
  bank_transfer?: PaymentMethodOptionsCustomerBalanceBankTransfer;
  funding_type: "bank_transfer" | null;
  setup_future_usage?: "none";
};
export type PaymentIntentPaymentMethodOptionsEps = {
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsFpx = { setup_future_usage?: "none" };
export type PaymentMethodOptionsGiropay = { setup_future_usage?: "none" };
export type PaymentMethodOptionsGrabpay = { setup_future_usage?: "none" };
export type PaymentMethodOptionsIdeal = {
  setup_future_usage?: "none" | "off_session";
};
export type PaymentMethodOptionsInteracPresent = {};
export type PaymentMethodOptionsKlarna = {
  capture_method?: "manual";
  preferred_locale: string | null;
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsKonbini = {
  confirmation_number: string | null;
  expires_after_days: number | null;
  expires_at: number | null;
  product_description: string | null;
  setup_future_usage?: "none";
};
export type PaymentIntentPaymentMethodOptionsLink = {
  capture_method?: "manual";
  persistent_token: string | null;
  setup_future_usage?: "none" | "off_session";
};
export type PaymentMethodOptionsOxxo = {
  expires_after_days: number;
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsP24 = { setup_future_usage?: "none" };
export type PaymentMethodOptionsPaynow = { setup_future_usage?: "none" };
export type PaymentMethodOptionsPix = {
  expires_after_seconds: number | null;
  expires_at: number | null;
  setup_future_usage?: "none";
};
export type PaymentMethodOptionsPromptpay = { setup_future_usage?: "none" };
export type PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit = {};
export type PaymentIntentPaymentMethodOptionsSepaDebit = {
  mandate_options?: PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit;
  setup_future_usage?: "none" | "off_session" | "on_session";
};
export type PaymentMethodOptionsSofort = {
  preferred_language: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl" | null;
  setup_future_usage?: "none" | "off_session";
};
export type PaymentIntentPaymentMethodOptionsUsBankAccount = {
  financial_connections?: LinkedAccountOptionsUsBankAccount;
  setup_future_usage?: "none" | "off_session" | "on_session";
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type PaymentMethodOptionsWechatPay = {
  app_id: string | null;
  client: "android" | "ios" | "web" | null;
  setup_future_usage?: "none";
};
export type PaymentIntentPaymentMethodOptions = {
  acss_debit?: PaymentIntentPaymentMethodOptionsAcssDebit;
  affirm?: PaymentMethodOptionsAffirm;
  afterpay_clearpay?: PaymentMethodOptionsAfterpayClearpay;
  alipay?: PaymentMethodOptionsAlipay;
  au_becs_debit?: PaymentIntentPaymentMethodOptionsAuBecsDebit;
  bacs_debit?: PaymentMethodOptionsBacsDebit;
  bancontact?: PaymentMethodOptionsBancontact;
  blik?: PaymentIntentPaymentMethodOptionsBlik;
  boleto?: PaymentMethodOptionsBoleto;
  card?: PaymentIntentPaymentMethodOptionsCard;
  card_present?: PaymentMethodOptionsCardPresent;
  cashapp?: PaymentMethodOptionsCashapp;
  customer_balance?: PaymentMethodOptionsCustomerBalance;
  eps?: PaymentIntentPaymentMethodOptionsEps;
  fpx?: PaymentMethodOptionsFpx;
  giropay?: PaymentMethodOptionsGiropay;
  grabpay?: PaymentMethodOptionsGrabpay;
  ideal?: PaymentMethodOptionsIdeal;
  interac_present?: PaymentMethodOptionsInteracPresent;
  klarna?: PaymentMethodOptionsKlarna;
  konbini?: PaymentMethodOptionsKonbini;
  link?: PaymentIntentPaymentMethodOptionsLink;
  oxxo?: PaymentMethodOptionsOxxo;
  p24?: PaymentMethodOptionsP24;
  paynow?: PaymentMethodOptionsPaynow;
  pix?: PaymentMethodOptionsPix;
  promptpay?: PaymentMethodOptionsPromptpay;
  sepa_debit?: PaymentIntentPaymentMethodOptionsSepaDebit;
  sofort?: PaymentMethodOptionsSofort;
  us_bank_account?: PaymentIntentPaymentMethodOptionsUsBankAccount;
  wechat_pay?: PaymentMethodOptionsWechatPay;
};
export type PaymentIntentProcessingCustomerNotification = {
  approval_requested: boolean | null;
  completes_at: number | null;
};
export type PaymentIntentCardProcessing = {
  customer_notification?: PaymentIntentProcessingCustomerNotification;
};
export type PaymentIntentProcessing = {
  card?: PaymentIntentCardProcessing;
  type: "card";
};
export type TransferData = { amount?: number; destination: Account | string };
export type PaymentIntent = {
  amount: number;
  amount_capturable: number;
  amount_details?: PaymentFlowsAmountDetails;
  amount_received: number;
  application: Application | string | null;
  application_fee_amount: number | null;
  automatic_payment_methods: PaymentFlowsAutomaticPaymentMethodsPaymentIntent | null;
  canceled_at: number | null;
  cancellation_reason:
    | "abandoned"
    | "automatic"
    | "duplicate"
    | "failed_invoice"
    | "fraudulent"
    | "requested_by_customer"
    | "void_invoice"
    | null;
  capture_method: "automatic" | "automatic_async" | "manual";
  client_secret: string | null;
  confirmation_method: "automatic" | "manual";
  created: number;
  currency: string;
  customer: Customer | string | null;
  description: string | null;
  id: string;
  invoice: Invoice | string | null;
  last_payment_error: ApiErrors | null;
  latest_charge?: Charge | string | null;
  livemode: boolean;
  metadata: unknown /*map*/;
  next_action: PaymentIntentNextAction | null;
  object: "payment_intent";
  on_behalf_of: Account | string | null;
  payment_method: PaymentMethod | string | null;
  payment_method_options: PaymentIntentPaymentMethodOptions | null;
  payment_method_types: Array<string>;
  processing: PaymentIntentProcessing | null;
  receipt_email: string | null;
  review: Review | string | null;
  setup_future_usage: "off_session" | "on_session" | null;
  shipping: Shipping | null;
  source: BankAccount | Card | Account | Source | string | null;
  statement_descriptor: string | null;
  statement_descriptor_suffix: string | null;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_capture"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  transfer_data: TransferData | null;
  transfer_group: string | null;
};
export type PaymentLinksResourceCompletionBehaviorConfirmationPage = {
  custom_message: string | null;
};
export type PaymentLinksResourceCompletionBehaviorRedirect = { url: string };
export type PaymentLinksResourceAfterCompletion = {
  hosted_confirmation?: PaymentLinksResourceCompletionBehaviorConfirmationPage;
  redirect?: PaymentLinksResourceCompletionBehaviorRedirect;
  type: "hosted_confirmation" | "redirect";
};
export type PaymentLinksResourceAutomaticTax = { enabled: boolean };
export type PaymentLinksResourceConsentCollection = {
  promotions: "auto" | "none" | null;
  terms_of_service: "none" | "required" | null;
};
export type PaymentLinksResourceCustomFieldsDropdownOption = {
  label: string;
  value: string;
};
export type PaymentLinksResourceCustomFieldsDropdown = {
  options: Array<PaymentLinksResourceCustomFieldsDropdownOption>;
};
export type PaymentLinksResourceCustomFieldsLabel = {
  custom: string | null;
  type: "custom";
};
export type PaymentLinksResourceCustomFields = {
  dropdown: PaymentLinksResourceCustomFieldsDropdown | null;
  key: string;
  label: PaymentLinksResourceCustomFieldsLabel;
  optional: boolean;
  type: "dropdown" | "numeric" | "text";
};
export type PaymentLinksResourceCustomTextPosition = { message: string };
export type PaymentLinksResourceCustomText = {
  shipping_address: PaymentLinksResourceCustomTextPosition | null;
  submit: PaymentLinksResourceCustomTextPosition | null;
};
export type PaymentLinksResourceInvoiceSettings = {
  account_tax_ids: Array<TaxId | string> | null;
  custom_fields: Array<InvoiceSettingCustomField> | null;
  description: string | null;
  footer: string | null;
  metadata: unknown /*map*/ | null;
  rendering_options: InvoiceSettingRenderingOptions | null;
};
export type PaymentLinksResourceInvoiceCreation = {
  enabled: boolean;
  invoice_data: PaymentLinksResourceInvoiceSettings | null;
};
export type PaymentLinksResourcePaymentIntentData = {
  capture_method: "automatic" | "automatic_async" | "manual" | null;
  setup_future_usage: "off_session" | "on_session" | null;
};
export type PaymentLinksResourcePhoneNumberCollection = { enabled: boolean };
export type PaymentLinksResourceShippingAddressCollection = {
  allowed_countries: Array<
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CV"
    | "CW"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | "ZZ"
  >;
};
export type PaymentLinksResourceShippingOption = {
  shipping_amount: number;
  shipping_rate: ShippingRate | string;
};
export type PaymentLinksResourceSubscriptionData = {
  description: string | null;
  trial_period_days: number | null;
};
export type PaymentLinksResourceTaxIdCollection = { enabled: boolean };
export type PaymentLinksResourceTransferData = {
  amount: number | null;
  destination: Account | string;
};
export type PaymentLink = {
  active: boolean;
  after_completion: PaymentLinksResourceAfterCompletion;
  allow_promotion_codes: boolean;
  application_fee_amount: number | null;
  application_fee_percent: number | null;
  automatic_tax: PaymentLinksResourceAutomaticTax;
  billing_address_collection: "auto" | "required";
  consent_collection: PaymentLinksResourceConsentCollection | null;
  currency: string;
  custom_fields: Array<PaymentLinksResourceCustomFields>;
  custom_text: PaymentLinksResourceCustomText;
  customer_creation: "always" | "if_required";
  id: string;
  invoice_creation: PaymentLinksResourceInvoiceCreation | null;
  line_items?: List<LineItem>;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "payment_link";
  on_behalf_of: Account | string | null;
  payment_intent_data: PaymentLinksResourcePaymentIntentData | null;
  payment_method_collection: "always" | "if_required";
  payment_method_types: Array<
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "cashapp"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay"
  > | null;
  phone_number_collection: PaymentLinksResourcePhoneNumberCollection;
  shipping_address_collection: PaymentLinksResourceShippingAddressCollection | null;
  shipping_options: Array<PaymentLinksResourceShippingOption>;
  submit_type: "auto" | "book" | "donate" | "pay";
  subscription_data: PaymentLinksResourceSubscriptionData | null;
  tax_id_collection: PaymentLinksResourceTaxIdCollection;
  transfer_data: PaymentLinksResourceTransferData | null;
  url: string;
};
export type PaymentMethodAcssDebit = {
  bank_name: string | null;
  fingerprint: string | null;
  institution_number: string | null;
  last4: string | null;
  transit_number: string | null;
};
export type PaymentMethodAffirm = {};
export type PaymentMethodAfterpayClearpay = {};
export type PaymentFlowsPrivatePaymentMethodsAlipay = {};
export type PaymentMethodAuBecsDebit = {
  bsb_number: string | null;
  fingerprint: string | null;
  last4: string | null;
};
export type PaymentMethodBacsDebit = {
  fingerprint: string | null;
  last4: string | null;
  sort_code: string | null;
};
export type PaymentMethodBancontact = {};
export type PaymentMethodBlik = {};
export type PaymentMethodBoleto = { tax_id: string };
export type PaymentMethodCardChecks = {
  address_line1_check: string | null;
  address_postal_code_check: string | null;
  cvc_check: string | null;
};
export type Networks = { available: Array<string>; preferred: string | null };
export type ThreeDSecureUsage = { supported: boolean };
export type PaymentMethodCardWalletAmexExpressCheckout = {};
export type PaymentMethodCardWalletApplePay = {};
export type PaymentMethodCardWalletGooglePay = {};
export type PaymentMethodCardWalletMasterpass = {
  billing_address: Address | null;
  email: string | null;
  name: string | null;
  shipping_address: Address | null;
};
export type PaymentMethodCardWalletSamsungPay = {};
export type PaymentMethodCardWalletVisaCheckout = {
  billing_address: Address | null;
  email: string | null;
  name: string | null;
  shipping_address: Address | null;
};
export type PaymentMethodCardWallet = {
  amex_express_checkout?: PaymentMethodCardWalletAmexExpressCheckout;
  apple_pay?: PaymentMethodCardWalletApplePay;
  dynamic_last4: string | null;
  google_pay?: PaymentMethodCardWalletGooglePay;
  masterpass?: PaymentMethodCardWalletMasterpass;
  samsung_pay?: PaymentMethodCardWalletSamsungPay;
  type:
    | "amex_express_checkout"
    | "apple_pay"
    | "google_pay"
    | "masterpass"
    | "samsung_pay"
    | "visa_checkout";
  visa_checkout?: PaymentMethodCardWalletVisaCheckout;
};
export type PaymentMethodCard = {
  brand: string;
  checks: PaymentMethodCardChecks | null;
  country: string | null;
  description?: string | null;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null;
  funding: string;
  iin?: string | null;
  issuer?: string | null;
  last4: string;
  networks: Networks | null;
  three_d_secure_usage: ThreeDSecureUsage | null;
  wallet: PaymentMethodCardWallet | null;
};
export type PaymentMethodCardPresent = {};
export type PaymentMethodCashapp = {};
export type PaymentMethodCustomerBalance = {};
export type PaymentMethodEps = {
  bank:
    | "arzte_und_apotheker_bank"
    | "austrian_anadi_bank_ag"
    | "bank_austria"
    | "bankhaus_carl_spangler"
    | "bankhaus_schelhammer_und_schattera_ag"
    | "bawag_psk_ag"
    | "bks_bank_ag"
    | "brull_kallmus_bank_ag"
    | "btv_vier_lander_bank"
    | "capital_bank_grawe_gruppe_ag"
    | "deutsche_bank_ag"
    | "dolomitenbank"
    | "easybank_ag"
    | "erste_bank_und_sparkassen"
    | "hypo_alpeadriabank_international_ag"
    | "hypo_bank_burgenland_aktiengesellschaft"
    | "hypo_noe_lb_fur_niederosterreich_u_wien"
    | "hypo_oberosterreich_salzburg_steiermark"
    | "hypo_tirol_bank_ag"
    | "hypo_vorarlberg_bank_ag"
    | "marchfelder_bank"
    | "oberbank_ag"
    | "raiffeisen_bankengruppe_osterreich"
    | "schoellerbank_ag"
    | "sparda_bank_wien"
    | "volksbank_gruppe"
    | "volkskreditbank_ag"
    | "vr_bank_braunau"
    | null;
};
export type PaymentMethodFpx = {
  account_holder_type: "company" | "individual" | null;
  bank:
    | "affin_bank"
    | "agrobank"
    | "alliance_bank"
    | "ambank"
    | "bank_islam"
    | "bank_muamalat"
    | "bank_of_china"
    | "bank_rakyat"
    | "bsn"
    | "cimb"
    | "deutsche_bank"
    | "hong_leong_bank"
    | "hsbc"
    | "kfh"
    | "maybank2e"
    | "maybank2u"
    | "ocbc"
    | "pb_enterprise"
    | "public_bank"
    | "rhb"
    | "standard_chartered"
    | "uob";
};
export type PaymentMethodGiropay = {};
export type PaymentMethodGrabpay = {};
export type PaymentMethodIdeal = {
  bank:
    | "abn_amro"
    | "asn_bank"
    | "bunq"
    | "handelsbanken"
    | "ing"
    | "knab"
    | "moneyou"
    | "rabobank"
    | "regiobank"
    | "revolut"
    | "sns_bank"
    | "triodos_bank"
    | "van_lanschot"
    | "yoursafe"
    | null;
  bic:
    | "ABNANL2A"
    | "ASNBNL21"
    | "BITSNL2A"
    | "BUNQNL2A"
    | "FVLBNL22"
    | "HANDNL2A"
    | "INGBNL2A"
    | "KNABNL2H"
    | "MOYONL21"
    | "RABONL2U"
    | "RBRBNL21"
    | "REVOLT21"
    | "SNSBNL2A"
    | "TRIONL2U"
    | null;
};
export type PaymentMethodInteracPresent = {};
export type PaymentFlowsPrivatePaymentMethodsKlarnaDob = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type PaymentMethodKlarna = {
  dob: PaymentFlowsPrivatePaymentMethodsKlarnaDob | null;
};
export type PaymentMethodKonbini = {};
export type PaymentMethodLink = {
  email: string | null;
  persistent_token?: string;
};
export type PaymentMethodOxxo = {};
export type PaymentMethodP24 = {
  bank:
    | "alior_bank"
    | "bank_millennium"
    | "bank_nowy_bfg_sa"
    | "bank_pekao_sa"
    | "banki_spbdzielcze"
    | "blik"
    | "bnp_paribas"
    | "boz"
    | "citi_handlowy"
    | "credit_agricole"
    | "envelobank"
    | "etransfer_pocztowy24"
    | "getin_bank"
    | "ideabank"
    | "ing"
    | "inteligo"
    | "mbank_mtransfer"
    | "nest_przelew"
    | "noble_pay"
    | "pbac_z_ipko"
    | "plus_bank"
    | "santander_przelew24"
    | "tmobile_usbugi_bankowe"
    | "toyota_bank"
    | "volkswagen_bank"
    | null;
};
export type PaymentMethodPaynow = {};
export type PaymentMethodPix = {};
export type PaymentMethodPromptpay = {};
export type SepaDebitGeneratedFrom = {
  charge: Charge | string | null;
  setup_attempt: SetupAttempt | string | null;
};
export type PaymentMethodSepaDebit = {
  bank_code: string | null;
  branch_code: string | null;
  country: string | null;
  fingerprint: string | null;
  generated_from: SepaDebitGeneratedFrom | null;
  last4: string | null;
};
export type PaymentMethodSofort = { country: string | null };
export type UsBankAccountNetworks = {
  preferred: string | null;
  supported: Array<"ach" | "us_domestic_wire">;
};
export type PaymentMethodUsBankAccount = {
  account_holder_type: "company" | "individual" | null;
  account_type: "checking" | "savings" | null;
  bank_name: string | null;
  financial_connections_account?: string | null;
  fingerprint: string | null;
  last4: string | null;
  networks: UsBankAccountNetworks | null;
  routing_number: string | null;
};
export type PaymentMethodWechatPay = {};
export type PaymentMethod = {
  acss_debit?: PaymentMethodAcssDebit;
  affirm?: PaymentMethodAffirm;
  afterpay_clearpay?: PaymentMethodAfterpayClearpay;
  alipay?: PaymentFlowsPrivatePaymentMethodsAlipay;
  au_becs_debit?: PaymentMethodAuBecsDebit;
  bacs_debit?: PaymentMethodBacsDebit;
  bancontact?: PaymentMethodBancontact;
  billing_details: BillingDetails;
  blik?: PaymentMethodBlik;
  boleto?: PaymentMethodBoleto;
  card?: PaymentMethodCard;
  card_present?: PaymentMethodCardPresent;
  cashapp?: PaymentMethodCashapp;
  created: number;
  customer: Customer | string | null;
  customer_balance?: PaymentMethodCustomerBalance;
  eps?: PaymentMethodEps;
  fpx?: PaymentMethodFpx;
  giropay?: PaymentMethodGiropay;
  grabpay?: PaymentMethodGrabpay;
  id: string;
  ideal?: PaymentMethodIdeal;
  interac_present?: PaymentMethodInteracPresent;
  klarna?: PaymentMethodKlarna;
  konbini?: PaymentMethodKonbini;
  link?: PaymentMethodLink;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  object: "payment_method";
  oxxo?: PaymentMethodOxxo;
  p24?: PaymentMethodP24;
  paynow?: PaymentMethodPaynow;
  pix?: PaymentMethodPix;
  promptpay?: PaymentMethodPromptpay;
  radar_options?: RadarRadarOptions;
  sepa_debit?: PaymentMethodSepaDebit;
  sofort?: PaymentMethodSofort;
  type:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "card_present"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "interac_present"
    | "klarna"
    | "konbini"
    | "link"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay";
  us_bank_account?: PaymentMethodUsBankAccount;
  wechat_pay?: PaymentMethodWechatPay;
};
export type Payout = {
  amount: number;
  arrival_date: number;
  automatic: boolean;
  balance_transaction: BalanceTransaction | string | null;
  created: number;
  currency: string;
  description: string | null;
  destination: BankAccount | Card | string | null;
  failure_balance_transaction: BalanceTransaction | string | null;
  failure_code: string | null;
  failure_message: string | null;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  method: string;
  object: "payout";
  original_payout: Payout | string | null;
  reconciliation_status: "completed" | "in_progress" | "not_applicable";
  reversed_by: Payout | string | null;
  source_type: string;
  statement_descriptor: string | null;
  status: string;
  type: "bank_account" | "card";
};
export type PlanTier = {
  flat_amount: number | null;
  flat_amount_decimal: unknown /*primitive*/ | null;
  unit_amount: number | null;
  unit_amount_decimal: unknown /*primitive*/ | null;
  up_to: number | null;
};
export type TransformUsage = { divide_by: number; round: "down" | "up" };
export type Plan = {
  active: boolean;
  aggregate_usage: "last_during_period" | "last_ever" | "max" | "sum" | null;
  amount: number | null;
  amount_decimal: unknown /*primitive*/ | null;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  id: string;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  nickname: string | null;
  object: "plan";
  product: Product | string | null;
  tiers?: Array<PlanTier>;
  tiers_mode: "graduated" | "volume" | null;
  transform_usage: TransformUsage | null;
  trial_period_days: number | null;
  usage_type: "licensed" | "metered";
};
export type PlatformTax = {
  account: string;
  id: string;
  object: "platform_tax_fee";
  source_transaction: string;
  type: string;
};
export type CustomUnitAmount = {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
  preset?: number;
};
export type Recurring = {
  aggregate_usage?: "last_during_period" | "last_ever" | "max" | "sum";
  interval: "day" | "month" | "week" | "year";
  interval_count?: number;
  trial_period_days?: number;
  usage_type?: "licensed" | "metered";
};
export type PriceTier = {
  flat_amount: number | null;
  flat_amount_decimal: unknown /*primitive*/ | null;
  unit_amount: number | null;
  unit_amount_decimal: unknown /*primitive*/ | null;
  up_to: number | null;
};
export type TransformQuantity = { divide_by: number; round: "down" | "up" };
export type Price = {
  active: boolean;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  currency_options?: unknown /*map*/;
  custom_unit_amount: CustomUnitAmount | null;
  id: string;
  livemode: boolean;
  lookup_key: string | null;
  metadata: unknown /*map*/;
  nickname: string | null;
  object: "price";
  product: Product | string;
  recurring: Recurring | null;
  tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
  tiers?: Array<PriceTier>;
  tiers_mode: "graduated" | "volume" | null;
  transform_quantity: TransformQuantity | null;
  type: "one_time" | "recurring";
  unit_amount: number | null;
  unit_amount_decimal: unknown /*primitive*/ | null;
};
export type PackageDimensions = {
  height: number;
  length: number;
  weight: number;
  width: number;
};
export type Product = {
  active: boolean;
  attributes: Array<string> | null;
  caption?: string | null;
  created: number;
  deactivate_on?: Array<string>;
  default_price?: Price | string | null;
  description: string | null;
  id: string;
  images: Array<string>;
  livemode: boolean;
  metadata: unknown /*map*/;
  name: string;
  object: "product";
  package_dimensions: PackageDimensions | null;
  shippable: boolean | null;
  statement_descriptor?: string | null;
  tax_code: TaxCode | string | null;
  type: "good" | "service";
  unit_label?: string | null;
  updated: number;
  url: string | null;
};
export type PromotionCodesResourceRestrictions = {
  currency_options?: unknown /*map*/;
  first_time_transaction: boolean;
  minimum_amount: number | null;
  minimum_amount_currency: string | null;
};
export type PromotionCode = {
  active: boolean;
  code: string;
  coupon: Coupon;
  created: number;
  customer: Customer | string | null;
  expires_at: number | null;
  id: string;
  livemode: boolean;
  max_redemptions: number | null;
  metadata: unknown /*map*/ | null;
  object: "promotion_code";
  restrictions: PromotionCodesResourceRestrictions;
  times_redeemed: number;
};
export type QuotesResourceAutomaticTax = {
  enabled: boolean;
  status: "complete" | "failed" | "requires_location_inputs" | null;
};
export type QuotesResourceTotalDetailsResourceBreakdown = {
  discounts: Array<LineItemsDiscountAmount>;
  taxes: Array<LineItemsTaxAmount>;
};
export type QuotesResourceTotalDetails = {
  amount_discount: number;
  amount_shipping: number | null;
  amount_tax: number;
  breakdown?: QuotesResourceTotalDetailsResourceBreakdown;
};
export type QuotesResourceRecurring = {
  amount_subtotal: number;
  amount_total: number;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  total_details: QuotesResourceTotalDetails;
};
export type QuotesResourceUpfront = {
  amount_subtotal: number;
  amount_total: number;
  line_items?: List<LineItem>;
  total_details: QuotesResourceTotalDetails;
};
export type QuotesResourceComputed = {
  recurring: QuotesResourceRecurring | null;
  upfront: QuotesResourceUpfront;
};
export type QuotesResourceFromQuote = {
  is_revision: boolean;
  quote: Quote | string;
};
export type InvoiceSettingQuoteSetting = { days_until_due: number | null };
export type QuotesResourceStatusTransitions = {
  accepted_at: number | null;
  canceled_at: number | null;
  finalized_at: number | null;
};
export type QuotesResourceSubscriptionDataSubscriptionData = {
  description: string | null;
  effective_date: number | null;
  trial_period_days: number | null;
};
export type QuotesResourceTransferData = {
  amount: number | null;
  amount_percent: number | null;
  destination: Account | string;
};
export type Quote = {
  amount_subtotal: number;
  amount_total: number;
  application: Application | string | null;
  application_fee_amount: number | null;
  application_fee_percent: number | null;
  automatic_tax: QuotesResourceAutomaticTax;
  collection_method: "charge_automatically" | "send_invoice";
  computed: QuotesResourceComputed;
  created: number;
  currency: string | null;
  customer: Customer | string | null;
  default_tax_rates?: Array<TaxRate | string>;
  description: string | null;
  discounts: Array<Discount | string>;
  expires_at: number;
  footer: string | null;
  from_quote: QuotesResourceFromQuote | null;
  header: string | null;
  id: string;
  invoice: Invoice | string | null;
  invoice_settings: InvoiceSettingQuoteSetting | null;
  line_items?: List<LineItem>;
  livemode: boolean;
  metadata: unknown /*map*/;
  number: string | null;
  object: "quote";
  on_behalf_of: Account | string | null;
  status: "accepted" | "canceled" | "draft" | "open";
  status_transitions: QuotesResourceStatusTransitions;
  subscription: Subscription | string | null;
  subscription_data: QuotesResourceSubscriptionDataSubscriptionData;
  subscription_schedule: SubscriptionSchedule | string | null;
  test_clock: TestHelpersTestClock | string | null;
  total_details: QuotesResourceTotalDetails;
  transfer_data: QuotesResourceTransferData | null;
};
export type RadarRadarEarlyFraudWarning = {
  actionable: boolean;
  charge: Charge | string;
  created: number;
  fraud_type: string;
  id: string;
  livemode: boolean;
  object: "radar.early_fraud_warning";
  payment_intent?: PaymentIntent | string;
};
export type RadarRadarListList = {
  alias: string;
  created: number;
  created_by: string;
  id: string;
  item_type:
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "customer_id"
    | "email"
    | "ip_address"
    | "string";
  list_items: List<RadarValueListItem>;
  livemode: boolean;
  metadata: unknown /*map*/;
  name: string;
  object: "radar.value_list";
};
export type RadarRadarListListItem = {
  created: number;
  created_by: string;
  id: string;
  livemode: boolean;
  object: "radar.value_list_item";
  value: string;
  value_list: string;
};
export type EmailSent = { email_sent_at: number; email_sent_to: string };
export type RefundNextActionDisplayDetails = {
  email_sent: EmailSent;
  expires_at: number;
};
export type RefundNextAction = {
  display_details: RefundNextActionDisplayDetails | null;
  type: string;
};
export type Refund = {
  amount: number;
  balance_transaction: BalanceTransaction | string | null;
  charge: Charge | string | null;
  created: number;
  currency: string;
  description?: string;
  failure_balance_transaction?: BalanceTransaction | string;
  failure_reason?: string;
  id: string;
  instructions_email?: string;
  metadata: unknown /*map*/ | null;
  next_action?: RefundNextAction;
  object: "refund";
  payment_intent: PaymentIntent | string | null;
  reason:
    | "duplicate"
    | "expired_uncaptured_charge"
    | "fraudulent"
    | "requested_by_customer"
    | null;
  receipt_number: string | null;
  source_transfer_reversal: TransferReversal | string | null;
  status: string | null;
  transfer_reversal: TransferReversal | string | null;
};
export type FinancialReportingFinanceReportRunRunParameters = {
  columns?: Array<string>;
  connected_account?: string;
  currency?: string;
  interval_end?: number;
  interval_start?: number;
  payout?: string;
  reporting_category?: string;
  timezone?: string;
};
export type ReportingReportingReportRun = {
  created: number;
  error: string | null;
  id: string;
  livemode: boolean;
  object: "reporting.report_run";
  parameters: FinancialReportingFinanceReportRunRunParameters;
  report_type: string;
  result: File | null;
  status: string;
  succeeded_at: number | null;
};
export type ReportingReportingReportType = {
  data_available_end: number;
  data_available_start: number;
  default_columns: Array<string> | null;
  id: string;
  livemode: boolean;
  name: string;
  object: "reporting.report_type";
  updated: number;
  version: number;
};
export type ReserveTransaction = {
  amount: number;
  currency: string;
  description: string | null;
  id: string;
  object: "reserve_transaction";
};
export type RadarReviewResourceLocation = {
  city: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
  region: string | null;
};
export type RadarReviewResourceSession = {
  browser: string | null;
  device: string | null;
  platform: string | null;
  version: string | null;
};
export type RadarReview = {
  billing_zip: string | null;
  charge: Charge | string | null;
  closed_reason:
    | "approved"
    | "disputed"
    | "redacted"
    | "refunded"
    | "refunded_as_fraud"
    | null;
  created: number;
  id: string;
  ip_address: string | null;
  ip_address_location: RadarReviewResourceLocation | null;
  livemode: boolean;
  object: "review";
  open: boolean;
  opened_reason: "manual" | "rule";
  payment_intent?: PaymentIntent | string;
  reason: string;
  session: RadarReviewResourceSession | null;
};
export type SigmaScheduledQueryRunError = { message: string };
export type SigmaScheduledQueryRun = {
  created: number;
  data_load_time: number;
  error?: SigmaScheduledQueryRunError;
  file: File | null;
  id: string;
  livemode: boolean;
  object: "scheduled_query_run";
  result_available_until: number;
  sql: string;
  status: string;
  title: string;
};
export type SetupAttemptPaymentMethodDetailsAcssDebit = {};
export type SetupAttemptPaymentMethodDetailsAuBecsDebit = {};
export type SetupAttemptPaymentMethodDetailsBacsDebit = {};
export type SetupAttemptPaymentMethodDetailsBancontact = {
  bank_code: string | null;
  bank_name: string | null;
  bic: string | null;
  generated_sepa_debit: PaymentMethod | string | null;
  generated_sepa_debit_mandate: Mandate | string | null;
  iban_last4: string | null;
  preferred_language: "de" | "en" | "fr" | "nl" | null;
  verified_name: string | null;
};
export type SetupAttemptPaymentMethodDetailsBlik = {};
export type SetupAttemptPaymentMethodDetailsBoleto = {};
export type SetupAttemptPaymentMethodDetailsCard = {
  three_d_secure: ThreeDSecureDetails | null;
};
export type SetupAttemptPaymentMethodDetailsCardPresent = {
  generated_card: PaymentMethod | string | null;
};
export type SetupAttemptPaymentMethodDetailsCashapp = {};
export type SetupAttemptPaymentMethodDetailsIdeal = {
  bank:
    | "abn_amro"
    | "asn_bank"
    | "bunq"
    | "handelsbanken"
    | "ing"
    | "knab"
    | "moneyou"
    | "rabobank"
    | "regiobank"
    | "revolut"
    | "sns_bank"
    | "triodos_bank"
    | "van_lanschot"
    | "yoursafe"
    | null;
  bic:
    | "ABNANL2A"
    | "ASNBNL21"
    | "BITSNL2A"
    | "BUNQNL2A"
    | "FVLBNL22"
    | "HANDNL2A"
    | "INGBNL2A"
    | "KNABNL2H"
    | "MOYONL21"
    | "RABONL2U"
    | "RBRBNL21"
    | "REVOLT21"
    | "SNSBNL2A"
    | "TRIONL2U"
    | null;
  generated_sepa_debit: PaymentMethod | string | null;
  generated_sepa_debit_mandate: Mandate | string | null;
  iban_last4: string | null;
  verified_name: string | null;
};
export type SetupAttemptPaymentMethodDetailsKlarna = {};
export type SetupAttemptPaymentMethodDetailsLink = {};
export type SetupAttemptPaymentMethodDetailsSepaDebit = {};
export type SetupAttemptPaymentMethodDetailsSofort = {
  bank_code: string | null;
  bank_name: string | null;
  bic: string | null;
  generated_sepa_debit: PaymentMethod | string | null;
  generated_sepa_debit_mandate: Mandate | string | null;
  iban_last4: string | null;
  preferred_language: "de" | "en" | "fr" | "nl" | null;
  verified_name: string | null;
};
export type SetupAttemptPaymentMethodDetailsUsBankAccount = {};
export type SetupAttemptPaymentMethodDetails = {
  acss_debit?: SetupAttemptPaymentMethodDetailsAcssDebit;
  au_becs_debit?: SetupAttemptPaymentMethodDetailsAuBecsDebit;
  bacs_debit?: SetupAttemptPaymentMethodDetailsBacsDebit;
  bancontact?: SetupAttemptPaymentMethodDetailsBancontact;
  blik?: SetupAttemptPaymentMethodDetailsBlik;
  boleto?: SetupAttemptPaymentMethodDetailsBoleto;
  card?: SetupAttemptPaymentMethodDetailsCard;
  card_present?: SetupAttemptPaymentMethodDetailsCardPresent;
  cashapp?: SetupAttemptPaymentMethodDetailsCashapp;
  ideal?: SetupAttemptPaymentMethodDetailsIdeal;
  klarna?: SetupAttemptPaymentMethodDetailsKlarna;
  link?: SetupAttemptPaymentMethodDetailsLink;
  sepa_debit?: SetupAttemptPaymentMethodDetailsSepaDebit;
  sofort?: SetupAttemptPaymentMethodDetailsSofort;
  type: string;
  us_bank_account?: SetupAttemptPaymentMethodDetailsUsBankAccount;
};
export type PaymentFlowsSetupIntentSetupAttempt = {
  application: Application | string | null;
  attach_to_self?: boolean;
  created: number;
  customer: Customer | string | null;
  flow_directions: Array<"inbound" | "outbound"> | null;
  id: string;
  livemode: boolean;
  object: "setup_attempt";
  on_behalf_of: Account | string | null;
  payment_method: PaymentMethod | string;
  payment_method_details: SetupAttemptPaymentMethodDetails;
  setup_error: ApiErrors | null;
  setup_intent: SetupIntent | string;
  status: string;
  usage: string;
};
export type PaymentFlowsAutomaticPaymentMethodsSetupIntent = {
  enabled: boolean | null;
};
export type SetupIntentNextActionRedirectToUrl = {
  return_url: string | null;
  url: string | null;
};
export type SetupIntentNextActionVerifyWithMicrodeposits = {
  arrival_date: number;
  hosted_verification_url: string;
  microdeposit_type: "amounts" | "descriptor_code" | null;
};
export type SetupIntentNextAction = {
  cashapp_handle_redirect_or_display_qr_code?: PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode;
  redirect_to_url?: SetupIntentNextActionRedirectToUrl;
  type: string;
  use_stripe_sdk?: unknown /*map*/;
  verify_with_microdeposits?: SetupIntentNextActionVerifyWithMicrodeposits;
};
export type SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit = {
  custom_mandate_url?: string;
  default_for?: Array<"invoice" | "subscription">;
  interval_description: string | null;
  payment_schedule: "combined" | "interval" | "sporadic" | null;
  transaction_type: "business" | "personal" | null;
};
export type SetupIntentPaymentMethodOptionsAcssDebit = {
  currency: "cad" | "usd" | null;
  mandate_options?: SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit;
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type SetupIntentPaymentMethodOptionsMandateOptionsBlik = {
  expires_after: number | null;
  off_session?: MandateOptionsOffSessionDetailsBlik;
  type: "off_session" | "on_session" | null;
};
export type SetupIntentPaymentMethodOptionsBlik = {
  mandate_options?: SetupIntentPaymentMethodOptionsMandateOptionsBlik;
};
export type SetupIntentPaymentMethodOptionsCardMandateOptions = {
  amount: number;
  amount_type: "fixed" | "maximum";
  currency: string;
  description: string | null;
  end_date: number | null;
  interval: "day" | "month" | "sporadic" | "week" | "year";
  interval_count: number | null;
  reference: string;
  start_date: number;
  supported_types: Array<"india"> | null;
};
export type SetupIntentPaymentMethodOptionsCard = {
  mandate_options: SetupIntentPaymentMethodOptionsCardMandateOptions | null;
  network:
    | "amex"
    | "cartes_bancaires"
    | "diners"
    | "discover"
    | "interac"
    | "jcb"
    | "mastercard"
    | "unionpay"
    | "unknown"
    | "visa"
    | null;
  request_three_d_secure: "any" | "automatic" | "challenge_only" | null;
};
export type SetupIntentPaymentMethodOptionsLink = {
  persistent_token: string | null;
};
export type SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit = {};
export type SetupIntentPaymentMethodOptionsSepaDebit = {
  mandate_options?: SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit;
};
export type SetupIntentPaymentMethodOptionsUsBankAccount = {
  financial_connections?: LinkedAccountOptionsUsBankAccount;
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type SetupIntentPaymentMethodOptions = {
  acss_debit?: SetupIntentPaymentMethodOptionsAcssDebit;
  blik?: SetupIntentPaymentMethodOptionsBlik;
  card?: SetupIntentPaymentMethodOptionsCard;
  link?: SetupIntentPaymentMethodOptionsLink;
  sepa_debit?: SetupIntentPaymentMethodOptionsSepaDebit;
  us_bank_account?: SetupIntentPaymentMethodOptionsUsBankAccount;
};
export type SetupIntent = {
  application: Application | string | null;
  attach_to_self?: boolean;
  automatic_payment_methods: PaymentFlowsAutomaticPaymentMethodsSetupIntent | null;
  cancellation_reason:
    | "abandoned"
    | "duplicate"
    | "requested_by_customer"
    | null;
  client_secret: string | null;
  created: number;
  customer: Customer | string | null;
  description: string | null;
  flow_directions: Array<"inbound" | "outbound"> | null;
  id: string;
  last_setup_error: ApiErrors | null;
  latest_attempt: SetupAttempt | string | null;
  livemode: boolean;
  mandate: Mandate | string | null;
  metadata: unknown /*map*/ | null;
  next_action: SetupIntentNextAction | null;
  object: "setup_intent";
  on_behalf_of: Account | string | null;
  payment_method: PaymentMethod | string | null;
  payment_method_options: SetupIntentPaymentMethodOptions | null;
  payment_method_types: Array<string>;
  single_use_mandate: Mandate | string | null;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  usage: string;
};
export type ShippingRateDeliveryEstimateBound = {
  unit: "business_day" | "day" | "hour" | "month" | "week";
  value: number;
};
export type ShippingRateDeliveryEstimate = {
  maximum: ShippingRateDeliveryEstimateBound | null;
  minimum: ShippingRateDeliveryEstimateBound | null;
};
export type ShippingRateFixedAmount = {
  amount: number;
  currency: string;
  currency_options?: unknown /*map*/;
};
export type ShippingRate = {
  active: boolean;
  created: number;
  delivery_estimate: ShippingRateDeliveryEstimate | null;
  display_name: string | null;
  fixed_amount?: ShippingRateFixedAmount;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "shipping_rate";
  tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
  tax_code: TaxCode | string | null;
  type: "fixed_amount";
};
export type SourceCodeVerificationFlow = {
  attempts_remaining: number;
  status: string;
};
export type SourceOwner = {
  address: Address | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  verified_address: Address | null;
  verified_email: string | null;
  verified_name: string | null;
  verified_phone: string | null;
};
export type SourceReceiverFlow = {
  address: string | null;
  amount_charged: number;
  amount_received: number;
  amount_returned: number;
  refund_attributes_method: string;
  refund_attributes_status: string;
};
export type SourceRedirectFlow = {
  failure_reason: string | null;
  return_url: string;
  status: string;
  url: string;
};
export type SourceOrderItem = {
  amount: number | null;
  currency: string | null;
  description: string | null;
  parent: string | null;
  quantity?: number;
  type: string | null;
};
export type SourceOrder = {
  amount: number;
  currency: string;
  email?: string;
  items: Array<SourceOrderItem> | null;
  shipping?: Shipping;
};
export type Source = {
  ach_credit_transfer?: {
    account_number?: string | null;
    bank_name?: string | null;
    fingerprint?: string | null;
    refund_account_holder_name?: string | null;
    refund_account_holder_type?: string | null;
    refund_routing_number?: string | null;
    routing_number?: string | null;
    swift_code?: string | null;
  };
  ach_debit?: {
    bank_name?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    routing_number?: string | null;
    type?: string | null;
  };
  acss_debit?: {
    bank_address_city?: string | null;
    bank_address_line_1?: string | null;
    bank_address_line_2?: string | null;
    bank_address_postal_code?: string | null;
    bank_name?: string | null;
    category?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    routing_number?: string | null;
  };
  alipay?: {
    data_string?: string | null;
    native_url?: string | null;
    statement_descriptor?: string | null;
  };
  amount: number | null;
  au_becs_debit?: {
    bsb_number?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
  };
  bancontact?: {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    iban_last4?: string | null;
    preferred_language?: string | null;
    statement_descriptor?: string | null;
  };
  card?: {
    address_line1_check?: string | null;
    address_zip_check?: string | null;
    brand?: string | null;
    country?: string | null;
    cvc_check?: string | null;
    description?: string;
    dynamic_last4?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    iin?: string;
    issuer?: string;
    last4?: string | null;
    name?: string | null;
    three_d_secure?: string;
    tokenization_method?: string | null;
  };
  card_present?: {
    application_cryptogram?: string;
    application_preferred_name?: string;
    authorization_code?: string | null;
    authorization_response_code?: string;
    brand?: string | null;
    country?: string | null;
    cvm_type?: string;
    data_type?: string | null;
    dedicated_file_name?: string;
    description?: string;
    emv_auth_data?: string;
    evidence_customer_signature?: string | null;
    evidence_transaction_certificate?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    iin?: string;
    issuer?: string;
    last4?: string | null;
    pos_device_id?: string | null;
    pos_entry_mode?: string;
    read_method?: string | null;
    reader?: string | null;
    terminal_verification_results?: string;
    transaction_status_information?: string;
  };
  client_secret: string;
  code_verification?: SourceCodeVerificationFlow;
  created: number;
  currency: string | null;
  customer?: string;
  eps?: { reference?: string | null; statement_descriptor?: string | null };
  flow: string;
  giropay?: {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    statement_descriptor?: string | null;
  };
  id: string;
  ideal?: {
    bank?: string | null;
    bic?: string | null;
    iban_last4?: string | null;
    statement_descriptor?: string | null;
  };
  klarna?: {
    background_image_url?: string;
    client_token?: string | null;
    first_name?: string;
    last_name?: string;
    locale?: string;
    logo_url?: string;
    page_title?: string;
    pay_later_asset_urls_descriptive?: string;
    pay_later_asset_urls_standard?: string;
    pay_later_name?: string;
    pay_later_redirect_url?: string;
    pay_now_asset_urls_descriptive?: string;
    pay_now_asset_urls_standard?: string;
    pay_now_name?: string;
    pay_now_redirect_url?: string;
    pay_over_time_asset_urls_descriptive?: string;
    pay_over_time_asset_urls_standard?: string;
    pay_over_time_name?: string;
    pay_over_time_redirect_url?: string;
    payment_method_categories?: string;
    purchase_country?: string;
    purchase_type?: string;
    redirect_url?: string;
    shipping_delay?: number;
    shipping_first_name?: string;
    shipping_last_name?: string;
  };
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  multibanco?: {
    entity?: string | null;
    reference?: string | null;
    refund_account_holder_address_city?: string | null;
    refund_account_holder_address_country?: string | null;
    refund_account_holder_address_line1?: string | null;
    refund_account_holder_address_line2?: string | null;
    refund_account_holder_address_postal_code?: string | null;
    refund_account_holder_address_state?: string | null;
    refund_account_holder_name?: string | null;
    refund_iban?: string | null;
  };
  object: "source";
  owner: SourceOwner | null;
  p24?: { reference?: string | null };
  receiver?: SourceReceiverFlow;
  redirect?: SourceRedirectFlow;
  sepa_credit_transfer?: {
    bank_name?: string | null;
    bic?: string | null;
    iban?: string | null;
    refund_account_holder_address_city?: string | null;
    refund_account_holder_address_country?: string | null;
    refund_account_holder_address_line1?: string | null;
    refund_account_holder_address_line2?: string | null;
    refund_account_holder_address_postal_code?: string | null;
    refund_account_holder_address_state?: string | null;
    refund_account_holder_name?: string | null;
    refund_iban?: string | null;
  };
  sepa_debit?: {
    bank_code?: string | null;
    branch_code?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    mandate_reference?: string | null;
    mandate_url?: string | null;
  };
  sofort?: {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    country?: string | null;
    iban_last4?: string | null;
    preferred_language?: string | null;
    statement_descriptor?: string | null;
  };
  source_order?: SourceOrder;
  statement_descriptor: string | null;
  status: string;
  three_d_secure?: {
    address_line1_check?: string | null;
    address_zip_check?: string | null;
    authenticated?: boolean | null;
    brand?: string | null;
    card?: string | null;
    country?: string | null;
    customer?: string | null;
    cvc_check?: string | null;
    description?: string;
    dynamic_last4?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    iin?: string;
    issuer?: string;
    last4?: string | null;
    name?: string | null;
    three_d_secure?: string;
    tokenization_method?: string | null;
  };
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "acss_debit"
    | "alipay"
    | "au_becs_debit"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_credit_transfer"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
  usage: string | null;
  wechat?: {
    prepay_id?: string;
    qr_code_url?: string | null;
    statement_descriptor?: string;
  };
};
export type SourceMandateNotificationAcssDebitData = {
  statement_descriptor?: string;
};
export type SourceMandateNotificationBacsDebitData = { last4?: string };
export type SourceMandateNotificationSepaDebitData = {
  creditor_identifier?: string;
  last4?: string;
  mandate_reference?: string;
};
export type SourceMandateNotification = {
  acss_debit?: SourceMandateNotificationAcssDebitData;
  amount: number | null;
  bacs_debit?: SourceMandateNotificationBacsDebitData;
  created: number;
  id: string;
  livemode: boolean;
  object: "source_mandate_notification";
  reason: string;
  sepa_debit?: SourceMandateNotificationSepaDebitData;
  source: Source;
  status: string;
  type: string;
};
export type SourceTransactionAchCreditTransferData = {
  customer_data?: string;
  fingerprint?: string;
  last4?: string;
  routing_number?: string;
};
export type SourceTransactionChfCreditTransferData = {
  reference?: string;
  sender_address_country?: string;
  sender_address_line1?: string;
  sender_iban?: string;
  sender_name?: string;
};
export type SourceTransactionGbpCreditTransferData = {
  fingerprint?: string;
  funding_method?: string;
  last4?: string;
  reference?: string;
  sender_account_number?: string;
  sender_name?: string;
  sender_sort_code?: string;
};
export type SourceTransactionPaperCheckData = {
  available_at?: string;
  invoices?: string;
};
export type SourceTransactionSepaCreditTransferData = {
  reference?: string;
  sender_iban?: string;
  sender_name?: string;
};
export type SourceTransaction = {
  ach_credit_transfer?: SourceTransactionAchCreditTransferData;
  amount: number;
  chf_credit_transfer?: SourceTransactionChfCreditTransferData;
  created: number;
  currency: string;
  gbp_credit_transfer?: SourceTransactionGbpCreditTransferData;
  id: string;
  livemode: boolean;
  object: "source_transaction";
  paper_check?: SourceTransactionPaperCheckData;
  sepa_credit_transfer?: SourceTransactionSepaCreditTransferData;
  source: string;
  status: string;
  type:
    | "ach_credit_transfer"
    | "ach_debit"
    | "alipay"
    | "bancontact"
    | "card"
    | "card_present"
    | "eps"
    | "giropay"
    | "ideal"
    | "klarna"
    | "multibanco"
    | "p24"
    | "sepa_debit"
    | "sofort"
    | "three_d_secure"
    | "wechat";
};
export type SubscriptionAutomaticTax = { enabled: boolean };
export type SubscriptionBillingThresholds = {
  amount_gte: number | null;
  reset_billing_cycle_anchor: boolean | null;
};
export type CancellationDetails = {
  comment: string | null;
  feedback:
    | "customer_service"
    | "low_quality"
    | "missing_features"
    | "other"
    | "switched_service"
    | "too_complex"
    | "too_expensive"
    | "unused"
    | null;
  reason:
    | "cancellation_requested"
    | "payment_disputed"
    | "payment_failed"
    | null;
};
export type SubscriptionsResourcePauseCollection = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumes_at: number | null;
};
export type InvoiceMandateOptionsCard = {
  amount: number | null;
  amount_type: "fixed" | "maximum" | null;
  description: string | null;
};
export type SubscriptionPaymentMethodOptionsCard = {
  mandate_options?: InvoiceMandateOptionsCard;
  network:
    | "amex"
    | "cartes_bancaires"
    | "diners"
    | "discover"
    | "interac"
    | "jcb"
    | "mastercard"
    | "unionpay"
    | "unknown"
    | "visa"
    | null;
  request_three_d_secure: "any" | "automatic" | null;
};
export type SubscriptionsResourcePaymentMethodOptions = {
  acss_debit: InvoicePaymentMethodOptionsAcssDebit | null;
  bancontact: InvoicePaymentMethodOptionsBancontact | null;
  card: SubscriptionPaymentMethodOptionsCard | null;
  customer_balance: InvoicePaymentMethodOptionsCustomerBalance | null;
  konbini: InvoicePaymentMethodOptionsKonbini | null;
  us_bank_account: InvoicePaymentMethodOptionsUsBankAccount | null;
};
export type SubscriptionsResourcePaymentSettings = {
  payment_method_options: SubscriptionsResourcePaymentMethodOptions | null;
  payment_method_types: Array<
    | "ach_credit_transfer"
    | "ach_debit"
    | "acss_debit"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "boleto"
    | "card"
    | "cashapp"
    | "customer_balance"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "konbini"
    | "link"
    | "paynow"
    | "promptpay"
    | "sepa_credit_transfer"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay"
  > | null;
  save_default_payment_method: "off" | "on_subscription" | null;
};
export type SubscriptionPendingInvoiceItemInterval = {
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
};
export type SubscriptionsResourcePendingUpdate = {
  billing_cycle_anchor: number | null;
  expires_at: number;
  subscription_items: Array<SubscriptionItem> | null;
  trial_end: number | null;
  trial_from_plan: boolean | null;
};
export type SubscriptionTransferData = {
  amount_percent: number | null;
  destination: Account | string;
};
export type SubscriptionsTrialsResourceEndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};
export type SubscriptionsTrialsResourceTrialSettings = {
  end_behavior: SubscriptionsTrialsResourceEndBehavior;
};
export type Subscription = {
  application: Application | string | null;
  application_fee_percent: number | null;
  automatic_tax: SubscriptionAutomaticTax;
  billing_cycle_anchor: number;
  billing_thresholds: SubscriptionBillingThresholds | null;
  cancel_at: number | null;
  cancel_at_period_end: boolean;
  canceled_at: number | null;
  cancellation_details: CancellationDetails | null;
  collection_method: "charge_automatically" | "send_invoice";
  created: number;
  currency: string;
  current_period_end: number;
  current_period_start: number;
  customer: Customer | string;
  days_until_due: number | null;
  default_payment_method: PaymentMethod | string | null;
  default_source: Account | BankAccount | Card | Source | string | null;
  default_tax_rates?: Array<TaxRate> | null;
  description: string | null;
  discount: Discount | null;
  ended_at: number | null;
  id: string;
  items: List<SubscriptionItem>;
  latest_invoice: Invoice | string | null;
  livemode: boolean;
  metadata: unknown /*map*/;
  next_pending_invoice_item_invoice: number | null;
  object: "subscription";
  on_behalf_of: Account | string | null;
  pause_collection: SubscriptionsResourcePauseCollection | null;
  payment_settings: SubscriptionsResourcePaymentSettings | null;
  pending_invoice_item_interval: SubscriptionPendingInvoiceItemInterval | null;
  pending_setup_intent: SetupIntent | string | null;
  pending_update: SubscriptionsResourcePendingUpdate | null;
  schedule: SubscriptionSchedule | string | null;
  start_date: number;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
  test_clock: TestHelpersTestClock | string | null;
  transfer_data: SubscriptionTransferData | null;
  trial_end: number | null;
  trial_settings: SubscriptionsTrialsResourceTrialSettings | null;
  trial_start: number | null;
};
export type SubscriptionItemBillingThresholds = { usage_gte: number | null };
export type SubscriptionItem = {
  billing_thresholds: SubscriptionItemBillingThresholds | null;
  created: number;
  id: string;
  metadata: unknown /*map*/;
  object: "subscription_item";
  plan: Plan;
  price: Price;
  quantity?: number;
  subscription: string;
  tax_rates: Array<TaxRate> | null;
};
export type UsageRecord = {
  id: string;
  livemode: boolean;
  object: "usage_record";
  quantity: number;
  subscription_item: string;
  timestamp: number;
};
export type Period = { end: number; start: number };
export type UsageRecordSummary = {
  id: string;
  invoice: string | null;
  livemode: boolean;
  object: "usage_record_summary";
  period: Period;
  subscription_item: string;
  total_usage: number;
};
export type SubscriptionScheduleCurrentPhase = {
  end_date: number;
  start_date: number;
};
export type SubscriptionSchedulesResourceDefaultSettingsAutomaticTax = {
  enabled: boolean;
};
export type InvoiceSettingSubscriptionScheduleSetting = {
  days_until_due: number | null;
};
export type SubscriptionSchedulesResourceDefaultSettings = {
  application_fee_percent: number | null;
  automatic_tax?: SubscriptionSchedulesResourceDefaultSettingsAutomaticTax;
  billing_cycle_anchor: "automatic" | "phase_start";
  billing_thresholds: SubscriptionBillingThresholds | null;
  collection_method: "charge_automatically" | "send_invoice" | null;
  default_payment_method: PaymentMethod | string | null;
  description: string | null;
  invoice_settings: InvoiceSettingSubscriptionScheduleSetting | null;
  on_behalf_of: Account | string | null;
  transfer_data: SubscriptionTransferData | null;
};
export type SubscriptionScheduleAddInvoiceItem = {
  price: Price | string;
  quantity: number | null;
  tax_rates?: Array<TaxRate> | null;
};
export type SchedulesPhaseAutomaticTax = { enabled: boolean };
export type InvoiceSettingPhaseSetting = { days_until_due: number | null };
export type SubscriptionScheduleConfigurationItem = {
  billing_thresholds: SubscriptionItemBillingThresholds | null;
  metadata: unknown /*map*/ | null;
  plan: Plan | string;
  price: Price | string;
  quantity?: number;
  tax_rates?: Array<TaxRate> | null;
};
export type SubscriptionSchedulePhaseConfiguration = {
  add_invoice_items: Array<SubscriptionScheduleAddInvoiceItem>;
  application_fee_percent: number | null;
  automatic_tax?: SchedulesPhaseAutomaticTax;
  billing_cycle_anchor: "automatic" | "phase_start" | null;
  billing_thresholds: SubscriptionBillingThresholds | null;
  collection_method: "charge_automatically" | "send_invoice" | null;
  coupon: Coupon | string | null;
  currency: string;
  default_payment_method: PaymentMethod | string | null;
  default_tax_rates?: Array<TaxRate> | null;
  description: string | null;
  end_date: number;
  invoice_settings: InvoiceSettingPhaseSetting | null;
  items: Array<SubscriptionScheduleConfigurationItem>;
  metadata: unknown /*map*/ | null;
  on_behalf_of: Account | string | null;
  proration_behavior: "always_invoice" | "create_prorations" | "none";
  start_date: number;
  transfer_data: SubscriptionTransferData | null;
  trial_end: number | null;
};
export type SubscriptionSchedule = {
  application: Application | string | null;
  canceled_at: number | null;
  completed_at: number | null;
  created: number;
  current_phase: SubscriptionScheduleCurrentPhase | null;
  customer: Customer | string;
  default_settings: SubscriptionSchedulesResourceDefaultSettings;
  end_behavior: "cancel" | "none" | "release" | "renew";
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  object: "subscription_schedule";
  phases: Array<SubscriptionSchedulePhaseConfiguration>;
  released_at: number | null;
  released_subscription: string | null;
  status: "active" | "canceled" | "completed" | "not_started" | "released";
  subscription: Subscription | string | null;
  test_clock: TestHelpersTestClock | string | null;
};
export type TaxProductResourceTaxCode = {
  description: string;
  id: string;
  name: string;
  object: "tax_code";
};
export type TaxDeductedAtSource = {
  id: string;
  object: "tax_deducted_at_source";
  period_end: number;
  period_start: number;
  tax_deduction_account_number: string;
};
export type TaxRate = {
  active: boolean;
  country: string | null;
  created: number;
  description: string | null;
  display_name: string;
  id: string;
  inclusive: boolean;
  jurisdiction: string | null;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  object: "tax_rate";
  percentage: number;
  state: string | null;
  tax_type:
    | "gst"
    | "hst"
    | "igst"
    | "jct"
    | "lease_tax"
    | "pst"
    | "qst"
    | "rst"
    | "sales_tax"
    | "vat"
    | null;
};
export type TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig =
  {
    splashscreen?: File | string;
  };
export type TerminalConfigurationConfigurationResourceCurrencySpecificConfig = {
  fixed_amounts?: Array<number> | null;
  percentages?: Array<number> | null;
  smart_tip_threshold?: number;
};
export type TerminalConfigurationConfigurationResourceTipping = {
  aud?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  cad?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  chf?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  czk?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  dkk?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  eur?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  gbp?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  hkd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  myr?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  nok?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  nzd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  sek?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  sgd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
  usd?: TerminalConfigurationConfigurationResourceCurrencySpecificConfig;
};
export type TerminalTerminalConfigurationConfiguration = {
  bbpos_wisepos_e?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig;
  id: string;
  is_account_default: boolean | null;
  livemode: boolean;
  object: "terminal.configuration";
  tipping?: TerminalConfigurationConfigurationResourceTipping;
  verifone_p400?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig;
};
export type TerminalTerminalConnectionToken = {
  location?: string;
  object: "terminal.connection_token";
  secret: string;
};
export type TerminalTerminalLocationLocation = {
  address: Address;
  configuration_overrides?: string;
  display_name: string;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "terminal.location";
};
export type TerminalReaderReaderResourceTippingConfig = {
  amount_eligible?: number;
};
export type TerminalReaderReaderResourceProcessConfig = {
  skip_tipping?: boolean;
  tipping?: TerminalReaderReaderResourceTippingConfig;
};
export type TerminalReaderReaderResourceProcessPaymentIntentAction = {
  payment_intent: PaymentIntent | string;
  process_config?: TerminalReaderReaderResourceProcessConfig;
};
export type TerminalReaderReaderResourceProcessSetupIntentAction = {
  generated_card?: string;
  setup_intent: SetupIntent | string;
};
export type TerminalReaderReaderResourceRefundPaymentAction = {
  amount?: number;
  charge?: Charge | string;
  metadata?: unknown /*map*/;
  payment_intent?: PaymentIntent | string;
  reason?: "duplicate" | "fraudulent" | "requested_by_customer";
  refund?: Refund | string;
  refund_application_fee?: boolean;
  reverse_transfer?: boolean;
};
export type TerminalReaderReaderResourceLineItem = {
  amount: number;
  description: string;
  quantity: number;
};
export type TerminalReaderReaderResourceCart = {
  currency: string;
  line_items: Array<TerminalReaderReaderResourceLineItem>;
  tax: number | null;
  total: number;
};
export type TerminalReaderReaderResourceSetReaderDisplayAction = {
  cart: TerminalReaderReaderResourceCart | null;
  type: "cart";
};
export type TerminalReaderReaderResourceReaderAction = {
  failure_code: string | null;
  failure_message: string | null;
  process_payment_intent?: TerminalReaderReaderResourceProcessPaymentIntentAction;
  process_setup_intent?: TerminalReaderReaderResourceProcessSetupIntentAction;
  refund_payment?: TerminalReaderReaderResourceRefundPaymentAction;
  set_reader_display?: TerminalReaderReaderResourceSetReaderDisplayAction;
  status: "failed" | "in_progress" | "succeeded";
  type:
    | "process_payment_intent"
    | "process_setup_intent"
    | "refund_payment"
    | "set_reader_display";
};
export type TerminalTerminalReaderReader = {
  action: TerminalReaderReaderResourceReaderAction | null;
  device_sw_version: string | null;
  device_type:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "verifone_P400";
  id: string;
  ip_address: string | null;
  label: string;
  livemode: boolean;
  location: TerminalLocation | string | null;
  metadata: unknown /*map*/;
  object: "terminal.reader";
  serial_number: string;
  status: string | null;
};
export type TestHelpersTestClock = {
  created: number;
  deletes_after: number;
  frozen_time: number;
  id: string;
  livemode: boolean;
  name: string | null;
  object: "test_helpers.test_clock";
  status: "advancing" | "internal_failure" | "ready";
};
export type Token = {
  bank_account?: BankAccount;
  card?: Card;
  client_ip: string | null;
  created: number;
  id: string;
  livemode: boolean;
  object: "token";
  type: string;
  used: boolean;
};
export type Topup = {
  amount: number;
  balance_transaction: BalanceTransaction | string | null;
  created: number;
  currency: string;
  description: string | null;
  expected_availability_date: number | null;
  failure_code: string | null;
  failure_message: string | null;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "topup";
  source: Source | null;
  statement_descriptor: string | null;
  status: "canceled" | "failed" | "pending" | "reversed" | "succeeded";
  transfer_group: string | null;
};
export type Transfer = {
  amount: number;
  amount_reversed: number;
  balance_transaction: BalanceTransaction | string | null;
  created: number;
  currency: string;
  description: string | null;
  destination: Account | string | null;
  destination_payment?: Charge | string;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "transfer";
  reversals: List<TransferReversal>;
  reversed: boolean;
  source_transaction: Charge | string | null;
  source_type?: string;
  transfer_group: string | null;
};
export type TransferReversal = {
  amount: number;
  balance_transaction: BalanceTransaction | string | null;
  created: number;
  currency: string;
  destination_payment_refund: Refund | string | null;
  id: string;
  metadata: unknown /*map*/ | null;
  object: "transfer_reversal";
  source_refund: Refund | string | null;
  transfer: Transfer | string;
};
export type TreasuryReceivedCreditsResourceStatusTransitions = {
  posted_at: number | null;
};
export type TreasuryTreasuryReceivedCreditsResourceCreditReversal = {
  amount: number;
  created: number;
  currency: string;
  financial_account: string;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  network: "ach" | "stripe";
  object: "treasury.credit_reversal";
  received_credit: string;
  status: "canceled" | "posted" | "processing";
  status_transitions: TreasuryReceivedCreditsResourceStatusTransitions;
  transaction: TreasuryTransaction | string | null;
};
export type TreasuryReceivedDebitsResourceDebitReversalLinkedFlows = {
  issuing_dispute: string | null;
};
export type TreasuryReceivedDebitsResourceStatusTransitions = {
  completed_at: number | null;
};
export type TreasuryTreasuryReceivedDebitsResourceDebitReversal = {
  amount: number;
  created: number;
  currency: string;
  financial_account: string | null;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  linked_flows: TreasuryReceivedDebitsResourceDebitReversalLinkedFlows | null;
  livemode: boolean;
  metadata: unknown /*map*/;
  network: "ach" | "card";
  object: "treasury.debit_reversal";
  received_debit: string;
  status: "failed" | "processing" | "succeeded";
  status_transitions: TreasuryReceivedDebitsResourceStatusTransitions;
  transaction: TreasuryTransaction | string | null;
};
export type TreasuryFinancialAccountsResourceBalance = {
  cash: unknown /*map*/;
  inbound_pending: unknown /*map*/;
  outbound_pending: unknown /*map*/;
};
export type TreasuryFinancialAccountsResourceAbaRecord = {
  account_holder_name: string;
  account_number: string | null;
  account_number_last4: string;
  bank_name: string;
  routing_number: string;
};
export type TreasuryFinancialAccountsResourceFinancialAddress = {
  aba?: TreasuryFinancialAccountsResourceAbaRecord;
  supported_networks?: Array<"ach" | "us_domestic_wire">;
  type: "aba";
};
export type TreasuryFinancialAccountsResourcePlatformRestrictions = {
  inbound_flows: "restricted" | "unrestricted" | null;
  outbound_flows: "restricted" | "unrestricted" | null;
};
export type TreasuryFinancialAccountsResourceClosedStatusDetails = {
  reasons: Array<"account_rejected" | "closed_by_platform" | "other">;
};
export type TreasuryFinancialAccountsResourceStatusDetails = {
  closed: TreasuryFinancialAccountsResourceClosedStatusDetails | null;
};
export type TreasuryTreasuryFinancialAccountsResourceFinancialAccount = {
  active_features?: Array<
    | "card_issuing"
    | "deposit_insurance"
    | "financial_addresses.aba"
    | "inbound_transfers.ach"
    | "intra_stripe_flows"
    | "outbound_payments.ach"
    | "outbound_payments.us_domestic_wire"
    | "outbound_transfers.ach"
    | "outbound_transfers.us_domestic_wire"
    | "remote_deposit_capture"
  >;
  balance: TreasuryFinancialAccountsResourceBalance;
  country: string;
  created: number;
  features?: TreasuryFinancialAccountFeatures;
  financial_addresses: Array<TreasuryFinancialAccountsResourceFinancialAddress>;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/ | null;
  object: "treasury.financial_account";
  pending_features?: Array<
    | "card_issuing"
    | "deposit_insurance"
    | "financial_addresses.aba"
    | "inbound_transfers.ach"
    | "intra_stripe_flows"
    | "outbound_payments.ach"
    | "outbound_payments.us_domestic_wire"
    | "outbound_transfers.ach"
    | "outbound_transfers.us_domestic_wire"
    | "remote_deposit_capture"
  >;
  platform_restrictions?: TreasuryFinancialAccountsResourcePlatformRestrictions | null;
  restricted_features?: Array<
    | "card_issuing"
    | "deposit_insurance"
    | "financial_addresses.aba"
    | "inbound_transfers.ach"
    | "intra_stripe_flows"
    | "outbound_payments.ach"
    | "outbound_payments.us_domestic_wire"
    | "outbound_transfers.ach"
    | "outbound_transfers.us_domestic_wire"
    | "remote_deposit_capture"
  >;
  status: "closed" | "open";
  status_details: TreasuryFinancialAccountsResourceStatusDetails;
  supported_currencies: Array<string>;
};
export type TreasuryFinancialAccountsResourceTogglesSettingStatusDetails = {
  code:
    | "activating"
    | "capability_not_requested"
    | "financial_account_closed"
    | "rejected_other"
    | "rejected_unsupported_business"
    | "requirements_past_due"
    | "requirements_pending_verification"
    | "restricted_by_platform"
    | "restricted_other";
  resolution:
    | "contact_stripe"
    | "provide_information"
    | "remove_restriction"
    | null;
  restriction?: "inbound_flows" | "outbound_flows";
};
export type TreasuryFinancialAccountsResourceToggleSettings = {
  requested: boolean;
  status: "active" | "pending" | "restricted";
  status_details: Array<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>;
};
export type TreasuryFinancialAccountsResourceFinancialAddressesFeatures = {
  aba?: TreasuryFinancialAccountsResourceToggleSettings;
};
export type TreasuryFinancialAccountsResourceAchToggleSettings = {
  requested: boolean;
  status: "active" | "pending" | "restricted";
  status_details: Array<TreasuryFinancialAccountsResourceTogglesSettingStatusDetails>;
};
export type TreasuryFinancialAccountsResourceInboundTransfers = {
  ach?: TreasuryFinancialAccountsResourceAchToggleSettings;
};
export type TreasuryFinancialAccountsResourceOutboundPayments = {
  ach?: TreasuryFinancialAccountsResourceAchToggleSettings;
  us_domestic_wire?: TreasuryFinancialAccountsResourceToggleSettings;
};
export type TreasuryFinancialAccountsResourceOutboundTransfers = {
  ach?: TreasuryFinancialAccountsResourceAchToggleSettings;
  us_domestic_wire?: TreasuryFinancialAccountsResourceToggleSettings;
};
export type TreasuryTreasuryFinancialAccountsResourceFinancialAccountFeatures =
  {
    card_issuing?: TreasuryFinancialAccountsResourceToggleSettings;
    deposit_insurance?: TreasuryFinancialAccountsResourceToggleSettings;
    financial_addresses?: TreasuryFinancialAccountsResourceFinancialAddressesFeatures;
    inbound_transfers?: TreasuryFinancialAccountsResourceInboundTransfers;
    intra_stripe_flows?: TreasuryFinancialAccountsResourceToggleSettings;
    object: "treasury.financial_account_features";
    outbound_payments?: TreasuryFinancialAccountsResourceOutboundPayments;
    outbound_transfers?: TreasuryFinancialAccountsResourceOutboundTransfers;
  };
export type TreasuryInboundTransfersResourceFailureDetails = {
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "debit_not_authorized"
    | "incorrect_account_holder_address"
    | "incorrect_account_holder_name"
    | "incorrect_account_holder_tax_id"
    | "insufficient_funds"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
};
export type TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows =
  {
    received_debit: string | null;
  };
export type TreasurySharedResourceBillingDetails = {
  address: Address;
  email: string | null;
  name: string | null;
};
export type InboundTransfersPaymentMethodDetailsUsBankAccount = {
  account_holder_type: "company" | "individual" | null;
  account_type: "checking" | "savings" | null;
  bank_name: string | null;
  fingerprint: string | null;
  last4: string | null;
  network: "ach";
  routing_number: string | null;
};
export type InboundTransfers = { ach?: AccessWithAchDetails };
export type TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions =
  {
    canceled_at?: number | null;
    failed_at: number | null;
    succeeded_at: number | null;
  };
export type TreasuryTreasuryInboundTransfersResourceInboundTransfer = {
  amount: number;
  cancelable: boolean;
  created: number;
  currency: string;
  description: string | null;
  failure_details: TreasuryInboundTransfersResourceFailureDetails | null;
  financial_account: string;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  linked_flows: TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "treasury.inbound_transfer";
  origin_payment_method: string;
  origin_payment_method_details: InboundTransfers | null;
  returned: boolean | null;
  statement_descriptor: string;
  status: "canceled" | "failed" | "processing" | "succeeded";
  status_transitions: TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions;
  transaction: TreasuryTransaction | string | null;
};
export type OutboundPaymentsPaymentMethodDetailsFinancialAccount = {
  id: string;
  network: "stripe";
};
export type OutboundPaymentsPaymentMethodDetailsUsBankAccount = {
  account_holder_type: "company" | "individual" | null;
  account_type: "checking" | "savings" | null;
  bank_name: string | null;
  fingerprint: string | null;
  last4: string | null;
  network: "ach" | "us_domestic_wire";
  routing_number: string | null;
};
export type OutboundPaymentsPaymentMethodDetails = {
  billing_details: TreasurySharedResourceBillingDetails;
  financial_account?: OutboundPaymentsPaymentMethodDetailsFinancialAccount;
  type: "financial_account" | "us_bank_account";
  us_bank_account?: OutboundPaymentsPaymentMethodDetailsUsBankAccount;
};
export type TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails =
  {
    ip_address: string | null;
    present: boolean;
  };
export type TreasuryOutboundPaymentsResourceReturnedStatus = {
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "declined"
    | "incorrect_account_holder_name"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
  transaction: TreasuryTransaction | string;
};
export type TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions =
  {
    canceled_at: number | null;
    failed_at: number | null;
    posted_at: number | null;
    returned_at: number | null;
  };
export type TreasuryTreasuryOutboundPaymentsResourceOutboundPayment = {
  amount: number;
  cancelable: boolean;
  created: number;
  currency: string;
  customer: string | null;
  description: string | null;
  destination_payment_method: string | null;
  destination_payment_method_details: OutboundPaymentsPaymentMethodDetails | null;
  end_user_details: TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails | null;
  expected_arrival_date: number;
  financial_account: string;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "treasury.outbound_payment";
  returned_details: TreasuryOutboundPaymentsResourceReturnedStatus | null;
  statement_descriptor: string;
  status: "canceled" | "failed" | "posted" | "processing" | "returned";
  status_transitions: TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions;
  transaction: TreasuryTransaction | string;
};
export type OutboundTransfersPaymentMethodDetailsUsBankAccount = {
  account_holder_type: "company" | "individual" | null;
  account_type: "checking" | "savings" | null;
  bank_name: string | null;
  fingerprint: string | null;
  last4: string | null;
  network: "ach" | "us_domestic_wire";
  routing_number: string | null;
};
export type OutboundTransfersPaymentMethodDetails = {
  billing_details: TreasurySharedResourceBillingDetails;
  type: "us_bank_account";
  us_bank_account?: OutboundTransfersPaymentMethodDetailsUsBankAccount;
};
export type TreasuryOutboundTransfersResourceReturnedDetails = {
  code:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "declined"
    | "incorrect_account_holder_name"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
  transaction: TreasuryTransaction | string;
};
export type TreasuryOutboundTransfersResourceStatusTransitions = {
  canceled_at: number | null;
  failed_at: number | null;
  posted_at: number | null;
  returned_at: number | null;
};
export type TreasuryTreasuryOutboundTransfersResourceOutboundTransfer = {
  amount: number;
  cancelable: boolean;
  created: number;
  currency: string;
  description: string | null;
  destination_payment_method: string | null;
  destination_payment_method_details: OutboundTransfersPaymentMethodDetails;
  expected_arrival_date: number;
  financial_account: string;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "treasury.outbound_transfer";
  returned_details: TreasuryOutboundTransfersResourceReturnedDetails | null;
  statement_descriptor: string;
  status: "canceled" | "failed" | "posted" | "processing" | "returned";
  status_transitions: TreasuryOutboundTransfersResourceStatusTransitions;
  transaction: TreasuryTransaction | string;
};
export type ReceivedPaymentMethodDetailsFinancialAccount = {
  id: string;
  network: "stripe";
};
export type TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount =
  {
    bank_name: string | null;
    last4: string | null;
    routing_number: string | null;
  };
export type TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails =
  {
    balance?: "payments";
    billing_details: TreasurySharedResourceBillingDetails;
    financial_account?: ReceivedPaymentMethodDetailsFinancialAccount;
    issuing_card?: string;
    type:
      | "balance"
      | "financial_account"
      | "issuing_card"
      | "stripe"
      | "us_bank_account";
    us_bank_account?: TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount;
  };
export type TreasuryReceivedCreditsResourceSourceFlowsDetails = {
  credit_reversal?: TreasuryCreditReversal;
  outbound_payment?: TreasuryOutboundPayment;
  payout?: Payout;
  type: "credit_reversal" | "other" | "outbound_payment" | "payout";
};
export type TreasuryReceivedCreditsResourceLinkedFlows = {
  credit_reversal: string | null;
  issuing_authorization: string | null;
  issuing_transaction: string | null;
  source_flow: string | null;
  source_flow_details: TreasuryReceivedCreditsResourceSourceFlowsDetails | null;
  source_flow_type: string | null;
};
export type TreasuryReceivedCreditsResourceReversalDetails = {
  deadline: number | null;
  restricted_reason:
    | "already_reversed"
    | "deadline_passed"
    | "network_restricted"
    | "other"
    | "source_flow_restricted"
    | null;
};
export type TreasuryTreasuryReceivedCreditsResourceReceivedCredit = {
  amount: number;
  created: number;
  currency: string;
  description: string;
  failure_code: "account_closed" | "account_frozen" | "other" | null;
  financial_account: string | null;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  initiating_payment_method_details: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
  linked_flows: TreasuryReceivedCreditsResourceLinkedFlows;
  livemode: boolean;
  network: "ach" | "card" | "stripe" | "us_domestic_wire";
  object: "treasury.received_credit";
  reversal_details: TreasuryReceivedCreditsResourceReversalDetails | null;
  status: "failed" | "succeeded";
  transaction: TreasuryTransaction | string | null;
};
export type TreasuryReceivedDebitsResourceLinkedFlows = {
  debit_reversal: string | null;
  inbound_transfer: string | null;
  issuing_authorization: string | null;
  issuing_transaction: string | null;
};
export type TreasuryReceivedDebitsResourceReversalDetails = {
  deadline: number | null;
  restricted_reason:
    | "already_reversed"
    | "deadline_passed"
    | "network_restricted"
    | "other"
    | "source_flow_restricted"
    | null;
};
export type TreasuryTreasuryReceivedDebitsResourceReceivedDebit = {
  amount: number;
  created: number;
  currency: string;
  description: string;
  failure_code:
    | "account_closed"
    | "account_frozen"
    | "insufficient_funds"
    | "other"
    | null;
  financial_account: string | null;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  initiating_payment_method_details?: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
  linked_flows: TreasuryReceivedDebitsResourceLinkedFlows;
  livemode: boolean;
  network: "ach" | "card" | "stripe";
  object: "treasury.received_debit";
  reversal_details: TreasuryReceivedDebitsResourceReversalDetails | null;
  status: "failed" | "succeeded";
  transaction: TreasuryTransaction | string | null;
};
export type TreasuryTransactionsResourceBalanceImpact = {
  cash: number;
  inbound_pending: number;
  outbound_pending: number;
};
export type TreasuryTreasuryTransactionsResourceFlowDetails = {
  credit_reversal?: TreasuryCreditReversal;
  debit_reversal?: TreasuryDebitReversal;
  inbound_transfer?: TreasuryInboundTransfer;
  issuing_authorization?: IssuingAuthorization;
  outbound_payment?: TreasuryOutboundPayment;
  outbound_transfer?: TreasuryOutboundTransfer;
  received_credit?: TreasuryReceivedCredit;
  received_debit?: TreasuryReceivedDebit;
  type:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
};
export type TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions =
  {
    posted_at: number | null;
    void_at: number | null;
  };
export type TreasuryTreasuryTransactionsResourceTransaction = {
  amount: number;
  balance_impact: TreasuryTransactionsResourceBalanceImpact;
  created: number;
  currency: string;
  description: string;
  entries: List<TreasuryTransactionEntry> | null;
  financial_account: string;
  flow: string | null;
  flow_details: TreasuryTreasuryTransactionsResourceFlowDetails | null;
  flow_type:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
  id: string;
  livemode: boolean;
  object: "treasury.transaction";
  status: "open" | "posted" | "void";
  status_transitions: TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions;
};
export type TreasuryTreasuryTransactionsResourceTransactionEntry = {
  balance_impact: TreasuryTransactionsResourceBalanceImpact;
  created: number;
  currency: string;
  effective_at: number;
  financial_account: string;
  flow: string | null;
  flow_details: TreasuryTreasuryTransactionsResourceFlowDetails | null;
  flow_type:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
  id: string;
  livemode: boolean;
  object: "treasury.transaction_entry";
  transaction: TreasuryTransaction | string;
  type:
    | "credit_reversal"
    | "credit_reversal_posting"
    | "debit_reversal"
    | "inbound_transfer"
    | "inbound_transfer_return"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "other"
    | "outbound_payment"
    | "outbound_payment_cancellation"
    | "outbound_payment_failure"
    | "outbound_payment_posting"
    | "outbound_payment_return"
    | "outbound_transfer"
    | "outbound_transfer_cancellation"
    | "outbound_transfer_failure"
    | "outbound_transfer_posting"
    | "outbound_transfer_return"
    | "received_credit"
    | "received_debit";
};
export type NotificationWebhookEndpoint = {
  api_version: string | null;
  application: string | null;
  created: number;
  description: string | null;
  enabled_events: Array<string>;
  id: string;
  livemode: boolean;
  metadata: unknown /*map*/;
  object: "webhook_endpoint";
  secret?: string;
  status: string;
  url: string;
};
export type GetV1AccountParams = { expand?: Array<string> };
export type GetV1AccountsAccountParams = {
  account: string;
  expand?: Array<string>;
};
export type AddressSpecs = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
};
export type BusinessProfileSpecs = {
  mcc?: string;
  name?: string;
  product_description?: string;
  support_address?: AddressSpecs;
  support_email?: string;
  support_phone?: string;
  support_url?: string | "";
  url?: string;
};
export type CapabilityParam = { requested?: boolean };
export type CapabilitiesParam = {
  acss_debit_payments?: CapabilityParam;
  affirm_payments?: CapabilityParam;
  afterpay_clearpay_payments?: CapabilityParam;
  au_becs_debit_payments?: CapabilityParam;
  bacs_debit_payments?: CapabilityParam;
  bancontact_payments?: CapabilityParam;
  bank_transfer_payments?: CapabilityParam;
  blik_payments?: CapabilityParam;
  boleto_payments?: CapabilityParam;
  card_issuing?: CapabilityParam;
  card_payments?: CapabilityParam;
  cartes_bancaires_payments?: CapabilityParam;
  cashapp_payments?: CapabilityParam;
  eps_payments?: CapabilityParam;
  fpx_payments?: CapabilityParam;
  giropay_payments?: CapabilityParam;
  grabpay_payments?: CapabilityParam;
  ideal_payments?: CapabilityParam;
  india_international_payments?: CapabilityParam;
  jcb_payments?: CapabilityParam;
  klarna_payments?: CapabilityParam;
  konbini_payments?: CapabilityParam;
  legacy_payments?: CapabilityParam;
  link_payments?: CapabilityParam;
  oxxo_payments?: CapabilityParam;
  p24_payments?: CapabilityParam;
  paynow_payments?: CapabilityParam;
  promptpay_payments?: CapabilityParam;
  sepa_debit_payments?: CapabilityParam;
  sofort_payments?: CapabilityParam;
  tax_reporting_us_1099_k?: CapabilityParam;
  tax_reporting_us_1099_misc?: CapabilityParam;
  transfers?: CapabilityParam;
  treasury?: CapabilityParam;
  us_bank_account_ach_payments?: CapabilityParam;
};
export type JapanAddressKanaSpecs = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
  town?: string;
};
export type JapanAddressKanjiSpecs = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
  town?: string;
};
export type CompanyOwnershipDeclaration = {
  date?: number;
  ip?: string;
  user_agent?: string;
};
export type VerificationDocumentSpecs = { back?: string; front?: string };
export type VerificationSpecs = { document?: VerificationDocumentSpecs };
export type CompanySpecs = {
  address?: AddressSpecs;
  address_kana?: JapanAddressKanaSpecs;
  address_kanji?: JapanAddressKanjiSpecs;
  directors_provided?: boolean;
  executives_provided?: boolean;
  name?: string;
  name_kana?: string;
  name_kanji?: string;
  owners_provided?: boolean;
  ownership_declaration?: CompanyOwnershipDeclaration;
  phone?: string;
  registration_number?: string;
  structure?:
    | "free_zone_establishment"
    | "free_zone_llc"
    | "government_instrumentality"
    | "governmental_unit"
    | "incorporated_non_profit"
    | "limited_liability_partnership"
    | "llc"
    | "multi_member_llc"
    | "private_company"
    | "private_corporation"
    | "private_partnership"
    | "public_company"
    | "public_corporation"
    | "public_partnership"
    | "single_member_llc"
    | "sole_establishment"
    | "sole_proprietorship"
    | "tax_exempt_government_instrumentality"
    | "unincorporated_association"
    | "unincorporated_non_profit"
    | "";
  tax_id?: string;
  tax_id_registrar?: string;
  vat_id?: string;
  verification?: VerificationSpecs;
};
export type DocumentsParam = { files?: Array<string> };
export type DocumentsSpecs = {
  bank_account_ownership_verification?: DocumentsParam;
  company_license?: DocumentsParam;
  company_memorandum_of_association?: DocumentsParam;
  company_ministerial_decree?: DocumentsParam;
  company_registration_verification?: DocumentsParam;
  company_tax_id_verification?: DocumentsParam;
  proof_of_registration?: DocumentsParam;
};
export type DateOfBirthSpecs = { day: number; month: number; year: number };
export type PersonVerificationDocumentSpecs = { back?: string; front?: string };
export type PersonVerificationSpecs = {
  additional_document?: PersonVerificationDocumentSpecs;
  document?: PersonVerificationDocumentSpecs;
};
export type IndividualSpecs = {
  address?: AddressSpecs;
  address_kana?: JapanAddressKanaSpecs;
  address_kanji?: JapanAddressKanjiSpecs;
  dob?: DateOfBirthSpecs | "";
  email?: string;
  first_name?: string;
  first_name_kana?: string;
  first_name_kanji?: string;
  full_name_aliases?: Array<string> | "";
  gender?: string;
  id_number?: string;
  id_number_secondary?: string;
  last_name?: string;
  last_name_kana?: string;
  last_name_kanji?: string;
  maiden_name?: string;
  metadata?: unknown /*map*/ | "";
  phone?: string;
  political_exposure?: "existing" | "none";
  registered_address?: AddressSpecs;
  ssn_last_4?: string;
  verification?: PersonVerificationSpecs;
};
export type BrandingSettingsSpecs = {
  icon?: string;
  logo?: string;
  primary_color?: string;
  secondary_color?: string;
};
export type SettingsTermsOfServiceSpecs = {
  date?: number;
  ip?: string;
  user_agent?: string;
};
export type CardIssuingSettingsSpecs = {
  tos_acceptance?: SettingsTermsOfServiceSpecs;
};
export type DeclineChargeOnSpecs = {
  avs_failure?: boolean;
  cvc_failure?: boolean;
};
export type CardPaymentsSettingsSpecs = {
  decline_on?: DeclineChargeOnSpecs;
  statement_descriptor_prefix?: string;
  statement_descriptor_prefix_kana?: string | "";
  statement_descriptor_prefix_kanji?: string | "";
};
export type PaymentsSettingsSpecs = {
  statement_descriptor?: string;
  statement_descriptor_kana?: string;
  statement_descriptor_kanji?: string;
};
export type TransferScheduleSpecs = {
  delay_days?: "minimum" | number;
  interval?: "daily" | "manual" | "monthly" | "weekly";
  monthly_anchor?: number;
  weekly_anchor?:
    | "friday"
    | "monday"
    | "saturday"
    | "sunday"
    | "thursday"
    | "tuesday"
    | "wednesday";
};
export type PayoutSettingsSpecs = {
  debit_negative_balances?: boolean;
  schedule?: TransferScheduleSpecs;
  statement_descriptor?: string;
};
export type TreasurySettingsSpecs = {
  tos_acceptance?: SettingsTermsOfServiceSpecs;
};
export type SettingsSpecsUpdate = {
  branding?: BrandingSettingsSpecs;
  card_issuing?: CardIssuingSettingsSpecs;
  card_payments?: CardPaymentsSettingsSpecs;
  payments?: PaymentsSettingsSpecs;
  payouts?: PayoutSettingsSpecs;
  treasury?: TreasurySettingsSpecs;
};
export type TosAcceptanceSpecs = {
  date?: number;
  ip?: string;
  service_agreement?: string;
  user_agent?: string;
};
export type PostV1AccountsAccountParams = {
  account: string;
  account_token?: string;
  business_profile?: BusinessProfileSpecs;
  business_type?: "company" | "government_entity" | "individual" | "non_profit";
  capabilities?: CapabilitiesParam;
  company?: CompanySpecs;
  default_currency?: string;
  documents?: DocumentsSpecs;
  email?: string;
  expand?: Array<string>;
  external_account?: string;
  individual?: IndividualSpecs;
  metadata?: unknown /*map*/ | "";
  settings?: SettingsSpecsUpdate;
  tos_acceptance?: TosAcceptanceSpecs;
};
export type DeleteV1AccountsAccountParams = { account: string };
export type RangeQuerySpecs = {
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
};
export type GetV1AccountsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type SettingsSpecs = {
  branding?: BrandingSettingsSpecs;
  card_issuing?: CardIssuingSettingsSpecs;
  card_payments?: CardPaymentsSettingsSpecs;
  payments?: PaymentsSettingsSpecs;
  payouts?: PayoutSettingsSpecs;
  treasury?: TreasurySettingsSpecs;
};
export type PostV1AccountsParams = {
  account_token?: string;
  business_profile?: BusinessProfileSpecs;
  business_type?: "company" | "government_entity" | "individual" | "non_profit";
  capabilities?: CapabilitiesParam;
  company?: CompanySpecs;
  country?: string;
  default_currency?: string;
  documents?: DocumentsSpecs;
  email?: string;
  expand?: Array<string>;
  external_account?: string;
  individual?: IndividualSpecs;
  metadata?: unknown /*map*/ | "";
  settings?: SettingsSpecs;
  tos_acceptance?: TosAcceptanceSpecs;
  type?: "custom" | "express" | "standard";
};
export type PostV1AccountsAccountRejectParams = {
  account: string;
  expand?: Array<string>;
  reason: string;
};
export type AllPeopleRelationshipSpecs = {
  director?: boolean;
  executive?: boolean;
  owner?: boolean;
  representative?: boolean;
};
export type GetV1AccountsAccountPersonsParams = {
  account: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  relationship?: AllPeopleRelationshipSpecs;
  starting_after?: string;
};
export type GetV1AccountsAccountCapabilitiesParams = {
  account: string;
  expand?: Array<string>;
};
export type GetV1AccountsAccountCapabilitiesCapabilityParams = {
  account: string;
  capability: string;
  expand?: Array<string>;
};
export type PostV1AccountsAccountCapabilitiesCapabilityParams = {
  account: string;
  capability: string;
  expand?: Array<string>;
  requested?: boolean;
};
export type GetV1AccountsAccountExternalAccountsParams = {
  account: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1AccountsAccountExternalAccountsParams = {
  account: string;
  default_for_currency?: boolean;
  expand?: Array<string>;
  external_account: string;
  metadata?: unknown /*map*/;
};
export type GetV1AccountsAccountExternalAccountsIdParams = {
  account: string;
  id: string;
  expand?: Array<string>;
};
export type ExternalAccountDocumentsParam = {
  bank_account_ownership_verification?: DocumentsParam;
};
export type PostV1AccountsAccountExternalAccountsIdParams = {
  account: string;
  id: string;
  account_holder_name?: string;
  account_holder_type?: "company" | "individual" | "";
  account_type?: "checking" | "futsu" | "savings" | "toza";
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  default_for_currency?: boolean;
  documents?: ExternalAccountDocumentsParam;
  exp_month?: string;
  exp_year?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  name?: string;
};
export type DeleteV1AccountsAccountExternalAccountsIdParams = {
  account: string;
  id: string;
};
export type PostV1AccountsAccountLoginLinksParams = {
  account: string;
  expand?: Array<string>;
};
export type PersonDocumentsSpecs = {
  company_authorization?: DocumentsParam;
  passport?: DocumentsParam;
  visa?: DocumentsParam;
};
export type RelationshipSpecs = {
  director?: boolean;
  executive?: boolean;
  owner?: boolean;
  percent_ownership?: number | "";
  representative?: boolean;
  title?: string;
};
export type PostV1AccountsAccountPersonsParams = {
  account: string;
  address?: AddressSpecs;
  address_kana?: JapanAddressKanaSpecs;
  address_kanji?: JapanAddressKanjiSpecs;
  dob?: DateOfBirthSpecs | "";
  documents?: PersonDocumentsSpecs;
  email?: string;
  expand?: Array<string>;
  first_name?: string;
  first_name_kana?: string;
  first_name_kanji?: string;
  full_name_aliases?: Array<string> | "";
  gender?: string;
  id_number?: string;
  id_number_secondary?: string;
  last_name?: string;
  last_name_kana?: string;
  last_name_kanji?: string;
  maiden_name?: string;
  metadata?: unknown /*map*/ | "";
  nationality?: string;
  person_token?: string;
  phone?: string;
  political_exposure?: string;
  registered_address?: AddressSpecs;
  relationship?: RelationshipSpecs;
  ssn_last_4?: string;
  verification?: PersonVerificationSpecs;
};
export type GetV1AccountsAccountPersonsPersonParams = {
  account: string;
  person: string;
  expand?: Array<string>;
};
export type PostV1AccountsAccountPersonsPersonParams = {
  account: string;
  person: string;
  address?: AddressSpecs;
  address_kana?: JapanAddressKanaSpecs;
  address_kanji?: JapanAddressKanjiSpecs;
  dob?: DateOfBirthSpecs | "";
  documents?: PersonDocumentsSpecs;
  email?: string;
  expand?: Array<string>;
  first_name?: string;
  first_name_kana?: string;
  first_name_kanji?: string;
  full_name_aliases?: Array<string> | "";
  gender?: string;
  id_number?: string;
  id_number_secondary?: string;
  last_name?: string;
  last_name_kana?: string;
  last_name_kanji?: string;
  maiden_name?: string;
  metadata?: unknown /*map*/ | "";
  nationality?: string;
  person_token?: string;
  phone?: string;
  political_exposure?: string;
  registered_address?: AddressSpecs;
  relationship?: RelationshipSpecs;
  ssn_last_4?: string;
  verification?: PersonVerificationSpecs;
};
export type DeleteV1AccountsAccountPersonsPersonParams = {
  account: string;
  person: string;
};
export type PostV1AccountLinksParams = {
  account: string;
  collect?: "currently_due" | "eventually_due";
  expand?: Array<string>;
  refresh_url?: string;
  return_url?: string;
  type:
    | "account_onboarding"
    | "account_update"
    | "custom_account_update"
    | "custom_account_verification";
};
export type GetV1ApplePayDomainsParams = {
  domain_name?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1ApplePayDomainsParams = {
  domain_name: string;
  expand?: Array<string>;
};
export type GetV1ApplePayDomainsDomainParams = {
  domain: string;
  expand?: Array<string>;
};
export type DeleteV1ApplePayDomainsDomainParams = { domain: string };
export type GetV1ApplicationFeesParams = {
  charge?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1ApplicationFeesIdParams = {
  id: string;
  expand?: Array<string>;
};
export type PostV1ApplicationFeesIdRefundsParams = {
  id: string;
  amount?: number;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
};
export type GetV1ApplicationFeesIdRefundsParams = {
  id: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1ApplicationFeesFeeRefundsIdParams = {
  fee: string;
  id: string;
  expand?: Array<string>;
};
export type PostV1ApplicationFeesFeeRefundsIdParams = {
  fee: string;
  id: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type ScopeParam = { type: "account" | "user"; user?: string };
export type GetV1AppsSecretsFindParams = {
  expand?: Array<string>;
  name: string;
  scope: ScopeParam;
};
export type PostV1AppsSecretsParams = {
  expand?: Array<string>;
  expires_at?: number;
  name: string;
  payload: string;
  scope: ScopeParam;
};
export type GetV1AppsSecretsParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  scope: ScopeParam;
  starting_after?: string;
};
export type PostV1AppsSecretsDeleteParams = {
  expand?: Array<string>;
  name: string;
  scope: ScopeParam;
};
export type GetV1BalanceParams = { expand?: Array<string> };
export type GetV1BalanceTransactionsParams = {
  available_on?: RangeQuerySpecs | number;
  created?: RangeQuerySpecs | number;
  currency?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payout?: string;
  source?: string;
  starting_after?: string;
  type?: string;
};
export type GetV1BalanceTransactionsIdParams = {
  id: string;
  expand?: Array<string>;
};
export type SourceAddress = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
};
export type Owner = {
  address?: SourceAddress;
  email?: string;
  name?: string;
  phone?: string;
};
export type PostV1CustomersCustomerSourcesIdParams = {
  customer: string;
  id: string;
  account_holder_name?: string;
  account_holder_type?: "company" | "individual";
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  exp_month?: string;
  exp_year?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  name?: string;
  owner?: Owner;
};
export type DeleteV1CustomersCustomerSourcesIdParams = {
  customer: string;
  id: string;
  expand?: Array<string>;
};
export type PostV1CustomersCustomerSourcesIdVerifyParams = {
  customer: string;
  id: string;
  amounts?: Array<number>;
  expand?: Array<string>;
};
export type GetV1BillingPortalConfigurationsParams = {
  active?: boolean;
  ending_before?: string;
  expand?: Array<string>;
  is_default?: boolean;
  limit?: number;
  starting_after?: string;
};
export type BusinessProfileCreateParam = {
  headline?: string;
  privacy_policy_url?: string;
  terms_of_service_url?: string;
};
export type CustomerUpdateCreationParam = {
  allowed_updates?:
    | Array<"address" | "email" | "name" | "phone" | "shipping" | "tax_id">
    | "";
  enabled: boolean;
};
export type InvoiceListParam = { enabled: boolean };
export type PaymentMethodUpdateParam = { enabled: boolean };
export type SubscriptionCancellationReasonCreationParam = {
  enabled: boolean;
  options:
    | Array<
        | "customer_service"
        | "low_quality"
        | "missing_features"
        | "other"
        | "switched_service"
        | "too_complex"
        | "too_expensive"
        | "unused"
      >
    | "";
};
export type SubscriptionCancelCreationParam = {
  cancellation_reason?: SubscriptionCancellationReasonCreationParam;
  enabled: boolean;
  mode?: "at_period_end" | "immediately";
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
};
export type SubscriptionPauseParam = { enabled?: boolean };
export type SubscriptionUpdateProductParam = {
  prices: Array<string>;
  product: string;
};
export type SubscriptionUpdateCreationParam = {
  default_allowed_updates: Array<"price" | "promotion_code" | "quantity"> | "";
  enabled: boolean;
  products: Array<SubscriptionUpdateProductParam> | "";
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
};
export type FeaturesCreationParam = {
  customer_update?: CustomerUpdateCreationParam;
  invoice_history?: InvoiceListParam;
  payment_method_update?: PaymentMethodUpdateParam;
  subscription_cancel?: SubscriptionCancelCreationParam;
  subscription_pause?: SubscriptionPauseParam;
  subscription_update?: SubscriptionUpdateCreationParam;
};
export type LoginPageCreateParam = { enabled: boolean };
export type PostV1BillingPortalConfigurationsParams = {
  business_profile: BusinessProfileCreateParam;
  default_return_url?: string | "";
  expand?: Array<string>;
  features: FeaturesCreationParam;
  login_page?: LoginPageCreateParam;
  metadata?: unknown /*map*/;
};
export type BusinessProfileUpdateParam = {
  headline?: string;
  privacy_policy_url?: string | "";
  terms_of_service_url?: string | "";
};
export type CustomerUpdateUpdatingParam = {
  allowed_updates?:
    | Array<"address" | "email" | "name" | "phone" | "shipping" | "tax_id">
    | "";
  enabled?: boolean;
};
export type SubscriptionCancellationReasonUpdatingParam = {
  enabled: boolean;
  options?:
    | Array<
        | "customer_service"
        | "low_quality"
        | "missing_features"
        | "other"
        | "switched_service"
        | "too_complex"
        | "too_expensive"
        | "unused"
      >
    | "";
};
export type SubscriptionCancelUpdatingParam = {
  cancellation_reason?: SubscriptionCancellationReasonUpdatingParam;
  enabled?: boolean;
  mode?: "at_period_end" | "immediately";
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
};
export type SubscriptionUpdateUpdatingParam = {
  default_allowed_updates?: Array<"price" | "promotion_code" | "quantity"> | "";
  enabled?: boolean;
  products?: Array<SubscriptionUpdateProductParam> | "";
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
};
export type FeaturesUpdatingParam = {
  customer_update?: CustomerUpdateUpdatingParam;
  invoice_history?: InvoiceListParam;
  payment_method_update?: PaymentMethodUpdateParam;
  subscription_cancel?: SubscriptionCancelUpdatingParam;
  subscription_pause?: SubscriptionPauseParam;
  subscription_update?: SubscriptionUpdateUpdatingParam;
};
export type LoginPageUpdateParam = { enabled: boolean };
export type PostV1BillingPortalConfigurationsConfigurationParams = {
  configuration: string;
  active?: boolean;
  business_profile?: BusinessProfileUpdateParam;
  default_return_url?: string | "";
  expand?: Array<string>;
  features?: FeaturesUpdatingParam;
  login_page?: LoginPageUpdateParam;
  metadata?: unknown /*map*/ | "";
};
export type GetV1BillingPortalConfigurationsConfigurationParams = {
  configuration: string;
  expand?: Array<string>;
};
export type AfterCompletionHostedConfirmationParam = {
  custom_message?: string;
};
export type AfterCompletionRedirectParam = { return_url: string };
export type FlowDataAfterCompletionParam = {
  hosted_confirmation?: AfterCompletionHostedConfirmationParam;
  redirect?: AfterCompletionRedirectParam;
  type: "hosted_confirmation" | "portal_homepage" | "redirect";
};
export type FlowDataSubscriptionCancelParam = { subscription: string };
export type FlowDataParam = {
  after_completion?: FlowDataAfterCompletionParam;
  subscription_cancel?: FlowDataSubscriptionCancelParam;
  type: "payment_method_update" | "subscription_cancel";
};
export type PostV1BillingPortalSessionsParams = {
  configuration?: string;
  customer: string;
  expand?: Array<string>;
  flow_data?: FlowDataParam;
  locale?:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-IE"
    | "en-IN"
    | "en-NZ"
    | "en-SG"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW";
  on_behalf_of?: string;
  return_url?: string;
};
export type GetV1ChargesSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type GetV1ChargesParams = {
  created?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payment_intent?: string;
  starting_after?: string;
  transfer_group?: string;
};
export type DestinationSpecs = { account: string; amount?: number };
export type RadarOptions = { session?: string };
export type OptionalFieldsAddress = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
};
export type OptionalFieldsShipping = {
  address: OptionalFieldsAddress;
  carrier?: string;
  name: string;
  phone?: string;
  tracking_number?: string;
};
export type TransferDataSpecs = {
  amount_percent?: number;
  destination: string;
};
export type PostV1ChargesParams = {
  amount?: number;
  application_fee?: number;
  application_fee_amount?: number;
  capture?: boolean;
  currency?: string;
  customer?: string;
  description?: string;
  destination?: DestinationSpecs;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  on_behalf_of?: string;
  radar_options?: RadarOptions;
  receipt_email?: string;
  shipping?: OptionalFieldsShipping;
  source?: string;
  statement_descriptor?: string;
  statement_descriptor_suffix?: string;
  transfer_data?: TransferDataSpecs;
  transfer_group?: string;
};
export type GetV1ChargesChargeParams = {
  charge: string;
  expand?: Array<string>;
};
export type FraudDetails = { user_report: "fraudulent" | "safe" | "" };
export type PostV1ChargesChargeParams = {
  charge: string;
  customer?: string;
  description?: string;
  expand?: Array<string>;
  fraud_details?: FraudDetails;
  metadata?: unknown /*map*/ | "";
  receipt_email?: string;
  shipping?: OptionalFieldsShipping;
  transfer_group?: string;
};
export type PostV1ChargesChargeCaptureParams = {
  charge: string;
  amount?: number;
  application_fee?: number;
  application_fee_amount?: number;
  expand?: Array<string>;
  receipt_email?: string;
  statement_descriptor?: string;
  statement_descriptor_suffix?: string;
  transfer_data?: TransferDataSpecs;
  transfer_group?: string;
};
export type CustomerDetailsParams = { email: string };
export type GetV1CheckoutSessionsParams = {
  customer?: string;
  customer_details?: CustomerDetailsParams;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payment_intent?: string;
  payment_link?: string;
  starting_after?: string;
  subscription?: string;
};
export type RecoveryParams = {
  allow_promotion_codes?: boolean;
  enabled: boolean;
};
export type AfterExpirationParams = { recovery?: RecoveryParams };
export type AutomaticTaxParams = { enabled: boolean };
export type ConsentCollectionParams = {
  promotions?: "auto" | "none";
  terms_of_service?: "none" | "required";
};
export type CustomFieldOptionParam = { label: string; value: string };
export type CustomFieldDropdownParam = {
  options: Array<CustomFieldOptionParam>;
};
export type CustomFieldLabelParam = { custom: string; type: "custom" };
export type CustomFieldParam = {
  dropdown?: CustomFieldDropdownParam;
  key: string;
  label: CustomFieldLabelParam;
  optional?: boolean;
  type: "dropdown" | "numeric" | "text";
};
export type CustomTextPositionParam = { message: string };
export type CustomTextParam = {
  shipping_address?: CustomTextPositionParam | "";
  submit?: CustomTextPositionParam | "";
};
export type CustomerUpdateParams = {
  address?: "auto" | "never";
  name?: "auto" | "never";
  shipping?: "auto" | "never";
};
export type DiscountParams = { coupon?: string; promotion_code?: string };
export type CustomFieldParams = { name: string; value: string };
export type RenderingOptionsParam = {
  amount_tax_display?: "exclude_tax" | "include_inclusive_tax" | "";
};
export type InvoiceDataParams = {
  account_tax_ids?: Array<string> | "";
  custom_fields?: Array<CustomFieldParams> | "";
  description?: string;
  footer?: string;
  metadata?: unknown /*map*/;
  rendering_options?: RenderingOptionsParam | "";
};
export type InvoiceCreationParams = {
  enabled: boolean;
  invoice_data?: InvoiceDataParams;
};
export type AdjustableQuantityParams = {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
};
export type ProductData = {
  description?: string;
  images?: Array<string>;
  metadata?: unknown /*map*/;
  name: string;
  tax_code?: string;
};
export type RecurringAdhoc = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number;
};
export type PriceDataWithProductData = {
  currency: string;
  product?: string;
  product_data?: ProductData;
  recurring?: RecurringAdhoc;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type LineItemParams = {
  adjustable_quantity?: AdjustableQuantityParams;
  dynamic_tax_rates?: Array<string>;
  price?: string;
  price_data?: PriceDataWithProductData;
  quantity?: number;
  tax_rates?: Array<string>;
};
export type TransferDataParams = { amount?: number; destination: string };
export type PaymentIntentDataParams = {
  capture_method?: "automatic" | "automatic_async" | "manual";
  setup_future_usage?: "off_session" | "on_session";
};
export type MandateOptionsParam = {
  amount?: number;
  amount_type?: "fixed" | "maximum";
  description?: string;
};
export type PaymentMethodOptionsParam = {
  network?: "ach" | "us_domestic_wire";
};
export type InstallmentsParam = {
  enabled?: boolean;
  plan?: InstallmentPlan | "";
};
export type EuBankTransferParams = { country: string };
export type BankTransferParam = {
  eu_bank_transfer?: EuBankTransferParam;
  type?: string;
};
export type LinkedAccountOptionsParam = {
  permissions?: Array<
    "balances" | "ownership" | "payment_method" | "transactions"
  >;
  return_url?: string;
};
export type PhoneNumberCollectionParams = { enabled: boolean };
export type SetupIntentDataParam = {
  description?: string;
  metadata?: unknown /*map*/;
  on_behalf_of?: string;
};
export type ShippingAddressCollectionParams = {
  allowed_countries: Array<
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CV"
    | "CW"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"
    | "ZZ"
  >;
};
export type DeliveryEstimateBound = {
  unit: "business_day" | "day" | "hour" | "month" | "week";
  value: number;
};
export type DeliveryEstimate = {
  maximum?: DeliveryEstimateBound;
  minimum?: DeliveryEstimateBound;
};
export type FixedAmount = {
  amount: number;
  currency: string;
  currency_options?: unknown /*map*/;
};
export type MethodParams = {
  delivery_estimate?: DeliveryEstimate;
  display_name: string;
  fixed_amount?: FixedAmount;
  metadata?: unknown /*map*/;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tax_code?: string;
  type?: "fixed_amount";
};
export type ShippingOptionParams = { shipping_rate?: string };
export type EndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};
export type TrialSettingsConfig = { end_behavior: EndBehavior };
export type SubscriptionDataParams = {
  description?: string;
  trial_period_days?: number;
};
export type TaxIdCollectionParams = { enabled: boolean };
export type PostV1CheckoutSessionsParams = {
  after_expiration?: AfterExpirationParams;
  allow_promotion_codes?: boolean;
  automatic_tax?: AutomaticTaxParams;
  billing_address_collection?: "auto" | "required";
  cancel_url?: string;
  client_reference_id?: string;
  consent_collection?: ConsentCollectionParams;
  currency?: string;
  custom_fields?: Array<CustomFieldParam>;
  custom_text?: CustomTextParam;
  customer?: string;
  customer_creation?: "always" | "if_required";
  customer_email?: string;
  customer_update?: CustomerUpdateParams;
  discounts?: Array<DiscountParams>;
  expand?: Array<string>;
  expires_at?: number;
  invoice_creation?: InvoiceCreationParams;
  line_items?: Array<LineItemParams>;
  locale?:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-GB"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW";
  metadata?: unknown /*map*/;
  mode?: "payment" | "setup" | "subscription";
  payment_intent_data?: PaymentIntentDataParams;
  payment_method_collection?: "always" | "if_required";
  payment_method_options?: PaymentMethodOptionsParam;
  payment_method_types?: Array<
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "link"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay"
  >;
  phone_number_collection?: PhoneNumberCollectionParams;
  setup_intent_data?: SetupIntentDataParam;
  shipping_address_collection?: ShippingAddressCollectionParams;
  shipping_options?: Array<ShippingOptionParams>;
  shipping_rates?: Array<string>;
  submit_type?: "auto" | "book" | "donate" | "pay";
  subscription_data?: SubscriptionDataParams;
  success_url: string;
  tax_id_collection?: TaxIdCollectionParams;
};
export type GetV1CheckoutSessionsSessionParams = {
  session: string;
  expand?: Array<string>;
};
export type GetV1CheckoutSessionsSessionLineItemsParams = {
  session: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1CheckoutSessionsSessionExpireParams = {
  session: string;
  expand?: Array<string>;
};
export type GetV1CountrySpecsParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1CountrySpecsCountryParams = {
  country: string;
  expand?: Array<string>;
};
export type GetV1CouponsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type AppliesToParams = { products?: Array<string> };
export type PostV1CouponsParams = {
  amount_off?: number;
  applies_to?: AppliesToParams;
  currency?: string;
  currency_options?: unknown /*map*/;
  duration?: "forever" | "once" | "repeating";
  duration_in_months?: number;
  expand?: Array<string>;
  id?: string;
  max_redemptions?: number;
  metadata?: unknown /*map*/ | "";
  name?: string;
  percent_off?: number;
  redeem_by?: number;
};
export type GetV1CouponsCouponParams = {
  coupon: string;
  expand?: Array<string>;
};
export type PostV1CouponsCouponParams = {
  coupon: string;
  currency_options?: unknown /*map*/;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  name?: string;
};
export type DeleteV1CouponsCouponParams = { coupon: string };
export type CreditNoteLineItemParams = {
  amount?: number;
  description?: string;
  invoice_line_item?: string;
  quantity?: number;
  tax_rates?: Array<string> | "";
  type: "custom_line_item" | "invoice_line_item";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type CreditNoteShippingCost = { shipping_rate?: string };
export type PostV1CreditNotesParams = {
  amount?: number;
  credit_amount?: number;
  expand?: Array<string>;
  invoice: string;
  lines?: Array<CreditNoteLineItemParams>;
  memo?: string;
  metadata?: unknown /*map*/;
  out_of_band_amount?: number;
  reason?:
    | "duplicate"
    | "fraudulent"
    | "order_change"
    | "product_unsatisfactory";
  refund?: string;
  refund_amount?: number;
  shipping_cost?: CreditNoteShippingCost;
};
export type GetV1CreditNotesParams = {
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  invoice?: string;
  limit?: number;
  starting_after?: string;
};
export type GetV1CreditNotesPreviewParams = {
  amount?: number;
  credit_amount?: number;
  expand?: Array<string>;
  invoice: string;
  lines?: Array<CreditNoteLineItemParams>;
  memo?: string;
  metadata?: unknown /*map*/;
  out_of_band_amount?: number;
  reason?:
    | "duplicate"
    | "fraudulent"
    | "order_change"
    | "product_unsatisfactory";
  refund?: string;
  refund_amount?: number;
  shipping_cost?: CreditNoteShippingCost;
};
export type GetV1CreditNotesIdParams = { id: string; expand?: Array<string> };
export type PostV1CreditNotesIdParams = {
  id: string;
  expand?: Array<string>;
  memo?: string;
  metadata?: unknown /*map*/;
};
export type PostV1CreditNotesIdVoidParams = {
  id: string;
  expand?: Array<string>;
};
export type GetV1CreditNotesPreviewLinesParams = {
  amount?: number;
  credit_amount?: number;
  ending_before?: string;
  expand?: Array<string>;
  invoice: string;
  limit?: number;
  lines?: Array<CreditNoteLineItemParams>;
  memo?: string;
  metadata?: unknown /*map*/;
  out_of_band_amount?: number;
  reason?:
    | "duplicate"
    | "fraudulent"
    | "order_change"
    | "product_unsatisfactory";
  refund?: string;
  refund_amount?: number;
  shipping_cost?: CreditNoteShippingCost;
  starting_after?: string;
};
export type GetV1CreditNotesCreditNoteLinesParams = {
  credit_note: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1CustomersSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type GetV1CustomersParams = {
  created?: RangeQuerySpecs | number;
  email?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  test_clock?: string;
};
export type BalanceSettingsParam = {
  reconciliation_mode?: "automatic" | "manual" | "merchant_default";
};
export type CashBalanceParam = { settings?: BalanceSettingsParam };
export type CustomerParam = {
  custom_fields?: Array<CustomFieldParams> | "";
  default_payment_method?: string;
  footer?: string;
  rendering_options?: RenderingOptionsParam | "";
};
export type CustomerShipping = {
  address: OptionalFieldsAddress;
  name: string;
  phone?: string;
};
export type TaxParam = { ip_address?: string | "" };
export type DataParams = {
  type:
    | "ae_trn"
    | "au_abn"
    | "au_arn"
    | "bg_uic"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "hk_br"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ph_tin"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "th_vat"
    | "tr_tin"
    | "tw_vat"
    | "ua_vat"
    | "us_ein"
    | "za_vat";
  value: string;
};
export type PostV1CustomersParams = {
  address?: OptionalFieldsAddress | "";
  balance?: number;
  cash_balance?: CashBalanceParam;
  coupon?: string;
  description?: string;
  email?: string;
  expand?: Array<string>;
  invoice_prefix?: string;
  invoice_settings?: CustomerParam;
  metadata?: unknown /*map*/ | "";
  name?: string;
  next_invoice_sequence?: number;
  payment_method?: string;
  phone?: string;
  preferred_locales?: Array<string>;
  promotion_code?: string;
  shipping?: CustomerShipping | "";
  source?: string;
  tax?: TaxParam;
  tax_exempt?: "exempt" | "none" | "reverse" | "";
  tax_id_data?: Array<DataParams>;
  test_clock?: string;
  validate?: boolean;
};
export type GetV1CustomersCustomerParams = {
  customer: string;
  expand?: Array<string>;
};
export type PostV1CustomersCustomerParams = {
  customer: string;
  address?: OptionalFieldsAddress | "";
  balance?: number;
  cash_balance?: CashBalanceParam;
  coupon?: string;
  default_source?: string;
  description?: string;
  email?: string;
  expand?: Array<string>;
  invoice_prefix?: string;
  invoice_settings?: CustomerParam;
  metadata?: unknown /*map*/ | "";
  name?: string;
  next_invoice_sequence?: number;
  phone?: string;
  preferred_locales?: Array<string>;
  promotion_code?: string;
  shipping?: CustomerShipping | "";
  source?: string;
  tax?: TaxParam;
  tax_exempt?: "exempt" | "none" | "reverse" | "";
  validate?: boolean;
};
export type DeleteV1CustomersCustomerParams = { customer: string };
export type GetV1CustomersCustomerPaymentMethodsParams = {
  customer: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  type?:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "card_present"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "link"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay";
};
export type GetV1CustomersCustomerPaymentMethodsPaymentMethodParams = {
  customer: string;
  payment_method: string;
  expand?: Array<string>;
};
export type GetV1CustomersCustomerBalanceTransactionsParams = {
  customer: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type EuBankAccountParams = { country: string };
export type BankTransferParams = {
  eu_bank_transfer?: EuBankAccountParams;
  requested_address_types?: Array<"iban" | "sort_code" | "spei" | "zengin">;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer";
};
export type PostV1CustomersCustomerFundingInstructionsParams = {
  customer: string;
  bank_transfer: BankTransferParams;
  currency: string;
  expand?: Array<string>;
  funding_type: "bank_transfer";
};
export type DeleteV1CustomersCustomerDiscountParams = { customer: string };
export type GetV1CustomersCustomerCashBalanceParams = {
  customer: string;
  expand?: Array<string>;
};
export type PostV1CustomersCustomerCashBalanceParams = {
  customer: string;
  expand?: Array<string>;
  settings?: BalanceSettingsParam;
};
export type GetV1CustomersCustomerBalanceTransactionsTransactionParams = {
  customer: string;
  transaction: string;
  expand?: Array<string>;
};
export type PostV1CustomersCustomerBalanceTransactionsTransactionParams = {
  customer: string;
  transaction: string;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type PostV1CustomersCustomerBalanceTransactionsParams = {
  customer: string;
  amount: number;
  currency: string;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1CustomersCustomerCashBalanceTransactionsTransactionParams = {
  customer: string;
  transaction: string;
  expand?: Array<string>;
};
export type GetV1CustomersCustomerCashBalanceTransactionsParams = {
  customer: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1CustomersCustomerSourcesParams = {
  customer: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  object?: string;
  starting_after?: string;
};
export type PostV1CustomersCustomerSourcesParams = {
  customer: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  source: string;
  validate?: boolean;
};
export type GetV1CustomersCustomerSourcesIdParams = {
  customer: string;
  id: string;
  expand?: Array<string>;
};
export type PostV1CustomersCustomerTaxIdsParams = {
  customer: string;
  expand?: Array<string>;
  type:
    | "ae_trn"
    | "au_abn"
    | "au_arn"
    | "bg_uic"
    | "br_cnpj"
    | "br_cpf"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "ch_vat"
    | "cl_tin"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "hk_br"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kr_brn"
    | "li_uid"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "no_vat"
    | "nz_gst"
    | "ph_tin"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "th_vat"
    | "tr_tin"
    | "tw_vat"
    | "ua_vat"
    | "us_ein"
    | "za_vat";
  value: string;
};
export type GetV1CustomersCustomerTaxIdsParams = {
  customer: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1CustomersCustomerTaxIdsIdParams = {
  customer: string;
  id: string;
  expand?: Array<string>;
};
export type DeleteV1CustomersCustomerTaxIdsIdParams = {
  customer: string;
  id: string;
};
export type PostV1TestHelpersCustomersCustomerFundCashBalanceParams = {
  customer: string;
  amount: number;
  currency: string;
  expand?: Array<string>;
  reference?: string;
};
export type PostV1TestHelpersIssuingCardsCardShippingDeliverParams = {
  card: string;
  expand?: Array<string>;
};
export type PostV1TestHelpersIssuingCardsCardShippingShipParams = {
  card: string;
  expand?: Array<string>;
};
export type PostV1TestHelpersIssuingCardsCardShippingReturnParams = {
  card: string;
  expand?: Array<string>;
};
export type PostV1TestHelpersIssuingCardsCardShippingFailParams = {
  card: string;
  expand?: Array<string>;
};
export type PostV1TestHelpersRefundsRefundExpireParams = {
  refund: string;
  expand?: Array<string>;
};
export type CardPresent = { number?: string };
export type InteracPresent = { number?: string };
export type PostV1TestHelpersTerminalReadersReaderPresentPaymentMethodParams = {
  reader: string;
  card_present?: CardPresent;
  expand?: Array<string>;
  interac_present?: InteracPresent;
  type?: "card_present" | "interac_present";
};
export type GetV1TestHelpersTestClocksTestClockParams = {
  test_clock: string;
  expand?: Array<string>;
};
export type DeleteV1TestHelpersTestClocksTestClockParams = {
  test_clock: string;
};
export type PostV1TestHelpersTestClocksParams = {
  expand?: Array<string>;
  frozen_time: number;
  name?: string;
};
export type GetV1TestHelpersTestClocksParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1TestHelpersTestClocksTestClockAdvanceParams = {
  test_clock: string;
  expand?: Array<string>;
  frozen_time: number;
};
export type PostV1TestHelpersTreasuryInboundTransfersIdSucceedParams = {
  id: string;
  expand?: Array<string>;
};
export type FailureDetailsParams = {
  code?:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "debit_not_authorized"
    | "incorrect_account_holder_address"
    | "incorrect_account_holder_name"
    | "incorrect_account_holder_tax_id"
    | "insufficient_funds"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
};
export type PostV1TestHelpersTreasuryInboundTransfersIdFailParams = {
  id: string;
  expand?: Array<string>;
  failure_details?: FailureDetailsParams;
};
export type PostV1TestHelpersTreasuryInboundTransfersIdReturnParams = {
  id: string;
  expand?: Array<string>;
};
export type PostV1TestHelpersTreasuryOutboundPaymentsIdFailParams = {
  id: string;
  expand?: Array<string>;
};
export type PostV1TestHelpersTreasuryOutboundPaymentsIdPostParams = {
  id: string;
  expand?: Array<string>;
};
export type ReturnedDetailsParams = {
  code?:
    | "account_closed"
    | "account_frozen"
    | "bank_account_restricted"
    | "bank_ownership_changed"
    | "declined"
    | "incorrect_account_holder_name"
    | "invalid_account_number"
    | "invalid_currency"
    | "no_account"
    | "other";
};
export type PostV1TestHelpersTreasuryOutboundPaymentsIdReturnParams = {
  id: string;
  expand?: Array<string>;
  returned_details?: ReturnedDetailsParams;
};
export type PostV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailParams =
  {
    outbound_transfer: string;
    expand?: Array<string>;
  };
export type PostV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostParams =
  {
    outbound_transfer: string;
    expand?: Array<string>;
  };
export type PostV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnParams =
  {
    outbound_transfer: string;
    expand?: Array<string>;
    returned_details?: ReturnedDetailsParams;
  };
export type UsBankAccountSourceParams = {
  account_holder_name?: string;
  account_number?: string;
  routing_number?: string;
};
export type SourceParams = {
  type: "us_bank_account";
  us_bank_account?: UsBankAccountSourceParams;
};
export type PostV1TestHelpersTreasuryReceivedCreditsParams = {
  amount: number;
  currency: string;
  description?: string;
  expand?: Array<string>;
  financial_account: string;
  initiating_payment_method_details?: SourceParams;
  network: "ach" | "us_domestic_wire";
};
export type PostV1TestHelpersTreasuryReceivedDebitsParams = {
  amount: number;
  currency: string;
  description?: string;
  expand?: Array<string>;
  financial_account: string;
  initiating_payment_method_details?: SourceParams;
  network: "ach";
};
export type GetV1DisputesParams = {
  charge?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payment_intent?: string;
  starting_after?: string;
};
export type GetV1DisputesDisputeParams = {
  dispute: string;
  expand?: Array<string>;
};
export type DisputeEvidenceParams = {
  access_activity_log?: string;
  billing_address?: string;
  cancellation_policy?: string;
  cancellation_policy_disclosure?: string;
  cancellation_rebuttal?: string;
  customer_communication?: string;
  customer_email_address?: string;
  customer_name?: string;
  customer_purchase_ip?: string;
  customer_signature?: string;
  duplicate_charge_documentation?: string;
  duplicate_charge_explanation?: string;
  duplicate_charge_id?: string;
  product_description?: string;
  receipt?: string;
  refund_policy?: string;
  refund_policy_disclosure?: string;
  refund_refusal_explanation?: string;
  service_date?: string;
  service_documentation?: string;
  shipping_address?: string;
  shipping_carrier?: string;
  shipping_date?: string;
  shipping_documentation?: string;
  shipping_tracking_number?: string;
  uncategorized_file?: string;
  uncategorized_text?: string;
};
export type PostV1DisputesDisputeParams = {
  dispute: string;
  evidence?: DisputeEvidenceParams;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  submit?: boolean;
};
export type PostV1DisputesDisputeCloseParams = {
  dispute: string;
  expand?: Array<string>;
};
export type PostV1EphemeralKeysParams = {
  customer?: string;
  expand?: Array<string>;
  issuing_card?: string;
  verification_session?: string;
};
export type DeleteV1EphemeralKeysKeyParams = {
  key: string;
  expand?: Array<string>;
};
export type GetV1EventsParams = {
  created?: RangeQuerySpecs | number;
  delivery_success?: boolean;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  type?: string;
  types?: Array<string>;
};
export type GetV1EventsIdParams = { id: string; expand?: Array<string> };
export type GetV1ExchangeRatesParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1ExchangeRatesRateIdParams = {
  rate_id: string;
  expand?: Array<string>;
};
export type GetV1FilesParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  purpose?:
    | "account_requirement"
    | "additional_verification"
    | "business_icon"
    | "business_logo"
    | "customer_signature"
    | "dispute_evidence"
    | "document_provider_identity_document"
    | "finance_report_run"
    | "identity_document"
    | "identity_document_downloadable"
    | "pci_document"
    | "selfie"
    | "sigma_scheduled_query"
    | "tax_document_user_upload"
    | "terminal_reader_splashscreen";
  starting_after?: string;
};
export type PostV1FilesParams = {};
export type GetV1FilesFileParams = { file: string; expand?: Array<string> };
export type GetV1FileLinksLinkParams = { link: string; expand?: Array<string> };
export type PostV1FileLinksLinkParams = {
  link: string;
  expand?: Array<string>;
  expires_at?: "now" | number | "";
  metadata?: unknown /*map*/ | "";
};
export type PostV1FileLinksParams = {
  expand?: Array<string>;
  expires_at?: number;
  file: string;
  metadata?: unknown /*map*/ | "";
};
export type GetV1FileLinksParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  expired?: boolean;
  file?: string;
  limit?: number;
  starting_after?: string;
};
export type AccountholderParams = {
  account?: string;
  customer?: string;
  type: "account" | "customer";
};
export type GetV1FinancialConnectionsAccountsParams = {
  account_holder?: AccountholderParams;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  session?: string;
  starting_after?: string;
};
export type GetV1FinancialConnectionsAccountsAccountParams = {
  account: string;
  expand?: Array<string>;
};
export type GetV1FinancialConnectionsAccountsAccountOwnersParams = {
  account: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  ownership: string;
  starting_after?: string;
};
export type PostV1FinancialConnectionsAccountsAccountRefreshParams = {
  account: string;
  expand?: Array<string>;
  features: Array<"balance" | "ownership">;
};
export type PostV1FinancialConnectionsAccountsAccountDisconnectParams = {
  account: string;
  expand?: Array<string>;
};
export type FiltersParams = { countries: Array<string> };
export type PostV1FinancialConnectionsSessionsParams = {
  account_holder: AccountholderParams;
  expand?: Array<string>;
  filters?: FiltersParams;
  permissions: Array<
    "balances" | "ownership" | "payment_method" | "transactions"
  >;
  return_url?: string;
};
export type GetV1FinancialConnectionsSessionsSessionParams = {
  session: string;
  expand?: Array<string>;
};
export type GetV1IdentityVerificationReportsReportParams = {
  report: string;
  expand?: Array<string>;
};
export type GetV1IdentityVerificationReportsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  type?: "document" | "id_number";
  verification_session?: string;
};
export type DocumentOptions = {
  allowed_types?: Array<"driving_license" | "id_card" | "passport">;
  require_id_number?: boolean;
  require_live_capture?: boolean;
  require_matching_selfie?: boolean;
};
export type SessionOptionsParam = { document?: DocumentOptions | "" };
export type PostV1IdentityVerificationSessionsParams = {
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  options?: SessionOptionsParam;
  return_url?: string;
  type: "document" | "id_number";
};
export type GetV1IdentityVerificationSessionsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "processing" | "requires_input" | "verified";
};
export type GetV1IdentityVerificationSessionsSessionParams = {
  session: string;
  expand?: Array<string>;
};
export type PostV1IdentityVerificationSessionsSessionParams = {
  session: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  options?: SessionOptionsParam;
  type?: "document" | "id_number";
};
export type PostV1IdentityVerificationSessionsSessionCancelParams = {
  session: string;
  expand?: Array<string>;
};
export type PostV1IdentityVerificationSessionsSessionRedactParams = {
  session: string;
  expand?: Array<string>;
};
export type GetV1InvoicesSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type GetV1InvoicesParams = {
  collection_method?: "charge_automatically" | "send_invoice";
  created?: RangeQuerySpecs | number;
  customer?: string;
  due_date?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: "draft" | "open" | "paid" | "uncollectible" | "void";
  subscription?: string;
};
export type AutomaticTaxParam = { enabled: boolean };
export type DiscountsDataParam = { coupon?: string; discount?: string };
export type FromInvoice = { action: "revision"; invoice: string };
export type InvoicePaymentMethodOptionsParam = {
  financial_connections?: InvoiceLinkedAccountOptionsParam;
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type InstallmentPlan = {
  count: number;
  interval: "month";
  type: "fixed_count";
};
export type EuBankTransferParam = { country: string };
export type InvoiceLinkedAccountOptionsParam = {
  permissions?: Array<
    "balances" | "ownership" | "payment_method" | "transactions"
  >;
};
export type PaymentMethodOptions = {
  us_bank_account?: PaymentMethodOptionsParam | "";
};
export type PaymentSettings = {
  payment_method_options?: PaymentMethodOptions;
  payment_method_types?:
    | Array<
        | "ach_credit_transfer"
        | "ach_debit"
        | "acss_debit"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "boleto"
        | "card"
        | "cashapp"
        | "customer_balance"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "konbini"
        | "link"
        | "paynow"
        | "promptpay"
        | "sepa_credit_transfer"
        | "sepa_debit"
        | "sofort"
        | "us_bank_account"
        | "wechat_pay"
      >
    | "";
  save_default_payment_method?: "off" | "on_subscription";
};
export type ShippingCost = {
  shipping_rate?: string;
  shipping_rate_data?: MethodParams;
};
export type RecipientShippingWithOptionalFieldsAddress = {
  address: OptionalFieldsAddress;
  name: string;
  phone?: string;
};
export type PostV1InvoicesParams = {
  account_tax_ids?: Array<string> | "";
  application_fee_amount?: number;
  auto_advance?: boolean;
  automatic_tax?: AutomaticTaxParam;
  collection_method?: "charge_automatically" | "send_invoice";
  currency?: string;
  custom_fields?: Array<CustomFieldParams> | "";
  customer?: string;
  days_until_due?: number;
  default_payment_method?: string;
  default_source?: string;
  default_tax_rates?: Array<string>;
  description?: string;
  discounts?: Array<DiscountsDataParam> | "";
  due_date?: number;
  expand?: Array<string>;
  footer?: string;
  from_invoice?: FromInvoice;
  metadata?: unknown /*map*/ | "";
  on_behalf_of?: string;
  payment_settings?: PaymentSettings;
  pending_invoice_items_behavior?:
    | "exclude"
    | "include"
    | "include_and_require";
  rendering_options?: RenderingOptionsParam | "";
  shipping_cost?: ShippingCost;
  shipping_details?: RecipientShippingWithOptionalFieldsAddress;
  statement_descriptor?: string;
  subscription?: string;
  transfer_data?: TransferDataSpecs;
};
export type CustomerDetailsParam = {
  address?: OptionalFieldsAddress | "";
  shipping?: CustomerShipping | "";
  tax?: TaxParam;
  tax_exempt?: "exempt" | "none" | "reverse" | "";
  tax_ids?: Array<DataParams>;
};
export type OneTimePriceData = {
  currency: string;
  product: string;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type InvoiceItemPreviewParams = {
  amount?: number;
  currency?: string;
  description?: string;
  discountable?: boolean;
  discounts?: Array<DiscountsDataParam> | "";
  invoiceitem?: string;
  metadata?: unknown /*map*/ | "";
  period?: Period;
  price?: string;
  price_data?: OneTimePriceData;
  quantity?: number;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tax_code?: string | "";
  tax_rates?: Array<string> | "";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type ItemBillingThresholdsParam = { usage_gte: number };
export type RecurringPriceData = {
  currency: string;
  product: string;
  recurring: RecurringAdhoc;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type SubscriptionItemUpdateParams = {
  billing_thresholds?: ItemBillingThresholdsParam | "";
  clear_usage?: boolean;
  deleted?: boolean;
  id?: string;
  metadata?: unknown /*map*/ | "";
  plan?: string;
  price?: string;
  price_data?: RecurringPriceData;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type GetV1InvoicesUpcomingParams = {
  automatic_tax?: AutomaticTaxParam;
  coupon?: string;
  currency?: string;
  customer?: string;
  customer_details?: CustomerDetailsParam;
  discounts?: Array<DiscountsDataParam> | "";
  expand?: Array<string>;
  invoice_items?: Array<InvoiceItemPreviewParams>;
  schedule?: string;
  subscription?: string;
  subscription_billing_cycle_anchor?: "now" | "unchanged" | number;
  subscription_cancel_at?: number | "";
  subscription_cancel_at_period_end?: boolean;
  subscription_cancel_now?: boolean;
  subscription_default_tax_rates?: Array<string> | "";
  subscription_items?: Array<SubscriptionItemUpdateParams>;
  subscription_proration_behavior?:
    | "always_invoice"
    | "create_prorations"
    | "none";
  subscription_proration_date?: number;
  subscription_resume_at?: "now";
  subscription_start_date?: number;
  subscription_trial_end?: "now" | number;
  subscription_trial_from_plan?: boolean;
};
export type GetV1InvoicesInvoiceParams = {
  invoice: string;
  expand?: Array<string>;
};
export type PostV1InvoicesInvoiceParams = {
  invoice: string;
  account_tax_ids?: Array<string> | "";
  application_fee_amount?: number;
  auto_advance?: boolean;
  automatic_tax?: AutomaticTaxParam;
  collection_method?: "charge_automatically" | "send_invoice";
  custom_fields?: Array<CustomFieldParams> | "";
  days_until_due?: number;
  default_payment_method?: string;
  default_source?: string;
  default_tax_rates?: Array<string> | "";
  description?: string;
  discounts?: Array<DiscountsDataParam> | "";
  due_date?: number;
  expand?: Array<string>;
  footer?: string;
  metadata?: unknown /*map*/ | "";
  on_behalf_of?: string | "";
  payment_settings?: PaymentSettings;
  rendering_options?: RenderingOptionsParam | "";
  shipping_cost?: ShippingCost | "";
  shipping_details?: RecipientShippingWithOptionalFieldsAddress | "";
  statement_descriptor?: string;
  transfer_data?: TransferDataSpecs | "";
};
export type DeleteV1InvoicesInvoiceParams = { invoice: string };
export type PostV1InvoicesInvoicePayParams = {
  invoice: string;
  expand?: Array<string>;
  forgive?: boolean;
  mandate?: string;
  off_session?: boolean;
  paid_out_of_band?: boolean;
  payment_method?: string;
  source?: string;
};
export type PostV1InvoicesInvoiceFinalizeParams = {
  invoice: string;
  auto_advance?: boolean;
  expand?: Array<string>;
};
export type GetV1InvoicesUpcomingLinesParams = {
  automatic_tax?: AutomaticTaxParam;
  coupon?: string;
  currency?: string;
  customer?: string;
  customer_details?: CustomerDetailsParam;
  discounts?: Array<DiscountsDataParam> | "";
  ending_before?: string;
  expand?: Array<string>;
  invoice_items?: Array<InvoiceItemPreviewParams>;
  limit?: number;
  schedule?: string;
  starting_after?: string;
  subscription?: string;
  subscription_billing_cycle_anchor?: "now" | "unchanged" | number;
  subscription_cancel_at?: number | "";
  subscription_cancel_at_period_end?: boolean;
  subscription_cancel_now?: boolean;
  subscription_default_tax_rates?: Array<string> | "";
  subscription_items?: Array<SubscriptionItemUpdateParams>;
  subscription_proration_behavior?:
    | "always_invoice"
    | "create_prorations"
    | "none";
  subscription_proration_date?: number;
  subscription_resume_at?: "now";
  subscription_start_date?: number;
  subscription_trial_end?: "now" | number;
  subscription_trial_from_plan?: boolean;
};
export type PostV1InvoicesInvoiceSendParams = {
  invoice: string;
  expand?: Array<string>;
};
export type PostV1InvoicesInvoiceMarkUncollectibleParams = {
  invoice: string;
  expand?: Array<string>;
};
export type PostV1InvoicesInvoiceVoidParams = {
  invoice: string;
  expand?: Array<string>;
};
export type GetV1InvoicesInvoiceLinesParams = {
  invoice: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1InvoiceitemsParams = {
  created?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  invoice?: string;
  limit?: number;
  pending?: boolean;
  starting_after?: string;
};
export type PostV1InvoiceitemsParams = {
  amount?: number;
  currency?: string;
  customer: string;
  description?: string;
  discountable?: boolean;
  discounts?: Array<DiscountsDataParam> | "";
  expand?: Array<string>;
  invoice?: string;
  metadata?: unknown /*map*/ | "";
  period?: Period;
  price?: string;
  price_data?: OneTimePriceData;
  quantity?: number;
  subscription?: string;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tax_code?: string | "";
  tax_rates?: Array<string>;
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type GetV1InvoiceitemsInvoiceitemParams = {
  invoiceitem: string;
  expand?: Array<string>;
};
export type PostV1InvoiceitemsInvoiceitemParams = {
  invoiceitem: string;
  amount?: number;
  description?: string;
  discountable?: boolean;
  discounts?: Array<DiscountsDataParam> | "";
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  period?: Period;
  price?: string;
  price_data?: OneTimePriceData;
  quantity?: number;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tax_code?: string | "";
  tax_rates?: Array<string> | "";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type DeleteV1InvoiceitemsInvoiceitemParams = { invoiceitem: string };
export type GetV1IssuingAuthorizationsParams = {
  card?: string;
  cardholder?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: "closed" | "pending" | "reversed";
};
export type GetV1IssuingAuthorizationsAuthorizationParams = {
  authorization: string;
  expand?: Array<string>;
};
export type PostV1IssuingAuthorizationsAuthorizationParams = {
  authorization: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type PostV1IssuingAuthorizationsAuthorizationApproveParams = {
  authorization: string;
  amount?: number;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type PostV1IssuingAuthorizationsAuthorizationDeclineParams = {
  authorization: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1IssuingCardsParams = {
  cardholder?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  exp_month?: number;
  exp_year?: number;
  expand?: Array<string>;
  last4?: string;
  limit?: number;
  starting_after?: string;
  status?: "active" | "canceled" | "inactive";
  type?: "physical" | "virtual";
};
export type RequiredAddress = {
  city: string;
  country: string;
  line1: string;
  line2?: string;
  postal_code: string;
  state?: string;
};
export type CustomsParam = { eori_number?: string };
export type ShippingSpecs = {
  address: RequiredAddress;
  customs?: CustomsParam;
  name: string;
  phone_number?: string;
  require_signature?: boolean;
  service?: "express" | "priority" | "standard";
  type?: "bulk" | "individual";
};
export type SpendingLimitsParam = {
  amount: number;
  categories?: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  >;
  interval:
    | "all_time"
    | "daily"
    | "monthly"
    | "per_authorization"
    | "weekly"
    | "yearly";
};
export type AuthorizationControlsParam = {
  allowed_categories?: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  >;
  blocked_categories?: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  >;
  spending_limits?: Array<SpendingLimitsParam>;
};
export type PostV1IssuingCardsParams = {
  cardholder?: string;
  currency: string;
  expand?: Array<string>;
  financial_account?: string;
  metadata?: unknown /*map*/;
  replacement_for?: string;
  replacement_reason?: "damaged" | "expired" | "lost" | "stolen";
  shipping?: ShippingSpecs;
  spending_controls?: AuthorizationControlsParam;
  status?: "active" | "inactive";
  type: "physical" | "virtual";
};
export type GetV1IssuingCardsCardParams = {
  card: string;
  expand?: Array<string>;
};
export type EncryptedPinParam = { encrypted_number?: string };
export type PostV1IssuingCardsCardParams = {
  card: string;
  cancellation_reason?: "lost" | "stolen";
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  pin?: EncryptedPinParam;
  spending_controls?: AuthorizationControlsParam;
  status?: "active" | "canceled" | "inactive";
};
export type GetV1IssuingCardholdersParams = {
  created?: RangeQuerySpecs | number;
  email?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  phone_number?: string;
  starting_after?: string;
  status?: "active" | "blocked" | "inactive";
  type?: "company" | "individual";
};
export type BillingSpecs = { address: RequiredAddress };
export type CompanyParam = { tax_id?: string };
export type TermsAcceptanceParam = {
  date?: number;
  ip?: string;
  user_agent?: string;
};
export type CardIssuingParam = { user_terms_acceptance?: TermsAcceptanceParam };
export type PersonVerificationDocumentParam = { back?: string; front?: string };
export type PersonVerificationParam = {
  document?: PersonVerificationDocumentParam;
};
export type IndividualParam = {
  card_issuing?: CardIssuingParam;
  dob?: DateOfBirthSpecs;
  first_name?: string;
  last_name?: string;
  verification?: PersonVerificationParam;
};
export type AuthorizationControlsParamV2 = {
  allowed_categories?: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  >;
  blocked_categories?: Array<
    | "ac_refrigeration_repair"
    | "accounting_bookkeeping_services"
    | "advertising_services"
    | "agricultural_cooperative"
    | "airlines_air_carriers"
    | "airports_flying_fields"
    | "ambulance_services"
    | "amusement_parks_carnivals"
    | "antique_reproductions"
    | "antique_shops"
    | "aquariums"
    | "architectural_surveying_services"
    | "art_dealers_and_galleries"
    | "artists_supply_and_craft_shops"
    | "auto_and_home_supply_stores"
    | "auto_body_repair_shops"
    | "auto_paint_shops"
    | "auto_service_shops"
    | "automated_cash_disburse"
    | "automated_fuel_dispensers"
    | "automobile_associations"
    | "automotive_parts_and_accessories_stores"
    | "automotive_tire_stores"
    | "bail_and_bond_payments"
    | "bakeries"
    | "bands_orchestras"
    | "barber_and_beauty_shops"
    | "betting_casino_gambling"
    | "bicycle_shops"
    | "billiard_pool_establishments"
    | "boat_dealers"
    | "boat_rentals_and_leases"
    | "book_stores"
    | "books_periodicals_and_newspapers"
    | "bowling_alleys"
    | "bus_lines"
    | "business_secretarial_schools"
    | "buying_shopping_services"
    | "cable_satellite_and_other_pay_television_and_radio"
    | "camera_and_photographic_supply_stores"
    | "candy_nut_and_confectionery_stores"
    | "car_and_truck_dealers_new_used"
    | "car_and_truck_dealers_used_only"
    | "car_rental_agencies"
    | "car_washes"
    | "carpentry_services"
    | "carpet_upholstery_cleaning"
    | "caterers"
    | "charitable_and_social_service_organizations_fundraising"
    | "chemicals_and_allied_products"
    | "child_care_services"
    | "childrens_and_infants_wear_stores"
    | "chiropodists_podiatrists"
    | "chiropractors"
    | "cigar_stores_and_stands"
    | "civic_social_fraternal_associations"
    | "cleaning_and_maintenance"
    | "clothing_rental"
    | "colleges_universities"
    | "commercial_equipment"
    | "commercial_footwear"
    | "commercial_photography_art_and_graphics"
    | "commuter_transport_and_ferries"
    | "computer_network_services"
    | "computer_programming"
    | "computer_repair"
    | "computer_software_stores"
    | "computers_peripherals_and_software"
    | "concrete_work_services"
    | "construction_materials"
    | "consulting_public_relations"
    | "correspondence_schools"
    | "cosmetic_stores"
    | "counseling_services"
    | "country_clubs"
    | "courier_services"
    | "court_costs"
    | "credit_reporting_agencies"
    | "cruise_lines"
    | "dairy_products_stores"
    | "dance_hall_studios_schools"
    | "dating_escort_services"
    | "dentists_orthodontists"
    | "department_stores"
    | "detective_agencies"
    | "digital_goods_applications"
    | "digital_goods_games"
    | "digital_goods_large_volume"
    | "digital_goods_media"
    | "direct_marketing_catalog_merchant"
    | "direct_marketing_combination_catalog_and_retail_merchant"
    | "direct_marketing_inbound_telemarketing"
    | "direct_marketing_insurance_services"
    | "direct_marketing_other"
    | "direct_marketing_outbound_telemarketing"
    | "direct_marketing_subscription"
    | "direct_marketing_travel"
    | "discount_stores"
    | "doctors"
    | "door_to_door_sales"
    | "drapery_window_covering_and_upholstery_stores"
    | "drinking_places"
    | "drug_stores_and_pharmacies"
    | "drugs_drug_proprietaries_and_druggist_sundries"
    | "dry_cleaners"
    | "durable_goods"
    | "duty_free_stores"
    | "eating_places_restaurants"
    | "educational_services"
    | "electric_razor_stores"
    | "electric_vehicle_charging"
    | "electrical_parts_and_equipment"
    | "electrical_services"
    | "electronics_repair_shops"
    | "electronics_stores"
    | "elementary_secondary_schools"
    | "emergency_services_gcas_visa_use_only"
    | "employment_temp_agencies"
    | "equipment_rental"
    | "exterminating_services"
    | "family_clothing_stores"
    | "fast_food_restaurants"
    | "financial_institutions"
    | "fines_government_administrative_entities"
    | "fireplace_fireplace_screens_and_accessories_stores"
    | "floor_covering_stores"
    | "florists"
    | "florists_supplies_nursery_stock_and_flowers"
    | "freezer_and_locker_meat_provisioners"
    | "fuel_dealers_non_automotive"
    | "funeral_services_crematories"
    | "furniture_home_furnishings_and_equipment_stores_except_appliances"
    | "furniture_repair_refinishing"
    | "furriers_and_fur_shops"
    | "general_services"
    | "gift_card_novelty_and_souvenir_shops"
    | "glass_paint_and_wallpaper_stores"
    | "glassware_crystal_stores"
    | "golf_courses_public"
    | "government_licensed_horse_dog_racing_us_region_only"
    | "government_licensed_online_casions_online_gambling_us_region_only"
    | "government_owned_lotteries_non_us_region"
    | "government_owned_lotteries_us_region_only"
    | "government_services"
    | "grocery_stores_supermarkets"
    | "hardware_equipment_and_supplies"
    | "hardware_stores"
    | "health_and_beauty_spas"
    | "hearing_aids_sales_and_supplies"
    | "heating_plumbing_a_c"
    | "hobby_toy_and_game_shops"
    | "home_supply_warehouse_stores"
    | "hospitals"
    | "hotels_motels_and_resorts"
    | "household_appliance_stores"
    | "industrial_supplies"
    | "information_retrieval_services"
    | "insurance_default"
    | "insurance_underwriting_premiums"
    | "intra_company_purchases"
    | "jewelry_stores_watches_clocks_and_silverware_stores"
    | "landscaping_services"
    | "laundries"
    | "laundry_cleaning_services"
    | "legal_services_attorneys"
    | "luggage_and_leather_goods_stores"
    | "lumber_building_materials_stores"
    | "manual_cash_disburse"
    | "marinas_service_and_supplies"
    | "marketplaces"
    | "masonry_stonework_and_plaster"
    | "massage_parlors"
    | "medical_and_dental_labs"
    | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
    | "medical_services"
    | "membership_organizations"
    | "mens_and_boys_clothing_and_accessories_stores"
    | "mens_womens_clothing_stores"
    | "metal_service_centers"
    | "miscellaneous"
    | "miscellaneous_apparel_and_accessory_shops"
    | "miscellaneous_auto_dealers"
    | "miscellaneous_business_services"
    | "miscellaneous_food_stores"
    | "miscellaneous_general_merchandise"
    | "miscellaneous_general_services"
    | "miscellaneous_home_furnishing_specialty_stores"
    | "miscellaneous_publishing_and_printing"
    | "miscellaneous_recreation_services"
    | "miscellaneous_repair_shops"
    | "miscellaneous_specialty_retail"
    | "mobile_home_dealers"
    | "motion_picture_theaters"
    | "motor_freight_carriers_and_trucking"
    | "motor_homes_dealers"
    | "motor_vehicle_supplies_and_new_parts"
    | "motorcycle_shops_and_dealers"
    | "motorcycle_shops_dealers"
    | "music_stores_musical_instruments_pianos_and_sheet_music"
    | "news_dealers_and_newsstands"
    | "non_fi_money_orders"
    | "non_fi_stored_value_card_purchase_load"
    | "nondurable_goods"
    | "nurseries_lawn_and_garden_supply_stores"
    | "nursing_personal_care"
    | "office_and_commercial_furniture"
    | "opticians_eyeglasses"
    | "optometrists_ophthalmologist"
    | "orthopedic_goods_prosthetic_devices"
    | "osteopaths"
    | "package_stores_beer_wine_and_liquor"
    | "paints_varnishes_and_supplies"
    | "parking_lots_garages"
    | "passenger_railways"
    | "pawn_shops"
    | "pet_shops_pet_food_and_supplies"
    | "petroleum_and_petroleum_products"
    | "photo_developing"
    | "photographic_photocopy_microfilm_equipment_and_supplies"
    | "photographic_studios"
    | "picture_video_production"
    | "piece_goods_notions_and_other_dry_goods"
    | "plumbing_heating_equipment_and_supplies"
    | "political_organizations"
    | "postal_services_government_only"
    | "precious_stones_and_metals_watches_and_jewelry"
    | "professional_services"
    | "public_warehousing_and_storage"
    | "quick_copy_repro_and_blueprint"
    | "railroads"
    | "real_estate_agents_and_managers_rentals"
    | "record_stores"
    | "recreational_vehicle_rentals"
    | "religious_goods_stores"
    | "religious_organizations"
    | "roofing_siding_sheet_metal"
    | "secretarial_support_services"
    | "security_brokers_dealers"
    | "service_stations"
    | "sewing_needlework_fabric_and_piece_goods_stores"
    | "shoe_repair_hat_cleaning"
    | "shoe_stores"
    | "small_appliance_repair"
    | "snowmobile_dealers"
    | "special_trade_services"
    | "specialty_cleaning"
    | "sporting_goods_stores"
    | "sporting_recreation_camps"
    | "sports_and_riding_apparel_stores"
    | "sports_clubs_fields"
    | "stamp_and_coin_stores"
    | "stationary_office_supplies_printing_and_writing_paper"
    | "stationery_stores_office_and_school_supply_stores"
    | "swimming_pools_sales"
    | "t_ui_travel_germany"
    | "tailors_alterations"
    | "tax_payments_government_agencies"
    | "tax_preparation_services"
    | "taxicabs_limousines"
    | "telecommunication_equipment_and_telephone_sales"
    | "telecommunication_services"
    | "telegraph_services"
    | "tent_and_awning_shops"
    | "testing_laboratories"
    | "theatrical_ticket_agencies"
    | "timeshares"
    | "tire_retreading_and_repair"
    | "tolls_bridge_fees"
    | "tourist_attractions_and_exhibits"
    | "towing_services"
    | "trailer_parks_campgrounds"
    | "transportation_services"
    | "travel_agencies_tour_operators"
    | "truck_stop_iteration"
    | "truck_utility_trailer_rentals"
    | "typesetting_plate_making_and_related_services"
    | "typewriter_stores"
    | "u_s_federal_government_agencies_or_departments"
    | "uniforms_commercial_clothing"
    | "used_merchandise_and_secondhand_stores"
    | "utilities"
    | "variety_stores"
    | "veterinary_services"
    | "video_amusement_game_supplies"
    | "video_game_arcades"
    | "video_tape_rental_stores"
    | "vocational_trade_schools"
    | "watch_jewelry_repair"
    | "welding_repair"
    | "wholesale_clubs"
    | "wig_and_toupee_stores"
    | "wires_money_orders"
    | "womens_accessory_and_specialty_shops"
    | "womens_ready_to_wear_stores"
    | "wrecking_and_salvage_yards"
  >;
  spending_limits?: Array<SpendingLimitsParam>;
  spending_limits_currency?: string;
};
export type PostV1IssuingCardholdersParams = {
  billing: BillingSpecs;
  company?: CompanyParam;
  email?: string;
  expand?: Array<string>;
  individual?: IndividualParam;
  metadata?: unknown /*map*/;
  name: string;
  phone_number?: string;
  spending_controls?: AuthorizationControlsParamV2;
  status?: "active" | "inactive";
  type: "company" | "individual";
};
export type GetV1IssuingCardholdersCardholderParams = {
  cardholder: string;
  expand?: Array<string>;
};
export type PostV1IssuingCardholdersCardholderParams = {
  cardholder: string;
  billing?: BillingSpecs;
  company?: CompanyParam;
  email?: string;
  expand?: Array<string>;
  individual?: IndividualParam;
  metadata?: unknown /*map*/;
  phone_number?: string;
  spending_controls?: AuthorizationControlsParamV2;
  status?: "active" | "inactive";
};
export type GetV1IssuingDisputesParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
  transaction?: string;
};
export type Canceled = {
  additional_documentation?: string | "";
  canceled_at?: number | "";
  cancellation_policy_provided?: boolean | "";
  cancellation_reason?: string;
  expected_at?: number | "";
  explanation?: string;
  product_description?: string;
  product_type?: "merchandise" | "service" | "";
  return_status?: "merchant_rejected" | "successful" | "";
  returned_at?: number | "";
};
export type Duplicate = {
  additional_documentation?: string | "";
  card_statement?: string | "";
  cash_receipt?: string | "";
  check_image?: string | "";
  explanation?: string;
  original_transaction?: string;
};
export type Fraudulent = {
  additional_documentation?: string | "";
  explanation?: string;
};
export type MerchandiseNotAsDescribed = {
  additional_documentation?: string | "";
  explanation?: string;
  received_at?: number | "";
  return_description?: string;
  return_status?: "merchant_rejected" | "successful" | "";
  returned_at?: number | "";
};
export type NotReceived = {
  additional_documentation?: string | "";
  expected_at?: number | "";
  explanation?: string;
  product_description?: string;
  product_type?: "merchandise" | "service" | "";
};
export type Other = {
  additional_documentation?: string | "";
  explanation?: string;
  product_description?: string;
  product_type?: "merchandise" | "service" | "";
};
export type ServiceNotAsDescribed = {
  additional_documentation?: string | "";
  canceled_at?: number | "";
  cancellation_reason?: string;
  explanation?: string;
  received_at?: number | "";
};
export type EvidenceParam = {
  canceled?: Canceled | "";
  duplicate?: Duplicate | "";
  fraudulent?: Fraudulent | "";
  merchandise_not_as_described?: MerchandiseNotAsDescribed | "";
  not_received?: NotReceived | "";
  other?: Other | "";
  reason?:
    | "canceled"
    | "duplicate"
    | "fraudulent"
    | "merchandise_not_as_described"
    | "not_received"
    | "other"
    | "service_not_as_described";
  service_not_as_described?: ServiceNotAsDescribed | "";
};
export type TreasuryParam = { received_debit: string };
export type PostV1IssuingDisputesParams = {
  amount?: number;
  evidence?: EvidenceParam;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  transaction?: string;
  treasury?: TreasuryParam;
};
export type PostV1IssuingDisputesDisputeParams = {
  dispute: string;
  amount?: number;
  evidence?: EvidenceParam;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1IssuingDisputesDisputeParams = {
  dispute: string;
  expand?: Array<string>;
};
export type PostV1IssuingDisputesDisputeSubmitParams = {
  dispute: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1IssuingTransactionsParams = {
  card?: string;
  cardholder?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  type?: "capture" | "refund";
};
export type GetV1IssuingTransactionsTransactionParams = {
  transaction: string;
  expand?: Array<string>;
};
export type PostV1IssuingTransactionsTransactionParams = {
  transaction: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1MandatesMandateParams = {
  mandate: string;
  expand?: Array<string>;
};
export type GetV1PaymentIntentsSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type AutomaticPaymentMethodsParam = { enabled: boolean };
export type OfflineParam = {};
export type OnlineParam = { ip_address?: string; user_agent?: string };
export type CustomerAcceptanceParam = { online: OnlineParam; type: "online" };
export type SecretKeyParam = { customer_acceptance: CustomerAcceptanceParam };
export type PaymentMethodParam = {
  account_holder_type?: "company" | "individual";
  account_number?: string;
  account_type?: "checking" | "savings";
  financial_connections_account?: string;
  routing_number?: string;
};
export type Param = {};
export type BillingDetailsAddress = {
  city?: string;
  country?: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
};
export type BillingDetailsInnerParams = {
  address?: BillingDetailsAddress | "";
  email?: string | "";
  name?: string;
  phone?: string;
};
export type DateOfBirth = { day: number; month: number; year: number };
export type PaymentMethodDataParams = {
  acss_debit?: PaymentMethodParam;
  affirm?: Param;
  afterpay_clearpay?: Param;
  alipay?: Param;
  au_becs_debit?: Param;
  bacs_debit?: Param;
  bancontact?: Param;
  billing_details?: BillingDetailsInnerParams;
  blik?: Param;
  boleto?: Param;
  cashapp?: Param;
  customer_balance?: Param;
  eps?: Param;
  fpx?: Param;
  giropay?: Param;
  grabpay?: Param;
  ideal?: Param;
  interac_present?: Param;
  klarna?: Param;
  konbini?: Param;
  link?: Param;
  metadata?: unknown /*map*/;
  oxxo?: Param;
  p24?: Param;
  paynow?: Param;
  pix?: Param;
  promptpay?: Param;
  radar_options?: RadarOptions;
  sepa_debit?: Param;
  sofort?: Param;
  type:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "link"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay";
  us_bank_account?: PaymentMethodParam;
  wechat_pay?: Param;
};
export type PaymentIntentPaymentMethodOptionsMandateOptionsParam = {
  custom_mandate_url?: string | "";
  interval_description?: string;
  payment_schedule?: "combined" | "interval" | "sporadic";
  transaction_type?: "business" | "personal";
};
export type PaymentIntentPaymentMethodOptionsParam = {
  financial_connections?: LinkedAccountOptionsParam;
  networks?: NetworksOptionsParam;
  setup_future_usage?: "none" | "off_session" | "on_session" | "";
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type PaymentIntentParam = {
  capture_method?: "manual" | "";
  cvc_token?: string;
  installments?: InstallmentsParam;
  mandate_options?: MandateOptionsParam;
  moto?: boolean;
  network?:
    | "amex"
    | "cartes_bancaires"
    | "diners"
    | "discover"
    | "interac"
    | "jcb"
    | "mastercard"
    | "unionpay"
    | "unknown"
    | "visa";
  request_three_d_secure?: "any" | "automatic";
  setup_future_usage?: "none" | "off_session" | "on_session" | "";
  statement_descriptor_suffix_kana?: string | "";
  statement_descriptor_suffix_kanji?: string | "";
};
export type PaymentMethodOptionsMandateOptionsParam = {};
export type NetworksOptionsParam = {
  requested?: Array<"ach" | "us_domestic_wire">;
};
export type TransferDataCreationParams = {
  amount?: number;
  destination: string;
};
export type PostV1PaymentIntentsParams = {
  amount: number;
  application_fee_amount?: number;
  automatic_payment_methods?: AutomaticPaymentMethodsParam;
  capture_method?: "automatic" | "automatic_async" | "manual";
  confirm?: boolean;
  confirmation_method?: "automatic" | "manual";
  currency: string;
  customer?: string;
  description?: string;
  error_on_requires_action?: boolean;
  expand?: Array<string>;
  mandate?: string;
  mandate_data?: SecretKeyParam;
  metadata?: unknown /*map*/;
  off_session?: boolean | "one_off" | "recurring";
  on_behalf_of?: string;
  payment_method?: string;
  payment_method_data?: PaymentMethodDataParams;
  payment_method_options?: PaymentMethodOptionsParam;
  payment_method_types?: Array<string>;
  radar_options?: RadarOptions;
  receipt_email?: string;
  return_url?: string;
  setup_future_usage?: "off_session" | "on_session";
  shipping?: OptionalFieldsShipping;
  statement_descriptor?: string;
  statement_descriptor_suffix?: string;
  transfer_data?: TransferDataCreationParams;
  transfer_group?: string;
  use_stripe_sdk?: boolean;
};
export type GetV1PaymentIntentsParams = {
  created?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1PaymentIntentsIntentParams = {
  intent: string;
  client_secret?: string;
  expand?: Array<string>;
};
export type TransferDataUpdateParams = { amount?: number };
export type PostV1PaymentIntentsIntentParams = {
  intent: string;
  amount?: number;
  application_fee_amount?: number | "";
  capture_method?: "automatic" | "automatic_async" | "manual";
  currency?: string;
  customer?: string;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  payment_method?: string;
  payment_method_data?: PaymentMethodDataParams;
  payment_method_options?: PaymentMethodOptionsParam;
  payment_method_types?: Array<string>;
  receipt_email?: string | "";
  setup_future_usage?: "off_session" | "on_session" | "";
  shipping?: OptionalFieldsShipping | "";
  statement_descriptor?: string;
  statement_descriptor_suffix?: string;
  transfer_data?: TransferDataUpdateParams;
  transfer_group?: string;
};
export type ClientKeyParam = { customer_acceptance: CustomerAcceptanceParam };
export type PostV1PaymentIntentsIntentConfirmParams = {
  intent: string;
  capture_method?: "automatic" | "automatic_async" | "manual";
  error_on_requires_action?: boolean;
  expand?: Array<string>;
  mandate?: string;
  mandate_data?: SecretKeyParam | ClientKeyParam;
  off_session?: boolean | "one_off" | "recurring";
  payment_method?: string;
  payment_method_data?: PaymentMethodDataParams;
  payment_method_options?: PaymentMethodOptionsParam;
  radar_options?: RadarOptions;
  receipt_email?: string | "";
  return_url?: string;
  setup_future_usage?: "off_session" | "on_session" | "";
  shipping?: OptionalFieldsShipping | "";
  use_stripe_sdk?: boolean;
};
export type PostV1PaymentIntentsIntentCancelParams = {
  intent: string;
  cancellation_reason?:
    | "abandoned"
    | "duplicate"
    | "fraudulent"
    | "requested_by_customer";
  expand?: Array<string>;
};
export type PostV1PaymentIntentsIntentCaptureParams = {
  intent: string;
  amount_to_capture?: number;
  application_fee_amount?: number;
  expand?: Array<string>;
  statement_descriptor?: string;
  statement_descriptor_suffix?: string;
  transfer_data?: TransferDataUpdateParams;
};
export type PostV1PaymentIntentsIntentIncrementAuthorizationParams = {
  intent: string;
  amount: number;
  application_fee_amount?: number;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  statement_descriptor?: string;
  transfer_data?: TransferDataUpdateParams;
};
export type PostV1PaymentIntentsIntentVerifyMicrodepositsParams = {
  intent: string;
  amounts?: Array<number>;
  descriptor_code?: string;
  expand?: Array<string>;
};
export type PostV1PaymentIntentsIntentApplyCustomerBalanceParams = {
  intent: string;
  amount?: number;
  currency?: string;
  expand?: Array<string>;
};
export type GetV1PaymentLinksParams = {
  active?: boolean;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type AfterCompletionConfirmationPageParams = { custom_message?: string };
export type AfterCompletionRedirectParams = { url: string };
export type AfterCompletionParams = {
  hosted_confirmation?: AfterCompletionConfirmationPageParams;
  redirect?: AfterCompletionRedirectParams;
  type: "hosted_confirmation" | "redirect";
};
export type InvoiceSettingsParams = {
  account_tax_ids?: Array<string> | "";
  custom_fields?: Array<CustomFieldParams> | "";
  description?: string;
  footer?: string;
  metadata?: unknown /*map*/ | "";
  rendering_options?: RenderingOptionsParam | "";
};
export type InvoiceCreationCreateParams = {
  enabled: boolean;
  invoice_data?: InvoiceSettingsParams;
};
export type LineItemsCreateParams = {
  adjustable_quantity?: AdjustableQuantityParams;
  price: string;
  quantity: number;
};
export type PostV1PaymentLinksParams = {
  after_completion?: AfterCompletionParams;
  allow_promotion_codes?: boolean;
  application_fee_amount?: number;
  application_fee_percent?: number;
  automatic_tax?: AutomaticTaxParams;
  billing_address_collection?: "auto" | "required";
  consent_collection?: ConsentCollectionParams;
  currency?: string;
  custom_fields?: Array<CustomFieldParam>;
  custom_text?: CustomTextParam;
  customer_creation?: "always" | "if_required";
  expand?: Array<string>;
  invoice_creation?: InvoiceCreationCreateParams;
  line_items: Array<LineItemsCreateParams>;
  metadata?: unknown /*map*/;
  on_behalf_of?: string;
  payment_intent_data?: PaymentIntentDataParams;
  payment_method_collection?: "always" | "if_required";
  payment_method_types?: Array<
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "cashapp"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay"
  >;
  phone_number_collection?: PhoneNumberCollectionParams;
  shipping_address_collection?: ShippingAddressCollectionParams;
  shipping_options?: Array<ShippingOptionParams>;
  submit_type?: "auto" | "book" | "donate" | "pay";
  subscription_data?: SubscriptionDataParams;
  tax_id_collection?: TaxIdCollectionParams;
  transfer_data?: TransferDataParams;
};
export type GetV1PaymentLinksPaymentLinkParams = {
  payment_link: string;
  expand?: Array<string>;
};
export type InvoiceCreationUpdateParams = {
  enabled: boolean;
  invoice_data?: InvoiceSettingsParams;
};
export type LineItemsUpdateParams = {
  adjustable_quantity?: AdjustableQuantityParams;
  id: string;
  quantity?: number;
};
export type PostV1PaymentLinksPaymentLinkParams = {
  payment_link: string;
  active?: boolean;
  after_completion?: AfterCompletionParams;
  allow_promotion_codes?: boolean;
  automatic_tax?: AutomaticTaxParams;
  billing_address_collection?: "auto" | "required";
  custom_fields?: Array<CustomFieldParam> | "";
  custom_text?: CustomTextParam;
  customer_creation?: "always" | "if_required";
  expand?: Array<string>;
  invoice_creation?: InvoiceCreationUpdateParams;
  line_items?: Array<LineItemsUpdateParams>;
  metadata?: unknown /*map*/;
  payment_method_collection?: "always" | "if_required";
  payment_method_types?:
    | Array<
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "klarna"
        | "konbini"
        | "oxxo"
        | "p24"
        | "paynow"
        | "pix"
        | "promptpay"
        | "sepa_debit"
        | "sofort"
        | "us_bank_account"
        | "wechat_pay"
      >
    | "";
  shipping_address_collection?: ShippingAddressCollectionParams | "";
};
export type GetV1PaymentLinksPaymentLinkLineItemsParams = {
  payment_link: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type CardDetailsParams = {
  cvc?: string;
  exp_month: number;
  exp_year: number;
  number: string;
};
export type TokenParams = { token: string };
export type PostV1PaymentMethodsParams = {
  acss_debit?: PaymentMethodParam;
  affirm?: Param;
  afterpay_clearpay?: Param;
  alipay?: Param;
  au_becs_debit?: Param;
  bacs_debit?: Param;
  bancontact?: Param;
  billing_details?: BillingDetailsInnerParams;
  blik?: Param;
  boleto?: Param;
  card?: CardDetailsParams | TokenParams;
  cashapp?: Param;
  customer?: string;
  customer_balance?: Param;
  eps?: Param;
  expand?: Array<string>;
  fpx?: Param;
  giropay?: Param;
  grabpay?: Param;
  ideal?: Param;
  interac_present?: Param;
  klarna?: Param;
  konbini?: Param;
  link?: Param;
  metadata?: unknown /*map*/;
  oxxo?: Param;
  p24?: Param;
  payment_method?: string;
  paynow?: Param;
  pix?: Param;
  promptpay?: Param;
  radar_options?: RadarOptions;
  sepa_debit?: Param;
  sofort?: Param;
  type?:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "link"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay";
  us_bank_account?: PaymentMethodParam;
  wechat_pay?: Param;
};
export type GetV1PaymentMethodsParams = {
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  type?:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "blik"
    | "boleto"
    | "card"
    | "card_present"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "klarna"
    | "konbini"
    | "link"
    | "oxxo"
    | "p24"
    | "paynow"
    | "pix"
    | "promptpay"
    | "sepa_debit"
    | "sofort"
    | "us_bank_account"
    | "wechat_pay";
};
export type GetV1PaymentMethodsPaymentMethodParams = {
  payment_method: string;
  expand?: Array<string>;
};
export type UpdateParam = { account_holder_type?: "company" | "individual" };
export type UpdateApiParam = { exp_month?: number; exp_year?: number };
export type PostV1PaymentMethodsPaymentMethodParams = {
  payment_method: string;
  acss_debit?: UpdateParam;
  affirm?: Param;
  au_becs_debit?: UpdateParam;
  bacs_debit?: UpdateParam;
  billing_details?: BillingDetailsInnerParams;
  blik?: Param;
  card?: UpdateApiParam;
  cashapp?: Param;
  expand?: Array<string>;
  link?: Param;
  metadata?: unknown /*map*/ | "";
  sepa_debit?: UpdateParam;
  us_bank_account?: UpdateParam;
};
export type PostV1PaymentMethodsPaymentMethodAttachParams = {
  payment_method: string;
  customer: string;
  expand?: Array<string>;
};
export type PostV1PaymentMethodsPaymentMethodDetachParams = {
  payment_method: string;
  expand?: Array<string>;
};
export type GetV1PayoutsPayoutParams = {
  payout: string;
  expand?: Array<string>;
};
export type PostV1PayoutsPayoutParams = {
  payout: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1PayoutsParams = {
  arrival_date?: RangeQuerySpecs | number;
  created?: RangeQuerySpecs | number;
  destination?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: string;
};
export type PostV1PayoutsParams = {
  amount: number;
  currency: string;
  description?: string;
  destination?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  method?: "instant" | "standard";
  source_type?: "bank_account" | "card" | "fpx";
  statement_descriptor?: string;
};
export type PostV1PayoutsPayoutCancelParams = {
  payout: string;
  expand?: Array<string>;
};
export type PostV1PayoutsPayoutReverseParams = {
  payout: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
};
export type GetV1PlansParams = {
  active?: boolean;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  product?: string;
  starting_after?: string;
};
export type InlineProductParams = {
  active?: boolean;
  id?: string;
  metadata?: unknown /*map*/;
  name: string;
  statement_descriptor?: string;
  tax_code?: string;
  unit_label?: string;
};
export type Tier = {
  flat_amount?: number;
  flat_amount_decimal?: unknown /*primitive*/;
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
  up_to: "inf" | number;
};
export type TransformUsageParam = { divide_by: number; round: "down" | "up" };
export type PostV1PlansParams = {
  active?: boolean;
  aggregate_usage?: "last_during_period" | "last_ever" | "max" | "sum";
  amount?: number;
  amount_decimal?: unknown /*primitive*/;
  billing_scheme?: "per_unit" | "tiered";
  currency: string;
  expand?: Array<string>;
  id?: string;
  interval: "day" | "month" | "week" | "year";
  interval_count?: number;
  metadata?: unknown /*map*/ | "";
  nickname?: string;
  product?: InlineProductParams | string;
  tiers?: Array<Tier>;
  tiers_mode?: "graduated" | "volume";
  transform_usage?: TransformUsageParam;
  trial_period_days?: number;
  usage_type?: "licensed" | "metered";
};
export type GetV1PlansPlanParams = { plan: string; expand?: Array<string> };
export type PostV1PlansPlanParams = {
  plan: string;
  active?: boolean;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  nickname?: string;
  product?: string;
  trial_period_days?: number;
};
export type DeleteV1PlansPlanParams = { plan: string };
export type GetV1PricesSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type AllPricesRecurringParams = {
  interval?: "day" | "month" | "week" | "year";
  usage_type?: "licensed" | "metered";
};
export type GetV1PricesParams = {
  active?: boolean;
  created?: RangeQuerySpecs | number;
  currency?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  lookup_keys?: Array<string>;
  product?: string;
  recurring?: AllPricesRecurringParams;
  starting_after?: string;
  type?: "one_time" | "recurring";
};
export type PostV1PricesParams = {
  active?: boolean;
  billing_scheme?: "per_unit" | "tiered";
  currency: string;
  currency_options?: unknown /*map*/;
  custom_unit_amount?: CustomUnitAmount;
  expand?: Array<string>;
  lookup_key?: string;
  metadata?: unknown /*map*/;
  nickname?: string;
  product?: string;
  product_data?: InlineProductParams;
  recurring?: Recurring;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tiers?: Array<Tier>;
  tiers_mode?: "graduated" | "volume";
  transfer_lookup_key?: boolean;
  transform_quantity?: TransformUsageParam;
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type GetV1PricesPriceParams = { price: string; expand?: Array<string> };
export type UpdateRecurringParams = { trial_period_days?: number };
export type PostV1PricesPriceParams = {
  price: string;
  active?: boolean;
  currency_options?: unknown /*map*/ | "";
  expand?: Array<string>;
  lookup_key?: string;
  metadata?: unknown /*map*/ | "";
  nickname?: string;
  recurring?: UpdateRecurringParams | "";
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  transfer_lookup_key?: boolean;
};
export type GetV1ProductsSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type PriceDataWithoutProduct = {
  currency: string;
  currency_options?: unknown /*map*/;
  recurring?: RecurringAdhoc;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type PackageDimensionsSpecs = {
  height: number;
  length: number;
  weight: number;
  width: number;
};
export type PostV1ProductsParams = {
  active?: boolean;
  attributes?: Array<string>;
  caption?: string;
  deactivate_on?: Array<string>;
  default_price_data?: PriceDataWithoutProduct;
  description?: string;
  expand?: Array<string>;
  id?: string;
  images?: Array<string>;
  metadata?: unknown /*map*/;
  name: string;
  package_dimensions?: PackageDimensionsSpecs;
  shippable?: boolean;
  statement_descriptor?: string;
  tax_code?: string;
  type?: "good" | "service";
  unit_label?: string;
  url?: string;
};
export type GetV1ProductsParams = {
  active?: boolean;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  ids?: Array<string>;
  limit?: number;
  shippable?: boolean;
  starting_after?: string;
  type?: "good" | "service";
  url?: string;
};
export type GetV1ProductsIdParams = { id: string; expand?: Array<string> };
export type PostV1ProductsIdParams = {
  id: string;
  active?: boolean;
  attributes?: Array<string> | "";
  caption?: string;
  deactivate_on?: Array<string>;
  default_price?: string;
  description?: string;
  expand?: Array<string>;
  images?: Array<string> | "";
  metadata?: unknown /*map*/ | "";
  name?: string;
  package_dimensions?: PackageDimensionsSpecs | "";
  shippable?: boolean;
  statement_descriptor?: string;
  tax_code?: string | "";
  unit_label?: string;
  url?: string | "";
};
export type DeleteV1ProductsIdParams = { id: string };
export type GetV1PromotionCodesPromotionCodeParams = {
  promotion_code: string;
  expand?: Array<string>;
};
export type RestrictionsParams = {
  currency_options?: unknown /*map*/;
  first_time_transaction?: boolean;
  minimum_amount?: number;
  minimum_amount_currency?: string;
};
export type PostV1PromotionCodesPromotionCodeParams = {
  promotion_code: string;
  active?: boolean;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  restrictions?: RestrictionsParams;
};
export type PostV1PromotionCodesParams = {
  active?: boolean;
  code?: string;
  coupon: string;
  customer?: string;
  expand?: Array<string>;
  expires_at?: number;
  max_redemptions?: number;
  metadata?: unknown /*map*/;
  restrictions?: RestrictionsParams;
};
export type GetV1PromotionCodesParams = {
  active?: boolean;
  code?: string;
  coupon?: string;
  created?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1QuotesQuoteParams = { quote: string; expand?: Array<string> };
export type QuoteParam = { days_until_due?: number };
export type PriceData = {
  currency: string;
  product: string;
  recurring?: RecurringAdhoc;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type LineItemUpdateParams = {
  id?: string;
  price?: string;
  price_data?: PriceData;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type SubscriptionDataUpdateParams = {
  description?: string;
  effective_date?: "current_period_end" | number | "";
  trial_period_days?: number | "";
};
export type PostV1QuotesQuoteParams = {
  quote: string;
  application_fee_amount?: number | "";
  application_fee_percent?: number | "";
  automatic_tax?: AutomaticTaxParam;
  collection_method?: "charge_automatically" | "send_invoice";
  customer?: string;
  default_tax_rates?: Array<string> | "";
  description?: string;
  discounts?: Array<DiscountsDataParam> | "";
  expand?: Array<string>;
  expires_at?: number;
  footer?: string;
  header?: string;
  invoice_settings?: QuoteParam;
  line_items?: Array<LineItemUpdateParams>;
  metadata?: unknown /*map*/;
  on_behalf_of?: string | "";
  subscription_data?: SubscriptionDataUpdateParams;
  transfer_data?: TransferDataSpecs | "";
};
export type FromQuoteParams = { is_revision?: boolean; quote: string };
export type LineItemCreateParams = {
  price?: string;
  price_data?: PriceData;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type SubscriptionDataCreateParams = {
  description?: string;
  effective_date?: "current_period_end" | number | "";
  trial_period_days?: number | "";
};
export type PostV1QuotesParams = {
  application_fee_amount?: number | "";
  application_fee_percent?: number | "";
  automatic_tax?: AutomaticTaxParam;
  collection_method?: "charge_automatically" | "send_invoice";
  customer?: string;
  default_tax_rates?: Array<string> | "";
  description?: string;
  discounts?: Array<DiscountsDataParam> | "";
  expand?: Array<string>;
  expires_at?: number;
  footer?: string;
  from_quote?: FromQuoteParams;
  header?: string;
  invoice_settings?: QuoteParam;
  line_items?: Array<LineItemCreateParams>;
  metadata?: unknown /*map*/;
  on_behalf_of?: string | "";
  subscription_data?: SubscriptionDataCreateParams;
  test_clock?: string;
  transfer_data?: TransferDataSpecs | "";
};
export type GetV1QuotesParams = {
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: "accepted" | "canceled" | "draft" | "open";
  test_clock?: string;
};
export type PostV1QuotesQuoteCancelParams = {
  quote: string;
  expand?: Array<string>;
};
export type PostV1QuotesQuoteFinalizeParams = {
  quote: string;
  expand?: Array<string>;
  expires_at?: number;
};
export type PostV1QuotesQuoteAcceptParams = {
  quote: string;
  expand?: Array<string>;
};
export type GetV1QuotesQuoteLineItemsParams = {
  quote: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1QuotesQuoteComputedUpfrontLineItemsParams = {
  quote: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1QuotesQuotePdfParams = {
  quote: string;
  expand?: Array<string>;
};
export type GetV1RadarEarlyFraudWarningsParams = {
  charge?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payment_intent?: string;
  starting_after?: string;
};
export type GetV1RadarEarlyFraudWarningsEarlyFraudWarningParams = {
  early_fraud_warning: string;
  expand?: Array<string>;
};
export type GetV1RadarValueListsParams = {
  alias?: string;
  contains?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1RadarValueListsParams = {
  alias: string;
  expand?: Array<string>;
  item_type?:
    | "card_bin"
    | "card_fingerprint"
    | "case_sensitive_string"
    | "country"
    | "customer_id"
    | "email"
    | "ip_address"
    | "string";
  metadata?: unknown /*map*/;
  name: string;
};
export type GetV1RadarValueListsValueListParams = {
  value_list: string;
  expand?: Array<string>;
};
export type PostV1RadarValueListsValueListParams = {
  value_list: string;
  alias?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  name?: string;
};
export type DeleteV1RadarValueListsValueListParams = { value_list: string };
export type GetV1RadarValueListItemsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  value?: string;
  value_list: string;
};
export type PostV1RadarValueListItemsParams = {
  expand?: Array<string>;
  value: string;
  value_list: string;
};
export type GetV1RadarValueListItemsItemParams = {
  item: string;
  expand?: Array<string>;
};
export type DeleteV1RadarValueListItemsItemParams = { item: string };
export type GetV1ChargesChargeRefundsParams = {
  charge: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1ChargesChargeRefundsRefundParams = {
  charge: string;
  refund: string;
  expand?: Array<string>;
};
export type GetV1RefundsParams = {
  charge?: string;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payment_intent?: string;
  starting_after?: string;
};
export type PostV1RefundsParams = {
  amount?: number;
  charge?: string;
  currency?: string;
  customer?: string;
  expand?: Array<string>;
  instructions_email?: string;
  metadata?: unknown /*map*/ | "";
  origin?: "customer_balance";
  payment_intent?: string;
  reason?: "duplicate" | "fraudulent" | "requested_by_customer";
  refund_application_fee?: boolean;
  reverse_transfer?: boolean;
};
export type GetV1RefundsRefundParams = {
  refund: string;
  expand?: Array<string>;
};
export type PostV1RefundsRefundParams = {
  refund: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type PostV1RefundsRefundCancelParams = {
  refund: string;
  expand?: Array<string>;
};
export type GetV1ReportingReportRunsReportRunParams = {
  report_run: string;
  expand?: Array<string>;
};
export type RunParameterSpecs = {
  columns?: Array<string>;
  connected_account?: string;
  currency?: string;
  interval_end?: number;
  interval_start?: number;
  payout?: string;
  reporting_category?:
    | "advance"
    | "advance_funding"
    | "anticipation_repayment"
    | "charge"
    | "charge_failure"
    | "connect_collection_transfer"
    | "connect_reserved_funds"
    | "contribution"
    | "dispute"
    | "dispute_reversal"
    | "fee"
    | "financing_paydown"
    | "financing_paydown_reversal"
    | "financing_payout"
    | "financing_payout_reversal"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "issuing_dispute"
    | "issuing_transaction"
    | "network_cost"
    | "other_adjustment"
    | "partial_capture_reversal"
    | "payout"
    | "payout_reversal"
    | "platform_earning"
    | "platform_earning_refund"
    | "refund"
    | "refund_failure"
    | "risk_reserved_funds"
    | "tax"
    | "topup"
    | "topup_reversal"
    | "transfer"
    | "transfer_reversal";
  timezone?:
    | "Africa/Abidjan"
    | "Africa/Accra"
    | "Africa/Addis_Ababa"
    | "Africa/Algiers"
    | "Africa/Asmara"
    | "Africa/Asmera"
    | "Africa/Bamako"
    | "Africa/Bangui"
    | "Africa/Banjul"
    | "Africa/Bissau"
    | "Africa/Blantyre"
    | "Africa/Brazzaville"
    | "Africa/Bujumbura"
    | "Africa/Cairo"
    | "Africa/Casablanca"
    | "Africa/Ceuta"
    | "Africa/Conakry"
    | "Africa/Dakar"
    | "Africa/Dar_es_Salaam"
    | "Africa/Djibouti"
    | "Africa/Douala"
    | "Africa/El_Aaiun"
    | "Africa/Freetown"
    | "Africa/Gaborone"
    | "Africa/Harare"
    | "Africa/Johannesburg"
    | "Africa/Juba"
    | "Africa/Kampala"
    | "Africa/Khartoum"
    | "Africa/Kigali"
    | "Africa/Kinshasa"
    | "Africa/Lagos"
    | "Africa/Libreville"
    | "Africa/Lome"
    | "Africa/Luanda"
    | "Africa/Lubumbashi"
    | "Africa/Lusaka"
    | "Africa/Malabo"
    | "Africa/Maputo"
    | "Africa/Maseru"
    | "Africa/Mbabane"
    | "Africa/Mogadishu"
    | "Africa/Monrovia"
    | "Africa/Nairobi"
    | "Africa/Ndjamena"
    | "Africa/Niamey"
    | "Africa/Nouakchott"
    | "Africa/Ouagadougou"
    | "Africa/Porto-Novo"
    | "Africa/Sao_Tome"
    | "Africa/Timbuktu"
    | "Africa/Tripoli"
    | "Africa/Tunis"
    | "Africa/Windhoek"
    | "America/Adak"
    | "America/Anchorage"
    | "America/Anguilla"
    | "America/Antigua"
    | "America/Araguaina"
    | "America/Argentina/Buenos_Aires"
    | "America/Argentina/Catamarca"
    | "America/Argentina/ComodRivadavia"
    | "America/Argentina/Cordoba"
    | "America/Argentina/Jujuy"
    | "America/Argentina/La_Rioja"
    | "America/Argentina/Mendoza"
    | "America/Argentina/Rio_Gallegos"
    | "America/Argentina/Salta"
    | "America/Argentina/San_Juan"
    | "America/Argentina/San_Luis"
    | "America/Argentina/Tucuman"
    | "America/Argentina/Ushuaia"
    | "America/Aruba"
    | "America/Asuncion"
    | "America/Atikokan"
    | "America/Atka"
    | "America/Bahia"
    | "America/Bahia_Banderas"
    | "America/Barbados"
    | "America/Belem"
    | "America/Belize"
    | "America/Blanc-Sablon"
    | "America/Boa_Vista"
    | "America/Bogota"
    | "America/Boise"
    | "America/Buenos_Aires"
    | "America/Cambridge_Bay"
    | "America/Campo_Grande"
    | "America/Cancun"
    | "America/Caracas"
    | "America/Catamarca"
    | "America/Cayenne"
    | "America/Cayman"
    | "America/Chicago"
    | "America/Chihuahua"
    | "America/Ciudad_Juarez"
    | "America/Coral_Harbour"
    | "America/Cordoba"
    | "America/Costa_Rica"
    | "America/Creston"
    | "America/Cuiaba"
    | "America/Curacao"
    | "America/Danmarkshavn"
    | "America/Dawson"
    | "America/Dawson_Creek"
    | "America/Denver"
    | "America/Detroit"
    | "America/Dominica"
    | "America/Edmonton"
    | "America/Eirunepe"
    | "America/El_Salvador"
    | "America/Ensenada"
    | "America/Fort_Nelson"
    | "America/Fort_Wayne"
    | "America/Fortaleza"
    | "America/Glace_Bay"
    | "America/Godthab"
    | "America/Goose_Bay"
    | "America/Grand_Turk"
    | "America/Grenada"
    | "America/Guadeloupe"
    | "America/Guatemala"
    | "America/Guayaquil"
    | "America/Guyana"
    | "America/Halifax"
    | "America/Havana"
    | "America/Hermosillo"
    | "America/Indiana/Indianapolis"
    | "America/Indiana/Knox"
    | "America/Indiana/Marengo"
    | "America/Indiana/Petersburg"
    | "America/Indiana/Tell_City"
    | "America/Indiana/Vevay"
    | "America/Indiana/Vincennes"
    | "America/Indiana/Winamac"
    | "America/Indianapolis"
    | "America/Inuvik"
    | "America/Iqaluit"
    | "America/Jamaica"
    | "America/Jujuy"
    | "America/Juneau"
    | "America/Kentucky/Louisville"
    | "America/Kentucky/Monticello"
    | "America/Knox_IN"
    | "America/Kralendijk"
    | "America/La_Paz"
    | "America/Lima"
    | "America/Los_Angeles"
    | "America/Louisville"
    | "America/Lower_Princes"
    | "America/Maceio"
    | "America/Managua"
    | "America/Manaus"
    | "America/Marigot"
    | "America/Martinique"
    | "America/Matamoros"
    | "America/Mazatlan"
    | "America/Mendoza"
    | "America/Menominee"
    | "America/Merida"
    | "America/Metlakatla"
    | "America/Mexico_City"
    | "America/Miquelon"
    | "America/Moncton"
    | "America/Monterrey"
    | "America/Montevideo"
    | "America/Montreal"
    | "America/Montserrat"
    | "America/Nassau"
    | "America/New_York"
    | "America/Nipigon"
    | "America/Nome"
    | "America/Noronha"
    | "America/North_Dakota/Beulah"
    | "America/North_Dakota/Center"
    | "America/North_Dakota/New_Salem"
    | "America/Nuuk"
    | "America/Ojinaga"
    | "America/Panama"
    | "America/Pangnirtung"
    | "America/Paramaribo"
    | "America/Phoenix"
    | "America/Port-au-Prince"
    | "America/Port_of_Spain"
    | "America/Porto_Acre"
    | "America/Porto_Velho"
    | "America/Puerto_Rico"
    | "America/Punta_Arenas"
    | "America/Rainy_River"
    | "America/Rankin_Inlet"
    | "America/Recife"
    | "America/Regina"
    | "America/Resolute"
    | "America/Rio_Branco"
    | "America/Rosario"
    | "America/Santa_Isabel"
    | "America/Santarem"
    | "America/Santiago"
    | "America/Santo_Domingo"
    | "America/Sao_Paulo"
    | "America/Scoresbysund"
    | "America/Shiprock"
    | "America/Sitka"
    | "America/St_Barthelemy"
    | "America/St_Johns"
    | "America/St_Kitts"
    | "America/St_Lucia"
    | "America/St_Thomas"
    | "America/St_Vincent"
    | "America/Swift_Current"
    | "America/Tegucigalpa"
    | "America/Thule"
    | "America/Thunder_Bay"
    | "America/Tijuana"
    | "America/Toronto"
    | "America/Tortola"
    | "America/Vancouver"
    | "America/Virgin"
    | "America/Whitehorse"
    | "America/Winnipeg"
    | "America/Yakutat"
    | "America/Yellowknife"
    | "Antarctica/Casey"
    | "Antarctica/Davis"
    | "Antarctica/DumontDUrville"
    | "Antarctica/Macquarie"
    | "Antarctica/Mawson"
    | "Antarctica/McMurdo"
    | "Antarctica/Palmer"
    | "Antarctica/Rothera"
    | "Antarctica/South_Pole"
    | "Antarctica/Syowa"
    | "Antarctica/Troll"
    | "Antarctica/Vostok"
    | "Arctic/Longyearbyen"
    | "Asia/Aden"
    | "Asia/Almaty"
    | "Asia/Amman"
    | "Asia/Anadyr"
    | "Asia/Aqtau"
    | "Asia/Aqtobe"
    | "Asia/Ashgabat"
    | "Asia/Ashkhabad"
    | "Asia/Atyrau"
    | "Asia/Baghdad"
    | "Asia/Bahrain"
    | "Asia/Baku"
    | "Asia/Bangkok"
    | "Asia/Barnaul"
    | "Asia/Beirut"
    | "Asia/Bishkek"
    | "Asia/Brunei"
    | "Asia/Calcutta"
    | "Asia/Chita"
    | "Asia/Choibalsan"
    | "Asia/Chongqing"
    | "Asia/Chungking"
    | "Asia/Colombo"
    | "Asia/Dacca"
    | "Asia/Damascus"
    | "Asia/Dhaka"
    | "Asia/Dili"
    | "Asia/Dubai"
    | "Asia/Dushanbe"
    | "Asia/Famagusta"
    | "Asia/Gaza"
    | "Asia/Harbin"
    | "Asia/Hebron"
    | "Asia/Ho_Chi_Minh"
    | "Asia/Hong_Kong"
    | "Asia/Hovd"
    | "Asia/Irkutsk"
    | "Asia/Istanbul"
    | "Asia/Jakarta"
    | "Asia/Jayapura"
    | "Asia/Jerusalem"
    | "Asia/Kabul"
    | "Asia/Kamchatka"
    | "Asia/Karachi"
    | "Asia/Kashgar"
    | "Asia/Kathmandu"
    | "Asia/Katmandu"
    | "Asia/Khandyga"
    | "Asia/Kolkata"
    | "Asia/Krasnoyarsk"
    | "Asia/Kuala_Lumpur"
    | "Asia/Kuching"
    | "Asia/Kuwait"
    | "Asia/Macao"
    | "Asia/Macau"
    | "Asia/Magadan"
    | "Asia/Makassar"
    | "Asia/Manila"
    | "Asia/Muscat"
    | "Asia/Nicosia"
    | "Asia/Novokuznetsk"
    | "Asia/Novosibirsk"
    | "Asia/Omsk"
    | "Asia/Oral"
    | "Asia/Phnom_Penh"
    | "Asia/Pontianak"
    | "Asia/Pyongyang"
    | "Asia/Qatar"
    | "Asia/Qostanay"
    | "Asia/Qyzylorda"
    | "Asia/Rangoon"
    | "Asia/Riyadh"
    | "Asia/Saigon"
    | "Asia/Sakhalin"
    | "Asia/Samarkand"
    | "Asia/Seoul"
    | "Asia/Shanghai"
    | "Asia/Singapore"
    | "Asia/Srednekolymsk"
    | "Asia/Taipei"
    | "Asia/Tashkent"
    | "Asia/Tbilisi"
    | "Asia/Tehran"
    | "Asia/Tel_Aviv"
    | "Asia/Thimbu"
    | "Asia/Thimphu"
    | "Asia/Tokyo"
    | "Asia/Tomsk"
    | "Asia/Ujung_Pandang"
    | "Asia/Ulaanbaatar"
    | "Asia/Ulan_Bator"
    | "Asia/Urumqi"
    | "Asia/Ust-Nera"
    | "Asia/Vientiane"
    | "Asia/Vladivostok"
    | "Asia/Yakutsk"
    | "Asia/Yangon"
    | "Asia/Yekaterinburg"
    | "Asia/Yerevan"
    | "Atlantic/Azores"
    | "Atlantic/Bermuda"
    | "Atlantic/Canary"
    | "Atlantic/Cape_Verde"
    | "Atlantic/Faeroe"
    | "Atlantic/Faroe"
    | "Atlantic/Jan_Mayen"
    | "Atlantic/Madeira"
    | "Atlantic/Reykjavik"
    | "Atlantic/South_Georgia"
    | "Atlantic/St_Helena"
    | "Atlantic/Stanley"
    | "Australia/ACT"
    | "Australia/Adelaide"
    | "Australia/Brisbane"
    | "Australia/Broken_Hill"
    | "Australia/Canberra"
    | "Australia/Currie"
    | "Australia/Darwin"
    | "Australia/Eucla"
    | "Australia/Hobart"
    | "Australia/LHI"
    | "Australia/Lindeman"
    | "Australia/Lord_Howe"
    | "Australia/Melbourne"
    | "Australia/NSW"
    | "Australia/North"
    | "Australia/Perth"
    | "Australia/Queensland"
    | "Australia/South"
    | "Australia/Sydney"
    | "Australia/Tasmania"
    | "Australia/Victoria"
    | "Australia/West"
    | "Australia/Yancowinna"
    | "Brazil/Acre"
    | "Brazil/DeNoronha"
    | "Brazil/East"
    | "Brazil/West"
    | "CET"
    | "CST6CDT"
    | "Canada/Atlantic"
    | "Canada/Central"
    | "Canada/Eastern"
    | "Canada/Mountain"
    | "Canada/Newfoundland"
    | "Canada/Pacific"
    | "Canada/Saskatchewan"
    | "Canada/Yukon"
    | "Chile/Continental"
    | "Chile/EasterIsland"
    | "Cuba"
    | "EET"
    | "EST"
    | "EST5EDT"
    | "Egypt"
    | "Eire"
    | "Etc/GMT"
    | "Etc/GMT+0"
    | "Etc/GMT+1"
    | "Etc/GMT+10"
    | "Etc/GMT+11"
    | "Etc/GMT+12"
    | "Etc/GMT+2"
    | "Etc/GMT+3"
    | "Etc/GMT+4"
    | "Etc/GMT+5"
    | "Etc/GMT+6"
    | "Etc/GMT+7"
    | "Etc/GMT+8"
    | "Etc/GMT+9"
    | "Etc/GMT-0"
    | "Etc/GMT-1"
    | "Etc/GMT-10"
    | "Etc/GMT-11"
    | "Etc/GMT-12"
    | "Etc/GMT-13"
    | "Etc/GMT-14"
    | "Etc/GMT-2"
    | "Etc/GMT-3"
    | "Etc/GMT-4"
    | "Etc/GMT-5"
    | "Etc/GMT-6"
    | "Etc/GMT-7"
    | "Etc/GMT-8"
    | "Etc/GMT-9"
    | "Etc/GMT0"
    | "Etc/Greenwich"
    | "Etc/UCT"
    | "Etc/UTC"
    | "Etc/Universal"
    | "Etc/Zulu"
    | "Europe/Amsterdam"
    | "Europe/Andorra"
    | "Europe/Astrakhan"
    | "Europe/Athens"
    | "Europe/Belfast"
    | "Europe/Belgrade"
    | "Europe/Berlin"
    | "Europe/Bratislava"
    | "Europe/Brussels"
    | "Europe/Bucharest"
    | "Europe/Budapest"
    | "Europe/Busingen"
    | "Europe/Chisinau"
    | "Europe/Copenhagen"
    | "Europe/Dublin"
    | "Europe/Gibraltar"
    | "Europe/Guernsey"
    | "Europe/Helsinki"
    | "Europe/Isle_of_Man"
    | "Europe/Istanbul"
    | "Europe/Jersey"
    | "Europe/Kaliningrad"
    | "Europe/Kiev"
    | "Europe/Kirov"
    | "Europe/Kyiv"
    | "Europe/Lisbon"
    | "Europe/Ljubljana"
    | "Europe/London"
    | "Europe/Luxembourg"
    | "Europe/Madrid"
    | "Europe/Malta"
    | "Europe/Mariehamn"
    | "Europe/Minsk"
    | "Europe/Monaco"
    | "Europe/Moscow"
    | "Europe/Nicosia"
    | "Europe/Oslo"
    | "Europe/Paris"
    | "Europe/Podgorica"
    | "Europe/Prague"
    | "Europe/Riga"
    | "Europe/Rome"
    | "Europe/Samara"
    | "Europe/San_Marino"
    | "Europe/Sarajevo"
    | "Europe/Saratov"
    | "Europe/Simferopol"
    | "Europe/Skopje"
    | "Europe/Sofia"
    | "Europe/Stockholm"
    | "Europe/Tallinn"
    | "Europe/Tirane"
    | "Europe/Tiraspol"
    | "Europe/Ulyanovsk"
    | "Europe/Uzhgorod"
    | "Europe/Vaduz"
    | "Europe/Vatican"
    | "Europe/Vienna"
    | "Europe/Vilnius"
    | "Europe/Volgograd"
    | "Europe/Warsaw"
    | "Europe/Zagreb"
    | "Europe/Zaporozhye"
    | "Europe/Zurich"
    | "Factory"
    | "GB"
    | "GB-Eire"
    | "GMT"
    | "GMT+0"
    | "GMT-0"
    | "GMT0"
    | "Greenwich"
    | "HST"
    | "Hongkong"
    | "Iceland"
    | "Indian/Antananarivo"
    | "Indian/Chagos"
    | "Indian/Christmas"
    | "Indian/Cocos"
    | "Indian/Comoro"
    | "Indian/Kerguelen"
    | "Indian/Mahe"
    | "Indian/Maldives"
    | "Indian/Mauritius"
    | "Indian/Mayotte"
    | "Indian/Reunion"
    | "Iran"
    | "Israel"
    | "Jamaica"
    | "Japan"
    | "Kwajalein"
    | "Libya"
    | "MET"
    | "MST"
    | "MST7MDT"
    | "Mexico/BajaNorte"
    | "Mexico/BajaSur"
    | "Mexico/General"
    | "NZ"
    | "NZ-CHAT"
    | "Navajo"
    | "PRC"
    | "PST8PDT"
    | "Pacific/Apia"
    | "Pacific/Auckland"
    | "Pacific/Bougainville"
    | "Pacific/Chatham"
    | "Pacific/Chuuk"
    | "Pacific/Easter"
    | "Pacific/Efate"
    | "Pacific/Enderbury"
    | "Pacific/Fakaofo"
    | "Pacific/Fiji"
    | "Pacific/Funafuti"
    | "Pacific/Galapagos"
    | "Pacific/Gambier"
    | "Pacific/Guadalcanal"
    | "Pacific/Guam"
    | "Pacific/Honolulu"
    | "Pacific/Johnston"
    | "Pacific/Kanton"
    | "Pacific/Kiritimati"
    | "Pacific/Kosrae"
    | "Pacific/Kwajalein"
    | "Pacific/Majuro"
    | "Pacific/Marquesas"
    | "Pacific/Midway"
    | "Pacific/Nauru"
    | "Pacific/Niue"
    | "Pacific/Norfolk"
    | "Pacific/Noumea"
    | "Pacific/Pago_Pago"
    | "Pacific/Palau"
    | "Pacific/Pitcairn"
    | "Pacific/Pohnpei"
    | "Pacific/Ponape"
    | "Pacific/Port_Moresby"
    | "Pacific/Rarotonga"
    | "Pacific/Saipan"
    | "Pacific/Samoa"
    | "Pacific/Tahiti"
    | "Pacific/Tarawa"
    | "Pacific/Tongatapu"
    | "Pacific/Truk"
    | "Pacific/Wake"
    | "Pacific/Wallis"
    | "Pacific/Yap"
    | "Poland"
    | "Portugal"
    | "ROC"
    | "ROK"
    | "Singapore"
    | "Turkey"
    | "UCT"
    | "US/Alaska"
    | "US/Aleutian"
    | "US/Arizona"
    | "US/Central"
    | "US/East-Indiana"
    | "US/Eastern"
    | "US/Hawaii"
    | "US/Indiana-Starke"
    | "US/Michigan"
    | "US/Mountain"
    | "US/Pacific"
    | "US/Pacific-New"
    | "US/Samoa"
    | "UTC"
    | "Universal"
    | "W-SU"
    | "WET"
    | "Zulu";
};
export type PostV1ReportingReportRunsParams = {
  expand?: Array<string>;
  parameters?: RunParameterSpecs;
  report_type: string;
};
export type GetV1ReportingReportRunsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1ReportingReportTypesReportTypeParams = {
  report_type: string;
  expand?: Array<string>;
};
export type GetV1ReportingReportTypesParams = { expand?: Array<string> };
export type GetV1ReviewsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1ReviewsReviewParams = {
  review: string;
  expand?: Array<string>;
};
export type PostV1ReviewsReviewApproveParams = {
  review: string;
  expand?: Array<string>;
};
export type GetV1SigmaScheduledQueryRunsParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1SigmaScheduledQueryRunsScheduledQueryRunParams = {
  scheduled_query_run: string;
  expand?: Array<string>;
};
export type GetV1SetupAttemptsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  setup_intent: string;
  starting_after?: string;
};
export type SetupIntentPaymentMethodOptionsMandateOptionsParam = {
  custom_mandate_url?: string | "";
  default_for?: Array<"invoice" | "subscription">;
  interval_description?: string;
  payment_schedule?: "combined" | "interval" | "sporadic";
  transaction_type?: "business" | "personal";
};
export type SetupIntentPaymentMethodOptionsParam = {
  financial_connections?: LinkedAccountOptionsParam;
  networks?: NetworksOptionsParam;
  verification_method?: "automatic" | "instant" | "microdeposits";
};
export type SetupIntentMandateOptionsParam = {
  amount: number;
  amount_type: "fixed" | "maximum";
  currency: string;
  description?: string;
  end_date?: number;
  interval: "day" | "month" | "sporadic" | "week" | "year";
  interval_count?: number;
  reference: string;
  start_date: number;
  supported_types?: Array<"india">;
};
export type SetupIntentParam = {
  mandate_options?: SetupIntentMandateOptionsParam;
  moto?: boolean;
  network?:
    | "amex"
    | "cartes_bancaires"
    | "diners"
    | "discover"
    | "interac"
    | "jcb"
    | "mastercard"
    | "unionpay"
    | "unknown"
    | "visa";
  request_three_d_secure?: "any" | "automatic";
};
export type SetupIntentSingleUseParams = { amount: number; currency: string };
export type PostV1SetupIntentsParams = {
  attach_to_self?: boolean;
  automatic_payment_methods?: AutomaticPaymentMethodsParam;
  confirm?: boolean;
  customer?: string;
  description?: string;
  expand?: Array<string>;
  flow_directions?: Array<"inbound" | "outbound">;
  mandate_data?: SecretKeyParam;
  metadata?: unknown /*map*/;
  on_behalf_of?: string;
  payment_method?: string;
  payment_method_data?: PaymentMethodDataParams;
  payment_method_options?: PaymentMethodOptionsParam;
  payment_method_types?: Array<string>;
  return_url?: string;
  single_use?: SetupIntentSingleUseParams;
  usage?: "off_session" | "on_session";
};
export type GetV1SetupIntentsParams = {
  attach_to_self?: boolean;
  created?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  payment_method?: string;
  starting_after?: string;
};
export type GetV1SetupIntentsIntentParams = {
  intent: string;
  client_secret?: string;
  expand?: Array<string>;
};
export type PostV1SetupIntentsIntentParams = {
  intent: string;
  attach_to_self?: boolean;
  customer?: string;
  description?: string;
  expand?: Array<string>;
  flow_directions?: Array<"inbound" | "outbound">;
  metadata?: unknown /*map*/ | "";
  payment_method?: string;
  payment_method_data?: PaymentMethodDataParams;
  payment_method_options?: PaymentMethodOptionsParam;
  payment_method_types?: Array<string>;
};
export type PostV1SetupIntentsIntentConfirmParams = {
  intent: string;
  expand?: Array<string>;
  mandate_data?: SecretKeyParam | ClientKeyParam;
  payment_method?: string;
  payment_method_data?: PaymentMethodDataParams;
  payment_method_options?: PaymentMethodOptionsParam;
  return_url?: string;
};
export type PostV1SetupIntentsIntentCancelParams = {
  intent: string;
  cancellation_reason?: "abandoned" | "duplicate" | "requested_by_customer";
  expand?: Array<string>;
};
export type PostV1SetupIntentsIntentVerifyMicrodepositsParams = {
  intent: string;
  amounts?: Array<number>;
  descriptor_code?: string;
  expand?: Array<string>;
};
export type GetV1ShippingRatesParams = {
  active?: boolean;
  created?: RangeQuerySpecs | number;
  currency?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1ShippingRatesParams = {
  delivery_estimate?: DeliveryEstimate;
  display_name: string;
  expand?: Array<string>;
  fixed_amount?: FixedAmount;
  metadata?: unknown /*map*/;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tax_code?: string;
  type?: "fixed_amount";
};
export type GetV1ShippingRatesShippingRateTokenParams = {
  shipping_rate_token: string;
  expand?: Array<string>;
};
export type FixedAmountUpdate = { currency_options?: unknown /*map*/ };
export type PostV1ShippingRatesShippingRateTokenParams = {
  shipping_rate_token: string;
  active?: boolean;
  expand?: Array<string>;
  fixed_amount?: FixedAmountUpdate;
  metadata?: unknown /*map*/ | "";
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
};
export type GetV1SourcesSourceParams = {
  source: string;
  client_secret?: string;
  expand?: Array<string>;
};
export type MandateOfflineAcceptanceParams = { contact_email: string };
export type MandateOnlineAcceptanceParams = {
  date?: number;
  ip?: string;
  user_agent?: string;
};
export type MandateAcceptanceParams = {
  date?: number;
  ip?: string;
  offline?: MandateOfflineAcceptanceParams;
  online?: MandateOnlineAcceptanceParams;
  status: "accepted" | "pending" | "refused" | "revoked";
  type?: "offline" | "online";
  user_agent?: string;
};
export type MandateParams = {
  acceptance?: MandateAcceptanceParams;
  amount?: number | "";
  currency?: string;
  interval?: "one_time" | "scheduled" | "variable";
  notification_method?:
    | "deprecated_none"
    | "email"
    | "manual"
    | "none"
    | "stripe_email";
};
export type OrderItemSpecs = {
  amount?: number;
  currency?: string;
  description?: string;
  parent?: string;
  quantity?: number;
  type?: "discount" | "shipping" | "sku" | "tax";
};
export type OrderShipping = {
  address: Address;
  carrier?: string;
  name?: string;
  phone?: string;
  tracking_number?: string;
};
export type OrderParams = {
  items?: Array<OrderItemSpecs>;
  shipping?: OrderShipping;
};
export type PostV1SourcesSourceParams = {
  source: string;
  amount?: number;
  expand?: Array<string>;
  mandate?: MandateParams;
  metadata?: unknown /*map*/ | "";
  owner?: Owner;
  source_order?: OrderParams;
};
export type ReceiverParams = {
  refund_attributes_method?: "email" | "manual" | "none";
};
export type RedirectParams = { return_url: string };
export type ShallowOrderSpecs = {
  items?: Array<OrderItemSpecs>;
  shipping?: OrderShipping;
};
export type PostV1SourcesParams = {
  amount?: number;
  currency?: string;
  customer?: string;
  expand?: Array<string>;
  flow?: "code_verification" | "none" | "receiver" | "redirect";
  mandate?: MandateParams;
  metadata?: unknown /*map*/;
  original_source?: string;
  owner?: Owner;
  receiver?: ReceiverParams;
  redirect?: RedirectParams;
  source_order?: ShallowOrderSpecs;
  statement_descriptor?: string;
  token?: string;
  type?: string;
  usage?: "reusable" | "single_use";
};
export type PostV1SourcesSourceVerifyParams = {
  source: string;
  expand?: Array<string>;
  values: Array<string>;
};
export type GetV1SourcesSourceSourceTransactionsParams = {
  source: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1SubscriptionsSearchParams = {
  expand?: Array<string>;
  limit?: number;
  page?: string;
  query: string;
};
export type GetV1SubscriptionsParams = {
  collection_method?: "charge_automatically" | "send_invoice";
  created?: RangeQuerySpecs | number;
  current_period_end?: RangeQuerySpecs | number;
  current_period_start?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  plan?: string;
  price?: string;
  starting_after?: string;
  status?:
    | "active"
    | "all"
    | "canceled"
    | "ended"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
  test_clock?: string;
};
export type OneTimePriceDataWithNegativeAmounts = {
  currency: string;
  product: string;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  unit_amount?: number;
  unit_amount_decimal?: unknown /*primitive*/;
};
export type AddInvoiceItemEntry = {
  price?: string;
  price_data?: OneTimePriceDataWithNegativeAmounts;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type AutomaticTaxConfig = { enabled: boolean };
export type BillingThresholdsParam = {
  amount_gte?: number;
  reset_billing_cycle_anchor?: boolean;
};
export type SubscriptionItemCreateParams = {
  billing_thresholds?: ItemBillingThresholdsParam | "";
  metadata?: unknown /*map*/;
  plan?: string;
  price?: string;
  price_data?: RecurringPriceData;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type SubscriptionPaymentMethodOptionsParam = {
  mandate_options?: MandateOptionsParam;
  network?:
    | "amex"
    | "cartes_bancaires"
    | "diners"
    | "discover"
    | "interac"
    | "jcb"
    | "mastercard"
    | "unionpay"
    | "unknown"
    | "visa";
  request_three_d_secure?: "any" | "automatic";
};
export type PendingInvoiceItemIntervalParams = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number;
};
export type PostV1SubscriptionsParams = {
  add_invoice_items?: Array<AddInvoiceItemEntry>;
  application_fee_percent?: number;
  automatic_tax?: AutomaticTaxConfig;
  backdate_start_date?: number;
  billing_cycle_anchor?: number;
  billing_thresholds?: BillingThresholdsParam | "";
  cancel_at?: number;
  cancel_at_period_end?: boolean;
  collection_method?: "charge_automatically" | "send_invoice";
  coupon?: string;
  currency?: string;
  customer: string;
  days_until_due?: number;
  default_payment_method?: string;
  default_source?: string;
  default_tax_rates?: Array<string> | "";
  description?: string;
  expand?: Array<string>;
  items?: Array<SubscriptionItemCreateParams>;
  metadata?: unknown /*map*/ | "";
  off_session?: boolean;
  on_behalf_of?: string | "";
  payment_behavior?:
    | "allow_incomplete"
    | "default_incomplete"
    | "error_if_incomplete"
    | "pending_if_incomplete";
  payment_settings?: PaymentSettings;
  pending_invoice_item_interval?: PendingInvoiceItemIntervalParams | "";
  promotion_code?: string;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  transfer_data?: TransferDataSpecs;
  trial_end?: "now" | number;
  trial_from_plan?: boolean;
  trial_period_days?: number;
  trial_settings?: TrialSettingsConfig;
};
export type CancellationDetailsParam = {
  comment?: string;
  feedback?:
    | "customer_service"
    | "low_quality"
    | "missing_features"
    | "other"
    | "switched_service"
    | "too_complex"
    | "too_expensive"
    | "unused"
    | "";
};
export type PauseCollectionParam = {
  behavior: "keep_as_draft" | "mark_uncollectible" | "void";
  resumes_at?: number;
};
export type PostV1SubscriptionsSubscriptionExposedIdParams = {
  subscription_exposed_id: string;
  add_invoice_items?: Array<AddInvoiceItemEntry>;
  application_fee_percent?: number;
  automatic_tax?: AutomaticTaxConfig;
  billing_cycle_anchor?: "now" | "unchanged";
  billing_thresholds?: BillingThresholdsParam | "";
  cancel_at?: number | "";
  cancel_at_period_end?: boolean;
  cancellation_details?: CancellationDetailsParam;
  collection_method?: "charge_automatically" | "send_invoice";
  coupon?: string;
  days_until_due?: number;
  default_payment_method?: string;
  default_source?: string;
  default_tax_rates?: Array<string> | "";
  description?: string;
  expand?: Array<string>;
  items?: Array<SubscriptionItemUpdateParams>;
  metadata?: unknown /*map*/ | "";
  off_session?: boolean;
  on_behalf_of?: string | "";
  pause_collection?: PauseCollectionParam | "";
  payment_behavior?:
    | "allow_incomplete"
    | "default_incomplete"
    | "error_if_incomplete"
    | "pending_if_incomplete";
  payment_settings?: PaymentSettings;
  pending_invoice_item_interval?: PendingInvoiceItemIntervalParams | "";
  promotion_code?: string;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
  transfer_data?: TransferDataSpecs | "";
  trial_end?: "now" | number;
  trial_from_plan?: boolean;
  trial_settings?: TrialSettingsConfig;
};
export type GetV1SubscriptionsSubscriptionExposedIdParams = {
  subscription_exposed_id: string;
  expand?: Array<string>;
};
export type DeleteV1SubscriptionsSubscriptionExposedIdParams = {
  subscription_exposed_id: string;
  cancellation_details?: CancellationDetailsParam;
  expand?: Array<string>;
  invoice_now?: boolean;
  prorate?: boolean;
};
export type PostV1SubscriptionsSubscriptionResumeParams = {
  subscription: string;
  billing_cycle_anchor?: "now" | "unchanged";
  expand?: Array<string>;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
};
export type DeleteV1SubscriptionsSubscriptionExposedIdDiscountParams = {
  subscription_exposed_id: string;
};
export type GetV1SubscriptionItemsParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  subscription: string;
};
export type PostV1SubscriptionItemsParams = {
  billing_thresholds?: ItemBillingThresholdsParam | "";
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  payment_behavior?:
    | "allow_incomplete"
    | "default_incomplete"
    | "error_if_incomplete"
    | "pending_if_incomplete";
  plan?: string;
  price?: string;
  price_data?: RecurringPriceData;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
  quantity?: number;
  subscription: string;
  tax_rates?: Array<string> | "";
};
export type GetV1SubscriptionItemsItemParams = {
  item: string;
  expand?: Array<string>;
};
export type PostV1SubscriptionItemsItemParams = {
  item: string;
  billing_thresholds?: ItemBillingThresholdsParam | "";
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  off_session?: boolean;
  payment_behavior?:
    | "allow_incomplete"
    | "default_incomplete"
    | "error_if_incomplete"
    | "pending_if_incomplete";
  plan?: string;
  price?: string;
  price_data?: RecurringPriceData;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type DeleteV1SubscriptionItemsItemParams = {
  item: string;
  clear_usage?: boolean;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
};
export type GetV1SubscriptionItemsSubscriptionItemUsageRecordSummariesParams = {
  subscription_item: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1SubscriptionItemsSubscriptionItemUsageRecordsParams = {
  subscription_item: string;
  action?: "increment" | "set";
  expand?: Array<string>;
  quantity: number;
  timestamp?: "now" | number;
};
export type GetV1SubscriptionSchedulesParams = {
  canceled_at?: RangeQuerySpecs | number;
  completed_at?: RangeQuerySpecs | number;
  created?: RangeQuerySpecs | number;
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  released_at?: RangeQuerySpecs | number;
  scheduled?: boolean;
  starting_after?: string;
};
export type SubscriptionScheduleDefaultSettingsParam = {
  days_until_due?: number;
};
export type DefaultSettingsParams = {
  application_fee_percent?: number;
  automatic_tax?: AutomaticTaxConfig;
  billing_cycle_anchor?: "automatic" | "phase_start";
  billing_thresholds?: BillingThresholdsParam | "";
  collection_method?: "charge_automatically" | "send_invoice";
  default_payment_method?: string;
  description?: string;
  invoice_settings?: SubscriptionScheduleDefaultSettingsParam;
  on_behalf_of?: string | "";
  transfer_data?: TransferDataSpecs | "";
};
export type CommonPhaseConfigurationParam = { days_until_due?: number };
export type ConfigurationItemParams = {
  billing_thresholds?: ItemBillingThresholdsParam | "";
  metadata?: unknown /*map*/;
  plan?: string;
  price?: string;
  price_data?: RecurringPriceData;
  quantity?: number;
  tax_rates?: Array<string> | "";
};
export type PhaseConfigurationParams = {
  add_invoice_items?: Array<AddInvoiceItemEntry>;
  application_fee_percent?: number;
  automatic_tax?: AutomaticTaxConfig;
  billing_cycle_anchor?: "automatic" | "phase_start";
  billing_thresholds?: BillingThresholdsParam | "";
  collection_method?: "charge_automatically" | "send_invoice";
  coupon?: string;
  currency?: string;
  default_payment_method?: string;
  default_tax_rates?: Array<string> | "";
  description?: string;
  end_date?: number | "now";
  invoice_settings?: CommonPhaseConfigurationParam;
  items: Array<ConfigurationItemParams>;
  iterations?: number;
  metadata?: unknown /*map*/;
  on_behalf_of?: string;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  start_date?: number | "now";
  transfer_data?: TransferDataSpecs;
  trial?: boolean;
  trial_end?: number | "now";
};
export type PostV1SubscriptionSchedulesParams = {
  customer?: string;
  default_settings?: DefaultSettingsParams;
  end_behavior?: "cancel" | "none" | "release" | "renew";
  expand?: Array<string>;
  from_subscription?: string;
  metadata?: unknown /*map*/ | "";
  phases?: Array<PhaseConfigurationParams>;
  start_date?: number | "now";
};
export type GetV1SubscriptionSchedulesScheduleParams = {
  schedule: string;
  expand?: Array<string>;
};
export type PostV1SubscriptionSchedulesScheduleParams = {
  schedule: string;
  default_settings?: DefaultSettingsParams;
  end_behavior?: "cancel" | "none" | "release" | "renew";
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  phases?: Array<PhaseConfigurationParams>;
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
};
export type PostV1SubscriptionSchedulesScheduleCancelParams = {
  schedule: string;
  expand?: Array<string>;
  invoice_now?: boolean;
  prorate?: boolean;
};
export type PostV1SubscriptionSchedulesScheduleReleaseParams = {
  schedule: string;
  expand?: Array<string>;
  preserve_cancel_date?: boolean;
};
export type GetV1TaxCodesParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1TaxCodesIdParams = { id: string; expand?: Array<string> };
export type GetV1TaxRatesParams = {
  active?: boolean;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  inclusive?: boolean;
  limit?: number;
  starting_after?: string;
};
export type PostV1TaxRatesParams = {
  active?: boolean;
  country?: string;
  description?: string;
  display_name: string;
  expand?: Array<string>;
  inclusive: boolean;
  jurisdiction?: string;
  metadata?: unknown /*map*/;
  percentage: number;
  state?: string;
  tax_type?:
    | "gst"
    | "hst"
    | "igst"
    | "jct"
    | "lease_tax"
    | "pst"
    | "qst"
    | "rst"
    | "sales_tax"
    | "vat";
};
export type GetV1TaxRatesTaxRateParams = {
  tax_rate: string;
  expand?: Array<string>;
};
export type PostV1TaxRatesTaxRateParams = {
  tax_rate: string;
  active?: boolean;
  country?: string;
  description?: string;
  display_name?: string;
  expand?: Array<string>;
  jurisdiction?: string;
  metadata?: unknown /*map*/ | "";
  state?: string;
  tax_type?:
    | "gst"
    | "hst"
    | "igst"
    | "jct"
    | "lease_tax"
    | "pst"
    | "qst"
    | "rst"
    | "sales_tax"
    | "vat";
};
export type BbposWisePose = { splashscreen?: string | "" };
export type CurrencySpecificConfig = {
  fixed_amounts?: Array<number>;
  percentages?: Array<number>;
  smart_tip_threshold?: number;
};
export type Tipping = {
  aud?: CurrencySpecificConfig;
  cad?: CurrencySpecificConfig;
  chf?: CurrencySpecificConfig;
  czk?: CurrencySpecificConfig;
  dkk?: CurrencySpecificConfig;
  eur?: CurrencySpecificConfig;
  gbp?: CurrencySpecificConfig;
  hkd?: CurrencySpecificConfig;
  myr?: CurrencySpecificConfig;
  nok?: CurrencySpecificConfig;
  nzd?: CurrencySpecificConfig;
  sek?: CurrencySpecificConfig;
  sgd?: CurrencySpecificConfig;
  usd?: CurrencySpecificConfig;
};
export type VerifoneP400 = { splashscreen?: string | "" };
export type PostV1TerminalConfigurationsParams = {
  bbpos_wisepos_e?: BbposWisePose;
  expand?: Array<string>;
  tipping?: Tipping | "";
  verifone_p400?: VerifoneP400;
};
export type GetV1TerminalConfigurationsParams = {
  ending_before?: string;
  expand?: Array<string>;
  is_account_default?: boolean;
  limit?: number;
  starting_after?: string;
};
export type GetV1TerminalConfigurationsConfigurationParams = {
  configuration: string;
  expand?: Array<string>;
};
export type PostV1TerminalConfigurationsConfigurationParams = {
  configuration: string;
  bbpos_wisepos_e?: BbposWisePose | "";
  expand?: Array<string>;
  tipping?: Tipping | "";
  verifone_p400?: VerifoneP400 | "";
};
export type DeleteV1TerminalConfigurationsConfigurationParams = {
  configuration: string;
};
export type PostV1TerminalConnectionTokensParams = {
  expand?: Array<string>;
  location?: string;
};
export type GetV1TerminalLocationsLocationParams = {
  location: string;
  expand?: Array<string>;
};
export type PostV1TerminalLocationsLocationParams = {
  location: string;
  address?: OptionalFieldsAddress;
  configuration_overrides?: string;
  display_name?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type DeleteV1TerminalLocationsLocationParams = { location: string };
export type CreateLocationAddressParam = {
  city?: string;
  country: string;
  line1?: string;
  line2?: string;
  postal_code?: string;
  state?: string;
};
export type PostV1TerminalLocationsParams = {
  address: CreateLocationAddressParam;
  configuration_overrides?: string;
  display_name: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1TerminalLocationsParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1TerminalReadersReaderParams = {
  reader: string;
  expand?: Array<string>;
  label?: string;
  metadata?: unknown /*map*/ | "";
};
export type GetV1TerminalReadersReaderParams = {
  reader: string;
  expand?: Array<string>;
};
export type DeleteV1TerminalReadersReaderParams = { reader: string };
export type PostV1TerminalReadersParams = {
  expand?: Array<string>;
  label?: string;
  location?: string;
  metadata?: unknown /*map*/ | "";
  registration_code: string;
};
export type GetV1TerminalReadersParams = {
  device_type?:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "verifone_P400";
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  location?: string;
  starting_after?: string;
  status?: "offline" | "online";
};
export type TippingConfig = { amount_eligible?: number };
export type ProcessConfig = { skip_tipping?: boolean; tipping?: TippingConfig };
export type PostV1TerminalReadersReaderProcessPaymentIntentParams = {
  reader: string;
  expand?: Array<string>;
  payment_intent: string;
  process_config?: ProcessConfig;
};
export type PostV1TerminalReadersReaderProcessSetupIntentParams = {
  reader: string;
  customer_consent_collected: boolean;
  expand?: Array<string>;
  setup_intent: string;
};
export type PostV1TerminalReadersReaderCancelActionParams = {
  reader: string;
  expand?: Array<string>;
};
export type Cart = {
  currency: string;
  line_items: Array<LineItem>;
  tax?: number;
  total: number;
};
export type PostV1TerminalReadersReaderSetReaderDisplayParams = {
  reader: string;
  cart?: Cart;
  expand?: Array<string>;
  type: "cart";
};
export type PostV1TerminalReadersReaderRefundPaymentParams = {
  reader: string;
  amount?: number;
  charge?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  payment_intent?: string;
  refund_application_fee?: boolean;
  reverse_transfer?: boolean;
};
export type GetV1TokensTokenParams = { token: string; expand?: Array<string> };
export type ConnectJsAccountTokenCompanySpecs = {
  address?: AddressSpecs;
  address_kana?: JapanAddressKanaSpecs;
  address_kanji?: JapanAddressKanjiSpecs;
  directors_provided?: boolean;
  executives_provided?: boolean;
  name?: string;
  name_kana?: string;
  name_kanji?: string;
  owners_provided?: boolean;
  ownership_declaration?: CompanyOwnershipDeclaration;
  ownership_declaration_shown_and_signed?: boolean;
  phone?: string;
  registration_number?: string;
  structure?:
    | "free_zone_establishment"
    | "free_zone_llc"
    | "government_instrumentality"
    | "governmental_unit"
    | "incorporated_non_profit"
    | "limited_liability_partnership"
    | "llc"
    | "multi_member_llc"
    | "private_company"
    | "private_corporation"
    | "private_partnership"
    | "public_company"
    | "public_corporation"
    | "public_partnership"
    | "single_member_llc"
    | "sole_establishment"
    | "sole_proprietorship"
    | "tax_exempt_government_instrumentality"
    | "unincorporated_association"
    | "unincorporated_non_profit"
    | "";
  tax_id?: string;
  tax_id_registrar?: string;
  vat_id?: string;
  verification?: VerificationSpecs;
};
export type ConnectJsAccountTokenSpecs = {
  business_type?: "company" | "government_entity" | "individual" | "non_profit";
  company?: ConnectJsAccountTokenCompanySpecs;
  individual?: IndividualSpecs;
  tos_shown_and_accepted?: boolean;
};
export type TokenCreateBankAccount = {
  account_holder_name?: string;
  account_holder_type?: "company" | "individual";
  account_number: string;
  account_type?: "checking" | "futsu" | "savings" | "toza";
  country: string;
  currency?: string;
  routing_number?: string;
};
export type CreditCardSpecs = {
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  currency?: string;
  cvc?: string;
  exp_month: string;
  exp_year: string;
  name?: string;
  number: string;
};
export type CvcParams = { cvc: string };
export type PersonTokenSpecs = {
  address?: AddressSpecs;
  address_kana?: JapanAddressKanaSpecs;
  address_kanji?: JapanAddressKanjiSpecs;
  dob?: DateOfBirthSpecs | "";
  documents?: PersonDocumentsSpecs;
  email?: string;
  first_name?: string;
  first_name_kana?: string;
  first_name_kanji?: string;
  full_name_aliases?: Array<string> | "";
  gender?: string;
  id_number?: string;
  id_number_secondary?: string;
  last_name?: string;
  last_name_kana?: string;
  last_name_kanji?: string;
  maiden_name?: string;
  metadata?: unknown /*map*/ | "";
  nationality?: string;
  phone?: string;
  political_exposure?: string;
  registered_address?: AddressSpecs;
  relationship?: RelationshipSpecs;
  ssn_last_4?: string;
  verification?: PersonVerificationSpecs;
};
export type PiiTokenSpecs = { id_number?: string };
export type PostV1TokensParams = {
  account?: ConnectJsAccountTokenSpecs;
  bank_account?: TokenCreateBankAccount;
  card?: CreditCardSpecs | string;
  customer?: string;
  cvc_update?: CvcParams;
  expand?: Array<string>;
  person?: PersonTokenSpecs;
  pii?: PiiTokenSpecs;
};
export type PostV1TopupsParams = {
  amount: number;
  currency: string;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  source?: string;
  statement_descriptor?: string;
  transfer_group?: string;
};
export type GetV1TopupsParams = {
  amount?: RangeQuerySpecs | number;
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "failed" | "pending" | "succeeded";
};
export type GetV1TopupsTopupParams = { topup: string; expand?: Array<string> };
export type PostV1TopupsTopupParams = {
  topup: string;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type PostV1TopupsTopupCancelParams = {
  topup: string;
  expand?: Array<string>;
};
export type PostV1TransfersParams = {
  amount?: number;
  currency: string;
  description?: string;
  destination: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  source_transaction?: string;
  source_type?: "bank_account" | "card" | "fpx";
  transfer_group?: string;
};
export type GetV1TransfersParams = {
  created?: RangeQuerySpecs | number;
  destination?: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
  transfer_group?: string;
};
export type GetV1TransfersTransferParams = {
  transfer: string;
  expand?: Array<string>;
};
export type PostV1TransfersTransferParams = {
  transfer: string;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type PostV1TransfersIdReversalsParams = {
  id: string;
  amount?: number;
  description?: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  refund_application_fee?: boolean;
};
export type GetV1TransfersIdReversalsParams = {
  id: string;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type GetV1TransfersTransferReversalsIdParams = {
  transfer: string;
  id: string;
  expand?: Array<string>;
};
export type PostV1TransfersTransferReversalsIdParams = {
  transfer: string;
  id: string;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
};
export type GetV1TreasuryCreditReversalsParams = {
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  received_credit?: string;
  starting_after?: string;
  status?: "canceled" | "posted" | "processing";
};
export type PostV1TreasuryCreditReversalsParams = {
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  received_credit: string;
};
export type GetV1TreasuryCreditReversalsCreditReversalParams = {
  credit_reversal: string;
  expand?: Array<string>;
};
export type PostV1TreasuryDebitReversalsParams = {
  expand?: Array<string>;
  metadata?: unknown /*map*/;
  received_debit: string;
};
export type GetV1TreasuryDebitReversalsParams = {
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  received_debit?: string;
  resolution?: "lost" | "won";
  starting_after?: string;
  status?: "canceled" | "completed" | "processing";
};
export type GetV1TreasuryDebitReversalsDebitReversalParams = {
  debit_reversal: string;
  expand?: Array<string>;
};
export type Access = { requested: boolean };
export type FinancialAddresses = { aba?: Access };
export type AccessWithAchDetails = { requested: boolean };
export type OutboundPayments = {
  ach?: AccessWithAchDetails;
  us_domestic_wire?: Access;
};
export type OutboundTransfers = {
  ach?: AccessWithAchDetails;
  us_domestic_wire?: Access;
};
export type FeatureAccess = {
  card_issuing?: Access;
  deposit_insurance?: Access;
  financial_addresses?: FinancialAddresses;
  inbound_transfers?: InboundTransfers;
  intra_stripe_flows?: Access;
  outbound_payments?: OutboundPayments;
  outbound_transfers?: OutboundTransfers;
};
export type PlatformRestrictions = {
  inbound_flows?: "restricted" | "unrestricted";
  outbound_flows?: "restricted" | "unrestricted";
};
export type PostV1TreasuryFinancialAccountsParams = {
  expand?: Array<string>;
  features?: FeatureAccess;
  metadata?: unknown /*map*/;
  platform_restrictions?: PlatformRestrictions;
  supported_currencies: Array<string>;
};
export type GetV1TreasuryFinancialAccountsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1TreasuryFinancialAccountsFinancialAccountParams = {
  financial_account: string;
  expand?: Array<string>;
  features?: FeatureAccess;
  metadata?: unknown /*map*/;
  platform_restrictions?: PlatformRestrictions;
};
export type GetV1TreasuryFinancialAccountsFinancialAccountParams = {
  financial_account: string;
  expand?: Array<string>;
};
export type PostV1TreasuryFinancialAccountsFinancialAccountFeaturesParams = {
  financial_account: string;
  card_issuing?: Access;
  deposit_insurance?: Access;
  expand?: Array<string>;
  financial_addresses?: FinancialAddresses;
  inbound_transfers?: InboundTransfers;
  intra_stripe_flows?: Access;
  outbound_payments?: OutboundPayments;
  outbound_transfers?: OutboundTransfers;
};
export type GetV1TreasuryFinancialAccountsFinancialAccountFeaturesParams = {
  financial_account: string;
  expand?: Array<string>;
};
export type PostV1TreasuryInboundTransfersInboundTransferCancelParams = {
  inbound_transfer: string;
  expand?: Array<string>;
};
export type PostV1TreasuryInboundTransfersParams = {
  amount: number;
  currency: string;
  description?: string;
  expand?: Array<string>;
  financial_account: string;
  metadata?: unknown /*map*/;
  origin_payment_method: string;
  statement_descriptor?: string;
};
export type GetV1TreasuryInboundTransfersParams = {
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "failed" | "processing" | "succeeded";
};
export type GetV1TreasuryInboundTransfersIdParams = {
  id: string;
  expand?: Array<string>;
};
export type PaymentMethodData = {
  billing_details?: BillingDetailsInnerParams;
  financial_account?: string;
  metadata?: unknown /*map*/;
  type: "financial_account" | "us_bank_account";
  us_bank_account?: PaymentMethodParam;
};
export type EndUserDetailsParams = { ip_address?: string; present: boolean };
export type PostV1TreasuryOutboundPaymentsParams = {
  amount: number;
  currency: string;
  customer?: string;
  description?: string;
  destination_payment_method?: string;
  destination_payment_method_data?: PaymentMethodData;
  destination_payment_method_options?: PaymentMethodOptions;
  end_user_details?: EndUserDetailsParams;
  expand?: Array<string>;
  financial_account: string;
  metadata?: unknown /*map*/;
  statement_descriptor?: string;
};
export type GetV1TreasuryOutboundPaymentsParams = {
  customer?: string;
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "failed" | "posted" | "processing" | "returned";
};
export type GetV1TreasuryOutboundPaymentsIdParams = {
  id: string;
  expand?: Array<string>;
};
export type PostV1TreasuryOutboundPaymentsIdCancelParams = {
  id: string;
  expand?: Array<string>;
};
export type PostV1TreasuryOutboundTransfersParams = {
  amount: number;
  currency: string;
  description?: string;
  destination_payment_method?: string;
  destination_payment_method_options?: PaymentMethodOptions;
  expand?: Array<string>;
  financial_account: string;
  metadata?: unknown /*map*/;
  statement_descriptor?: string;
};
export type GetV1TreasuryOutboundTransfersParams = {
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "failed" | "posted" | "processing" | "returned";
};
export type GetV1TreasuryOutboundTransfersOutboundTransferParams = {
  outbound_transfer: string;
  expand?: Array<string>;
};
export type PostV1TreasuryOutboundTransfersOutboundTransferCancelParams = {
  outbound_transfer: string;
  expand?: Array<string>;
};
export type LinkedFlowsParam = {
  source_flow_type: "credit_reversal" | "other" | "outbound_payment" | "payout";
};
export type GetV1TreasuryReceivedCreditsParams = {
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  linked_flows?: LinkedFlowsParam;
  starting_after?: string;
  status?: "failed" | "succeeded";
};
export type GetV1TreasuryReceivedCreditsIdParams = {
  id: string;
  expand?: Array<string>;
};
export type GetV1TreasuryReceivedDebitsParams = {
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  starting_after?: string;
  status?: "failed" | "succeeded";
};
export type GetV1TreasuryReceivedDebitsIdParams = {
  id: string;
  expand?: Array<string>;
};
export type GetV1TreasuryTransactionsIdParams = {
  id: string;
  expand?: Array<string>;
};
export type StatusTransitionTimestampSpecs = {
  posted_at?: RangeQuerySpecs | number;
};
export type GetV1TreasuryTransactionsParams = {
  created?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  order_by?: "created" | "posted_at";
  starting_after?: string;
  status?: "open" | "posted" | "void";
  status_transitions?: StatusTransitionTimestampSpecs;
};
export type GetV1TreasuryTransactionEntriesIdParams = {
  id: string;
  expand?: Array<string>;
};
export type GetV1TreasuryTransactionEntriesParams = {
  created?: RangeQuerySpecs | number;
  effective_at?: RangeQuerySpecs | number;
  ending_before?: string;
  expand?: Array<string>;
  financial_account: string;
  limit?: number;
  order_by?: "created" | "effective_at";
  starting_after?: string;
  transaction?: string;
};
export type GetV1WebhookEndpointsParams = {
  ending_before?: string;
  expand?: Array<string>;
  limit?: number;
  starting_after?: string;
};
export type PostV1WebhookEndpointsParams = {
  api_version?:
    | "2011-01-01"
    | "2011-06-21"
    | "2011-06-28"
    | "2011-08-01"
    | "2011-09-15"
    | "2011-11-17"
    | "2012-02-23"
    | "2012-03-25"
    | "2012-06-18"
    | "2012-06-28"
    | "2012-07-09"
    | "2012-09-24"
    | "2012-10-26"
    | "2012-11-07"
    | "2013-02-11"
    | "2013-02-13"
    | "2013-07-05"
    | "2013-08-12"
    | "2013-08-13"
    | "2013-10-29"
    | "2013-12-03"
    | "2014-01-31"
    | "2014-03-13"
    | "2014-03-28"
    | "2014-05-19"
    | "2014-06-13"
    | "2014-06-17"
    | "2014-07-22"
    | "2014-07-26"
    | "2014-08-04"
    | "2014-08-20"
    | "2014-09-08"
    | "2014-10-07"
    | "2014-11-05"
    | "2014-11-20"
    | "2014-12-08"
    | "2014-12-17"
    | "2014-12-22"
    | "2015-01-11"
    | "2015-01-26"
    | "2015-02-10"
    | "2015-02-16"
    | "2015-02-18"
    | "2015-03-24"
    | "2015-04-07"
    | "2015-06-15"
    | "2015-07-07"
    | "2015-07-13"
    | "2015-07-28"
    | "2015-08-07"
    | "2015-08-19"
    | "2015-09-03"
    | "2015-09-08"
    | "2015-09-23"
    | "2015-10-01"
    | "2015-10-12"
    | "2015-10-16"
    | "2016-02-03"
    | "2016-02-19"
    | "2016-02-22"
    | "2016-02-23"
    | "2016-02-29"
    | "2016-03-07"
    | "2016-06-15"
    | "2016-07-06"
    | "2016-10-19"
    | "2017-01-27"
    | "2017-02-14"
    | "2017-04-06"
    | "2017-05-25"
    | "2017-06-05"
    | "2017-08-15"
    | "2017-12-14"
    | "2018-01-23"
    | "2018-02-05"
    | "2018-02-06"
    | "2018-02-28"
    | "2018-05-21"
    | "2018-07-27"
    | "2018-08-23"
    | "2018-09-06"
    | "2018-09-24"
    | "2018-10-31"
    | "2018-11-08"
    | "2019-02-11"
    | "2019-02-19"
    | "2019-03-14"
    | "2019-05-16"
    | "2019-08-14"
    | "2019-09-09"
    | "2019-10-08"
    | "2019-10-17"
    | "2019-11-05"
    | "2019-12-03"
    | "2020-03-02"
    | "2020-08-27"
    | "2022-08-01"
    | "2022-11-15";
  connect?: boolean;
  description?: string;
  enabled_events: Array<
    | "*"
    | "account.application.authorized"
    | "account.application.deauthorized"
    | "account.external_account.created"
    | "account.external_account.deleted"
    | "account.external_account.updated"
    | "account.updated"
    | "application_fee.created"
    | "application_fee.refund.updated"
    | "application_fee.refunded"
    | "balance.available"
    | "billing_portal.configuration.created"
    | "billing_portal.configuration.updated"
    | "billing_portal.session.created"
    | "capability.updated"
    | "cash_balance.funds_available"
    | "charge.captured"
    | "charge.dispute.closed"
    | "charge.dispute.created"
    | "charge.dispute.funds_reinstated"
    | "charge.dispute.funds_withdrawn"
    | "charge.dispute.updated"
    | "charge.expired"
    | "charge.failed"
    | "charge.pending"
    | "charge.refund.updated"
    | "charge.refunded"
    | "charge.succeeded"
    | "charge.updated"
    | "checkout.session.async_payment_failed"
    | "checkout.session.async_payment_succeeded"
    | "checkout.session.completed"
    | "checkout.session.expired"
    | "coupon.created"
    | "coupon.deleted"
    | "coupon.updated"
    | "credit_note.created"
    | "credit_note.updated"
    | "credit_note.voided"
    | "customer.created"
    | "customer.deleted"
    | "customer.discount.created"
    | "customer.discount.deleted"
    | "customer.discount.updated"
    | "customer.source.created"
    | "customer.source.deleted"
    | "customer.source.expiring"
    | "customer.source.updated"
    | "customer.subscription.created"
    | "customer.subscription.deleted"
    | "customer.subscription.paused"
    | "customer.subscription.pending_update_applied"
    | "customer.subscription.pending_update_expired"
    | "customer.subscription.resumed"
    | "customer.subscription.trial_will_end"
    | "customer.subscription.updated"
    | "customer.tax_id.created"
    | "customer.tax_id.deleted"
    | "customer.tax_id.updated"
    | "customer.updated"
    | "customer_cash_balance_transaction.created"
    | "file.created"
    | "financial_connections.account.created"
    | "financial_connections.account.deactivated"
    | "financial_connections.account.disconnected"
    | "financial_connections.account.reactivated"
    | "financial_connections.account.refreshed_balance"
    | "identity.verification_session.canceled"
    | "identity.verification_session.created"
    | "identity.verification_session.processing"
    | "identity.verification_session.redacted"
    | "identity.verification_session.requires_input"
    | "identity.verification_session.verified"
    | "invoice.created"
    | "invoice.deleted"
    | "invoice.finalization_failed"
    | "invoice.finalized"
    | "invoice.marked_uncollectible"
    | "invoice.paid"
    | "invoice.payment_action_required"
    | "invoice.payment_failed"
    | "invoice.payment_succeeded"
    | "invoice.sent"
    | "invoice.upcoming"
    | "invoice.updated"
    | "invoice.voided"
    | "invoiceitem.created"
    | "invoiceitem.deleted"
    | "invoiceitem.updated"
    | "issuing_authorization.created"
    | "issuing_authorization.request"
    | "issuing_authorization.updated"
    | "issuing_card.created"
    | "issuing_card.updated"
    | "issuing_cardholder.created"
    | "issuing_cardholder.updated"
    | "issuing_dispute.closed"
    | "issuing_dispute.created"
    | "issuing_dispute.funds_reinstated"
    | "issuing_dispute.submitted"
    | "issuing_dispute.updated"
    | "issuing_transaction.created"
    | "issuing_transaction.updated"
    | "mandate.updated"
    | "order.created"
    | "payment_intent.amount_capturable_updated"
    | "payment_intent.canceled"
    | "payment_intent.created"
    | "payment_intent.partially_funded"
    | "payment_intent.payment_failed"
    | "payment_intent.processing"
    | "payment_intent.requires_action"
    | "payment_intent.succeeded"
    | "payment_link.created"
    | "payment_link.updated"
    | "payment_method.attached"
    | "payment_method.automatically_updated"
    | "payment_method.detached"
    | "payment_method.updated"
    | "payout.canceled"
    | "payout.created"
    | "payout.failed"
    | "payout.paid"
    | "payout.reconciliation_completed"
    | "payout.updated"
    | "person.created"
    | "person.deleted"
    | "person.updated"
    | "plan.created"
    | "plan.deleted"
    | "plan.updated"
    | "price.created"
    | "price.deleted"
    | "price.updated"
    | "product.created"
    | "product.deleted"
    | "product.updated"
    | "promotion_code.created"
    | "promotion_code.updated"
    | "quote.accepted"
    | "quote.canceled"
    | "quote.created"
    | "quote.finalized"
    | "radar.early_fraud_warning.created"
    | "radar.early_fraud_warning.updated"
    | "recipient.created"
    | "recipient.deleted"
    | "recipient.updated"
    | "refund.created"
    | "refund.updated"
    | "reporting.report_run.failed"
    | "reporting.report_run.succeeded"
    | "reporting.report_type.updated"
    | "review.closed"
    | "review.opened"
    | "setup_intent.canceled"
    | "setup_intent.created"
    | "setup_intent.requires_action"
    | "setup_intent.setup_failed"
    | "setup_intent.succeeded"
    | "sigma.scheduled_query_run.created"
    | "sku.created"
    | "sku.deleted"
    | "sku.updated"
    | "source.canceled"
    | "source.chargeable"
    | "source.failed"
    | "source.mandate_notification"
    | "source.refund_attributes_required"
    | "source.transaction.created"
    | "source.transaction.updated"
    | "subscription_schedule.aborted"
    | "subscription_schedule.canceled"
    | "subscription_schedule.completed"
    | "subscription_schedule.created"
    | "subscription_schedule.expiring"
    | "subscription_schedule.released"
    | "subscription_schedule.updated"
    | "tax_rate.created"
    | "tax_rate.updated"
    | "terminal.reader.action_failed"
    | "terminal.reader.action_succeeded"
    | "test_helpers.test_clock.advancing"
    | "test_helpers.test_clock.created"
    | "test_helpers.test_clock.deleted"
    | "test_helpers.test_clock.internal_failure"
    | "test_helpers.test_clock.ready"
    | "topup.canceled"
    | "topup.created"
    | "topup.failed"
    | "topup.reversed"
    | "topup.succeeded"
    | "transfer.created"
    | "transfer.reversed"
    | "transfer.updated"
    | "treasury.credit_reversal.created"
    | "treasury.credit_reversal.posted"
    | "treasury.debit_reversal.completed"
    | "treasury.debit_reversal.created"
    | "treasury.debit_reversal.initial_credit_granted"
    | "treasury.financial_account.closed"
    | "treasury.financial_account.created"
    | "treasury.financial_account.features_status_updated"
    | "treasury.inbound_transfer.canceled"
    | "treasury.inbound_transfer.created"
    | "treasury.inbound_transfer.failed"
    | "treasury.inbound_transfer.succeeded"
    | "treasury.outbound_payment.canceled"
    | "treasury.outbound_payment.created"
    | "treasury.outbound_payment.expected_arrival_date_updated"
    | "treasury.outbound_payment.failed"
    | "treasury.outbound_payment.posted"
    | "treasury.outbound_payment.returned"
    | "treasury.outbound_transfer.canceled"
    | "treasury.outbound_transfer.created"
    | "treasury.outbound_transfer.expected_arrival_date_updated"
    | "treasury.outbound_transfer.failed"
    | "treasury.outbound_transfer.posted"
    | "treasury.outbound_transfer.returned"
    | "treasury.received_credit.created"
    | "treasury.received_credit.failed"
    | "treasury.received_credit.succeeded"
    | "treasury.received_debit.created"
  >;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  url: string;
};
export type GetV1WebhookEndpointsWebhookEndpointParams = {
  webhook_endpoint: string;
  expand?: Array<string>;
};
export type PostV1WebhookEndpointsWebhookEndpointParams = {
  webhook_endpoint: string;
  description?: string;
  disabled?: boolean;
  enabled_events?: Array<
    | "*"
    | "account.application.authorized"
    | "account.application.deauthorized"
    | "account.external_account.created"
    | "account.external_account.deleted"
    | "account.external_account.updated"
    | "account.updated"
    | "application_fee.created"
    | "application_fee.refund.updated"
    | "application_fee.refunded"
    | "balance.available"
    | "billing_portal.configuration.created"
    | "billing_portal.configuration.updated"
    | "billing_portal.session.created"
    | "capability.updated"
    | "cash_balance.funds_available"
    | "charge.captured"
    | "charge.dispute.closed"
    | "charge.dispute.created"
    | "charge.dispute.funds_reinstated"
    | "charge.dispute.funds_withdrawn"
    | "charge.dispute.updated"
    | "charge.expired"
    | "charge.failed"
    | "charge.pending"
    | "charge.refund.updated"
    | "charge.refunded"
    | "charge.succeeded"
    | "charge.updated"
    | "checkout.session.async_payment_failed"
    | "checkout.session.async_payment_succeeded"
    | "checkout.session.completed"
    | "checkout.session.expired"
    | "coupon.created"
    | "coupon.deleted"
    | "coupon.updated"
    | "credit_note.created"
    | "credit_note.updated"
    | "credit_note.voided"
    | "customer.created"
    | "customer.deleted"
    | "customer.discount.created"
    | "customer.discount.deleted"
    | "customer.discount.updated"
    | "customer.source.created"
    | "customer.source.deleted"
    | "customer.source.expiring"
    | "customer.source.updated"
    | "customer.subscription.created"
    | "customer.subscription.deleted"
    | "customer.subscription.paused"
    | "customer.subscription.pending_update_applied"
    | "customer.subscription.pending_update_expired"
    | "customer.subscription.resumed"
    | "customer.subscription.trial_will_end"
    | "customer.subscription.updated"
    | "customer.tax_id.created"
    | "customer.tax_id.deleted"
    | "customer.tax_id.updated"
    | "customer.updated"
    | "customer_cash_balance_transaction.created"
    | "file.created"
    | "financial_connections.account.created"
    | "financial_connections.account.deactivated"
    | "financial_connections.account.disconnected"
    | "financial_connections.account.reactivated"
    | "financial_connections.account.refreshed_balance"
    | "identity.verification_session.canceled"
    | "identity.verification_session.created"
    | "identity.verification_session.processing"
    | "identity.verification_session.redacted"
    | "identity.verification_session.requires_input"
    | "identity.verification_session.verified"
    | "invoice.created"
    | "invoice.deleted"
    | "invoice.finalization_failed"
    | "invoice.finalized"
    | "invoice.marked_uncollectible"
    | "invoice.paid"
    | "invoice.payment_action_required"
    | "invoice.payment_failed"
    | "invoice.payment_succeeded"
    | "invoice.sent"
    | "invoice.upcoming"
    | "invoice.updated"
    | "invoice.voided"
    | "invoiceitem.created"
    | "invoiceitem.deleted"
    | "invoiceitem.updated"
    | "issuing_authorization.created"
    | "issuing_authorization.request"
    | "issuing_authorization.updated"
    | "issuing_card.created"
    | "issuing_card.updated"
    | "issuing_cardholder.created"
    | "issuing_cardholder.updated"
    | "issuing_dispute.closed"
    | "issuing_dispute.created"
    | "issuing_dispute.funds_reinstated"
    | "issuing_dispute.submitted"
    | "issuing_dispute.updated"
    | "issuing_transaction.created"
    | "issuing_transaction.updated"
    | "mandate.updated"
    | "order.created"
    | "payment_intent.amount_capturable_updated"
    | "payment_intent.canceled"
    | "payment_intent.created"
    | "payment_intent.partially_funded"
    | "payment_intent.payment_failed"
    | "payment_intent.processing"
    | "payment_intent.requires_action"
    | "payment_intent.succeeded"
    | "payment_link.created"
    | "payment_link.updated"
    | "payment_method.attached"
    | "payment_method.automatically_updated"
    | "payment_method.detached"
    | "payment_method.updated"
    | "payout.canceled"
    | "payout.created"
    | "payout.failed"
    | "payout.paid"
    | "payout.reconciliation_completed"
    | "payout.updated"
    | "person.created"
    | "person.deleted"
    | "person.updated"
    | "plan.created"
    | "plan.deleted"
    | "plan.updated"
    | "price.created"
    | "price.deleted"
    | "price.updated"
    | "product.created"
    | "product.deleted"
    | "product.updated"
    | "promotion_code.created"
    | "promotion_code.updated"
    | "quote.accepted"
    | "quote.canceled"
    | "quote.created"
    | "quote.finalized"
    | "radar.early_fraud_warning.created"
    | "radar.early_fraud_warning.updated"
    | "recipient.created"
    | "recipient.deleted"
    | "recipient.updated"
    | "refund.created"
    | "refund.updated"
    | "reporting.report_run.failed"
    | "reporting.report_run.succeeded"
    | "reporting.report_type.updated"
    | "review.closed"
    | "review.opened"
    | "setup_intent.canceled"
    | "setup_intent.created"
    | "setup_intent.requires_action"
    | "setup_intent.setup_failed"
    | "setup_intent.succeeded"
    | "sigma.scheduled_query_run.created"
    | "sku.created"
    | "sku.deleted"
    | "sku.updated"
    | "source.canceled"
    | "source.chargeable"
    | "source.failed"
    | "source.mandate_notification"
    | "source.refund_attributes_required"
    | "source.transaction.created"
    | "source.transaction.updated"
    | "subscription_schedule.aborted"
    | "subscription_schedule.canceled"
    | "subscription_schedule.completed"
    | "subscription_schedule.created"
    | "subscription_schedule.expiring"
    | "subscription_schedule.released"
    | "subscription_schedule.updated"
    | "tax_rate.created"
    | "tax_rate.updated"
    | "terminal.reader.action_failed"
    | "terminal.reader.action_succeeded"
    | "test_helpers.test_clock.advancing"
    | "test_helpers.test_clock.created"
    | "test_helpers.test_clock.deleted"
    | "test_helpers.test_clock.internal_failure"
    | "test_helpers.test_clock.ready"
    | "topup.canceled"
    | "topup.created"
    | "topup.failed"
    | "topup.reversed"
    | "topup.succeeded"
    | "transfer.created"
    | "transfer.reversed"
    | "transfer.updated"
    | "treasury.credit_reversal.created"
    | "treasury.credit_reversal.posted"
    | "treasury.debit_reversal.completed"
    | "treasury.debit_reversal.created"
    | "treasury.debit_reversal.initial_credit_granted"
    | "treasury.financial_account.closed"
    | "treasury.financial_account.created"
    | "treasury.financial_account.features_status_updated"
    | "treasury.inbound_transfer.canceled"
    | "treasury.inbound_transfer.created"
    | "treasury.inbound_transfer.failed"
    | "treasury.inbound_transfer.succeeded"
    | "treasury.outbound_payment.canceled"
    | "treasury.outbound_payment.created"
    | "treasury.outbound_payment.expected_arrival_date_updated"
    | "treasury.outbound_payment.failed"
    | "treasury.outbound_payment.posted"
    | "treasury.outbound_payment.returned"
    | "treasury.outbound_transfer.canceled"
    | "treasury.outbound_transfer.created"
    | "treasury.outbound_transfer.expected_arrival_date_updated"
    | "treasury.outbound_transfer.failed"
    | "treasury.outbound_transfer.posted"
    | "treasury.outbound_transfer.returned"
    | "treasury.received_credit.created"
    | "treasury.received_credit.failed"
    | "treasury.received_credit.succeeded"
    | "treasury.received_debit.created"
  >;
  expand?: Array<string>;
  metadata?: unknown /*map*/ | "";
  url?: string;
};
export type DeleteV1WebhookEndpointsWebhookEndpointParams = {
  webhook_endpoint: string;
};
export type Resources =
  | Account
  | AccountCapability
  | Polymorphic
  | LoginLink
  | Person
  | AccountLink
  | Address
  | ApiErrors
  | ApplePayDomain
  | Application
  | PlatformFee
  | FeeRefund
  | AppsSecretServiceResourceSecret
  | Balance
  | BalanceTransaction
  | Polymorphic
  | BankAccount
  | BillingPortalPortalConfiguration
  | BillingPortalPortalSession
  | Card
  | Charge
  | CheckoutSession
  | ConnectCollectionTransfer
  | CountrySpec
  | Coupon
  | CreditNote
  | CreditNoteLineItem
  | Customer
  | CashBalance
  | CustomerBalanceTransaction
  | CustomerCashBalanceTransaction
  | Polymorphic
  | TaxId
  | Discount
  | Dispute
  | EphemeralKey
  | NotificationEvent
  | ExchangeRate
  | File
  | FileLink
  | FinancialConnectionsBankConnectionsResourceLinkedAccount
  | FinancialConnectionsBankConnectionsResourceOwner
  | FinancialConnectionsBankConnectionsResourceOwnership
  | FinancialConnectionsBankConnectionsResourceLinkAccountSession
  | CustomerBalanceFundingInstructionsCustomerBalanceFundingInstructions
  | IdentityGelatoVerificationReport
  | IdentityGelatoVerificationSession
  | Invoice
  | InvoiceLineItem
  | InvoiceItem
  | IssuingIssuingAuthorization
  | IssuingIssuingCard
  | IssuingIssuingCardholder
  | IssuingIssuingDispute
  | IssuingIssuingTransaction
  | LineItem
  | Mandate
  | PaymentIntent
  | PaymentLink
  | PaymentMethod
  | Payout
  | Plan
  | PlatformTax
  | Price
  | Product
  | PromotionCode
  | Quote
  | RadarRadarEarlyFraudWarning
  | RadarRadarListList
  | RadarRadarListListItem
  | Refund
  | ReportingReportingReportRun
  | ReportingReportingReportType
  | ReserveTransaction
  | RadarReview
  | SigmaScheduledQueryRun
  | PaymentFlowsSetupIntentSetupAttempt
  | SetupIntent
  | Shipping
  | ShippingRate
  | Source
  | SourceMandateNotification
  | SourceTransaction
  | Subscription
  | SubscriptionItem
  | UsageRecord
  | UsageRecordSummary
  | SubscriptionSchedule
  | TaxProductResourceTaxCode
  | TaxDeductedAtSource
  | TaxRate
  | TerminalTerminalConfigurationConfiguration
  | TerminalTerminalConnectionToken
  | TerminalTerminalLocationLocation
  | TerminalTerminalReaderReader
  | TestHelpersTestClock
  | Token
  | Topup
  | Transfer
  | TransferReversal
  | TreasuryTreasuryReceivedCreditsResourceCreditReversal
  | TreasuryTreasuryReceivedDebitsResourceDebitReversal
  | TreasuryTreasuryFinancialAccountsResourceFinancialAccount
  | TreasuryTreasuryFinancialAccountsResourceFinancialAccountFeatures
  | TreasuryTreasuryInboundTransfersResourceInboundTransfer
  | TreasuryTreasuryOutboundPaymentsResourceOutboundPayment
  | TreasuryTreasuryOutboundTransfersResourceOutboundTransfer
  | TreasuryTreasuryReceivedCreditsResourceReceivedCredit
  | TreasuryTreasuryReceivedDebitsResourceReceivedDebit
  | TreasuryTreasuryTransactionsResourceTransaction
  | TreasuryTreasuryTransactionsResourceTransactionEntry
  | NotificationWebhookEndpoint;
export type Endpoints =
  | [
      "post /v1/terminal/configurations",
      PostV1TerminalConfigurationsParams,
      TerminalConfiguration
    ]
  | [
      "get /v1/terminal/configurations",
      GetV1TerminalConfigurationsParams,
      List<TerminalConfiguration>
    ]
  | [
      "get /v1/terminal/configurations/{configuration}",
      GetV1TerminalConfigurationsConfigurationParams,
      TerminalConfiguration
    ]
  | [
      "post /v1/terminal/configurations/{configuration}",
      PostV1TerminalConfigurationsConfigurationParams,
      TerminalConfiguration
    ]
  | [
      "delete /v1/terminal/configurations/{configuration}",
      DeleteV1TerminalConfigurationsConfigurationParams,
      Deleted<TerminalConfiguration>
    ]
  | [
      "post /v1/terminal/connection_tokens",
      PostV1TerminalConnectionTokensParams,
      TerminalConnectionToken
    ]
  | [
      "get /v1/terminal/locations/{location}",
      GetV1TerminalLocationsLocationParams,
      TerminalLocation
    ]
  | [
      "post /v1/terminal/locations/{location}",
      PostV1TerminalLocationsLocationParams,
      TerminalLocation
    ]
  | [
      "delete /v1/terminal/locations/{location}",
      DeleteV1TerminalLocationsLocationParams,
      Deleted<TerminalLocation>
    ]
  | [
      "post /v1/terminal/locations",
      PostV1TerminalLocationsParams,
      TerminalLocation
    ]
  | [
      "get /v1/terminal/locations",
      GetV1TerminalLocationsParams,
      List<TerminalLocation>
    ]
  | [
      "post /v1/terminal/readers/{reader}",
      PostV1TerminalReadersReaderParams,
      TerminalReader
    ]
  | [
      "get /v1/terminal/readers/{reader}",
      GetV1TerminalReadersReaderParams,
      TerminalReader
    ]
  | [
      "delete /v1/terminal/readers/{reader}",
      DeleteV1TerminalReadersReaderParams,
      Deleted<TerminalReader>
    ]
  | ["post /v1/terminal/readers", PostV1TerminalReadersParams, TerminalReader]
  | [
      "get /v1/terminal/readers",
      GetV1TerminalReadersParams,
      List<TerminalReader>
    ]
  | [
      "post /v1/terminal/readers/{reader}/process_payment_intent",
      PostV1TerminalReadersReaderProcessPaymentIntentParams,
      TerminalReader
    ]
  | [
      "post /v1/terminal/readers/{reader}/process_setup_intent",
      PostV1TerminalReadersReaderProcessSetupIntentParams,
      TerminalReader
    ]
  | [
      "post /v1/terminal/readers/{reader}/cancel_action",
      PostV1TerminalReadersReaderCancelActionParams,
      TerminalReader
    ]
  | [
      "post /v1/terminal/readers/{reader}/set_reader_display",
      PostV1TerminalReadersReaderSetReaderDisplayParams,
      TerminalReader
    ]
  | [
      "post /v1/terminal/readers/{reader}/refund_payment",
      PostV1TerminalReadersReaderRefundPaymentParams,
      TerminalReader
    ];
