/* =========================================================================
   GELJEMI STORE - data.js
   Easy-to-use Database Structure
   ========================================================================= */

window.appData = window.appData || {};

/* =========================================================================
   ITEMS DATABASE
   Simple cards displayed on home page
   Just copy and paste to add new items
   ========================================================================= */

window.appData.itemsDatabase = [
  {
    icon: "🎮",
    title: "Gaming",
    description: "Mobile Legends, CODM, PUBG, Roblox and more."
  },
  {
    icon: "🛜",
    title: "Internet",
    description: "TNT, Smart, Globe, DITO, GOMO and more."
  },
  {
    icon: "🔧",
    title: "Premium Tools",
    description: "Canva, CapCut, Alight Motion and more."
  },
  {
    icon: "📺",
    title: "Streaming",
    description: "Netflix, Disney+, YouTube Premium and more."
  }
  // NEW ITEM TEMPLATE - Just copy and paste below:
  // {
  //   icon: "🎵",
  //   title: "Music",
  //   description: "Spotify, Apple Music, YouTube Music and more."
  // },
];

/* =========================================================================
   PROMO DATABASE
   Hot deals displayed in the promos section
   Just copy and paste to add new promos
   ========================================================================= */

window.appData.promoDatabase = [
  {
    badge: "Hot",
    tag: "GAMING",
    title: "ML 86 Diamonds",
    description: "Instant Topup",
    oldPrice: "₱49",
    price: "₱39",
    link: "https://m.me/gela.v.xx"
  },
  {
    badge: "Hot",
    tag: "INTERNET",
    title: "Magic Data 99",
    description: "No Expiry Data",
    oldPrice: "₱99",
    price: "₱89",
    link: "https://m.me/gela.v.xx"
  }
  // NEW PROMO TEMPLATE - Just copy and paste below:
  // {
  //   badge: "Hot",
  //   tag: "STREAMING",
  //   title: "Netflix Standard",
  //   description: "1 Month Subscription",
  //   oldPrice: "₱420",
  //   price: "₱379",
  //   link: "https://m.me/gela.v.xx"
  // },
];

/* =========================================================================
   EXTRA DATABASE
   Additional packages section
   Just copy and paste to add new extra packages
   ========================================================================= */

window.appData.extraDatabase = [
  {
    badge: "New",
    tag: "INTERNET",
    title: "GOMO 30GB",
    description: "No Expiry Data",
    oldPrice: "₱399",
    price: "₱349",
    link: "https://m.me/gela.v.xx"
  }
  // NEW EXTRA TEMPLATE - Just copy and paste below:
  // {
  //   badge: "New",
  //   tag: "GAMING",
  //   title: "CODM 2800 CP",
  //   description: "Instant Topup",
  //   oldPrice: "₱2999",
  //   price: "₱2499",
  //   link: "https://m.me/gela.v.xx"
  // },
];

/* =========================================================================
   DEEP CATEGORY DATABASE
   Sub-categories and platform options
   Add new categories and platforms here
   ========================================================================= */

window.appData.deepCategoryDB = {
  // GAMING CATEGORY
  Gaming: {
    headline: "Game",
    options: [
      {
        title: "Mobile Legends",
        description: "Diamonds & Starlight Passes",
        icon: "⚔️",
        tag: "GAME_TOKEN"
      },
      {
        title: "CODM",
        description: "Garena CP & Battle Pass",
        icon: "🔫",
        tag: "GAME_PASS"
      },
      {
        title: "PUBG",
        description: "UC & Vouchers",
        icon: "🎯",
        tag: "GAME_TOKEN"
      }
      // NEW GAMING PLATFORM TEMPLATE - Just copy and paste below:
      // {
      //   title: "Roblox",
      //   description: "Robux & Passes",
      //   icon: "🎮",
      //   tag: "GAME_TOKEN"
      // },
    ]
  },

  // INTERNET CATEGORY
  Internet: {
    headline: "Network",
    options: [
      {
        title: "Smart & TNT",
        description: "Magic Data & Promos",
        icon: "🟢",
        tag: "PROMO_LOAD"
      },
      {
        title: "Globe & TM",
        description: "GoSURF & Data Packages",
        icon: "🔵",
        tag: "REGULAR_LOAD"
      },
      {
        title: "DITO",
        description: "Data Plans & Packages",
        icon: "🟠",
        tag: "REGULAR_LOAD"
      }
      // NEW INTERNET PROVIDER TEMPLATE - Just copy and paste below:
      // {
      //   title: "Converge",
      //   description: "WiFi & Data Packages",
      //   icon: "📡",
      //   tag: "REGULAR_LOAD"
      // },
    ]
  },

  // PREMIUM TOOLS CATEGORY
  "Premium Tools": {
    headline: "Tools",
    options: [
      {
        title: "Canva",
        description: "Design templates & assets",
        icon: "🎨",
        tag: "TOOL_SUB"
      },
      {
        title: "CapCut",
        description: "Video editing subscriptions",
        icon: "✂️",
        tag: "TOOL_SUB"
      },
      {
        title: "Alight Motion",
        description: "Animation & Effects",
        icon: "✨",
        tag: "TOOL_SUB"
      }
      // NEW PREMIUM TOOL TEMPLATE - Just copy and paste below:
      // {
      //   title: "Adobe Creative Cloud",
      //   description: "Design Suite & More",
      //   icon: "🎬",
      //   tag: "TOOL_SUB"
      // },
    ]
  },

  // STREAMING CATEGORY
  Streaming: {
    headline: "Streaming",
    options: [
      {
        title: "Netflix",
        description: "Monthly subscriptions",
        icon: "📺",
        tag: "STREAM_SUB"
      },
      {
        title: "YouTube Premium",
        description: "Ad-free & downloads",
        icon: "▶️",
        tag: "STREAM_SUB"
      },
      {
        title: "Disney+",
        description: "Movies & Series",
        icon: "🎭",
        tag: "STREAM_SUB"
      }
      // NEW STREAMING SERVICE TEMPLATE - Just copy and paste below:
      // {
      //   title: "Spotify",
      //   description: "Unlimited Music",
      //   icon: "🎵",
      //   tag: "STREAM_SUB"
      // },
    ]
  }

  // NEW CATEGORY TEMPLATE - Just copy and paste below:
  // CategoryName: {
  //   headline: "Display Name",
  //   options: [
  //     {
  //       title: "Platform Name",
  //       description: "Platform Description",
  //       icon: "🎯",
  //       tag: "TAG_TYPE"
  //     },
  //   ]
  // },
};

/* =========================================================================
   PRODUCT VARIANTS DATABASE
   Products for each platform
   Add products here for each platform
   ========================================================================= */

window.appData.productVariantsDB = {
  // MOBILE LEGENDS PRODUCTS
  "Mobile Legends": [
    {
      title: "5 Diamonds",
      description: "Direct Account Top-up.",
      oldPrice: "₱10",
      price: "₱6",
      link: "https://m.me/gela.v.xx",
      tag: "GAME_TOKEN"
    },
    {
      title: "28 Diamonds",
      description: "Direct Account Top-up.",
      oldPrice: "₱50",
      price: "₱45",
      link: "https://m.me/gela.v.xx",
      tag: "GAME_TOKEN"
    },
    {
      title: "Starlight Pass",
      description: "Monthly Subscription.",
      oldPrice: "₱299",
      price: "₱250",
      link: "https://m.me/gela.v.xx",
      tag: "GAME_PASS"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "86 Diamonds",
    //   description: "Direct Account Top-up.",
    //   oldPrice: "₱100",
    //   price: "₱89",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "GAME_TOKEN"
    // },
  ],

  // CODM PRODUCTS
  CODM: [
    {
      title: "80 CP",
      description: "Direct Account Top-up.",
      oldPrice: "₱50",
      price: "₱45",
      link: "https://m.me/gela.v.xx",
      tag: "GAME_TOKEN"
    },
    {
      title: "480 CP",
      description: "Battle Pass & Items.",
      oldPrice: "₱299",
      price: "₱250",
      link: "https://m.me/gela.v.xx",
      tag: "GAME_PASS"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "2400 CP",
    //   description: "Premium Bundle.",
    //   oldPrice: "₱1499",
    //   price: "₱1299",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "GAME_TOKEN"
    // },
  ],

  // PUBG PRODUCTS
  PUBG: [
    {
      title: "60 UC",
      description: "Direct Account Top-up.",
      oldPrice: "₱49",
      price: "₱39",
      link: "https://m.me/gela.v.xx",
      tag: "GAME_TOKEN"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "325 UC",
    //   description: "Cosmetics & Items.",
    //   oldPrice: "₱249",
    //   price: "₱199",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "GAME_TOKEN"
    // },
  ],

  // SMART & TNT PRODUCTS
  "Smart & TNT": [
    {
      title: "Magic Data 99",
      description: "No Expiry Data.",
      oldPrice: "₱99",
      price: "₱89",
      link: "https://m.me/gela.v.xx",
      tag: "PROMO_LOAD"
    },
    {
      title: "Magic Data 199",
      description: "30 Days Data.",
      oldPrice: "₱199",
      price: "₱179",
      link: "https://m.me/gela.v.xx",
      tag: "PROMO_LOAD"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "Magic Data 299",
    //   description: "90 Days Data.",
    //   oldPrice: "₱299",
    //   price: "₱269",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "PROMO_LOAD"
    // },
  ],

  // GLOBE & TM PRODUCTS
  "Globe & TM": [
    {
      title: "Regular Load 50",
      description: "Standard load balance.",
      oldPrice: "₱50",
      price: "₱50",
      link: "https://m.me/gela.v.xx",
      tag: "REGULAR_LOAD"
    },
    {
      title: "GoSURF 99",
      description: "3GB Data - 1 Day",
      oldPrice: "₱99",
      price: "₱89",
      link: "https://m.me/gela.v.xx",
      tag: "REGULAR_LOAD"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "GoSURF 199",
    //   description: "10GB Data - 3 Days",
    //   oldPrice: "₱199",
    //   price: "₱179",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "REGULAR_LOAD"
    // },
  ],

  // DITO PRODUCTS
  DITO: [
    {
      title: "DITO Data 99",
      description: "2GB Data - 1 Day",
      oldPrice: "₱99",
      price: "₱79",
      link: "https://m.me/gela.v.xx",
      tag: "REGULAR_LOAD"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "DITO Data 199",
    //   description: "5GB Data - 3 Days",
    //   oldPrice: "₱199",
    //   price: "₱159",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "REGULAR_LOAD"
    // },
  ],

  // CANVA PRODUCTS
  Canva: [
    {
      title: "Canva Pro 1 Month",
      description: "Full Pro features",
      oldPrice: "₱499",
      price: "₱399",
      link: "https://m.me/gela.v.xx",
      tag: "TOOL_SUB"
    },
    {
      title: "Canva Pro 3 Months",
      description: "Full Pro features",
      oldPrice: "₱1299",
      price: "₱999",
      link: "https://m.me/gela.v.xx",
      tag: "TOOL_SUB"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "Canva Pro 1 Year",
    //   description: "Full Pro features",
    //   oldPrice: "₱4999",
    //   price: "₱3999",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "TOOL_SUB"
    // },
  ],

  // CAPCUT PRODUCTS
  CapCut: [
    {
      title: "CapCut Premium 1 Month",
      description: "Unlimited editing",
      oldPrice: "₱299",
      price: "₱249",
      link: "https://m.me/gela.v.xx",
      tag: "TOOL_SUB"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "CapCut Premium 1 Year",
    //   description: "Unlimited editing",
    //   oldPrice: "₱2999",
    //   price: "₱2499",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "TOOL_SUB"
    // },
  ],

  // ALIGHT MOTION PRODUCTS
  "Alight Motion": [
    {
      title: "Alight Motion Pro 1 Month",
      description: "Professional tools",
      oldPrice: "₱399",
      price: "₱349",
      link: "https://m.me/gela.v.xx",
      tag: "TOOL_SUB"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "Alight Motion Pro 1 Year",
    //   description: "Professional tools",
    //   oldPrice: "₱3999",
    //   price: "₱3299",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "TOOL_SUB"
    // },
  ],

  // NETFLIX PRODUCTS
  Netflix: [
    {
      title: "Standard Plan",
      description: "HD streaming",
      oldPrice: "₱420",
      price: "₱379",
      link: "https://m.me/gela.v.xx",
      tag: "STREAM_SUB"
    },
    {
      title: "Premium Plan",
      description: "4K streaming",
      oldPrice: "₱550",
      price: "₱499",
      link: "https://m.me/gela.v.xx",
      tag: "STREAM_SUB"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "Basic Plan",
    //   description: "SD streaming",
    //   oldPrice: "₱250",
    //   price: "₱229",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "STREAM_SUB"
    // },
  ],

  // YOUTUBE PREMIUM PRODUCTS
  "YouTube Premium": [
    {
      title: "YouTube Premium 1 Month",
      description: "Ad-free & downloads",
      oldPrice: "₱79",
      price: "₱69",
      link: "https://m.me/gela.v.xx",
      tag: "STREAM_SUB"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "YouTube Premium 1 Year",
    //   description: "Ad-free & downloads",
    //   oldPrice: "₱799",
    //   price: "₱699",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "STREAM_SUB"
    // },
  ],

  // DISNEY+ PRODUCTS
  "Disney+": [
    {
      title: "Disney+ 1 Month",
      description: "Movies & Series",
      oldPrice: "₱149",
      price: "₱129",
      link: "https://m.me/gela.v.xx",
      tag: "STREAM_SUB"
    }
    // NEW PRODUCT TEMPLATE - Just copy and paste below:
    // {
    //   title: "Disney+ 1 Year",
    //   description: "Movies & Series",
    //   oldPrice: "₱1299",
    //   price: "₱1099",
    //   link: "https://m.me/gela.v.xx",
    //   tag: "STREAM_SUB"
    // },
  ]

  // NEW PLATFORM PRODUCTS TEMPLATE - Just copy and paste below:
  // "Platform Name": [
  //   {
  //     title: "Product Name",
  //     description: "Product Description",
  //     oldPrice: "₱XXX",
  //     price: "₱XXX",
  //     link: "https://m.me/gela.v.xx",
  //     tag: "TAG_TYPE"
  //   },
  // ],
};

/* =========================================================================
   CATEGORY FIELDS DATABASE
   Input fields required for each product type
   These determine what info users need to provide when buying
   ========================================================================= */

window.appData.categoryFields = {
  // Variant card tags
  REGULAR_LOAD: ["Phone Number"],
  PROMO_LOAD: ["Phone Number"],
  GAME_PASS: ["IGN", "User ID", "Server ID"],
  GAME_TOKEN: ["IGN", "User ID", "Server ID"],
  TOOL_SUB: ["Email", "Account Name"],
  STREAM_SUB: ["Email", "Account Name"],

  // Promo & Extra card tags (matches tag: field in promoDatabase & extraDatabase)
  GAMING: ["IGN", "User ID", "Server ID"],
  INTERNET: ["Phone Number"],
  STREAMING: ["Email", "Account Name"],
  BOOSTING: ["IGN", "User ID", "Server ID"],
  TOOLS: ["Email", "Account Name"],

  // NEW FIELD TYPE TEMPLATE - Just copy and paste below:
  // NEW_TAG_TYPE: ["Field 1", "Field 2", "Field 3"],
};