/** Official-source desk research; no booking, cancellation or fare test was performed. */
export const flightFreeEditorial = {
  author: 'Five Picked Editors',
  authorBio: 'Five Picked Editors is FIVE PICKED’s collective byline for research-based tool comparisons and buying guides.',
  lastReviewedAt: '2026-10-31',
}

export const flightFreeOptions = [
  {
    slug: 'kiwi-com', name: 'Kiwi.com',
    audience: 'Travelers comparing separate-airline itineraries',
    standout: 'Combines flights from airlines that do not cooperate',
    price: 'Free search; tickets, service fees and selected extras cost extra',
    access: 'Website functions are free unless stated otherwise. Price alerts require an account and send email or push notifications; the help page specifies no separate alert charge or numeric allowance.',
    fees: 'The booking total separates carrier costs, ancillary services and Kiwi.com fees. Baggage and protection options are not automatically free. No universal separate payment-fee amount is verified.',
    changes: 'No blanket free changes or cancellation. Fare and service conditions apply; the service fee is generally non-refundable. Basic assisted voluntary refunds can deduct €30 per person per flight from recovered funds, with possible waivers.',
    sources: [
      { label: 'Kiwi.com website access terms', url: 'https://www.kiwi.com/en/pages/content/terms/' },
      { label: 'Kiwi.com price alert setup', url: 'https://www.kiwi.com/us/help/kiwi-com-travel-hacks-258/article/price-alerts-84/' },
      { label: 'Kiwi.com booking costs and refund terms (sections 6 and 9)', url: 'https://www.kiwi.com/en/pages/content/legal/' },
      { label: 'Kiwi.com self-transfer and premium services', url: 'https://www.kiwi.com/us/pages/content/fees/' },
    ],
  },
  {
    slug: 'edreams', name: 'eDreams',
    audience: 'Travelers comparing flights while checking membership conditions',
    standout: 'Flight comparison with an optional Prime membership',
    price: 'Search without buying; booking fees and optional Prime are separate',
    access: 'The public flight comparator and free app let you browse before buying. Price alerts are documented, but their free entitlement and numeric limits are not explicitly established in the reviewed sources. Free flight-status notifications are a different feature.',
    fees: 'Booking intermediation fees are non-refundable under the general terms. Prime is a separate subscription; an offered trial renews automatically unless cancelled. Baggage can be excluded from basic fares. No universal payment-fee amount is verified.',
    changes: 'Airline fare rules govern eligibility. General terms allow an additional agency handling fee of up to 60 in the site-market currency (EUR/USD/GBP or other currency), per person and affected booking. Some Prime or free-rebooking offers waive agency fees; airline charges remain separate.',
    sources: [
      { label: 'eDreams flight comparator and free app', url: 'https://www.edreams.com/travel/flights/' },
      { label: 'eDreams price alerts and baggage exclusions', url: 'https://www.edreams.com/best-time-to-book-flights/' },
      { label: 'eDreams general terms (section 3.1; market conditions apply)', url: 'https://www.edreams.com/terms-and-conditions/?qsa=1' },
      { label: 'eDreams Prime automatic renewal', url: 'https://help.edreams.co.uk/hc/en-gb/articles/18970274140946-How-do-I-manage-my-Prime-membership' },
    ],
  },
  {
    slug: 'cheapoair', name: 'CheapOair',
    audience: 'Travelers tracking a route before purchasing',
    standout: 'Explicitly documented free pre-booking price alerts',
    price: 'Free search and price alerts; booking and post-ticketing fees apply',
    access: 'Browse flights before purchasing and set a free route price alert. No numeric alert allowance is established here. Paid Price Drop Assurance after booking is a separate product.',
    fees: 'Most online airfares carry a service fee up to US$50 per passenger per ticket, with higher listed exceptions. Airline baggage and optional services are additional. No universal separate payment-fee amount is verified.',
    changes: 'Airline restrictions and agency post-ticketing charges apply. Agent-assisted cancellation within 24 hours on US websites lists US$75 domestic or US$100 international/business/first-class per passenger per ticket. This is not universal free cancellation; later changes and refunds have separate fee schedules.',
    sources: [
      { label: 'CheapOair free route price alerts', url: 'https://m.cheapoair.com/flights/' },
      { label: 'CheapOair service, post-ticketing and baggage terms', url: 'https://www.cheapoair.com/info/generaltermsandconditions' },
    ],
  },
  {
    slug: 'alternative-airlines', name: 'Alternative Airlines',
    audience: 'Travelers comparing available payment methods',
    standout: 'Flight booking with multiple payment choices',
    price: 'Search before payment; fare, service fees and extras are separate',
    access: 'The official booking flow puts flight search and comparison before passenger details and payment. This is the no-purchase browsing option, not free tickets. A free route price-alert feature and numeric search limits are not verified.',
    fees: 'Cancellation adds an agency service fee; paid baggage, seats and service fees are non-refundable on voluntary cancellation. The booking flow shows included baggage before extras. No universal payment-fee amount is verified; financing depends on the selected provider.',
    changes: 'Fare rules govern refunds and amendments; amendment quotes can require extra payment. For eligible airline refunds within 24 hours, non-US itineraries incur 15% of the flight total, capped at £150 or its currency equivalent. US-inclusive itineraries are excluded from that fee rule, not promised universal eligibility. Contact and processing conditions apply.',
    sources: [
      { label: 'Alternative Airlines search-to-payment process', url: 'https://www.alternativeairlines.com/booking-process' },
      { label: 'Alternative Airlines payment choices', url: 'https://www.alternativeairlines.com/about-us' },
      { label: 'Alternative Airlines cancellation and amendment terms', url: 'https://www.alternativeairlines.com/terms-and-conditions' },
    ],
  },
  {
    slug: 'trip-com', name: 'Trip.com',
    audience: 'Travelers using route alerts across desktop and mobile',
    standout: 'Free route price alerts without a membership upgrade',
    price: 'Free website and price alerts; purchased flights follow fare rules',
    access: 'Website access is free. Price alerts use a free account, with no membership upgrade required; no numeric alert allowance is verified.',
    fees: 'Check the selected fare’s baggage rules and displayed booking conditions. Payment-provider international fees or exchange rates may add costs. The reviewed terms do not establish a universal booking or payment-fee amount; this is not a zero-fee booking promise.',
    changes: 'Change and cancellation rights and associated fees are displayed during booking. Some fares cannot be changed or refunded. No universal free cancellation period or free amendment entitlement is established.',
    sources: [
      { label: 'Trip.com free price alerts and account requirements', url: 'https://www.trip.com/ask/questions/trip.com-price-alert.html' },
      { label: 'Trip.com website, flight and payment terms (sections 3, 5 and 10)', url: 'https://www.trip.com/contents/service-guideline/terms.html?locale=en-XX' },
    ],
  },
]
