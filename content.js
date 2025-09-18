// EASY CONTENT EDITING
// Edit any text here and it will automatically update on your website
// Just save this file and refresh your browser!

const WEBSITE_CONTENT = {
  
  // HERO SECTION
  hero: {
    headline: "Finally, Print Media is Back",
    subtitle: "Get a stunning print magazine delivered quarterly + 30% off everything",
    buttonText: "Get My First Magazine",
    stats: "12,000+ members • Cancel anytime"
  },

  // PRICING SECTION
  pricing: {
    sectionTitle: "Here's What Lands in Your Mailbox",
    
    // MEDIA TIER
    media: {
      name: "Media",
      features: [
        "Exclusive Content",
        "Newsletters", 
        "Read Ad-Free"
      ],
      buttonText: "Get My First Magazine"
    },

    // ALL ACCESS TIER (Featured)
    allAccess: {
      name: "All Access",
      badge: "MOST POPULAR CHOICE",
      features: [
        "Everything in Media",
        "30% Off Products",
        "Perks from Our Partners", 
        "FREE Seasonal Print Magazine"
      ],
      buttonText: "Get My First Magazine"
    },

    // SUPPORT TIER  
    support: {
      name: "Support",
      features: [
        "Everything in All Access",
        "Sponsor Gender Affirming Product Donations",
        "Priority Support"
      ],
      buttonText: "Get My First Magazine"
    }
  },

  // TESTIMONIALS
  testimonials: [
    {
      text: "Finally found my people - and they come with a beautiful magazine",
      author: "Jamie, Portland"
    },
    {
      text: "The magazine alone is worth $24, everything else is bonus", 
      author: "Alex, Chicago"
    },
    {
      text: "Finally, print media that represents our stories",
      author: "Sam, Austin"
    }
  ],

  // FINAL CTA SECTION
  finalCTA: {
    headline: "Support Queer Print Media",
    subtitle: "Join the movement • Get your magazine • Build your collection",
    guarantee: "Love your first magazine or get your money back - keep it either way",
    buttonText: "Get My First Magazine",
    terms: "Billed quarterly • Cancel anytime • Keep your magazine"
  },

  // PRICING DATA (Edit prices here)
  pricingData: {
    monthly: {
      media: { price: '$8', billing: 'per month', savings: false },
      allaccess: { original: '$16', price: '$13', billing: 'per month', savings: 'SAVE 19%' },
      support: { original: '$50', price: '$45', billing: 'per month', savings: 'SAVE 10%' }
    },
    quarterly: {
      media: { price: '$24', billing: 'per quarter', savings: false },
      allaccess: { original: '$48', price: '$39', billing: 'per quarter', savings: 'FREE ZINE + SAVE 19%' },
      support: { original: '$150', price: '$135', billing: 'per quarter', savings: 'FREE ZINE + SAVE 10%' }
    },
    annually: {
      media: { price: '$60', billing: 'per year', savings: 'SAVE 38%' },
      allaccess: { original: '$192', price: '$117', billing: 'per year', savings: 'FREE ZINE + SAVE 39%' },
      support: { original: '$600', price: '$405', billing: 'per year', savings: 'FREE ZINE + SAVE 33%' }
    }
  },

  // CTA BUTTON PRICES (Based on billing period)
  ctaPrices: {
    monthly: '$13',
    quarterly: '$39', 
    annually: '$117'
  }

};