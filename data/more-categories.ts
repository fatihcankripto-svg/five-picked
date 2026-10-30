/**
 * FIVE PICKED — new categories (added without touching the original list).
 * Empty spots are marked `comingSoon: true` and are filled in as programs are approved.
 * Every tool list must have exactly 5 entries (checked at the bottom of this file).
 */

import type { Category, Tool } from './categories'

type PickTool = Tool & { comingSoon?: boolean }

function comingSoonTools(count: number, firstRank: number, topic: string): PickTool[] {
  return Array.from({ length: count }, (_, i) => {
    const rank = firstRank + i
    return {
      slug: `coming-soon-${rank}`,
      name: 'Coming soon',
      tagline: `Pick #${rank} for ${topic} is on the way.`,
      bestFor: 'To be announced',
      whatItDoes:
        'We are still researching this spot. We only add a tool once we are happy it deserves a place in the top five.',
      strengths: [],
      goodToKnow: 'Check back soon.',
      startingPrice: 'See website',
      officialUrl: '#',
      comingSoon: true,
    }
  })
}

/** Real tools first (in ranked order), then "Coming soon" slots up to exactly 5. */
function fillToFive(real: PickTool[], topic: string): PickTool[] {
  return [...real, ...comingSoonTools(5 - real.length, real.length + 1, topic)]
}

export const extraCategories: Category[] = [
  {
    slug: 'travel',
    name: 'Travel',
    description:
      'Tools for booking flights, tours, buses and car rentals, staying connected abroad and traveling with peace of mind.',
    subcategories: [
      {
        slug: 'flights',
        name: 'Flights',
        description:
          'Flight search and booking sites to help you find the right fare, from budget trips to flexible bookings.',
        tools: fillToFive(
          [
            {
              slug: 'kiwi-com',
              name: 'Kiwi.com',
              tagline: 'Flight search that can mix different airlines in one trip.',
              bestFor: 'Budget travelers who want the cheapest route, even with several airlines',
              whatItDoes:
                'Kiwi.com searches a very wide range of airlines, including low-cost carriers, and can combine flights from airlines that do not normally work together into a single itinerary.',
              strengths: [
                'Searches many airlines, including budget carriers',
                'Can combine separate airlines into one trip',
                'Flexible search for flying anywhere on a budget',
                'Free to search and compare',
              ],
              goodToKnow:
                'When a trip mixes separate tickets, a delay on one flight may not be covered by the next airline. Read the booking terms first.',
              startingPrice: 'See website',
              officialUrl: 'https://www.kiwi.com/',
            },
            {
              slug: 'edreams',
              name: 'eDreams',
              tagline: 'A big online travel agency for flights, hotels and cars.',
              bestFor: 'Travelers who want to compare many airlines and book extras in one place',
              whatItDoes:
                'eDreams is an online travel agency where you can search and book flights, hotels and car rentals. It also offers an optional Prime membership with member prices.',
              strengths: [
                'Compares a large number of airlines',
                'Flights, hotels and cars in one account',
                'Optional Prime membership with member deals',
                'Free to search',
              ],
              goodToKnow:
                'Check the final price and any add-ons or membership offers at checkout, and remember that changes follow both eDreams and airline rules.',
              startingPrice: 'See website',
              officialUrl: 'https://www.edreams.com/',
            },
            {
              slug: 'cheapoair',
              name: 'CheapOair',
              tagline: 'Compare fares across many airlines and book hotels too.',
              bestFor: 'Travelers who like comparing fares and bundling a trip',
              whatItDoes:
                'CheapOair is an online travel agency for flights, hotels and car rentals. You compare options from many airlines and book through one account.',
              strengths: [
                'Compares fares across many airlines',
                'Hotels and car rentals in the same place',
                'Mobile app for booking on the go',
                'Free to search',
              ],
              goodToKnow:
                'Because you book through an agency, changes and refunds depend on both the agency and the airline. Check the rules before paying.',
              startingPrice: 'See website',
              officialUrl: 'https://www.cheapoair.com/',
            },
            {
              slug: 'alternative-airlines',
              name: 'Alternative Airlines',
              tagline: 'Book flights with more payment options than a standard card.',
              bestFor: 'Travelers who want flexibility in how they pay',
              whatItDoes:
                'Alternative Airlines is a flight booking site that supports a range of payment methods beyond standard credit cards. Available options can vary by country and route.',
              strengths: [
                'More payment choices than many booking sites',
                'Many airlines to choose from',
                'Simple search and booking',
                'Free to search',
              ],
              goodToKnow:
                'Available payment methods depend on your country and the route, so check what is offered at checkout.',
              startingPrice: 'See website',
              officialUrl: 'https://www.alternativeairlines.com/',
            },
            {
              slug: 'trip-com',
              name: 'Trip.com',
              tagline: 'A global travel platform for flights, hotels and trains.',
              bestFor: 'Travelers planning trips in Asia and anyone who wants one app for everything',
              whatItDoes:
                'Trip.com lets you book flights, hotels, trains and attractions in one app. It is especially strong for travel in Asia.',
              strengths: [
                'Flights, hotels, trains and attractions in one app',
                'Strong coverage across Asia',
                'Free to search and compare',
                'Available as a mobile app',
              ],
              goodToKnow:
                'Booking conditions vary by airline and hotel, so read the fare rules and cancellation terms before you pay.',
              startingPrice: 'See website',
              officialUrl: 'https://www.trip.com/',
            },
          ],
          'flights',
        ),
      },
      {
        slug: 'tours-and-activities',
        name: 'Tours & Activities',
        description:
          'Platforms for booking tours, attraction tickets and local experiences before you go.',
        tools: fillToFive(
          [
            {
              slug: 'viator',
              name: 'Viator',
              tagline: 'A huge catalog of tours and experiences worldwide.',
              bestFor: 'Travelers who want lots of choice and reviews before booking',
              whatItDoes:
                'Viator, part of the Tripadvisor family, lists tours, tickets and activities in destinations around the world, with traveler reviews to help you choose.',
              strengths: [
                'Very large choice of tours and activities',
                'Traveler reviews on listings',
                'Many options with flexible cancellation',
                'Free to browse',
              ],
              goodToKnow:
                'Cancellation rules differ from one experience to the next, so check each listing before booking.',
              startingPrice: 'See website',
              officialUrl: 'https://www.viator.com/',
            },
            {
              slug: 'getyourguide',
              name: 'GetYourGuide',
              tagline: 'Book tours, tickets and activities in a few taps.',
              bestFor: 'Travelers who want easy mobile booking for popular sights',
              whatItDoes:
                'GetYourGuide is a marketplace for tours, attraction tickets and local activities. You can book in the app and keep your tickets on your phone.',
              strengths: [
                'Wide range of tours and tickets',
                'Mobile tickets in the app',
                'Reviews and clear descriptions',
                'Free to browse',
              ],
              goodToKnow:
                'Cancellation terms depend on the activity, so read them on the listing before you book.',
              startingPrice: 'See website',
              officialUrl: 'https://www.getyourguide.com/',
            },
            {
              slug: 'tiqets',
              name: 'Tiqets',
              tagline: 'Tickets for museums and attractions, delivered to your phone.',
              bestFor: 'Skipping ticket lines at museums and major attractions',
              whatItDoes:
                'Tiqets sells tickets for museums, landmarks and attractions, so you can book ahead and show your ticket on your phone.',
              strengths: [
                'Focused on museums and top attractions',
                'Mobile tickets',
                'Easy to book ahead',
                'Free to browse',
              ],
              goodToKnow:
                'It is more focused on tickets than on guided tours, so it suits independent sightseeing best.',
              startingPrice: 'See website',
              officialUrl: 'https://www.tiqets.com/',
            },
          ],
          'tours and activities',
        ),
      },
      {
        slug: 'bus',
        name: 'Bus',
        description: 'Intercity bus travel that is simple to book and easy on the budget.',
        tools: fillToFive(
          [
            {
              slug: 'flixbus',
              name: 'FlixBus',
              tagline: 'A huge intercity bus network with simple online booking.',
              bestFor: 'Budget travel between cities',
              whatItDoes:
                'FlixBus runs a large network of intercity bus routes. You search for a route, book online and show your ticket in the app.',
              strengths: [
                'Large network connecting many cities',
                'Budget-friendly fares',
                'Easy booking and mobile tickets',
                'Free to search',
              ],
              goodToKnow:
                'Routes, fares and luggage rules vary by country, so check the details for your trip.',
              startingPrice: 'See website',
              officialUrl: 'https://www.flixbus.com/',
            },
          ],
          'bus travel',
        ),
      },
      {
        slug: 'car-rental',
        name: 'Car Rental',
        description: 'Ways to rent a car for a trip, from big brands to booking sites that compare offers.',
        tools: fillToFive(
          [
            {
              slug: 'europcar',
              name: 'Europcar',
              tagline: 'A major car rental brand with locations across many countries.',
              bestFor: 'Travelers who want a well-known rental company',
              whatItDoes:
                'Europcar rents cars and vans from many locations around the world, with options for airport and city pick-up.',
              strengths: [
                'Well-known brand with many locations',
                'Cars and vans available',
                'Airport and city pick-up',
                'Book online in advance',
              ],
              goodToKnow:
                'Insurance, extras and fuel rules vary by location, so read the rental terms before you confirm.',
              startingPrice: 'See website',
              officialUrl: 'https://www.europcar.com/',
            },
            {
              slug: 'rentcars',
              name: 'RentCars',
              tagline: 'An online booking site for comparing car rental offers.',
              bestFor: 'Travelers who like comparing options before they book',
              whatItDoes:
                'RentCars is an online platform where you search for rental cars at your destination and compare offers before booking.',
              strengths: [
                'Search and compare rental offers online',
                'Book ahead from your phone or computer',
                'Free to search',
              ],
              goodToKnow:
                'Coverage and offers depend on the destination, so check availability for the country you are visiting.',
              startingPrice: 'See website',
              officialUrl: 'https://www.rentcars.com/',
            },
          ],
          'car rental',
        ),
      },
      {
        slug: 'esim',
        name: 'eSIM',
        description: 'Travel eSIMs that give you mobile data abroad without swapping a physical SIM card.',
        tools: fillToFive(
          [
            {
              slug: 'saily',
              name: 'Saily',
              tagline: 'Travel eSIM data plans from the team behind NordVPN.',
              bestFor: 'Travelers who want mobile data abroad without a physical SIM',
              whatItDoes:
                'Saily sells prepaid eSIM data plans for many countries and regions. You install the eSIM on your phone and use data without swapping SIM cards.',
              strengths: [
                'No physical SIM needed',
                'Prepaid plans with no contract',
                'Coverage for many countries and regions',
                'From the company behind NordVPN',
              ],
              goodToKnow:
                'Your phone must support eSIM and be unlocked. Plans are focused on data, so check what is included before you buy.',
              startingPrice: 'See website',
              officialUrl: 'https://saily.com/',
            },
          ],
          'travel eSIMs',
        ),
      },
      {
        slug: 'travel-health',
        name: 'Travel Health',
        description: 'Services that help if you get sick or injured far from home.',
        tools: fillToFive(
          [
            {
              slug: 'medjet',
              name: 'Medjet',
              tagline: 'Medical transport and evacuation membership for travelers.',
              bestFor: 'Travelers who want help getting home or to a hospital of choice after a serious illness or injury',
              whatItDoes:
                'Medjet is a membership that arranges medical transport and evacuation when you are seriously ill or injured far from home. It is designed to work alongside travel insurance.',
              strengths: [
                'Focused on medical transport and evacuation',
                'Short-trip and annual memberships',
                'Designed to complement travel insurance',
              ],
              goodToKnow:
                'It is a membership, not a full travel insurance policy. Read exactly what is covered and who is eligible.',
              startingPrice: 'See website',
              officialUrl: 'https://www.medjetassist.com/',
            },
          ],
          'travel health',
        ),
      },
    ],
  },
  {
    slug: 'website-builders',
    hidden: true,
    name: 'Website Builders',
    description:
      'Tools for designing and launching a website, from visual page builders to AI builders that start from a prompt.',
    tools: fillToFive(
      [
        {
          slug: 'elementor',
          name: 'Elementor',
          tagline: 'The popular drag-and-drop page builder for WordPress.',
          bestFor: 'WordPress users who want full design control without code',
          whatItDoes:
            'Elementor is a visual page builder for WordPress. You design pages by dragging and dropping elements, using ready-made templates as a starting point.',
          strengths: [
            'Visual drag-and-drop editing',
            'Many templates and widgets',
            'Free version to start',
            'Works on top of WordPress',
          ],
          goodToKnow:
            'It needs a WordPress site, and advanced features are on paid plans. See the website for current plans.',
          startingPrice: 'See website',
          officialUrl: 'https://elementor.com/',
        },
        {
          slug: 'brizy',
          name: 'Brizy',
          tagline: 'A clean visual builder for websites, with cloud and WordPress options.',
          bestFor: 'Designers and small agencies who want a simple visual builder',
          whatItDoes:
            'Brizy is a visual website builder. You can use it as a hosted cloud builder or as a plugin on WordPress.',
          strengths: [
            'Simple visual editor',
            'Cloud and WordPress options',
            'Ready-made templates',
            'Free version to try',
          ],
          goodToKnow:
            'Its community is smaller than the biggest builders, and some features sit on paid plans.',
          startingPrice: 'See website',
          officialUrl: 'https://www.brizy.io/',
        },
        {
          slug: 'create',
          name: 'Create',
          tagline: 'Describe what you want and let AI build it.',
          bestFor: 'Non-coders who want a working site or app from a text prompt',
          whatItDoes:
            'Create turns a plain-English description into a working website or app, with hosting and publishing handled for you.',
          strengths: [
            'Starts from a simple text prompt',
            'No coding needed',
            'Free plan to try it',
            'Publish from the same place',
          ],
          goodToKnow:
            'It runs on credits, so heavier use needs a paid plan. Private projects and custom domains start on the paid plan.',
          startingPrice: 'See website',
          officialUrl: 'https://www.create.xyz/',
        },
      ],
      'website builders',
    ),
  },
  {
    slug: 'personal-finance',
    name: 'Personal Finance',
    description:
      'Tools for budgeting, protecting your identity and credit, and getting paid in your business.',
    subcategories: [
      {
        slug: 'budgeting',
        name: 'Budgeting',
        description: 'Apps and tools that help you plan spending, build savings and understand where your money goes.',
        tools: fillToFive(
          [
            {
              slug: 'tiller',
              name: 'Tiller',
              tagline: 'A budgeting spreadsheet that fills itself in.',
              bestFor: 'People who like spreadsheets and want full control of their budget',
              whatItDoes:
                'Tiller automatically pulls your bank transactions into a Google Sheets or Excel spreadsheet, so you can use templates or build your own budget.',
              strengths: [
                'Transactions flow into your own spreadsheet',
                'Ready-made templates',
                'Fully customizable',
                'Free trial to test it',
              ],
              goodToKnow:
                'It is a subscription, and it suits people who are comfortable working in a spreadsheet.',
              startingPrice: 'See website',
              officialUrl: 'https://www.tiller.com/',
            },
                        {
              slug: 'changed',
              name: 'Changed',
              tagline: 'Round up your everyday spending and put the change toward your debt.',
              bestFor: 'People paying off student loans or other debt who want to do it on autopilot',
              whatItDoes:
                'Changed is a debt payoff app. It tracks your spending, rounds each purchase up to the next dollar, and sends the saved change toward your loans or credit cards.',
              strengths: [
                'Round-ups make extra payments without much effort',
                'Savings goals, such as an emergency fund, in the same app',
                'Progress tracking so you can see your debt shrink',
                'Works for student loans, credit cards, mortgages and more',
              ],
              goodToKnow:
                'It is a debt payoff tool more than a classic budgeting app, and it is a US service. Changed is not a bank, so read the account terms before you sign up.',
              startingPrice: 'See website',
              officialUrl: 'https://www.gochanged.com/',
            },

            {
              slug: 'finaciti',
              name: 'Finaciti',
              tagline: 'A money app that mixes budgeting tools with short lessons and coaching.',
              bestFor: 'People who want to build better money habits, not just track spending',
              whatItDoes:
                'Finaciti is a financial wellness app with budgeting tools, short lessons, webinars and access to live coaches.',
              strengths: [
                'Budgeting, debt and credit topics in one app',
                'Short, self-paced lessons',
                'Access to live coaching',
                'Free and paid options',
              ],
              goodToKnow:
                'It is aimed mainly at the US, and paid plans cost more than a basic budgeting app. Check current prices.',
              startingPrice: 'See website',
              officialUrl: 'https://finaciti.com/',
            },
          ],
          'budgeting',
        ),
      },
      {
        slug: 'identity-and-credit-protection',
        name: 'Identity & Credit Protection',
        description: 'Services that watch your credit and help you respond if your identity is stolen.',
        tools: fillToFive(
          [
            {
              slug: 'identityiq',
              name: 'IdentityIQ',
              tagline: 'Credit monitoring and identity theft protection.',
              bestFor: 'US consumers who want credit monitoring and identity theft support',
              whatItDoes:
                'IdentityIQ monitors your credit and personal information and offers identity theft protection, with help from specialists if something goes wrong.',
              strengths: [
                'Credit monitoring and identity protection together',
                'Alerts about changes to your credit',
                'Identity restoration support',
              ],
              goodToKnow:
                'It is aimed at US customers. Compare plans and read what is covered before you subscribe.',
              startingPrice: 'See website',
              officialUrl: 'https://www.identityiq.com/',
            },
          ],
          'identity and credit protection',
        ),
      },
      {
        slug: 'business-payments',
        name: 'Business Payments',
        description: 'Ways for small businesses to take card payments in person and online.',
        tools: fillToFive(
          [
            {
              slug: 'helcim',
              name: 'Helcim',
              tagline: 'Card payment processing with transparent, no-monthly-fee pricing.',
              bestFor: 'Small businesses that want clear processing costs',
              whatItDoes:
                'Helcim is a payment processor for small businesses. You can take card payments in person and online, with interchange-plus pricing and no monthly fee.',
              strengths: [
                'Interchange-plus pricing',
                'No monthly fee',
                'In-person and online payments',
                'Volume discounts as you grow',
              ],
              goodToKnow:
                'Availability depends on your country, so check that Helcim serves your business location.',
              startingPrice: 'See website',
              officialUrl: 'https://www.helcim.com/',
            },
          ],
          'business payments',
        ),
      },
    ],
  },
  {
    slug: 'fitness-and-nutrition',
    name: 'Fitness & Nutrition',
    description: 'Apps that help you track what you eat and stay consistent with workouts.',
    subcategories: [
      {
        slug: 'nutrition-tracking',
        name: 'Nutrition Tracking',
        description: 'Apps for tracking calories, macros and nutrients, and for planning meals.',
        tools: fillToFive(
          [
            {
              slug: 'cronometer',
              name: 'Cronometer',
              tagline: 'Detailed nutrient tracking for people who want the full picture.',
              bestFor: 'Anyone who wants to track vitamins and minerals, not just calories',
              whatItDoes:
                'Cronometer logs your food and shows calories, macros and many micronutrients, using a database of verified foods.',
              strengths: [
                'Very detailed nutrient tracking',
                'Verified food database',
                'Free plan available',
                'Paid Gold plan adds more features',
              ],
              goodToKnow:
                'The level of detail can feel like a lot if you only want a simple calorie count.',
              startingPrice: 'See website',
              officialUrl: 'https://cronometer.com/',
            },
            {
              slug: 'eat-this-much',
              name: 'Eat This Much',
              tagline: 'Automatic meal plans built around your calorie and macro goals.',
              bestFor: 'People who would rather get a meal plan than build one by hand',
              whatItDoes:
                'Eat This Much generates a meal plan based on your calorie and nutrition targets and creates a grocery list from it.',
              strengths: [
                'Generates meal plans automatically',
                'Grocery lists included',
                'Fits calorie and macro goals',
                'Free plan to start',
              ],
              goodToKnow:
                'The free plan is limited, and some features need Premium. See the website for current pricing.',
              startingPrice: 'See website',
              officialUrl: 'https://www.eatthismuch.com/',
            },
            {
              slug: 'welling',
              name: 'Welling AI',
              tagline: 'An AI nutrition coach you log meals with by photo, voice or chat.',
              bestFor: 'People who find manual food logging too slow',
              whatItDoes:
                'Welling lets you log meals by photo, voice or text, estimates calories and macros, and gives coaching guidance on your nutrition.',
              strengths: [
                'Quick logging by photo, voice or chat',
                'AI coaching based on your goals',
                'Free tier and a trial for paid features',
                'Apps for iPhone and Android',
              ],
              goodToKnow:
                'Full features need a subscription, and it covers the main nutrients rather than going as deep as specialist trackers. Published prices vary, so check the app.',
              startingPrice: 'See website',
              officialUrl: 'https://www.welling.ai/',
            },
          ],
          'nutrition tracking',
        ),
      },
      {
        slug: 'workouts',
        name: 'Workouts',
        description: 'Workout apps with guided classes you can follow at home or in the gym.',
        tools: fillToFive(
          [
            {
              slug: 'fiit',
              name: 'Fiit',
              tagline: 'Guided workout classes and training plans on any screen.',
              bestFor: 'People who want variety and structure, at home or in the gym',
              whatItDoes:
                'Fiit offers on-demand classes and training plans covering strength, HIIT, kettlebell, dumbbell and bodyweight workouts, led by trainers.',
              strengths: [
                'Thousands of classes on the paid plan',
                'Training plans and challenges',
                'Free plan with group classes',
                'Works with many fitness trackers',
              ],
              goodToKnow:
                'The free plan only includes group classes. The full library needs the paid plan, which renews automatically.',
              startingPrice: 'See website',
              officialUrl: 'https://fiit.tv/',
            },
          ],
          'workouts',
        ),
      },
    ],
  },
  {
    slug: 'gaming',
    hidden: true,
    name: 'Gaming',
    description: 'Places to buy PC games and game keys, with sales and bundles.',
    tools: fillToFive(
      [
        {
          slug: 'fanatical',
          name: 'Fanatical',
          tagline: 'A digital store for PC game keys, bundles and sales.',
          bestFor: 'PC gamers who like bundles and discounts',
          whatItDoes:
            'Fanatical sells digital PC game keys, which you redeem on platforms such as Steam. It is known for bundles and regular sales.',
          strengths: [
            'Large catalog of PC games',
            'Bundles and regular sales',
            'Instant digital delivery',
            'Free to browse',
          ],
          goodToKnow:
            'Keys are redeemed on another platform, and some games have region restrictions, so check before you buy.',
          startingPrice: 'See website',
          officialUrl: 'https://www.fanatical.com/',
        },
      ],
      'PC gaming',
    ),
  },
  {
    slug: 'refurbished-electronics',
    hidden: true,
    name: 'Refurbished Electronics',
    description: 'Marketplaces for buying professionally refurbished phones, laptops and gadgets.',
    tools: fillToFive(
      [
        {
          slug: 'back-market',
          name: 'Back Market',
          tagline: 'A marketplace for refurbished phones, laptops and more.',
          bestFor: 'Buyers who want electronics for less than new prices',
          whatItDoes:
            'Back Market is a marketplace where refurbishers sell used and renewed electronics such as phones, laptops and tablets, usually at lower prices than new.',
          strengths: [
            'Wide range of refurbished devices',
            'Prices usually below new',
            'Condition grades on listings',
            'Free to browse',
          ],
          goodToKnow:
            'Sellers are independent refurbishers, so check the condition grade, warranty and return terms on each listing.',
          startingPrice: 'See website',
          officialUrl: 'https://www.backmarket.com/',
        },
      ],
      'refurbished electronics',
    ),
  },
  {
    slug: 'diy-legal',
    hidden: true,
    name: 'DIY Legal',
    description: 'Self-help legal guides, forms and software for everyday legal needs.',
    tools: fillToFive(
      [
        {
          slug: 'nolo',
          name: 'Nolo',
          tagline: 'Plain-English legal guides, forms and software.',
          bestFor: 'People handling simple legal tasks themselves',
          whatItDoes:
            'Nolo publishes self-help legal books, guides, forms and software for everyday needs such as wills and small businesses.',
          strengths: [
            'Clear, plain-English explanations',
            'Guides, forms and software',
            'Good for simple, common situations',
          ],
          goodToKnow:
            'It is mainly US-focused and is not a substitute for a lawyer. Complex situations need professional advice.',
          startingPrice: 'See website',
          officialUrl: 'https://www.nolo.com/',
        },
      ],
      'DIY legal help',
    ),
  },
]

/** Safety check: every list must have exactly 5 tools with unique slugs. */
function checkList(tools: PickTool[], context: string) {
  if (tools.length !== 5) {
    throw new Error(`[FIVE PICKED] ${context} has ${tools.length} tools, expected 5.`)
  }
  const seen = new Set<string>()
  for (const tool of tools) {
    if (seen.has(tool.slug)) {
      throw new Error(`[FIVE PICKED] Duplicate slug "${tool.slug}" in ${context}.`)
    }
    seen.add(tool.slug)
  }
}

for (const category of extraCategories) {
  if (category.subcategories && category.tools) {
    throw new Error(`[FIVE PICKED] "${category.slug}" has both subcategories and tools.`)
  }
  category.tools && checkList(category.tools, category.slug)
  category.subcategories?.forEach((sub) =>
    checkList(sub.tools, `${category.slug}/${sub.slug}`),
  )
}
