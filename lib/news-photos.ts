import type { NewsItem } from "@/lib/news"

type NewsPhoto = { src: string; alt: string; caption: string; author: string; license: string; licenseUrl: string; source: string; position: string }

const photos: Record<string, NewsPhoto> = {
  "openai-pierre-acquisition": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Software_Developer_at_Work.jpg/1280px-Software_Developer_at_Work.jpg",
    "alt": "Software development at a laptop. Illustrative file photo.",
    "caption": "Software development at a laptop. Illustrative file photo.",
    "author": "Tsinkala",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Software_Developer_at_Work.jpg",
    "position": "center"
  },
  "openai-images-2-6": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Drawing_Cats_on_Wacom_Intuos3_A5_graphics_tablet_-_Global_Game_Jam_Berlin_2014.jpg/1280px-Drawing_Cats_on_Wacom_Intuos3_A5_graphics_tablet_-_Global_Game_Jam_Berlin_2014.jpg",
    "alt": "Drawing with a graphics tablet at Global Game Jam Berlin in 2014. File photo.",
    "caption": "Drawing with a graphics tablet at Global Game Jam Berlin in 2014. File photo.",
    "author": "Iwan Gabovitch from Berlin, Germany",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Drawing_Cats_on_Wacom_Intuos3_A5_graphics_tablet_-_Global_Game_Jam_Berlin_2014.jpg",
    "position": "center"
  },
  "openai-linux-security-research": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Hacker_typing_on_a_Linux_laptop_-_Milano_2022.jpg/1280px-Hacker_typing_on_a_Linux_laptop_-_Milano_2022.jpg",
    "alt": "A Linux laptop in use in Milan in 2022. Illustrative file photo.",
    "caption": "A Linux laptop in use in Milan in 2022. Illustrative file photo.",
    "author": "User:Kowalski7cc",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Hacker_typing_on_a_Linux_laptop_-_Milano_2022.jpg",
    "position": "center"
  },
  "canva-team-restructuring": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/M_Perkins.jpg/1280px-M_Perkins.jpg",
    "alt": "Canva CEO Melanie Perkins in 2019. File photo.",
    "caption": "Canva CEO Melanie Perkins in 2019. File photo.",
    "author": "Melanie Perkins",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:M_Perkins.jpg",
    "position": "center 25%"
  },
  "affinity-ipad-launch": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Apple_Pencil_Stylus_for_iPad_Pro_%2840144488313%29.jpg/1280px-Apple_Pencil_Stylus_for_iPad_Pro_%2840144488313%29.jpg",
    "alt": "An Apple Pencil for the iPad Pro. Illustrative file photo.",
    "caption": "An Apple Pencil for the iPad Pro. Illustrative file photo.",
    "author": "Tony Webster from Minneapolis, Minnesota, United States",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Apple_Pencil_Stylus_for_iPad_Pro_(40144488313).jpg",
    "position": "center"
  },
  "openai-jill-hazelbaker": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/1515_Third_Street.jpg/1280px-1515_Third_Street.jpg",
    "alt": "OpenAI’s office building in San Francisco in 2025. File photo.",
    "caption": "OpenAI’s office building in San Francisco in 2025. File photo.",
    "author": "Coolcaesar",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:1515_Third_Street.jpg",
    "position": "center"
  },
  "openai-astra-hardware-engineering": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/2/2d/KUKA_Industrial_Robot_KR10_SCARA.jpg",
    "alt": "A KUKA SCARA industrial robot. Illustrative file photo.",
    "caption": "A KUKA SCARA industrial robot. Illustrative file photo.",
    "author": "Jo Teichmann",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "source": "https://commons.wikimedia.org/wiki/File:KUKA_Industrial_Robot_KR10_SCARA.jpg",
    "position": "center"
  },
  "windows-11-8gb-memory": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Microsoft_Surface_Laptop_7.jpg/1280px-Microsoft_Surface_Laptop_7.jpg",
    "alt": "A Microsoft Surface Laptop 7. Illustrative file photo.",
    "caption": "A Microsoft Surface Laptop 7. Illustrative file photo.",
    "author": "StrangeApparition2011",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Microsoft_Surface_Laptop_7.jpg",
    "position": "center"
  },
  "google-guided-learning-schools": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/A_computer_science_classroom_at_Lee_University_in_Cleveland%2C_Tennessee%2C_United_States_02.jpg/1280px-A_computer_science_classroom_at_Lee_University_in_Cleveland%2C_Tennessee%2C_United_States_02.jpg",
    "alt": "A computer science classroom at Lee University. Illustrative file photo.",
    "caption": "A computer science classroom at Lee University. Illustrative file photo.",
    "author": "Harrison Keely",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:A_computer_science_classroom_at_Lee_University_in_Cleveland,_Tennessee,_United_States_02.jpg",
    "position": "center"
  },
  "google-ai-educator-training-expansion": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Computer_teacher.jpg/1280px-Computer_teacher.jpg",
    "alt": "A computer teacher at work. Illustrative file photo.",
    "caption": "A computer teacher at work. Illustrative file photo.",
    "author": "Masoud mahfouzi",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Computer_teacher.jpg",
    "position": "center"
  },
  "google-antigravity-chemistry": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Prentice_Hall_Molecular_Model_Set_for_General_Organic_Chemistry_8139.JPG/1280px-Prentice_Hall_Molecular_Model_Set_for_General_Organic_Chemistry_8139.JPG",
    "alt": "A physical molecular model set. Illustrative file photo.",
    "caption": "A physical molecular model set. Illustrative file photo.",
    "author": "Bin im Garten",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Prentice_Hall_Molecular_Model_Set_for_General_Organic_Chemistry_8139.JPG",
    "position": "center"
  },
  "microsoft-copilot-cowork-engineering": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Programmer_writing_code_with_Unit_Tests.jpg/1280px-Programmer_writing_code_with_Unit_Tests.jpg",
    "alt": "A programmer writing code with unit tests. Illustrative file photo.",
    "caption": "A programmer writing code with unit tests. Illustrative file photo.",
    "author": "Joonspoon",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Programmer_writing_code_with_Unit_Tests.jpg",
    "position": "center"
  },
  "microsoft-lumen-ai-networks": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Optical_fiber_cable-01ASD.jpg/1280px-Optical_fiber_cable-01ASD.jpg",
    "alt": "Optical-fibre cables. Illustrative file photo.",
    "caption": "Optical-fibre cables. Illustrative file photo.",
    "author": "Asurnipal",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Optical_fiber_cable-01ASD.jpg",
    "position": "center"
  },
  "openai-grid-protectors": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Switchyard_of_electric_substation_750kV.png/1280px-Switchyard_of_electric_substation_750kV.png",
    "alt": "A high-voltage electricity substation. Illustrative file photo.",
    "caption": "A high-voltage electricity substation. Illustrative file photo.",
    "author": "Novoklimov",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Switchyard_of_electric_substation_750kV.png",
    "position": "center"
  },
  "canva-brush-design-editing": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Hand_drawing_on_a_graphic_tablet.jpg/1280px-Hand_drawing_on_a_graphic_tablet.jpg",
    "alt": "Drawing by hand on a graphics tablet. Illustrative file photo.",
    "caption": "Drawing by hand on a graphics tablet. Illustrative file photo.",
    "author": "Piknuz",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Hand_drawing_on_a_graphic_tablet.jpg",
    "position": "center"
  },
  "microsoft-fiscal-q1-cloud-results": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Aerial_Microsoft_West_Campus_August_2009.jpg/1280px-Aerial_Microsoft_West_Campus_August_2009.jpg",
    "alt": "Microsoft’s West Campus in 2009. File photo.",
    "caption": "Microsoft’s West Campus in 2009. File photo.",
    "author": "Jelson25",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Aerial_Microsoft_West_Campus_August_2009.jpg",
    "position": "center"
  },
  "anthropic-ai-science-partnerships": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Scientist_are_at_the_Biomedical_Research_Laboratory_Center_04.jpg",
    "alt": "Scientists at a biomedical research laboratory. Illustrative file photo.",
    "caption": "Scientists at a biomedical research laboratory. Illustrative file photo.",
    "author": "Oloyedegk",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Scientist_are_at_the_Biomedical_Research_Laboratory_Center_04.jpg",
    "position": "center"
  },
  "anthropic-claude-drug-development": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Dario_Amodei_in_2023.jpg/1280px-Dario_Amodei_in_2023.jpg",
    "alt": "Anthropic CEO Dario Amodei in 2023. File photo.",
    "caption": "Anthropic CEO Dario Amodei in 2023. File photo.",
    "author": "UK Prime Minister",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Dario_Amodei_in_2023.jpg",
    "position": "center 25%"
  },
  "anthropic-proposed-ipo": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/NASDAQ_stock_market_display.jpg/1280px-NASDAQ_stock_market_display.jpg",
    "alt": "A Nasdaq stock-market display. Illustrative file photo.",
    "caption": "A Nasdaq stock-market display. Illustrative file photo.",
    "author": "bfishadow on Flickr",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:NASDAQ_stock_market_display.jpg",
    "position": "center"
  },
  "canva-craft-image-model": {
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Minimalistic_workspace_with_tablet.jpg/1280px-Minimalistic_workspace_with_tablet.jpg",
    "alt": "A workspace with a tablet. Illustrative file photo.",
    "caption": "A workspace with a tablet. Illustrative file photo.",
    "author": "Spnq",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Minimalistic_workspace_with_tablet.jpg",
    "position": "center"
  }
}

export function newsPhoto(item: NewsItem): NewsPhoto {
 return photos[item.slug]
}
