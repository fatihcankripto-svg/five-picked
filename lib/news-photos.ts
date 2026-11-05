import type { NewsItem } from "@/lib/news"

const photos = {
  "openai": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/1515_Third_Street.jpg/1280px-1515_Third_Street.jpg",
    "alt": "OpenAI’s San Francisco office building, photographed in 2025.",
    "caption": "OpenAI’s San Francisco office building, photographed in 2025.",
    "author": "Coolcaesar",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "source": "https://commons.wikimedia.org/wiki/File:1515_Third_Street.jpg",
    "position": "center"
  },
  "canva": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/M_Perkins.jpg/1280px-M_Perkins.jpg",
    "alt": "Canva co-founder and CEO Melanie Perkins, photographed in 2019.",
    "caption": "Canva co-founder and CEO Melanie Perkins, photographed in 2019.",
    "author": "Melanie Perkins / liz 16",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
    "source": "https://commons.wikimedia.org/wiki/File:M_Perkins.jpg",
    "position": "center 25%"
  },
  "microsoft": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Microsoft_sign_closeup.jpg/1280px-Microsoft_sign_closeup.jpg",
    "alt": "A Microsoft sign at the Redmond campus, photographed in 2005.",
    "caption": "A Microsoft sign at the Redmond campus, photographed in 2005.",
    "author": "Derrick Coetzee; levels adjusted by Zarex",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Microsoft_sign_closeup.jpg",
    "position": "center"
  },
  "google": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Googleplex_HQ.jpg/1280px-Googleplex_HQ.jpg",
    "alt": "Googleplex headquarters, photographed in 2016.",
    "caption": "Googleplex headquarters, photographed in 2016.",
    "author": "The Pancake of Heaven!",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Googleplex_HQ.jpg",
    "position": "center"
  },
  "anthropic": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Dario_Amodei_in_2023.jpg/1280px-Dario_Amodei_in_2023.jpg",
    "alt": "Anthropic CEO Dario Amodei, photographed in 2023.",
    "caption": "Anthropic CEO Dario Amodei, photographed in 2023.",
    "author": "Simon Walker / No 10 Downing Street",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Dario_Amodei_in_2023.jpg",
    "position": "center 25%"
  }
}

export function newsPhoto(item: NewsItem) {
 const key = item.company.startsWith("Canva") ? "canva" : item.company.startsWith("Microsoft") ? "microsoft" : item.company.startsWith("Google") ? "google" : item.company === "Anthropic" ? "anthropic" : "openai"
 return photos[key]
}
