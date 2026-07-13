import type { Product, Review } from "@/lib/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Mushroom Biryani",
    slug: "classic-mushroom-biryani",
    description: "Our signature biryani with fresh button mushrooms, aromatic basmati rice, and hand-ground spices.",
    longDescription:
      "Experience the magic of our Classic Mushroom Biryani — a symphony of perfectly cooked basmati rice layered with succulent button mushrooms marinated in a blend of 14 hand-ground spices. Slow-cooked on dum (steam) to lock in flavors, each grain tells a story of tradition. Topped with crispy fried onions, fresh coriander, and a dollop of homemade raita. Perfect for a hearty lunch or dinner.",
    price: "149",
    originalPrice: "199",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    ],
    rating: "4.8",
    reviewsCount: 234,
    isFeatured: true,
    inStock: true,
    spiceLevel: 2,
    portionSize: "Regular",
    preparationTime: "25 min",
    tags: ["bestseller", "vegetarian", "signature"],
  },
  {
    id: 2,
    name: "Donne Biryani",
    slug: "donne-biryani",
    description: "North Karnataka style Donne Biryani — short grain rice cooked with special masala in a steel donne (bowl).",
    longDescription:
      "The iconic Donne Biryani of North Karnataka! Made with short grain rice (sona masoori) instead of basmati, cooked with a unique spice blend that gives it a distinct earthy flavor. The rice is cooked in a steel donne (bowl) and served with the same container — authentic Hubli-Dharwad style. The masala is richer, the rice is stickier, and the taste is unforgettable. Served with onion rings, lemon wedge, and raitha.",
    price: "120",
    originalPrice: "160",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    ],
    rating: "4.9",
    reviewsCount: 412,
    isFeatured: true,
    inStock: true,
    spiceLevel: 3,
    portionSize: "Regular",
    preparationTime: "20 min",
    tags: ["hubli-special", "bestseller", "north-karnataka"],
  },
  {
    id: 3,
    name: "Spicy Mushroom Biryani",
    slug: "spicy-mushroom-biryani",
    description: "Fiery and bold — loaded with green chilies, red chili paste, and extra spice for heat lovers.",
    longDescription:
      "Turn up the heat with our Spicy Mushroom Biryani! This fiery masterpiece features mushrooms tossed in a blazing blend of red chilies, black pepper, and special masala. Cooked on high flame to achieve that smoky, charred biryani flavor that makes your taste buds dance. Garnished with fresh curry leaves, slit green chilies, and a squeeze of lime. Not for the faint-hearted!",
    price: "169",
    originalPrice: "219",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    ],
    rating: "4.6",
    reviewsCount: 187,
    isFeatured: false,
    inStock: true,
    spiceLevel: 4,
    portionSize: "Regular",
    preparationTime: "25 min",
    tags: ["spicy", "vegetarian", "popular"],
  },
  {
    id: 4,
    name: "Premium Mushroom Biryani",
    slug: "premium-mushroom-biryani",
    description: "Luxurious biryani with exotic shiitake & oyster mushrooms, saffron-infused rice, and dry fruits.",
    longDescription:
      "Indulge in our most premium offering — a royal biryani featuring exotic shiitake, oyster, and portobello mushrooms layered with saffron-infused basmati rice. Garnished with caramelized onions, toasted cashews, golden raisins, and edible rose petals. Each spoonful is a celebration of luxury. Served with a side of premium raita and salan. The perfect dish for special occasions.",
    price: "279",
    originalPrice: "349",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    ],
    rating: "4.9",
    reviewsCount: 156,
    isFeatured: true,
    inStock: true,
    spiceLevel: 2,
    portionSize: "Regular",
    preparationTime: "35 min",
    tags: ["premium", "vegetarian", "exotic"],
  },
  {
    id: 5,
    name: "Lemon Chitranna",
    slug: "lemon-chitranna",
    description: "Classic Karnataka lemon rice with peanuts, curry leaves, turmeric, and tangy lemon flavor.",
    longDescription:
      "A Karnataka staple! Our Lemon Chitranna (Chitranna) is made with perfectly cooked rice tossed in a tempering of mustard seeds, urad dal, chana dal, peanuts, cashews, curry leaves, and turmeric. Finished with fresh lemon juice for that perfect tangy punch. Light, flavorful, and the ultimate comfort food. Pairs perfectly with our rasam or any curry. Quick, affordable, and absolutely delicious.",
    price: "80",
    originalPrice: "110",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    ],
    rating: "4.7",
    reviewsCount: 298,
    isFeatured: true,
    inStock: true,
    spiceLevel: 1,
    portionSize: "Regular",
    preparationTime: "15 min",
    tags: ["quick", "vegetarian", "karnataka-special"],
  },
  {
    id: 6,
    name: "Dal Rice",
    slug: "dal-rice",
    description: "Comfort food at its best — steamed rice with aromatic dal tadka, ghee, and pickle.",
    longDescription:
      "The ultimate comfort meal! Our Dal Rice features fluffy steamed rice topped with a generous serving of slow-cooked toor dal tempered with cumin, garlic, hing, and red chilies. Finished with a dollop of pure ghee that melts into the hot rice. Served with crispy papad, tangy pickle, and a side of onion. Simple, wholesome, and deeply satisfying. The kind of food that feels like home.",
    price: "90",
    originalPrice: "130",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    ],
    rating: "4.5",
    reviewsCount: 245,
    isFeatured: false,
    inStock: true,
    spiceLevel: 1,
    portionSize: "Regular",
    preparationTime: "15 min",
    tags: ["budget", "comfort-food", "daily-meal"],
  },
  {
    id: 7,
    name: "Veg Pulao",
    slug: "vegetable-pulao",
    description: "Fragrant basmati rice cooked with mixed vegetables, whole spices, and ghee.",
    longDescription:
      "A fragrant and flavorful one-pot meal! Our Veg Pulao is made with premium basmati rice cooked alongside fresh seasonal vegetables — carrots, beans, peas, cauliflower, and potatoes. Tempered with whole spices like cinnamon, cloves, cardamom, and bay leaf. Finished with a generous spoon of ghee for that restaurant-style richness. Light yet filling, perfect for a quick lunch or light dinner.",
    price: "110",
    originalPrice: "150",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    ],
    rating: "4.6",
    reviewsCount: 178,
    isFeatured: false,
    inStock: true,
    spiceLevel: 1,
    portionSize: "Regular",
    preparationTime: "20 min",
    tags: ["vegetarian", "healthy", "light-meal"],
  },
  {
    id: 8,
    name: "Briyani Rice",
    slug: "biryani-rice",
    description: "Fragrant biryani-flavored rice without the masala gravy — perfect with any curry or side.",
    longDescription:
      "Love biryani flavor but want something lighter? Our Briyani Rice delivers all the aromatic flavors of biryani rice — saffron, whole spices, and fragrant basmati — without the heavy masala gravy. Perfect for pairing with your favorite curry, salan, or even just raita. The rice is cooked to perfection with just the right amount of spice to be flavorful on its own yet versatile enough to pair with anything.",
    price: "85",
    originalPrice: "120",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-15893021680664d93dc0?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    ],
    rating: "4.4",
    reviewsCount: 132,
    isFeatured: false,
    inStock: true,
    spiceLevel: 1,
    portionSize: "Regular",
    preparationTime: "15 min",
    tags: ["budget", "vegetarian", "versatile"],
  },
  {
    id: 9,
    name: "Mushroom Biryani Bowl",
    slug: "mushroom-biryani-bowl",
    description: "Deconstructed biryani bowl with separate layers of rice, mushrooms, raita, and salad.",
    longDescription:
      "Our Biryani Bowl puts you in control! Enjoy deconstructed biryani with separate compartments for fluffy spiced rice, perfectly cooked mushroom masala, cooling cucumber raita, fresh onion-tomato salad, and a tangy pickle. Mix it your way or enjoy each component individually. Perfect for office lunches and on-the-go meals. Comes in a convenient, leak-proof container.",
    price: "179",
    originalPrice: "219",
    category: "Bowls",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    ],
    rating: "4.7",
    reviewsCount: 98,
    isFeatured: false,
    inStock: true,
    spiceLevel: 2,
    portionSize: "Regular",
    preparationTime: "15 min",
    tags: ["healthy", "vegetarian", "office-lunch"],
  },
  {
    id: 10,
    name: "Family Mushroom Biryani",
    slug: "family-mushroom-biryani",
    description: "Large portion biryani perfect for 3-4 people. Served with raita, salan, and papad.",
    longDescription:
      "Feeding the whole family? Our Family Mushroom Biryani serves 3-4 hungry people with a generous portion of our signature mushroom biryani in a large handi pot. Includes sides of cooling mint raita, flavorful mirchi ka salan, crispy papads, and a refreshing lime wedge. Perfect for weekend family dinners, house parties, or when you just want extra biryani for tomorrow's lunch!",
    price: "449",
    originalPrice: "549",
    category: "Family Pack",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    ],
    rating: "4.8",
    reviewsCount: 312,
    isFeatured: true,
    inStock: true,
    spiceLevel: 2,
    portionSize: "Large",
    preparationTime: "40 min",
    tags: ["family", "value", "bestseller"],
  },
  {
    id: 11,
    name: "Dummi Special Combo",
    slug: "dummi-special-combo",
    description: "Complete meal combo with biryani, raita, salan, papad, soft drink, and sweet.",
    longDescription:
      "The ultimate value combo! Get our Classic Mushroom Biryani or Donne Biryani paired with cooling raita, tangy salan, crispy papad, a chilled soft drink of your choice, and a sweet gulab jamun for dessert. Everything you need for a complete, satisfying meal in one order. Perfect for daily wage workers and office goers who want a full meal without breaking the bank.",
    price: "199",
    originalPrice: "269",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    ],
    rating: "4.8",
    reviewsCount: 367,
    isFeatured: true,
    inStock: true,
    spiceLevel: 2,
    portionSize: "Regular",
    preparationTime: "20 min",
    tags: ["combo", "value", "bestseller"],
  },
  {
    id: 12,
    name: "Mini Donne Biryani",
    slug: "mini-donne-biryani",
    description: "Smaller portion of our famous Donne Biryani. Budget-friendly and perfect for a quick bite.",
    longDescription:
      "All the authentic Hubli-Dharwad Donne Biryani flavor in a perfectly sized portion. Made with short grain rice, special North Karnataka masala, and cooked the traditional way. Ideal for a light lunch, late afternoon snack, or when you want the real Donne Biryani taste without a full portion. Same authentic recipe, smaller size, smaller price.",
    price: "75",
    originalPrice: "110",
    category: "Budget",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    ],
    rating: "4.6",
    reviewsCount: 189,
    isFeatured: false,
    inStock: true,
    spiceLevel: 3,
    portionSize: "Small",
    preparationTime: "15 min",
    tags: ["budget", "hubli-special", "quick"],
  },
];

export const reviews: Review[] = [
  // Classic Mushroom Biryani (id: 1)
  { productId: 1, author: "Rajesh Kumar", avatar: "RK", rating: 5, comment: "Best biryani in Hubli! The mushroom masala is perfectly spiced and the rice is fluffy. I order this every week for lunch.", date: new Date("2025-01-15"), verified: true },
  { productId: 1, author: "Priya Sharma", avatar: "PS", rating: 5, comment: "Absolutely delicious! The aroma alone is worth it. My whole family loves it.", date: new Date("2025-01-10"), verified: true },
  { productId: 1, author: "Amit Patel", avatar: "AP", rating: 4, comment: "Very tasty biryani. Could use a bit more mushrooms but the flavor is spot on.", date: new Date("2025-01-05"), verified: true },

  // Donne Biryani (id: 2)
  { productId: 2, author: "Shankar Patil", avatar: "SP", rating: 5, comment: "Real North Karnataka Donne Biryani taste! Reminds me of the ones from Hubli old market. Short grain rice makes all the difference.", date: new Date("2025-01-18"), verified: true },
  { productId: 2, author: "Gouri Desai", avatar: "GD", rating: 5, comment: "This is THE Donne Biryani of Hubli. Dummi Biriyani nailed it. The steel donne serving style is authentic!", date: new Date("2025-01-14"), verified: true },
  { productId: 2, author: "Mahesh Kulkarni", avatar: "MK", rating: 5, comment: "I've been searching for good Donne Biryani in Hubli for years. Finally found it! The masala is perfect, not too spicy, just right.", date: new Date("2025-01-08"), verified: true },
  { productId: 2, author: "Savita Jadhav", avatar: "SJ", rating: 4, comment: "Very authentic taste. The sona masoori rice gives it that real Donne Biryani texture. Highly recommended!", date: new Date("2025-01-02"), verified: true },

  // Spicy Mushroom Biryani (id: 3)
  { productId: 3, author: "Vikram Singh", avatar: "VS", rating: 5, comment: "This is FIRE! Perfect spice level for someone who loves heat. The mushrooms soak up all the spice beautifully.", date: new Date("2025-01-14"), verified: true },
  { productId: 3, author: "Deepa Nair", avatar: "DN", rating: 4, comment: "Very spicy but in a good way. Great depth of flavor. Keep water handy!", date: new Date("2025-01-08"), verified: true },

  // Premium Mushroom Biryani (id: 4)
  { productId: 4, author: "Ananya Iyer", avatar: "AI", rating: 5, comment: "Worth every penny! The saffron rice with exotic mushrooms is a game changer.", date: new Date("2025-01-16"), verified: true },
  { productId: 4, author: "Rohit Joshi", avatar: "RJ", rating: 5, comment: "Restaurant-quality biryani at cloud kitchen prices. Pure luxury!", date: new Date("2025-01-11"), verified: true },

  // Chitranna (id: 5)
  { productId: 5, author: "Basavaraj Hugar", avatar: "BH", rating: 5, comment: "Best Chitranna in Hubli! The peanuts and curry leaves tempering is perfect. My go-to quick meal.", date: new Date("2025-01-17"), verified: true },
  { productId: 5, author: "Manjula Belur", avatar: "MB", rating: 5, comment: "Authentic Karnataka style Chitranna. Exactly like my grandma makes it. Tangy and flavorful!", date: new Date("2025-01-12"), verified: true },
  { productId: 5, author: "Arjun Meti", avatar: "AM", rating: 4, comment: "Very good chitranna. Light, tasty, and quick. Perfect with rasam.", date: new Date("2025-01-06"), verified: true },

  // Dal Rice (id: 6)
  { productId: 6, author: "Ravi Yellapur", avatar: "RY", rating: 5, comment: "Pure comfort food! The dal tadka with ghee is amazing. Feels like home-cooked food.", date: new Date("2025-01-15"), verified: true },
  { productId: 6, author: "Lakshmi Pujar", avatar: "LP", rating: 4, comment: "Simple and satisfying. The ghee on top makes it special. Great for days when you want light food.", date: new Date("2025-01-09"), verified: true },
  { productId: 6, author: "Suresh Biradar", avatar: "SB", rating: 5, comment: "Perfect dal rice! Not too watery dal, perfectly cooked rice. My daily lunch order.", date: new Date("2025-01-03"), verified: true },

  // Veg Pulao (id: 7)
  { productId: 7, author: "Kiran Goudar", avatar: "KG", rating: 5, comment: "Fragrant and light! The vegetables are fresh and the ghee aroma is amazing. Great lunch option.", date: new Date("2025-01-16"), verified: true },
  { productId: 7, author: "Pooja Kulkarni", avatar: "PK", rating: 4, comment: "Good pulao with nice whole spices. Vegetables are well-cooked. Would order again.", date: new Date("2025-01-10"), verified: true },

  // Briyani Rice (id: 8)
  { productId: 8, author: "Nagesh Shettar", avatar: "NS", rating: 4, comment: "Good flavored rice! I use it with my own curry at home. Saves me the effort of making biryani rice.", date: new Date("2025-01-14"), verified: true },
  { productId: 8, author: "Rekha Angadi", avatar: "RA", rating: 5, comment: "Perfect biryani rice! Great aroma and the right amount of spice. Good price too.", date: new Date("2025-01-07"), verified: true },

  // Mushroom Biryani Bowl (id: 9)
  { productId: 9, author: "Arjun Menon", avatar: "AM", rating: 5, comment: "Love the concept! Being able to mix the biryani the way I want is great. Perfect for office lunch.", date: new Date("2025-01-12"), verified: true },
  { productId: 9, author: "Nisha Agarwal", avatar: "NA", rating: 4, comment: "Convenient and tasty. The separate compartments keep everything fresh.", date: new Date("2025-01-04"), verified: true },

  // Family Mushroom Biryani (id: 10)
  { productId: 10, author: "Suresh Babu", avatar: "SB", rating: 5, comment: "Ordered for family dinner and everyone loved it! The quantity is generous. Best value for families!", date: new Date("2025-01-17"), verified: true },
  { productId: 10, author: "Kavita Singh", avatar: "KS", rating: 5, comment: "This feeds our family of 4 easily. We order this every weekend now!", date: new Date("2025-01-09"), verified: true },

  // Dummi Special Combo (id: 11)
  { productId: 11, author: "Anil Reddy", avatar: "AR", rating: 5, comment: "Complete meal at a great price! The gulab jamun is the perfect ending. I order this combo daily for lunch.", date: new Date("2025-01-16"), verified: true },
  { productId: 11, author: "Manoj Kumar", avatar: "MK", rating: 4, comment: "Great value combo. Perfect for daily wage workers like me. Filling and affordable.", date: new Date("2024-12-25"), verified: true },

  // Mini Donne Biryani (id: 12)
  { productId: 12, author: "Student Ravi", avatar: "RV", rating: 5, comment: "Perfect portion for one person and super budget-friendly! Same great Donne Biryani taste. My hostel go-to order.", date: new Date("2025-01-15"), verified: true },
  { productId: 12, author: "Divya S", avatar: "DS", rating: 4, comment: "Great for a light meal. Sometimes I order this when I don't want too heavy a meal. Authentic taste!", date: new Date("2025-01-03"), verified: true },
];

// Helpers for static data access
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getReviewsByProductId(productId: number): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function filterProducts(params: {
  category?: string;
  search?: string;
  sort?: string;
  minPrice?: string;
  maxPrice?: string;
}): Product[] {
  let result = [...products];

  if (params.category && params.category !== "all") {
    result = result.filter((p) => p.category === params.category);
  }

  if (params.search) {
    const q = params.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
    );
  }

  if (params.minPrice) {
    const min = parseFloat(params.minPrice);
    result = result.filter((p) => parseFloat(p.price) >= min);
  }
  if (params.maxPrice) {
    const max = parseFloat(params.maxPrice);
    result = result.filter((p) => parseFloat(p.price) <= max);
  }

  switch (params.sort) {
    case "price-asc":
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "price-desc":
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "rating":
      result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      break;
    case "reviews":
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
      break;
    case "name":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "featured":
    default:
      result.sort((a, b) => {
        if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
        return b.reviewsCount - a.reviewsCount;
      });
      break;
  }

  return result;
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}
