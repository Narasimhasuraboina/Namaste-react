const resObj = [
    {
        "id": "paradise-secunderabad",
        "name": "Paradise Biryani",
        "cloudinaryImageId": "",
        "locality": "Secunderabad",
        "areaName": "Secunderabad",
        "costForTwo": "₹1400",
        "cuisines": [
            "Biryani",
            "Hyderabadi",
            "Mughlai"
        ],
        "avgRating": 4.1,
        "parentId": "paradise",
        "deliveryTime": "30-35 mins",
        "address": "Sarojini Devi Road, Ramgopalpet, Secunderabad, Hyderabad",
        "isOpen": true
    },
    {
        "id": "pista-house-kondapurr",
        "name": "Pista House",
        "cloudinaryImageId": "",
        "locality": "Kondapur",
        "areaName": "Kothaguda",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Bakery"
        ],
        "address": "Ground Floor, D. No. 2-36, Kothaguda X Roads, beside Apollo Hospital, Kondapur, Hyderabad",
        "avgRating": 4.4,
        "priceRange": "₹200–₹1200",
        "isOpen": true
    },
    {
        "id": "pista-house-kondapur",
        "name": "Pista House",
        "cloudinaryImageId": "",
        "locality": "Kondapur",
        "areaName": "Kothaguda",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Bakery"
        ],
        "address": "Ground Floor, D. No. 2-36, Kothaguda X Roads, beside Apollo Hospital, Kondapur, Hyderabad",
        "avgRating": 4.4,
        "priceRange": "₹200–₹1200",
        "isOpen": true
    },
    {
        id: "bawarchi-rtc",
        name: "Bawarchi Restaurant",
        cuisines: ["Hyderabadi", "Biryani", "Chinese", "Indian"],
        avgRating: 4.3,
        address:
            "RTC X Roads, Chikkadpally, Hyderabad",
        locality: "Chikkadpally"
    },
    {
        id: "bisi-bisi-jubilee",
        name: "Bisi Bisi",
        cuisines: ["South Indian", "Andhra", "Karnataka"],
        avgRating: 4.6,
        address:
            "Road No. 36, Jubilee Hills, Hyderabad",
        locality: "Jubilee Hills"
    },
    {
        id: "southern-spice-hitech",
        name: "Southern Spice",
        cuisines: ["South Indian", "Andhra", "Biryani"],
        avgRating: 4.6,
        address:
            "HITEC City Road, Jubilee Enclave, Hyderabad",
        locality: "HITEC City"
    },
    {
        id: "srikanya-somajiguda",
        name: "Srikanya Comfort Restaurant",
        cuisines: ["Andhra", "Seafood", "South Indian"],
        avgRating: 4.0,
        address:
            "Pothula Tower, Somajiguda, Hyderabad",
        locality: "Somajiguda"
    },
    {
        id: "palamuru-madhapur",
        name: "Palamuru Grill",
        cuisines: ["Telangana", "Andhra", "BBQ", "Biryani"],
        avgRating: 3.9,
        address:
            "100 Feet Road, Madhapur, Hyderabad",
        locality: "Madhapur"
    },
    {
        id: "chutneys-banjara",
        name: "Chutneys",
        cuisines: ["South Indian", "Vegetarian", "Breakfast"],
        avgRating: 4.1,
        address:
            "Shilpa Arcade, Road No. 3, Banjara Hills, Hyderabad",
        locality: "Banjara Hills"
    },
    {
        id: "rayalaseema-ameerpet",
        name: "Rayalaseema Ruchulu",
        cuisines: ["Andhra", "Rayalaseema", "Biryani"],
        avgRating: 4.0,
        address:
            "Above Tanisha Hotels, Ameerpet, Hyderabad",
        locality: "Ameerpet"
    },
    {
        id: "malnadu-kompally",
        name: "Malnadu Kitchen",
        cuisines: ["Telangana", "Andhra", "Indian"],
        avgRating: 4.5,
        address:
            "Hoysala Inn, Kompally Road, Hyderabad",
        locality: "Kompally"
    },
    {
        id: "namastae-madhapur",
        name: "Namastae - The Indian Kitchen",
        cuisines: ["Indian", "South Indian", "North Indian"],
        avgRating: 4.8,
        address:
            "100 Feet Road, Ayyappa Society, Madhapur, Hyderabad",
        locality: "Madhapur"
    },
    {
        id: "ohris-hyderabad",
        name: "Ohri's",
        cuisines: ["Indian", "Multi-cuisine"],
        address: "Hyderabad, Telangana",
        locality: "Hyderabad"
    },
    {
        id: "rest-011",
        name: "Cafe Bahar",
        cuisines: ["Hyderabadi", "Mughlai", "Biryani"]
    },
    {
        id: "rest-012",
        name: "Hotel Shadab",
        cuisines: ["Hyderabadi", "Mughlai", "Biryani"]
    },
    {
        id: "rest-013",
        name: "Jewel Of Nizam",
        cuisines: ["Hyderabadi", "Mughlai", "Indian"]
    },
    {
        id: "rest-014",
        name: "Bidri",
        cuisines: ["Indian", "Hyderabadi", "Awadhi"]
    },
    {
        id: "rest-015",
        name: "Dakshin",
        cuisines: ["South Indian", "Indian"]
    },
    {
        id: "rest-016",
        name: "Aish - The Park",
        cuisines: ["Hyderabadi", "Andhra", "Indian"]
    },
    {
        id: "rest-017",
        name: "Mekong",
        cuisines: ["Thai", "Chinese", "Asian"]
    },
    {
        id: "rest-018",
        name: "Mazzo",
        cuisines: ["Italian", "Indian"]
    },
    {
        id: "rest-019",
        name: "Exotica",
        cuisines: ["North Indian", "Asian", "Thai"]
    },
    {
        id: "rest-020",
        name: "Farzi Cafe",
        cuisines: ["Modern Indian", "Fusion"]
    },
    {
        id: "rest-021",
        name: "Chicha's",
        cuisines: ["Hyderabadi", "Andhra", "Indian"]
    },
    {
        id: "rest-022",
        name: "Spicy Venue",
        cuisines: ["Andhra", "South Indian"]
    },
    {
        id: "rest-023",
        name: "Hotel Nayaab",
        cuisines: ["Hyderabadi", "Mughlai"]
    },
    {
        id: "rest-024",
        name: "Taj Mahal Hotel",
        cuisines: ["South Indian", "North Indian"]
    },
    {
        id: "rest-025",
        name: "Dum Pukht Begum's",
        cuisines: ["Awadhi", "Indian"]
    },
    {
        id: "rest-026",
        name: "Tuscany",
        cuisines: ["Italian", "European"]
    },
    {
        id: "rest-027",
        name: "Feu Desserts Bar & Kitchen",
        cuisines: ["Desserts", "European", "Cafe"]
    },
    {
        id: "rest-028",
        name: "Telugu Medium Kitchen",
        cuisines: ["Telugu", "Andhra", "Indian"]
    },
    {
        id: "rest-029",
        name: "Broadway The Brewery",
        cuisines: ["Continental", "American", "Indian"]
    },
    {
        id: "rest-030",
        name: "Seven Sisters",
        cuisines: ["Northeastern Indian", "Asian"]
    },
    {
        id: "rest-031",
        name: "Minyu",
        cuisines: ["Asian", "Chinese"]
    },
    {
        id: "rest-032",
        name: "Aaromalé Café",
        cuisines: ["Cafe", "Continental"]
    },
    {
        id: "rest-033",
        name: "Last House Coffee",
        cuisines: ["Cafe", "Coffee", "Desserts"]
    },
    {
        id: "rest-034",
        name: "Levant Turkish Restaurant",
        cuisines: ["Turkish", "Mediterranean"]
    },
    {
        id: "rest-035",
        name: "Gaurang's Kitchen",
        cuisines: ["Gujarati", "Indian", "Vegetarian"]
    },
    {
        id: "rest-036",
        name: "Kortyard",
        cuisines: ["Indian", "Continental"]
    },
    {
        id: "rest-037",
        name: "Gol Bungalow",
        cuisines: ["Indian", "Contemporary"]
    },
    {
        id: "rest-038",
        name: "Hole in the Wall Cafe",
        cuisines: ["Cafe", "Continental", "Breakfast"]
    },
    {
        id: "rest-039",
        name: "Chubby Cho",
        cuisines: ["Asian", "Chinese"]
    },
    {
        id: "rest-040",
        name: "Aazebo",
        cuisines: ["Indian", "Hyderabadi"]
    },
    {
        id: "rest-041",
        name: "Krishnapatnam",
        cuisines: ["Andhra", "South Indian"]
    },
    {
        id: "rest-042",
        name: "Subbayya Gari Hotel",
        cuisines: ["Andhra", "Vegetarian", "South Indian"]
    },
    {
        id: "rest-043",
        name: "Bahn Mi Babe",
        cuisines: ["Vietnamese", "Asian"]
    },
    {
        id: "rest-044",
        name: "Terrai - Neo Telangana Kitchen & Bar",
        cuisines: ["Telangana", "Indian"]
    },
    {
        id: "rest-045",
        name: "Tara Moroccan Kitchen",
        cuisines: ["Moroccan", "Mediterranean"]
    },
    {
        id: "rest-046",
        name: "Osaka",
        cuisines: ["Japanese", "Asian"]
    },
    {
        id: "rest-047",
        name: "Ru",
        cuisines: ["Asian", "Contemporary"]
    },
    {
        id: "rest-048",
        name: "Aidu",
        cuisines: ["South Indian", "Telugu"]
    },
    {
        id: "rest-049",
        name: "Cream Centre",
        cuisines: ["Vegetarian", "Indian", "Continental"]
    },
    {
        id: "rest-050",
        name: "Asli",
        cuisines: ["Modern Indian", "Indian"]
    },
    {
        id: "rest-051",
        name: "Sa.Ma",
        cuisines: ["Indian", "Contemporary"]
    },
    {
        id: "rest-052",
        name: "Oye Kake",
        cuisines: ["Punjabi", "North Indian"]
    },
    {
        id: "rest-053",
        name: "KOKO",
        cuisines: ["Asian", "Chinese", "Japanese"]
    },
    {
        id: "rest-054",
        name: "Kebapci",
        cuisines: ["Turkish", "Mediterranean"]
    },
    {
        id: "rest-055",
        name: "Babylon 2.0",
        cuisines: ["Indian", "Continental"]
    },
    {
        id: "rest-056",
        name: "Ming's Court",
        cuisines: ["Chinese", "Asian"]
    },
    {
        id: "rest-057",
        name: "Okra",
        cuisines: ["Continental", "International"]
    },
    {
        id: "rest-058",
        name: "The Fisherman's Wharf",
        cuisines: ["Goan", "Seafood", "Continental"]
    },
    {
        id: "rest-059",
        name: "Prego",
        cuisines: ["Italian", "Mediterranean"]
    },
    {
        id: "rest-060",
        name: "Zega",
        cuisines: ["Asian", "Italian", "International"]
    },
    {
        id: "rest-061",
        name: "Adaa",
        cuisines: ["Hyderabadi", "Mughlai"]
    },
    {
        id: "rest-062",
        name: "Kebabs & Kurries",
        cuisines: ["North Indian", "Mughlai", "Kebabs"]
    },
    {
        id: "rest-063",
        name: "Celeste",
        cuisines: ["Italian", "European"]
    },
    {
        id: "rest-064",
        name: "N Grill",
        cuisines: ["Grill", "Continental"]
    },
    {
        id: "rest-065",
        name: "N Asian",
        cuisines: ["Asian", "Japanese", "Chinese"]
    },
    {
        id: "rest-066",
        name: "Shoyu",
        cuisines: ["Japanese", "Asian"]
    },
    {
        id: "rest-067",
        name: "AN Restaurants",
        cuisines: ["Indian", "Multi-cuisine"]
    },
    {
        id: "rest-068",
        name: "Sanctuary",
        cuisines: ["Italian", "Continental"]
    },
    {
        id: "rest-069",
        name: "The Himalayan Cafe",
        cuisines: ["Tibetan", "Chinese", "Asian"]
    },
    {
        id: "rest-070",
        name: "Sagar Papaji Ka Dhaba",
        cuisines: ["North Indian", "Punjabi"]
    },
    {
        id: "rest-071",
        name: "Taj Falaknuma Palace Dining",
        cuisines: ["Hyderabadi", "Indian", "Fine Dining"]
    },
    {
        id: "rest-072",
        name: "Parampara - Flavours Of India",
        cuisines: ["Indian", "North Indian"]
    },
    {
        id: "rest-073",
        name: "Lé Vantage Cafe Bar",
        cuisines: ["Cafe", "Continental"]
    },
    {
        id: "rest-074",
        name: "Aidu Kitchen",
        cuisines: ["South Indian", "Indian"]
    },
    {
        id: "rest-075",
        name: "Roobaroo Cafe",
        cuisines: ["Fusion", "Vegetarian", "Cafe"]
    },
    {
        id: "rest-076",
        name: "Cream Centre Begumpet",
        cuisines: ["Vegetarian", "Indian", "Continental"]
    },
    {
        id: "rest-077",
        name: "Illu The Restaurant",
        cuisines: ["Indian", "Multi-cuisine"]
    },
    {
        id: "rest-078",
        name: "Guntur Kaaram Restaurant",
        cuisines: ["Andhra", "South Indian", "Seafood"]
    },
    {
        id: "rest-079",
        name: "Native Bar & Kitchen",
        cuisines: ["Indian", "Barbecue", "Continental"]
    },
    {
        id: "rest-080",
        name: "Ko Ko Kai",
        cuisines: ["Asian", "Japanese", "Fusion"]
    },
    {
        id: "rest-081",
        name: "ASF - Lava Stone Buffet Restaurant",
        cuisines: ["Buffet", "Continental", "Asian"]
    },
    {
        id: "rest-082",
        name: "Narthanasala Restaurant",
        cuisines: ["Chinese", "Korean", "Asian"]
    },
    {
        id: "rest-083",
        name: "Little Italy Hi-Tech City",
        cuisines: ["Italian", "Vegetarian", "Pizza"]
    },
    {
        id: "rest-084",
        name: "Makobrew",
        cuisines: ["Cafe", "Vegetarian", "Coffee"]
    },
    {
        id: "rest-085",
        name: "Subhan Bakery",
        cuisines: ["Bakery", "Desserts"]
    },
    {
        id: "rest-086",
        name: "Hotel Nayaab Charminar",
        cuisines: ["Hyderabadi", "Mughlai"]
    },
    {
        id: "rest-087",
        name: "Aiwan-e-Khas",
        cuisines: ["Indian", "Mughlai"]
    },
    {
        id: "rest-088",
        name: "Lemerian Workin Cafe",
        cuisines: ["Cafe", "Continental"]
    },
    {
        id: "rest-089",
        name: "The Bun-Wigi",
        cuisines: ["Cafe", "Burgers", "Continental"]
    },
    {
        id: "rest-090",
        name: "Auspice Restaurant",
        cuisines: ["Chinese", "Asian"]
    },
    {
        id: "rest-091",
        name: "Elite Arabia Restaurant",
        cuisines: ["Mughlai", "Chinese", "Indian"]
    },
    {
        id: "rest-092",
        name: "Taj Krishna Dining",
        cuisines: ["Indian", "International"]
    },
    {
        id: "rest-093",
        name: "The Spicy Venue",
        cuisines: ["Andhra", "Indian"]
    },
    {
        id: "rest-094",
        name: "Oxymorons",
        cuisines: ["Contemporary", "Fusion"]
    },
    {
        id: "rest-095",
        name: "LOQA",
        cuisines: ["Contemporary", "Fusion"]
    },
    {
        id: "rest-096",
        name: "Tuya",
        cuisines: ["South Indian", "Contemporary"]
    },
    {
        id: "rest-097",
        name: "Underdoggs",
        cuisines: ["American", "Bar Food", "Continental"]
    },
    {
        id: "rest-098",
        name: "Akina",
        cuisines: ["Asian", "Japanese"]
    },
    {
        id: "rest-099",
        name: "Theta Theta Telugu",
        cuisines: ["Telugu", "Andhra", "Telangana"]
    },
    {
        id: "rest-100",
        name: "Kadamba",
        cuisines: ["Indian", "Contemporary"]
    },
    {
        id: "rest-101",
        name: "Tasting Room",
        cuisines: ["European", "Fusion"]
    },
    {
        id: "rest-102",
        name: "Minerva Coffee Shop",
        cuisines: ["South Indian", "Breakfast", "Vegetarian"]
    },
    {
        id: "rest-103",
        name: "Hotel Swagath Grand",
        cuisines: ["Indian", "Chinese", "Biryani"]
    },
    {
        id: "rest-104",
        name: "Kritunga Restaurant",
        cuisines: ["Andhra", "Rayalaseema", "Indian"]
    },
    {
        id: "rest-105",
        name: "Pallavi Restaurant",
        cuisines: ["Indian", "South Indian"]
    },
    {
        id: "rest-106",
        name: "Bikanervala",
        cuisines: ["North Indian", "Sweets", "Vegetarian"]
    },
    {
        id: "rest-107",
        name: "Haldiram's",
        cuisines: ["North Indian", "Snacks", "Sweets"]
    },
    {
        id: "rest-108",
        name: "Chai Point",
        cuisines: ["Tea", "Snacks", "Cafe"]
    },
    {
        id: "rest-109",
        name: "Third Wave Coffee",
        cuisines: ["Cafe", "Coffee", "Desserts"]
    },
    {
        id: "rest-110",
        name: "Theobroma",
        cuisines: ["Bakery", "Desserts", "Cafe"]
    }
];
export default resObj;