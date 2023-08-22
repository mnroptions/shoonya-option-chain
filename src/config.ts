// All F&O stocks to be monitored
export const STOCKS_TO_INCLUDE = [
  'AARTIIND',
  'ABB',
  'ABBOTINDIA',
  'ABCAPITAL',
  'ABFRL',
  'ACC',
  'ADANIENT',
  'ADANIPORTS',
  'ALKEM',
  'AMBUJACEM',
  'APOLLOHOSP',
  'APOLLOTYRE',
  'ASHOKLEY',
  'ASIANPAINT',
  'ASTRAL',
  'ATUL',
  'AUBANK',
  'AUROPHARMA',
  'AXISBANK',
  'BAJAJ-AUTO',
  'BAJAJFINSV',
  'BAJFINANCE',
  'BALKRISIND',
  'BALRAMCHIN',
  'BANDHANBNK',
  'BANKBARODA',
  'BATAINDIA',
  'BEL',
  'BERGEPAINT',
  'BHARATFORG',
  'BHARTIARTL',
  'BHEL',
  'BIOCON',
  'BOSCHLTD',
  'BPCL',
  'BRITANNIA',
  'BSOFT',
  'CANBK',
  'CANFINHOME',
  'CHAMBLFERT',
  'CHOLAFIN',
  'CIPLA',
  'COALINDIA',
  'COFORGE',
  'COLPAL',
  'CONCOR',
  'COROMANDEL',
  'CROMPTON',
  'CUB',
  'CUMMINSIND',
  'DABUR',
  'DALBHARAT',
  'DEEPAKNTR',
  'DELTACORP',
  'DIVISLAB',
  'DIXON',
  'DLF',
  'DRREDDY',
  'EICHERMOT',
  'ESCORTS',
  'EXIDEIND',
  'FEDERALBNK',
  'GAIL',
  'GLENMARK',
  'GMRINFRA',
  'GNFC',
  'GODREJCP',
  'GODREJPROP',
  'GRANULES',
  'GRASIM',
  'GUJGASLTD',
  'HAL',
  'HAVELLS',
  'HCLTECH',
  'HDFCAMC',
  'HDFCBANK',
  'HDFCLIFE',
  'HEROMOTOCO',
  'HINDALCO',
  'HINDCOPPER',
  'HINDPETRO',
  'HINDUNILVR',
  'IBULHSGFIN',
  'ICICIBANK',
  'ICICIGI',
  'ICICIPRULI',
  'IDEA',
  'IDFC',
  'IDFCFIRSTB',
  'IEX',
  'IGL',
  'INDHOTEL',
  'INDIACEM',
  'INDIAMART',
  'INDIGO',
  'INDUSINDBK',
  'INDUSTOWER',
  'INFY',
  'IOC',
  'IPCALAB',
  'IRCTC',
  'ITC',
  'JINDALSTEL',
  'JKCEMENT',
  'JSWSTEEL',
  'JUBLFOOD',
  'KOTAKBANK',
  'L&TFH',
  'LALPATHLAB',
  'LAURUSLABS',
  'LICHSGFIN',
  'LT',
  'LTIM',
  'LTTS',
  'LUPIN',
  'M&M',
  'M&MFIN',
  'MANAPPURAM',
  'MARICO',
  'MARUTI',
  'MCDOWELL-N',
  'MCX',
  'METROPOLIS',
  'MFSL',
  'MGL',
  'MOTHERSON',
  'MPHASIS',
  'MRF',
  'MUTHOOTFIN',
  'NATIONALUM',
  'NAUKRI',
  'NAVINFLUOR',
  'NESTLEIND',
  'NMDC',
  'NTPC',
  'OBEROIRLTY',
  'OFSS',
  'ONGC',
  'PAGEIND',
  'PEL',
  'PERSISTENT',
  'PETRONET',
  'PFC',
  'PIDILITIND',
  'PIIND',
  'PNB',
  'POLYCAB',
  'POWERGRID',
  'PVRINOX',
  'RAMCOCEM',
  'RBLBANK',
  'RECLTD',
  'RELIANCE',
  'SAIL',
  'SBICARD',
  'SBILIFE',
  'SBIN',
  'SHREECEM',
  'SHRIRAMFIN',
  'SIEMENS',
  'SRF',
  'SUNPHARMA',
  'SUNTV',
  'SYNGENE',
  'TATACHEM',
  'TATACOMM',
  'TATACONSUM',
  'TATAMOTORS',
  'TATAPOWER',
  'TATASTEEL',
  'TCS',
  'TECHM',
  'TITAN',
  'TORNTPHARM',
  'TRENT',
  'TVSMOTOR',
  'UBL',
  'ULTRACEMCO',
  'UPL',
  'VEDL',
  'VOLTAS',
  'WIPRO',
  'ZEEL',
  'ZYDUSLIFE',
];

export const CUSTOM_PERCENT: Record<string, number> = {
  ADANIENT: 44,
  ADANIPORTS: 44,
  BOSCHLTD: 28,
  EXIDEIND: 22,
  MRF: 15,
  NESTLEIND: 28,
  PAGEIND: 28,
};

// Groups and stocks to monitor when that group is selected
export const GROUPS = {
  'Adani & Tata, Heavy Industries (Private)': [
    'AMBUJACEM',
    'ACC',
    'TATAMOTORS',
    'TATASTEEL',
    'ADANIENT',
    'VEDL',
    'RAIN',
    'PETRONET',
    'DIXON',
    'ASIANPAINT',
    'CUMMINSIND',
  ],
  'Heavy Industries (Public)': [
    'BHEL',
    'BEL',
    'COALINDIA',
    'GAIL',
    'HINDCOPPER',
    'IEX',
    'IOC',
    'NATIONALUM',
    'NMDC',
    'PFC',
    'SAIL',
    'NTPC',
    'RECLTD',
    'IRCTC',
  ],
  'Banking & Finance, Automotive & Spares': [
    'IBULHSGFIN',
    'ICICIGI',
    'L&TFH',
    'MANAPPURAM',
    'SBIN',
    'CUB',
    'FEDERALBNK',
    'IDFCFIRSTB',
    'PFC',
    'RBLBANK',
    'BANDHANBNK',
    'AUBANK',
    'MOTHERSON',
    'MRF',
    'MARUTI',
  ],
  'Basic Commodities, Hospital Labs': [
    'OFSS',
    'DELTACORP',
    'BRITANNIA',
    'ITC',
    'JUBLFOOD',
    'NESTLEIND',
    'BATAINDIA',
    'LAURUSLABS',
    'VOLTAS',
    'AUROPHARMA',
    'DIVISLAB',
    'DRREDDY',
    'IPCALAB',
    'CROMPTON',
  ],
  Extras: [
    'INDUSTOWER',
    'GUJGASLTD',
    'INDIACEM',
    'ASTRAL',
    'INTELLECT',
    'PAGEIND',
  ],
};

// Number of months to show in the expiry dropdown
export const EXPIRY_OPTION_LENGTH = 3;

// Percentage of LTP to ignore strike prices on both sides
// e.g. if DIFF_PERCENT is 20% and LTP of the equity instrument is 100,
// ignore all strikes ranging from 100 - 20% = 80 to 100 + 20% = 120.
export const DIFF_PERCENT = 33;
