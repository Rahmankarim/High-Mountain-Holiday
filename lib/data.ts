// Centralized data for tours and blog posts - makes data dynamic across pages

export interface Tour {
  id: number
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  duration: string
  difficulty: string
  groupSize: string
  location: string
  rating: number
  price: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: { day: string; title: string; description: string }[]
  category: "trekking" | "mountaineering" | "cultural" | "full-pakistan"
  featured: boolean
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
  readTime: string
  author: {
    name: string
    avatar: string
    role: string
  }
}

export const tours: Tour[] = [
  {
    id: 1,
    slug: "k2-base-camp-trek",
    title: "K2 Base Camp Trek",
    description: "Journey to the base of the world's second-highest peak through stunning Karakoram scenery.",
    longDescription:
      "The K2 Base Camp trek is one of the most spectacular and challenging treks in the world. This epic journey takes you through the heart of the Karakoram Range, passing through some of the most dramatic mountain scenery on Earth. Walk alongside the massive Baltoro Glacier, surrounded by towering 8,000-meter peaks including K2, Broad Peak, and the Gasherbrum massif.",
    image: "/k2-mountain-base-camp-trek-pakistan-karakoram.jpg",
    gallery: [
      "/baltoro-glacier-pakistan-trekking.jpg",
      "/concordia-k2-view-pakistan-mountains.jpg",
      "/karakoram-range-sunset-pakistan.jpg",
      "/k2-base-camp-tents-mountaineering.jpg",
    ],
    duration: "18-21 Days",
    difficulty: "Challenging",
    groupSize: "4-12",
    location: "Baltoro Glacier, Karakoram",
    rating: 4.9,
    price: "From $2,500",
    highlights: [
      "Witness K2, the world's second-highest peak up close",
      "Trek the legendary Baltoro Glacier",
      "Camp at Concordia - the throne room of the mountain gods",
      "Experience authentic Pakistani hospitality",
      "Professional guides with decades of experience",
    ],
    included: [
      "All transportation from Skardu",
      "Experienced English-speaking guides",
      "All camping equipment",
      "Porters for carrying gear",
      "All meals during trek",
      "Permits and fees",
      "First aid and emergency equipment",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance (mandatory)",
      "Personal climbing gear",
      "Tips for guides and porters",
      "Meals in Islamabad/Skardu",
    ],
    itinerary: [
      {
        day: "Day 1-2",
        title: "Arrival in Islamabad",
        description: "Arrive in Islamabad, team briefing and gear check. Flight or drive to Skardu.",
      },
      {
        day: "Day 3",
        title: "Skardu to Askole",
        description: "Jeep drive through the stunning Shigar Valley to Askole, the last village before the wilderness.",
      },
      {
        day: "Day 4-5",
        title: "Askole to Paiju",
        description: "Begin the trek along the Braldu River to Korophon and continue to Paiju camp.",
      },
      {
        day: "Day 6-7",
        title: "Paiju to Khoburtse",
        description: "Cross the Baltoro Glacier and trek to Khoburtse with views of Paiju Peak and Uli Biaho.",
      },
      {
        day: "Day 8-9",
        title: "Khoburtse to Concordia",
        description: "Trek through Gore II and Broad Peak base camp to the magnificent Concordia.",
      },
      {
        day: "Day 10",
        title: "K2 Base Camp",
        description: "Day trip to K2 Base Camp with stunning views of K2's south face.",
      },
      {
        day: "Day 11-16",
        title: "Return Journey",
        description: "Trek back via the same route with rest days as needed.",
      },
      {
        day: "Day 17-18",
        title: "Askole to Skardu",
        description: "Final trek to Askole and jeep drive back to Skardu.",
      },
      {
        day: "Day 19-21",
        title: "Skardu to Islamabad",
        description: "Return to Islamabad with buffer days for weather delays.",
      },
    ],
    category: "trekking",
    featured: true,
  },
  {
    id: 2,
    slug: "rakaposhi-base-camp",
    title: "Rakaposhi Base Camp Trek",
    description: "Trek to the base of the stunning 7,788m peak with incredible views and glacier encounters.",
    longDescription:
      "The Rakaposhi Base Camp trek offers one of the most rewarding trekking experiences in Pakistan. This moderate trek takes you through lush green meadows, traditional villages, and stunning alpine scenery to the base of Rakaposhi - the 27th highest mountain in the world. The trek offers incredible views of the Diran Peak and the massive Rakaposhi Glacier.",
    image: "/rakaposhi-mountain-pakistan-hunza-valley-trek.jpg",
    gallery: [
      "/rakaposhi-glacier-pakistan-trekking.jpg",
      "/hunza-valley-green-meadows-pakistan.jpg",
      "/rakaposhi-peak-sunrise-pakistan.jpg",
      "/traditional-village-hunza-pakistan.jpg",
    ],
    duration: "7-9 Days",
    difficulty: "Moderate",
    groupSize: "4-15",
    location: "Hunza Valley",
    rating: 4.8,
    price: "From $1,200",
    highlights: [
      "Close-up views of Rakaposhi (7,788m)",
      "Trek through beautiful alpine meadows",
      "Experience local Hunza culture",
      "Stunning glacier views",
      "Perfect acclimatization trek",
    ],
    included: [
      "All transportation from Gilgit",
      "Experienced local guides",
      "Camping equipment",
      "All meals during trek",
      "Porter support",
      "Permits",
    ],
    notIncluded: ["International flights", "Travel insurance", "Personal gear", "Tips", "Meals in Gilgit/Hunza"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Hunza",
        description: "Drive from Gilgit to Minapin village, trek orientation.",
      },
      {
        day: "Day 2",
        title: "Minapin to Hapakun",
        description: "Begin trek through forest and meadows to first camp.",
      },
      { day: "Day 3", title: "Hapakun to Tagaphari", description: "Trek higher with stunning Rakaposhi views." },
      { day: "Day 4", title: "Base Camp Day", description: "Reach base camp, explore the glacier." },
      { day: "Day 5", title: "Exploration Day", description: "Optional glacier exploration or rest day." },
      { day: "Day 6-7", title: "Return Trek", description: "Descend back to Minapin." },
    ],
    category: "trekking",
    featured: false,
  },
  {
    id: 3,
    slug: "broad-peak-expedition",
    title: "Broad Peak Expedition",
    description: "Attempt the world's 12th highest peak in the mighty Karakoram range.",
    longDescription:
      "Broad Peak (8,051m) is one of the most accessible 8,000-meter peaks in the world and offers a genuine high-altitude mountaineering challenge. Known for its massive summit plateau, Broad Peak provides climbers with an extraordinary expedition experience in the heart of the Karakoram. Our expedition is led by experienced high-altitude guides with extensive 8,000m peak experience.",
    image: "/broad-peak-8000m-expedition-pakistan-karakoram.jpg",
    gallery: [
      "/broad-peak-summit-climb-pakistan.jpg",
      "/high-altitude-camp-karakoram-expedition.jpg",
      "/mountaineering-rope-team-pakistan-8000m.jpg",
      "/broad-peak-base-camp-expedition.jpg",
    ],
    duration: "45-60 Days",
    difficulty: "Expert",
    groupSize: "2-8",
    location: "Karakoram Range",
    rating: 5.0,
    price: "From $8,000",
    highlights: [
      "Summit an 8,000m peak",
      "World-class expedition support",
      "Experienced high-altitude guides",
      "Full logistics and permits",
      "Stunning Karakoram panoramas",
    ],
    included: [
      "All permits and royalty fees",
      "Liaison officer",
      "Base camp to summit logistics",
      "High-altitude porters",
      "All camps and equipment",
      "Oxygen (if required)",
      "Satellite communication",
    ],
    notIncluded: [
      "International flights",
      "Comprehensive expedition insurance",
      "Personal climbing equipment",
      "Tips for staff",
    ],
    itinerary: [
      { day: "Day 1-5", title: "Arrival & Preparation", description: "Islamabad briefings, gear check, permits." },
      { day: "Day 6-10", title: "Travel to Base Camp", description: "Fly to Skardu, jeep to Askole, trek to BC." },
      { day: "Day 11-20", title: "Acclimatization", description: "Establish camps, acclimatization rotations." },
      { day: "Day 21-40", title: "Climbing Phase", description: "Camp establishment and summit attempts." },
      { day: "Day 41-50", title: "Summit Window", description: "Weather-dependent summit push." },
      { day: "Day 51-60", title: "Descent & Return", description: "Descend, trek out, return to Islamabad." },
    ],
    category: "mountaineering",
    featured: true,
  },
  {
    id: 4,
    slug: "spantik-peak-expedition",
    title: "Spantik Peak Expedition",
    description: "A spectacular 7,027m peak offering stunning panoramic views of the Karakoram.",
    longDescription:
      "Spantik (Golden Peak) at 7,027m is one of the most beautiful and accessible 7,000-meter peaks in the Karakoram. Its elegant pyramid shape and stunning position offer 360-degree views of the surrounding giants including Rakaposhi, Diran, and the distant K2. This expedition is ideal for climbers looking to gain high-altitude experience before attempting an 8,000m peak.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    duration: "25-30 Days",
    difficulty: "Advanced",
    groupSize: "2-6",
    location: "Nagar Valley",
    rating: 4.9,
    price: "From $4,500",
    highlights: [
      "Climb a stunning 7,000m peak",
      "360-degree Karakoram views",
      "Perfect preparation for 8,000m peaks",
      "Technical but achievable climbing",
      "Expert high-altitude support",
    ],
    included: [
      "All permits",
      "Base camp to summit support",
      "All camps and equipment",
      "High-altitude porters",
      "Fixed ropes where needed",
      "Satellite phone",
    ],
    notIncluded: ["Flights", "Expedition insurance", "Personal climbing gear", "Tips"],
    itinerary: [
      { day: "Day 1-3", title: "Arrival & Prep", description: "Islamabad briefings and preparations." },
      { day: "Day 4-6", title: "To Base Camp", description: "Drive to Nagar, trek to base camp." },
      { day: "Day 7-15", title: "Acclimatization", description: "Establish camps, acclimatization climbs." },
      { day: "Day 16-25", title: "Summit Phase", description: "Summit attempts during weather windows." },
      { day: "Day 26-30", title: "Return", description: "Descend and return to Islamabad." },
    ],
    category: "mountaineering",
    featured: false,
  },
  {
    id: 5,
    slug: "silk-road-heritage-tour",
    title: "Silk Road Heritage Tour",
    description: "Follow the ancient trade routes through Hunza, Gilgit, and the legendary Khunjerab Pass.",
    longDescription:
      "Journey along one of the world's most famous ancient trade routes - the Silk Road. This cultural tour takes you through the stunning landscapes and historic sites of northern Pakistan, from the ancient forts of Baltit and Altit in Hunza to the border crossing at Khunjerab Pass (4,693m), the highest paved international border in the world. Experience the warm hospitality of mountain communities whose ancestors hosted traders from China, Persia, and Central Asia for centuries.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    duration: "10-14 Days",
    difficulty: "Easy",
    groupSize: "2-20",
    location: "Northern Pakistan",
    rating: 4.9,
    price: "From $1,800",
    highlights: [
      "Drive the legendary Karakoram Highway",
      "Visit ancient Baltit and Altit Forts",
      "Cross Khunjerab Pass (4,693m)",
      "Meet local communities",
      "Stunning mountain scenery",
    ],
    included: [
      "All transportation",
      "English-speaking guide",
      "Quality accommodations",
      "Daily breakfast",
      "All entrance fees",
      "Permits for restricted areas",
    ],
    notIncluded: ["International flights", "Travel insurance", "Lunches and dinners", "Personal expenses", "Tips"],
    itinerary: [
      { day: "Day 1-2", title: "Islamabad to Chilas", description: "Scenic drive along the Karakoram Highway." },
      { day: "Day 3-4", title: "Gilgit Exploration", description: "Explore Gilgit town and local bazaars." },
      { day: "Day 5-7", title: "Hunza Valley", description: "Visit Karimabad, Baltit Fort, Eagle's Nest viewpoint." },
      { day: "Day 8-9", title: "Upper Hunza", description: "Passu, Attabad Lake, Khunjerab Pass excursion." },
      { day: "Day 10-12", title: "Return Journey", description: "Leisurely drive back with stops at key sites." },
      { day: "Day 13-14", title: "Islamabad", description: "Return to Islamabad, departure." },
    ],
    category: "cultural",
    featured: true,
  },
  {
    id: 6,
    slug: "kalash-valley-experience",
    title: "Kalash Valley Experience",
    description: "Discover the unique Kalash people, their festivals, and ancient traditions.",
    longDescription:
      "The Kalash Valley is home to one of the world's most unique cultures - the Kalasha people. This ancient community has maintained their polytheistic religion, distinctive dress, and vibrant traditions for thousands of years. Our tour offers an authentic glimpse into their fascinating way of life, from colorful festivals to daily rituals. Visit during one of their famous festivals for an unforgettable cultural experience.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    duration: "5-7 Days",
    difficulty: "Easy",
    groupSize: "2-15",
    location: "Chitral",
    rating: 4.8,
    price: "From $1,100",
    highlights: [
      "Meet the unique Kalash people",
      "Experience living traditions",
      "Visit all three Kalash valleys",
      "Stunning mountain scenery",
      "Authentic cultural immersion",
    ],
    included: [
      "All transportation",
      "Local guide",
      "Guesthouse accommodations",
      "Breakfast",
      "Community interaction fees",
    ],
    notIncluded: ["Flights to Chitral", "Insurance", "Other meals", "Personal expenses", "Tips"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Chitral", description: "Arrive in Chitral, orientation and rest." },
      { day: "Day 2", title: "Bumburet Valley", description: "Visit the largest Kalash valley." },
      { day: "Day 3", title: "Rumbur Valley", description: "Explore Rumbur and local traditions." },
      { day: "Day 4", title: "Birir Valley", description: "Visit the most traditional valley." },
      { day: "Day 5-7", title: "Cultural Immersion", description: "Deeper cultural experiences and return." },
    ],
    category: "cultural",
    featured: false,
  },
  {
    id: 7,
    slug: "grand-pakistan-tour",
    title: "Grand Pakistan Tour",
    description: "The ultimate Pakistan experience covering major cities, mountains, deserts, and coastline.",
    longDescription:
      "Experience the incredible diversity of Pakistan in one comprehensive tour. From the ancient ruins of Mohenjo-daro to the mighty peaks of the Karakoram, from the bustling streets of Lahore to the serene beaches of the Makran Coast - this tour covers it all. Discover why Pakistan is being called the next great travel destination by those who have experienced its warmth, beauty, and hospitality.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    duration: "21-28 Days",
    difficulty: "Easy",
    groupSize: "2-20",
    location: "All Pakistan",
    rating: 5.0,
    price: "From $3,500",
    highlights: [
      "Complete Pakistan experience",
      "UNESCO World Heritage Sites",
      "Mountains, deserts, and beaches",
      "Rich cultural experiences",
      "Exceptional local guides",
    ],
    included: [
      "All transportation including domestic flights",
      "Quality accommodations throughout",
      "Daily breakfast, select meals",
      "All entrance fees",
      "Expert guides in each region",
      "All permits",
    ],
    notIncluded: [
      "International flights",
      "Comprehensive insurance",
      "Most lunches and dinners",
      "Personal expenses",
      "Tips",
    ],
    itinerary: [
      { day: "Day 1-4", title: "Lahore & Punjab", description: "Explore Mughal heritage and Lahore's culture." },
      { day: "Day 5-7", title: "Taxila & Islamabad", description: "Ancient Buddhist sites and modern capital." },
      { day: "Day 8-14", title: "Northern Mountains", description: "Hunza, Skardu, and Karakoram views." },
      { day: "Day 15-18", title: "Sindh", description: "Mohenjo-daro, Karachi, and historic sites." },
      { day: "Day 19-24", title: "Balochistan", description: "Quetta, Ziarat, and Makran Coast." },
      { day: "Day 25-28", title: "Return", description: "Return to Islamabad via Multan." },
    ],
    category: "full-pakistan",
    featured: true,
  },
  {
    id: 8,
    slug: "northern-wonders-tour",
    title: "Northern Wonders Tour",
    description: "Comprehensive tour of Hunza, Skardu, Fairy Meadows, and all major northern attractions.",
    longDescription:
      "Discover the magic of Pakistan's northern regions in this comprehensive tour covering all the major highlights. From the iconic Fairy Meadows with views of Nanga Parbat to the stunning Deosai Plains, from the apricot blossoms of Hunza to the crystal waters of Attabad Lake - experience the best of what the north has to offer. This tour is perfect for photographers, nature lovers, and anyone seeking the ultimate mountain experience.",
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    duration: "14-18 Days",
    difficulty: "Easy",
    groupSize: "2-20",
    location: "Northern Pakistan",
    rating: 4.9,
    price: "From $2,200",
    highlights: [
      "All major northern destinations",
      "Fairy Meadows and Nanga Parbat views",
      "Deosai National Park",
      "Hunza Valley complete experience",
      "Skardu and surrounding lakes",
    ],
    included: [
      "All ground transportation",
      "Quality accommodations",
      "Daily breakfast",
      "Experienced guide",
      "All permits and fees",
    ],
    notIncluded: ["Domestic flights", "Insurance", "Most meals", "Personal expenses", "Tips"],
    itinerary: [
      {
        day: "Day 1-3",
        title: "Islamabad to Fairy Meadows",
        description: "Drive to Raikot and trek to Fairy Meadows.",
      },
      { day: "Day 4-5", title: "Fairy Meadows", description: "Explore with Nanga Parbat base camp trek." },
      { day: "Day 6-8", title: "Hunza Valley", description: "Karimabad, forts, Passu, and Attabad Lake." },
      { day: "Day 9-11", title: "Skardu", description: "Drive to Skardu, explore Upper Kachura and Shigar." },
      { day: "Day 12-14", title: "Deosai", description: "Deosai Plains, Sheosar Lake, Satpara." },
      { day: "Day 15-18", title: "Return", description: "Return journey with buffer days." },
    ],
    category: "full-pakistan",
    featured: false,
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ginani-festival",
    title: "The Traditional 'Ginani' Festival",
    excerpt:
      "The Ginani festival is one of the most vibrant cultural celebrations in Gilgit-Baltistan. This traditional event brings communities together to celebrate their heritage through music, dance, and ancient rituals that have been passed down for generations.",
    content: `The Ginani festival is one of the most vibrant cultural celebrations in Gilgit-Baltistan. This traditional event brings communities together to celebrate their heritage through music, dance, and ancient rituals that have been passed down for generations.

## Origins and Significance

The Ginani festival marks the beginning of the wheat harvest season in the valleys of Gilgit-Baltistan. For centuries, communities have gathered to give thanks for the harvest and to celebrate the abundance of the land. The festival represents the deep connection between the people and their agricultural traditions.

## Traditional Celebrations

During Ginani, villages come alive with traditional music and dance. Men and women dress in colorful traditional attire, performing ancient dances that tell stories of their ancestors. The beat of drums echoes through the valleys as communities celebrate together.

### Key Traditions:
- Traditional polo matches in village grounds
- Folk songs passed down through generations
- Communal feasts featuring local delicacies
- Rituals blessing the harvest

## Experiencing Ginani Today

Visitors who time their trips to coincide with Ginani are treated to an authentic cultural experience that few tourists ever witness. The festival offers a unique window into the living traditions of northern Pakistan.

The warmth and hospitality of the local people during this time is extraordinary. Visitors are welcomed as guests of honor, invited to participate in dances, share meals, and experience the true spirit of community that defines life in these mountain valleys.`,
    image: "/placeholder.svg?height=800&width=1200",
    date: "July 13, 2024",
    category: "Culture",
    readTime: "5 min read",
    author: {
      name: "Karim Shah",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Cultural Guide",
    },
  },
  {
    id: 2,
    slug: "trekking-gilgit-baltistan",
    title: "Trekking Holidays in Gilgit-Baltistan",
    excerpt:
      "From the mighty glaciers of Baltoro to the serene alpine lakes of Skardu, Gilgit-Baltistan offers some of the world's most spectacular trekking experiences. Discover the best trails, seasons, and tips for your next adventure.",
    content: `Gilgit-Baltistan is a trekker's paradise, home to five of the world's fourteen 8,000-meter peaks and countless challenging trails through some of Earth's most dramatic landscapes.

## Why Trek in Gilgit-Baltistan?

The region offers unparalleled mountain scenery, from the towering peaks of K2 and Nanga Parbat to pristine alpine lakes and ancient glaciers. The diversity of terrain means there's something for everyone, from gentle walks to extreme expeditions.

## Best Treks for Every Level

### Beginner-Friendly
- **Rakaposhi View Point**: A day hike with stunning views
- **Passu Glacier**: Easy access glacier walk
- **Borith Lake**: Gentle lakeside trekking

### Intermediate
- **Rakaposhi Base Camp**: 5-7 days of beautiful trekking
- **Patundas Lake**: Alpine meadows and crystal-clear lakes
- **Hushe Valley**: Gateway to many peaks

### Advanced
- **K2 Base Camp**: The ultimate Karakoram experience
- **Snow Lake Trek**: One of the world's great treks
- **Gondogoro La**: High pass crossing with technical sections

## Best Season to Trek

The prime trekking season runs from June to September, with July and August offering the best weather for high-altitude treks. Spring (April-May) is beautiful for lower altitude cultural treks.

## Essential Tips

1. Acclimatize properly - never rush altitude
2. Hire local guides and porters
3. Bring layers - weather changes quickly
4. Respect local customs and traditions
5. Leave no trace - protect these pristine environments`,
    image: "/placeholder.svg?height=800&width=1200",
    date: "May 17, 2023",
    category: "Adventure",
    readTime: "8 min read",
    author: {
      name: "Ahmed Hussain",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Trek Leader",
    },
  },
  {
    id: 3,
    slug: "guide-hunza-valley",
    title: "A Complete Guide to Hunza Valley",
    excerpt:
      "Hunza Valley is often called heaven on earth, and for good reason. This comprehensive guide covers everything you need to know about visiting this stunning destination, from the best viewpoints to local cuisine.",
    content: `Hunza Valley is perhaps the most famous destination in northern Pakistan, and for good reason. Its combination of stunning natural beauty, rich history, and warm hospitality makes it a must-visit destination.

## Getting There

Hunza is accessible via the Karakoram Highway from Islamabad (15-18 hours by road) or by flying to Gilgit and driving 2 hours. The drive itself is spectacular, following the ancient Silk Road route.

## Best Time to Visit

- **Spring (April-May)**: Cherry and apricot blossoms
- **Summer (June-August)**: Perfect weather, all attractions open
- **Autumn (September-October)**: Golden colors, fewer crowds
- **Winter (November-March)**: Snow, limited access but stunning

## Must-See Attractions

### Baltit Fort
This 700-year-old fort was the residence of Hunza's rulers. Now a UNESCO-supported heritage site, it offers incredible views and a glimpse into royal life.

### Eagle's Nest
The most famous viewpoint in Hunza, offering 360-degree views of Rakaposhi, Diran, and Lady Finger peaks.

### Attabad Lake
This stunning turquoise lake was formed by a landslide in 2010 and is now a popular destination for boating.

### Passu Cones
Iconic jagged peaks that are a photographer's dream, especially at sunrise.

## Local Cuisine

Don't miss:
- Chapshuro (meat-filled pastry)
- Diram Fitti (buckwheat pancakes)
- Apricot oil and dried fruits
- Hunza tea (chai with butter)

## Accommodation

From budget guesthouses to luxury hotels, Hunza has options for every budget. Many hotels offer stunning mountain views.`,
    image: "/placeholder.svg?height=800&width=1200",
    date: "March 22, 2024",
    category: "Destinations",
    readTime: "10 min read",
    author: {
      name: "Fatima Khan",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Travel Writer",
    },
  },
  {
    id: 4,
    slug: "best-time-visit-pakistan",
    title: "Best Time to Visit Pakistan",
    excerpt:
      "Pakistan's diverse geography means different regions shine at different times of the year. Learn when to visit each region for the perfect weather and experiences, from spring blossoms to autumn colors.",
    content: `Pakistan's vast geographical diversity means there's no single "best time" to visit - it depends on where you want to go and what you want to experience.

## Northern Mountains (Gilgit-Baltistan, Chitral)

**Best Time**: April to October

- **April-May**: Spring blooms, moderate crowds
- **June-August**: Peak season, best for trekking
- **September-October**: Autumn colors, ideal weather
- **Winter**: Limited access, skiing opportunities

## Punjab & Islamabad

**Best Time**: October to March

The plains are pleasant during the cooler months. Visit Lahore's Mughal heritage sites when temperatures are comfortable.

## Sindh (Karachi, Mohenjo-daro)

**Best Time**: November to February

The coastal and desert regions are best visited during winter when temperatures are mild.

## Balochistan

**Best Time**: November to February

Quetta and the highlands are pleasant in winter, while the Makran Coast is comfortable year-round.

## Festival Calendar

- **Shandur Polo Festival**: July
- **Kalash Festivals**: Spring and autumn
- **Lok Mela**: October (Islamabad)
- **Basant**: February/March (Punjab)

## Weather Considerations

- Monsoon affects Punjab and Sindh July-September
- Northern areas can have road closures December-March
- Always check current conditions before traveling`,
    image: "/placeholder.svg?height=800&width=1200",
    date: "February 10, 2024",
    category: "Travel Tips",
    readTime: "6 min read",
    author: {
      name: "Hassan Ali",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Senior Tour Planner",
    },
  },
  {
    id: 5,
    slug: "photography-tips-mountains",
    title: "Photography Tips for Mountain Adventures",
    excerpt:
      "Capture the breathtaking beauty of Pakistan's mountains with these professional photography tips. From golden hour shots to capturing the Milky Way over K2, elevate your travel photography.",
    content: `Pakistan offers some of the most photogenic landscapes on Earth. Here's how to capture them at their best.

## Essential Gear

### Camera Equipment
- A weather-sealed DSLR or mirrorless camera
- Wide-angle lens (16-35mm) for landscapes
- Telephoto lens (70-200mm) for peaks
- Sturdy tripod (essential for low light)
- Extra batteries (cold drains them fast)

### Protection
- Weather-sealed camera bag
- Lens cleaning kit
- Rain covers
- Hand warmers (for you and batteries)

## Best Techniques

### Golden Hour Magic
The hour after sunrise and before sunset transforms the Karakoram peaks into gold. Plan your positions in advance and be ready.

### Blue Hour Mystery
The 30 minutes before sunrise and after sunset offer beautiful blue tones, perfect for atmospheric shots.

### Star Trails and Milky Way
Northern Pakistan has some of the darkest skies on Earth. The Milky Way over K2 or Nanga Parbat is an unforgettable image.

## Location Tips

### Hunza Valley
- Eagle's Nest for sunrise over Rakaposhi
- Duikar for the classic Hunza panorama
- Passu Cones at golden hour

### Fairy Meadows
- Camp location for Nanga Parbat shots
- Night sky photography
- Morning mist through the meadows

### Skardu
- Upper Kachura Lake reflections
- Deosai Plains wildlife
- Shigar Fort at sunset

## Ethical Considerations

Always ask permission before photographing people. Respect local customs and sacred sites. Leave no trace at photography locations.`,
    image: "/placeholder.svg?height=800&width=1200",
    date: "January 5, 2024",
    category: "Photography",
    readTime: "7 min read",
    author: {
      name: "Imran Malik",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Adventure Photographer",
    },
  },
  {
    id: 6,
    slug: "pakistani-cuisine-guide",
    title: "Traditional Pakistani Cuisine You Must Try",
    excerpt:
      "From aromatic biryanis to crispy chapshoro, Pakistani cuisine is a feast for the senses. Discover the must-try dishes and local specialties from different regions of Pakistan.",
    content: `Pakistani cuisine is rich, diverse, and absolutely delicious. Each region offers unique flavors and specialties that reflect local traditions and available ingredients.

## Northern Specialties

### Chapshoro (Gilgit-Baltistan)
A savory meat-filled pastry, similar to a calzone but with unique spicing. Best eaten fresh and hot.

### Diram Fitti (Hunza)
Buckwheat pancakes served with apricot oil - a traditional Hunza breakfast that's both healthy and delicious.

### Mantu (Gilgit)
Steamed dumplings with meat filling, topped with yogurt and tomato sauce. A Central Asian influence on local cuisine.

## Punjab Favorites

### Lahori Chargha
Whole chicken marinated in spices and deep-fried to crispy perfection. A Lahore specialty.

### Nihari
Slow-cooked meat stew traditionally eaten for breakfast. Rich, flavorful, and deeply satisfying.

### Halwa Puri
Weekend breakfast tradition - fluffy puris with sweet halwa and spicy chickpeas.

## Sindhi Delights

### Sindhi Biryani
Spicier and tangier than other biryanis, with potatoes and a distinctive sour note.

### Sai Bhaji
A healthy mixed vegetable dish with spinach and lentils - Sindh's comfort food.

## Street Food Must-Tries

- Gol Gappay (crispy spheres with spiced water)
- Bun Kebab (Pakistani burger)
- Samosas (everywhere, always delicious)
- Lassi (sweet or salty yogurt drink)

## Regional Drinks

- Noon Chai (pink salt tea) - Kashmir
- Doodh Patti (milk tea) - Punjab
- Sugarcane juice - everywhere in summer`,
    image: "/placeholder.svg?height=800&width=1200",
    date: "December 18, 2023",
    category: "Culture",
    readTime: "5 min read",
    author: {
      name: "Sadia Begum",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Food & Culture Expert",
    },
  },
]

// Helper functions
export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}

export function getToursByCategory(category: Tour["category"]): Tour[] {
  return tours.filter((tour) => tour.category === category)
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((tour) => tour.featured)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export function getRelatedTours(currentSlug: string, limit = 3): Tour[] {
  const current = getTourBySlug(currentSlug)
  if (!current) return tours.slice(0, limit)
  return tours.filter((tour) => tour.slug !== currentSlug && tour.category === current.category).slice(0, limit)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug)
  if (!current) return blogPosts.slice(0, limit)
  return blogPosts.filter((post) => post.slug !== currentSlug && post.category === current.category).slice(0, limit)
}
