export type City = {
  slug: string;
  name: string;
  state: string;
  stateLong: string;
  population: number;
  blurb: string;
  suburbs: string[];
};

export const cities: City[] = [
  {
    slug: "sydney",
    name: "Sydney",
    state: "NSW",
    stateLong: "New South Wales",
    population: 5312000,
    blurb:
      "Sydney is Australia's largest city and commercial engine, home to finance, construction, hospitality, and a sprawling trades sector across the metro and outer suburbs. Businesses from Parramatta to Bondi compete hard for local search traffic, and a generic website simply will not cut through.",
    suburbs: ["Parramatta", "Bondi", "Chatswood", "Liverpool", "Penrith", "Cronulla", "Manly", "Blacktown"],
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    state: "VIC",
    stateLong: "Victoria",
    population: 5078000,
    blurb:
      "Melbourne is a dense, design-conscious city where every suburb has its own character and every tradie, cafe, and retail shop is fighting for online visibility. Construction, hospitality, and professional services dominate the market, and cookie-cutter websites get ignored.",
    suburbs: ["Footscray", "Richmond", "Dandenong", "Essendon", "Box Hill", "St Kilda", "Fitzroy", "Frankston"],
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    state: "QLD",
    stateLong: "Queensland",
    population: 2582000,
    blurb:
      "Brisbane is a fast-growing city with a booming construction sector, strong trade services, and a business culture that rewards local credibility. From Fortitude Valley to Indooroopilly, buyers increasingly search online first before picking up the phone.",
    suburbs: ["Fortitude Valley", "Indooroopilly", "Chermside", "Carindale", "Toowong", "Springwood", "Ipswich", "Redcliffe"],
  },
  {
    slug: "perth",
    name: "Perth",
    state: "WA",
    stateLong: "Western Australia",
    population: 2192000,
    blurb:
      "Perth is a resource-driven, trade-heavy city where mining services, construction, and home improvement businesses make up a huge share of the local economy. Suburbs like Joondalup and Rockingham are packed with competitive service businesses that need a site that actually wins work.",
    suburbs: ["Joondalup", "Rockingham", "Fremantle", "Subiaco", "Midland", "Mandurah", "Baldivis", "Armadale"],
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    state: "SA",
    stateLong: "South Australia",
    population: 1402000,
    blurb:
      "Adelaide is a compact, relationship-driven city where local reputation matters enormously and businesses that look credible online win disproportionate market share. From Norwood to Glenelg, the city rewards trades and services that invest in a professional web presence.",
    suburbs: ["Norwood", "Glenelg", "Marion", "Elizabeth", "Modbury", "Prospect", "Unley", "Salisbury"],
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    state: "QLD",
    stateLong: "Queensland",
    population: 679000,
    blurb:
      "The Gold Coast is a high-energy, tourism-and-trades market where businesses in construction, hospitality, and lifestyle services compete intensely for both local and visitor traffic. Suburbs like Surfers Paradise and Burleigh Heads are dense with small businesses that need a site that converts.",
    suburbs: ["Surfers Paradise", "Burleigh Heads", "Broadbeach", "Southport", "Coolangatta", "Robina", "Hope Island", "Nerang"],
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    state: "NSW",
    stateLong: "New South Wales",
    population: 340000,
    blurb:
      "Newcastle is a post-industrial city reinventing itself through construction, health services, and a growing small-business economy. From Hamilton to Charlestown, local trades and services are competing for the same pool of customers, and your website is your first impression.",
    suburbs: ["Hamilton", "Charlestown", "Wallsend", "Maitland", "Jesmond", "Merewether", "Broadmeadow", "Cardiff"],
  },
  {
    slug: "canberra",
    name: "Canberra",
    state: "ACT",
    stateLong: "Australian Capital Territory",
    population: 456000,
    blurb:
      "Canberra is a highly educated, government-adjacent city where professional presentation counts for a lot and businesses in consulting, construction, and services need a site that reflects the quality of their work. Belconnen and Tuggeranong are full of local operators competing for the same clients.",
    suburbs: ["Belconnen", "Tuggeranong", "Woden", "Gungahlin", "Queanbeyan", "Manuka", "Kingston", "Fyshwick"],
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    state: "QLD",
    stateLong: "Queensland",
    population: 380000,
    blurb:
      "The Sunshine Coast is a lifestyle-driven market where tourism, trades, and small business are the backbone of the local economy. From Noosa to Caloundra, business owners are increasingly savvy about online presence and expect their website to do real work.",
    suburbs: ["Noosa", "Caloundra", "Maroochydore", "Mooloolaba", "Buderim", "Nambour", "Kawana", "Coolum"],
  },
  {
    slug: "wollongong",
    name: "Wollongong",
    state: "NSW",
    stateLong: "New South Wales",
    population: 319000,
    blurb:
      "Wollongong is a working-class industrial city with a strong trades sector and a growing professional services economy. Businesses from Dapto to Thirroul are competing for local customers who search online before calling, making a high-quality website a genuine competitive advantage.",
    suburbs: ["Dapto", "Thirroul", "Shellharbour", "Fairy Meadow", "Corrimal", "Port Kembla", "Figtree", "Unanderra"],
  },
  {
    slug: "hobart",
    name: "Hobart",
    state: "TAS",
    stateLong: "Tasmania",
    population: 240000,
    blurb:
      "Hobart is a small but fiercely competitive market where tourism, trades, and retail businesses rely heavily on local search to drive bookings and enquiries. Sandy Bay to Glenorchy businesses that look professional online consistently outperform those that do not.",
    suburbs: ["Sandy Bay", "Glenorchy", "Kingston", "Moonah", "New Town", "Lindisfarne", "Rosny Park", "Bellerive"],
  },
  {
    slug: "geelong",
    name: "Geelong",
    state: "VIC",
    stateLong: "Victoria",
    population: 274000,
    blurb:
      "Geelong is Victoria's second-largest city with a diverse economy spanning manufacturing, health, construction, and retail. From Torquay to Corio, local businesses are increasingly reliant on their online presence to win customers before the competition does.",
    suburbs: ["Torquay", "Ocean Grove", "Corio", "Waurn Ponds", "Newtown", "Lara", "Belmont", "Norlane"],
  },
  {
    slug: "townsville",
    name: "Townsville",
    state: "QLD",
    stateLong: "Queensland",
    population: 231000,
    blurb:
      "Townsville is North Queensland's largest city with a strong economy built around defence, mining services, and construction trades. Businesses in Kirwan and Thuringowa are competing for a relatively concentrated local customer base, and a standout website makes a real difference.",
    suburbs: ["Kirwan", "Thuringowa", "Mundingburra", "Hermit Park", "Pimlico", "Annandale", "Douglas", "Mount Louisa"],
  },
  {
    slug: "cairns",
    name: "Cairns",
    state: "QLD",
    stateLong: "Queensland",
    population: 161000,
    blurb:
      "Cairns is a tourism-heavy city where hospitality, trades, and tour operators compete for both local and visitor dollars. From Smithfield to Edge Hill, businesses that look professional online consistently win the enquiry over those that do not.",
    suburbs: ["Smithfield", "Edge Hill", "Gordonvale", "Trinity Beach", "Redlynch", "Bentley Park", "Westcourt", "Manunda"],
  },
  {
    slug: "darwin",
    name: "Darwin",
    state: "NT",
    stateLong: "Northern Territory",
    population: 148000,
    blurb:
      "Darwin is a small, intensely practical market dominated by government, construction, and mining services. In a city where word of mouth still carries weight, a professional website legitimises your business and converts referrals who go online to check you out first.",
    suburbs: ["Palmerston", "Casuarina", "Nightcliff", "Fannie Bay", "Stuart Park", "Millner", "Karama", "Leanyer"],
  },
  {
    slug: "toowoomba",
    name: "Toowoomba",
    state: "QLD",
    stateLong: "Queensland",
    population: 171000,
    blurb:
      "Toowoomba is Queensland's largest inland city with a strong agricultural, construction, and retail economy. Businesses in Highfields and Wilsonton are competing for local customers who increasingly research online before making a call.",
    suburbs: ["Highfields", "Wilsonton", "Newtown", "Rangeville", "Harristown", "Middle Ridge", "Darling Heights", "Kearneys Spring"],
  },
  {
    slug: "ballarat",
    name: "Ballarat",
    state: "VIC",
    stateLong: "Victoria",
    population: 113000,
    blurb:
      "Ballarat is a regional Victorian city with a proud trades tradition and a growing service economy anchored by health, education, and construction. Local businesses from Wendouree to Alfredton benefit enormously from a website that ranks and converts.",
    suburbs: ["Wendouree", "Alfredton", "Sebastopol", "Mount Clear", "Delacombe", "Brown Hill", "Ballarat East", "Buninyong"],
  },
  {
    slug: "bendigo",
    name: "Bendigo",
    state: "VIC",
    stateLong: "Victoria",
    population: 121000,
    blurb:
      "Bendigo is a thriving regional city with a competitive trades and services market where businesses in Strathdale and Kangaroo Flat rely on local search to keep the phone ringing. A great website is the difference between being found and being invisible.",
    suburbs: ["Strathdale", "Kangaroo Flat", "White Hills", "Eaglehawk", "Flora Hill", "Golden Square", "Epsom", "California Gully"],
  },
  {
    slug: "launceston",
    name: "Launceston",
    state: "TAS",
    stateLong: "Tasmania",
    population: 84000,
    blurb:
      "Launceston is Tasmania's second city with a tight-knit business community spanning trades, agriculture, and retail. In a market this size, looking professional online is one of the fastest ways to separate your business from the competition.",
    suburbs: ["Kings Meadows", "Newnham", "Prospect", "South Launceston", "Ravenswood", "Riverside", "Invermay", "Youngtown"],
  },
  {
    slug: "mackay",
    name: "Mackay",
    state: "QLD",
    stateLong: "Queensland",
    population: 125000,
    blurb:
      "Mackay is a mining and agriculture hub where construction, mechanical, and trade services businesses are the backbone of the local economy. Businesses across Andergrove and Mount Pleasant compete for a loyal but price-conscious local customer base.",
    suburbs: ["Andergrove", "Mount Pleasant", "North Mackay", "Sarina", "Beaconsfield", "Eimeo", "Blacks Beach", "Rural View"],
  },
  {
    slug: "rockhampton",
    name: "Rockhampton",
    state: "QLD",
    stateLong: "Queensland",
    population: 84000,
    blurb:
      "Rockhampton is central Queensland's commercial hub with a beef, mining, and construction-driven economy where trades businesses compete hard for local work. Businesses in Norman Gardens and Gracemere that invest in a proper web presence consistently win more enquiries.",
    suburbs: ["Norman Gardens", "Gracemere", "Park Avenue", "Kawana", "Allenstown", "Berserker", "Wandal", "Frenchville"],
  },
  {
    slug: "bunbury",
    name: "Bunbury",
    state: "WA",
    stateLong: "Western Australia",
    population: 80000,
    blurb:
      "Bunbury is WA's third-largest city with a strong industrial, agricultural, and trades economy. Local businesses from Australind to Dalyellup are increasingly competing online, and a professional website is one of the most cost-effective tools they have.",
    suburbs: ["Australind", "Dalyellup", "Eaton", "Withers", "College Grove", "Carey Park", "Glen Iris", "South Bunbury"],
  },
  {
    slug: "bundaberg",
    name: "Bundaberg",
    state: "QLD",
    stateLong: "Queensland",
    population: 100000,
    blurb:
      "Bundaberg is a regional Queensland city driven by agriculture, sugar, and a strong local trades sector. Businesses across Kepnock and Avenell Heights that look professional online consistently outcompete those relying on word of mouth alone.",
    suburbs: ["Kepnock", "Avenell Heights", "Norville", "Avoca", "Svensson Heights", "Millbank", "Kalkie", "Sharon"],
  },
  {
    slug: "hervey-bay",
    name: "Hervey Bay",
    state: "QLD",
    stateLong: "Queensland",
    population: 57000,
    blurb:
      "Hervey Bay is a fast-growing coastal city with a strong retiree population and a service economy built around tourism, health, and home services. In a market this size, a well-designed website that ranks locally can transform a small business.",
    suburbs: ["Urangan", "Torquay", "Scarness", "Pialba", "Eli Waters", "Point Vernon", "Kawungan", "Dundowran"],
  },
  {
    slug: "wagga-wagga",
    name: "Wagga Wagga",
    state: "NSW",
    stateLong: "New South Wales",
    population: 68000,
    blurb:
      "Wagga Wagga is the Riverina's commercial capital with a diverse economy spanning agriculture, defence, health, and construction. Local businesses from Kooringal to Estella increasingly rely on local search to win customers who could easily choose someone from out of town.",
    suburbs: ["Kooringal", "Estella", "Turvey Park", "Lake Albert", "Tolland", "Bourkelands", "Lloyd", "Tatton"],
  },
  {
    slug: "coffs-harbour",
    name: "Coffs Harbour",
    state: "NSW",
    stateLong: "New South Wales",
    population: 80000,
    blurb:
      "Coffs Harbour is a Mid North Coast hub with a strong construction, tourism, and agricultural economy. Businesses in Sawtell and Woolgoolga compete for a loyal but limited local customer base, and being found online is no longer optional.",
    suburbs: ["Sawtell", "Woolgoolga", "Toormina", "Park Beach", "Moonee Beach", "Korora", "Bonville", "Urunga"],
  },
  {
    slug: "gladstone",
    name: "Gladstone",
    state: "QLD",
    stateLong: "Queensland",
    population: 67000,
    blurb:
      "Gladstone is a heavy-industry and port city where industrial services, construction, and trades businesses dominate the economy. Businesses in Kin Kora and Boyne Island that back up their reputation with a professional website consistently win more commercial work.",
    suburbs: ["Kin Kora", "Boyne Island", "Tannum Sands", "New Auckland", "Barney Point", "Clinton", "Callemondah", "West Gladstone"],
  },
  {
    slug: "mildura",
    name: "Mildura",
    state: "VIC",
    stateLong: "Victoria",
    population: 57000,
    blurb:
      "Mildura is a major inland city at the heart of the Murray-Darling basin with a strong agricultural, hospitality, and trades economy. Businesses from Irymple to Red Cliffs serve a wide regional catchment, and a well-ranked website extends their reach significantly.",
    suburbs: ["Irymple", "Red Cliffs", "Merbein", "Nichols Point", "Cardross", "Buronga", "Wentworth", "Gol Gol"],
  },
  {
    slug: "shepparton",
    name: "Shepparton",
    state: "VIC",
    stateLong: "Victoria",
    population: 66000,
    blurb:
      "Shepparton is the Goulburn Valley's commercial hub with a large agricultural processing, retail, and trades sector. Local businesses from Kialla to Mooroopna rely on local search to reach customers across the wider region.",
    suburbs: ["Kialla", "Mooroopna", "Tatura", "Nagambie", "Tongala", "Cobram", "Echuca", "Numurkah"],
  },
  {
    slug: "port-macquarie",
    name: "Port Macquarie",
    state: "NSW",
    stateLong: "New South Wales",
    population: 52000,
    blurb:
      "Port Macquarie is a popular Mid North Coast city where tourism, retirement living, and construction trades dominate the economy. Businesses across Wauchope and Lake Cathie that invest in a proper website capture both local and visiting customers.",
    suburbs: ["Wauchope", "Lake Cathie", "Thrumster", "Bonny Hills", "Telegraph Point", "Laurieton", "Kendall", "Kew"],
  },
  {
    slug: "tamworth",
    name: "Tamworth",
    state: "NSW",
    stateLong: "New South Wales",
    population: 43000,
    blurb:
      "Tamworth is the New England region's commercial capital with a strong agricultural, services, and trades economy that draws customers from across a wide rural catchment. A website that ranks well locally makes a genuine impact on revenue for businesses here.",
    suburbs: ["Westdale", "Hillvue", "Moore Creek", "Oxley Vale", "Kootingal", "Manilla", "Quirindi", "Narrabri"],
  },
  {
    slug: "orange",
    name: "Orange",
    state: "NSW",
    stateLong: "New South Wales",
    population: 43000,
    blurb:
      "Orange is a Central Tablelands city with a growing wine, agriculture, and services economy where local businesses compete for a tight but loyal regional customer base. A professional website that ranks in local search is one of the best investments a business here can make.",
    suburbs: ["Canobolas", "Lucknow", "Spring Hill", "Bletchington", "Molong", "Millthorpe", "Cargo", "Cudal"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
