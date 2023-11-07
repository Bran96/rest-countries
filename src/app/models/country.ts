export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    independent?: boolean;
    status: string;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion?: string;
    languages?: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
    cioc?: string;
    borders?: string[];
    gini?: Gini;
  }
  
  export interface Gini {
    '2018'?: number;
    '2019'?: number;
    '2015'?: number;
    '2014'?: number;
    '2016'?: number;
    '2003'?: number;
    '2012'?: number;
    '2009'?: number;
    '2017'?: number;
    '2013'?: number;
    '2011'?: number;
    '2006'?: number;
    '1992'?: number;
    '2010'?: number;
    '1998'?: number;
    '1999'?: number;
    '2005'?: number;
    '2008'?: number;
    '2004'?: number;
  }
  
  export interface PostalCode {
    format: string;
    regex?: string;
  }
  
  export interface CapitalInfo {
    latlng?: number[];
  }
  
  export interface CoatOfArms {
    png?: string;
    svg?: string;
  }
  
  export interface Flags {
    png: string;
    svg: string;
    alt?: string;
  }
  
  export interface Car {
    signs?: string[];
    side: string;
  }
  
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  export interface Demonyms {
    eng: Eng2;
    fra?: Eng2;
  }
  
  export interface Eng2 {
    f: string;
    m: string;
  }
  
  export interface Translations {
    ara: Eng;
    bre: Eng;
    ces: Eng;
    cym: Eng;
    deu: Eng;
    est: Eng;
    fin: Eng;
    fra: Eng;
    hrv?: Eng;
    hun: Eng;
    ita: Eng;
    jpn?: Eng;
    kor: Eng;
    nld: Eng;
    per?: Eng;
    pol: Eng;
    por: Eng;
    rus: Eng;
    slk: Eng;
    spa: Eng;
    srp: Eng;
    swe: Eng;
    tur: Eng;
    urd: Eng;
    zho?: Eng;
  }
  
  export interface Languages {
    eng?: string;
    ber?: string;
    mey?: string;
    spa?: string;
    zho?: string;
    fra?: string;
    pau?: string;
    deu?: string;
    rus?: string;
    uzb?: string;
    aym?: string;
    grn?: string;
    que?: string;
    mon?: string;
    msa?: string;
    tam?: string;
    crs?: string;
    nor?: string;
    hat?: string;
    nau?: string;
    hmo?: string;
    tpi?: string;
    por?: string;
    urd?: string;
    swa?: string;
    tsn?: string;
    ita?: string;
    ara?: string;
    cha?: string;
    bel?: string;
    isl?: string;
    heb?: string;
    mlt?: string;
    rar?: string;
    mkd?: string;
    kon?: string;
    lin?: string;
    lua?: string;
    gil?: string;
    ssw?: string;
    ell?: string;
    tur?: string;
    dzo?: string;
    ind?: string;
    sqi?: string;
    srp?: string;
    kor?: string;
    arc?: string;
    ckb?: string;
    tha?: string;
    bwg?: string;
    kck?: string;
    khi?: string;
    ndc?: string;
    nde?: string;
    nya?: string;
    sna?: string;
    sot?: string;
    toi?: string;
    tso?: string;
    ven?: string;
    xho?: string;
    zib?: string;
    smo?: string;
    de?: string;
    bul?: string;
    amh?: string;
    ron?: string;
    mlg?: string;
    bis?: string;
    nld?: string;
    pap?: string;
    mri?: string;
    nzs?: string;
    nep?: string;
    swe?: string;
    cal?: string;
    dan?: string;
    fao?: string;
    fil?: string;
    fas?: string;
    div?: string;
    pih?: string;
    est?: string;
    tuk?: string;
    mya?: string;
    lav?: string;
    bos?: string;
    hrv?: string;
    glv?: string;
    gle?: string;
    kir?: string;
    kin?: string;
    tgk?: string;
    niu?: string;
    aze?: string;
    ukr?: string;
    tet?: string;
    bjz?: string;
    lao?: string;
    hye?: string;
    jpn?: string;
    prs?: string;
    pus?: string;
    ben?: string;
    vie?: string;
    mah?: string;
    tir?: string;
    khm?: string;
    pov?: string;
    kal?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    kaz?: string;
    tkl?: string;
    mfe?: string;
    pol?: string;
    fij?: string;
    hif?: string;
    slk?: string;
    slv?: string;
    som?: string;
    ton?: string;
    fin?: string;
    sag?: string;
    tvl?: string;
    run?: string;
    jam?: string;
    nrf?: string;
    nfr?: string;
    lat?: string;
    lit?: string;
    hin?: string;
    gsw?: string;
    roh?: string;
    cat?: string;
    afr?: string;
    her?: string;
    hgm?: string;
    kwn?: string;
    loz?: string;
    ndo?: string;
    ltz?: string;
    zdj?: string;
    kat?: string;
    hun?: string;
    ces?: string;
    cnr?: string;
    sin?: string;
    nbl?: string;
    nso?: string;
    zul?: string;
  }
  
  export interface Idd {
    root?: string;
    suffixes?: string[];
  }
  
  export interface Currencies {
    USD?: USD;
    NGN?: USD;
    DZD?: USD;
    MAD?: USD;
    MRU?: USD;
    TWD?: USD;
    CRC?: USD;
    XOF?: USD;
    HNL?: USD;
    AUD?: USD;
    EUR?: USD;
    UZS?: USD;
    BOB?: USD;
    MNT?: USD;
    SGD?: USD;
    SCR?: USD;
    NOK?: USD;
    HTG?: USD;
    PGK?: USD;
    MZN?: USD;
    PKR?: USD;
    UGX?: USD;
    BWP?: USD;
    XCD?: USD;
    SAR?: USD;
    GBP?: USD;
    GTQ?: USD;
    AOA?: USD;
    BYN?: USD;
    ISK?: USD;
    ILS?: USD;
    OMR?: USD;
    CKD?: USD;
    NZD?: USD;
    MKD?: USD;
    CDF?: USD;
    LBP?: USD;
    LRD?: USD;
    KID?: USD;
    SZL?: USD;
    ZAR?: USD;
    BTN?: USD;
    INR?: USD;
    IDR?: USD;
    EGP?: USD;
    JOD?: USD;
    KPW?: USD;
    IQD?: USD;
    THB?: USD;
    ZWL?: USD;
    WST?: USD;
    TTD?: USD;
    DOP?: USD;
    TZS?: USD;
    BGN?: USD;
    ETB?: USD;
    RON?: USD;
    MGA?: USD;
    VUV?: USD;
    XAF?: USD;
    ANG?: USD;
    TRY?: USD;
    XPF?: USD;
    YER?: USD;
    NPR?: USD;
    DKK?: USD;
    FOK?: USD;
    PHP?: USD;
    IRR?: USD;
    MVR?: USD;
    CUC?: USD;
    CUP?: USD;
    LYD?: USD;
    MXN?: USD;
    TMT?: USD;
    MMK?: USD;
    CHF?: USD;
    RUB?: USD;
    BAM?: BAM;
    KWD?: USD;
    IMP?: USD;
    KGS?: USD;
    LSL?: USD;
    RWF?: USD;
    SLL?: USD;
    GHS?: USD;
    KYD?: USD;
    TND?: USD;
    TJS?: USD;
    CLP?: USD;
    SRD?: USD;
    ARS?: USD;
    SDG?: BAM;
    AZN?: USD;
    UAH?: USD;
    FKP?: USD;
    BZD?: USD;
    LAK?: USD;
    PEN?: USD;
    AMD?: USD;
    JPY?: USD;
    AFN?: USD;
    QAR?: USD;
    BDT?: USD;
    BMD?: USD;
    CAD?: USD;
    BSD?: USD;
    VND?: USD;
    MOP?: USD;
    SBD?: USD;
    ZMW?: USD;
    ERN?: USD;
    KHR?: USD;
    BRL?: USD;
    SSP?: USD;
    KZT?: USD;
    PYG?: USD;
    MUR?: USD;
    PLN?: USD;
    MDL?: USD;
    CNY?: USD;
    FJD?: USD;
    STN?: USD;
    SHP?: USD;
    GYD?: USD;
    BBD?: USD;
    SEK?: USD;
    BHD?: USD;
    SOS?: USD;
    TOP?: USD;
    HKD?: USD;
    BND?: USD;
    ALL?: USD;
    MWK?: USD;
    AWG?: USD;
    KES?: USD;
    TVD?: USD;
    VES?: USD;
    GIP?: USD;
    BIF?: USD;
    MYR?: USD;
    GMD?: USD;
    GNF?: USD;
    JMD?: USD;
    AED?: USD;
    JEP?: USD;
    GGP?: USD;
    CVE?: USD;
    SYP?: USD;
    DJF?: USD;
    RSD?: USD;
    NAD?: USD;
    KMF?: USD;
    PAB?: USD;
    GEL?: USD;
    HUF?: USD;
    CZK?: USD;
    KRW?: USD;
    UYU?: USD;
    COP?: USD;
    LKR?: USD;
    NIO?: USD;
  }
  
  export interface BAM {
    name: string;
  }
  
  export interface USD {
    name: string;
    symbol: string;
  }
  
  export interface Name {
    common: string;
    official: string;
    nativeName?: NativeName;
  }
  
  export interface NativeName {
    eng?: Eng;
    ber?: Eng;
    mey?: Eng;
    spa?: Eng;
    zho?: Eng;
    fra?: Eng;
    pau?: Eng;
    deu?: Eng;
    rus?: Eng;
    uzb?: Eng;
    aym?: Eng;
    grn?: Eng;
    que?: Eng;
    mon?: Eng;
    msa?: Eng;
    tam?: Eng;
    crs?: Eng;
    nor?: Eng;
    hat?: Eng;
    nau?: Eng;
    hmo?: Eng;
    tpi?: Eng;
    por?: Eng;
    urd?: Eng;
    swa?: Eng;
    tsn?: Eng;
    ita?: Eng;
    ara?: Eng;
    cha?: Eng;
    bel?: Eng;
    isl?: Eng;
    heb?: Eng;
    mlt?: Eng;
    rar?: Eng;
    mkd?: Eng;
    kon?: Eng;
    lin?: Eng;
    lua?: Eng;
    gil?: Eng;
    ssw?: Eng;
    ell?: Eng;
    tur?: Eng;
    dzo?: Eng;
    ind?: Eng;
    sqi?: Eng;
    srp?: Eng;
    kor?: Eng;
    arc?: Eng;
    ckb?: Eng;
    tha?: Eng;
    bwg?: Eng;
    kck?: Eng;
    khi?: Eng;
    ndc?: Eng;
    nde?: Eng;
    nya?: Eng;
    sna?: Eng;
    sot?: Eng;
    toi?: Eng;
    tso?: Eng;
    ven?: Eng;
    xho?: Eng;
    zib?: Eng;
    smo?: Eng;
    bar?: Eng;
    bul?: Eng;
    amh?: Eng;
    ron?: Eng;
    mlg?: Eng;
    bis?: Eng;
    nld?: Eng;
    pap?: Eng;
    mri?: Eng;
    nzs?: Eng;
    nep?: Eng;
    swe?: Eng;
    cal?: Eng;
    dan?: Eng;
    fao?: Eng;
    fil?: Eng;
    fas?: Eng;
    div?: Eng;
    pih?: Eng;
    est?: Eng;
    tuk?: Eng;
    mya?: Eng;
    lav?: Eng;
    bos?: Eng;
    hrv?: Eng;
    glv?: Eng;
    gle?: Eng;
    kir?: Eng;
    kin?: Eng;
    tgk?: Eng;
    niu?: Eng;
    aze?: Eng;
    ukr?: Eng;
    tet?: Eng;
    bjz?: Eng;
    lao?: Eng;
    hye?: Eng;
    jpn?: Eng;
    prs?: Eng;
    pus?: Eng;
    ben?: Eng;
    vie?: Eng;
    mah?: Eng;
    tir?: Eng;
    khm?: Eng;
    pov?: Eng;
    kal?: Eng;
    nno?: Eng;
    nob?: Eng;
    smi?: Eng;
    kaz?: Eng;
    tkl?: Eng;
    mfe?: Eng;
    pol?: Eng;
    fij?: Eng;
    hif?: Eng;
    slk?: Eng;
    slv?: Eng;
    som?: Eng;
    ton?: Eng;
    fin?: Eng;
    sag?: Eng;
    tvl?: Eng;
    run?: Eng;
    jam?: Eng;
    nrf?: Eng;
    nfr?: Eng;
    lat?: Eng;
    lit?: Eng;
    hin?: Eng;
    gsw?: Eng;
    roh?: Eng;
    cat?: Eng;
    afr?: Eng;
    her?: Eng;
    hgm?: Eng;
    kwn?: Eng;
    loz?: Eng;
    ndo?: Eng;
    ltz?: Eng;
    zdj?: Eng;
    kat?: Eng;
    hun?: Eng;
    ces?: Eng;
    cnr?: Eng;
    sin?: Eng;
    nbl?: Eng;
    nso?: Eng;
    zul?: Eng;
  }
  
  export interface Eng {
    official: string;
    common: string;
  }