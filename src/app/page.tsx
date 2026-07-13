import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import DummiLogo from "@/components/DummiLogo";
import { ArrowRight, MapPin, Clock, Smartphone, ChefHat, Package, Truck, Phone, Shield, Star } from "lucide-react";
import { products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).sort((a, b) => b.reviewsCount - a.reviewsCount).slice(0, 4);
  const allProducts = [...products];
  const categories = [...new Set(allProducts.map((p) => p.category))];

  const budgetItems = allProducts.filter((p) => parseFloat(p.price) <= 100);
  const bestsellers = allProducts.filter((p) => p.reviewsCount > 200).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Hubli Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-semibold">Hubli Cloud Kitchen • Open 10 AM – 8 PM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Hubli's Favourite{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Biryani
                </span>
                <br />
                Delivered Hot
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From authentic <strong className="text-white">Donne Biryani</strong> to <strong className="text-white">Mushroom Biryani</strong>, 
                <strong className="text-white"> Chitranna</strong>, <strong className="text-white">Dal Rice</strong> & more — 
                cooked fresh in our cloud kitchen and delivered to your door in Hubli-Dharwad.
              </p>

              {/* Delivery Info Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {[
                  { icon: Clock, text: "10 AM – 8 PM" },
                  { icon: MapPin, text: "Hubli-Dharwad" },
                  { icon: Shield, text: "Hygienic packing" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                    <item.icon className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-white">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center justify-center gap-2"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call to Order
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                {[
                  { value: "10K+", label: "Orders Delivered" },
                  { value: "4.8★", label: "Avg. Rating" },
                  { value: "30min", label: "Avg. Delivery" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Hero Image & Logo */}
            <div className="relative hidden lg:flex flex-col items-center gap-6">
              {/* Mascot Logo */}
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
                <DummiLogo className="relative w-48 h-48 drop-shadow-2xl" />
              </div>
              {/* Food image */}
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&q=80"
                  alt="Delicious Dummi Biriyani"
                  className="relative w-full h-[320px] object-cover rounded-3xl shadow-2xl"
                />
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <p className="text-xs text-slate-500">Donne Biryani</p>
                      <p className="text-sm font-bold text-slate-900">₹120 only!</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-slate-900">4.8</span>
                    <span className="text-xs text-slate-500">(2000+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="relative h-16 sm:h-24">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 sm:py-20 bg-white -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
              ☁️ How Dummi Biriyani Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Order. We Cook. Delivered Hot.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No dining room, no waiting in line. Just the freshest biryani from our Hubli cloud kitchen to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Smartphone,
                step: "1",
                title: "Order Online",
                desc: "Browse our menu, pick your biryani or rice dish, and place your order through our website or call us.",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: ChefHat,
                step: "2",
                title: "Freshly Cooked",
                desc: "Your order is cooked fresh in our Hubli cloud kitchen — not pre-made, not reheated. 100% fresh.",
                color: "from-amber-500 to-orange-500",
                bgColor: "bg-amber-50",
              },
              {
                icon: Package,
                step: "3",
                title: "Hygienically Packed",
                desc: "Sealed in food-grade containers with spill-proof lids. Quality sealed, freshness locked.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
              },
              {
                icon: Truck,
                step: "4",
                title: "Delivered Hot",
                desc: "Our delivery partner picks it up immediately and brings it hot to your office, home, or worksite.",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
              },
            ].map((item, i) => (
              <div key={item.title} className="relative group">
                <div className={`relative p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all bg-white ${item.bgColor}/30`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-black text-slate-100 group-hover:text-amber-100 transition-colors">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Meals Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex items-center gap-4 shrink-0">
              <DummiLogo className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">💰 Budget Meals from ₹75</h3>
                <p className="text-slate-600">
                  Affordable food for daily wage workers, students & employees. Quality biryani that fits every pocket.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:ml-auto">
              {budgetItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="px-3 py-1.5 bg-white border border-green-200 text-green-700 text-sm font-medium rounded-full hover:bg-green-100 transition-colors"
                >
                  {item.name} — ₹{item.price}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Made with Love Section */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">❤️</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Prepared with Love, Served with Pride
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 max-w-3xl mx-auto">
            At Dummi Biriyani, every dish is cooked with <strong className="text-amber-700">love and authentic Uttara Karnataka spices</strong>. 
            We believe good food doesn't just fill your stomach — it feeds your soul. Our traditional masala blends, 
            hand-ground daily, bring the real taste of North Karnataka to your plate.
          </p>
          <p className="text-base text-slate-500 leading-relaxed">
            Whether you're a daily wage worker finishing a hard day, an office employee on lunch break, or a student 
            missing home food — we're here to <strong className="text-slate-700">feed the hunger and satisfy your craving</strong> 
            with the authentic flavors you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["🔥 Authentic Spices", "❤️ Made with Love", "🌿 Fresh Ingredients", "👩‍🍳 Hand-Grounded Masala"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white border border-red-200 text-red-700 text-sm font-medium rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">From Our Cloud Kitchen</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Hubli's Bestsellers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The dishes Hubli orders again and again. Made fresh, delivered hot, always delicious.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Browse by Category</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
              What's Your Mood Today?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const catProducts = allProducts.filter((p) => p.category === cat);
              const minPrice = Math.min(...catProducts.map((p) => parseFloat(p.price)));
              return (
                <Link
                  key={cat}
                  href={`/products?category=${cat}`}
                  className="group p-5 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-amber-200 transition-all text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-amber-100 group-hover:bg-amber-200 rounded-xl flex items-center justify-center mb-3 transition-colors">
                    <span className="text-2xl">
                      {cat === "Biryani" ? "🍚" : cat === "Rice" ? "🥘" : cat === "Premium" ? "👑" : cat === "Bowls" ? "🥣" : cat === "Family Pack" ? "👨‍👩‍👧‍👦" : cat === "Combos" ? "🎁" : "💰"}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors text-sm sm:text-base">
                    {cat}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {catProducts.length} item{catProducts.length > 1 ? "s" : ""} • From ₹{minPrice}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Most Ordered</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Hubli's Most Ordered Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Cloud Kitchen */}
      <section className="py-16 sm:py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                ☁️ Our Cloud Kitchen
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Why Dummi Biriyani = Better Biryani
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We don't spend money on fancy dining spaces or front-of-house staff. 
                Every rupee goes into ingredients, hygiene, and getting the best food to your door in Hubli.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Lower Prices for Hubli",
                    desc: "No rent on dining space means we pass savings to you. Donne Biryani from ₹75, combos from ₹199. Quality food every day.",
                    icon: "💰",
                  },
                  {
                    title: "Fresh, Never Pre-Made",
                    desc: "Our cloud kitchen cooks each order fresh. Your Donne Biryani or Chitranna is made when you order it, not hours before.",
                    icon: "🔥",
                  },
                  {
                    title: "Hubli Hygiene Standards",
                    desc: "Dedicated kitchen with strict hygiene protocols. No customer foot traffic, no contamination risk. Just clean cooking.",
                    icon: "🧼",
                  },
                  {
                    title: "Built for Delivery",
                    desc: "Spill-proof, insulated, food-grade packaging. Your biryani arrives hot and intact anywhere in Hubli-Dharwad.",
                    icon: "📦",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-xl opacity-50" />
              <div className="relative grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80"
                  alt="Dummi Biriyani preparation"
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&q=80"
                  alt="Packed and ready for delivery"
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80"
                  alt="Mushroom Biryani close up"
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg -mt-4"
                />
                <img
                  src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80"
                  alt="Chitranna and Rice dishes"
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl shadow-lg mt-4"
                />
              </div>
              {/* Kitchen Stats Badge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-amber-600">Hubli</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Location</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-amber-600">10-8</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Open Hours</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-amber-600">100%</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Fresh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Affordable for All</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Food for Every Budget in Hubli
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From daily wage workers to office employees — Dummi has options for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Budget Meals",
                price: "₹75",
                desc: "Mini Donne, Chitranna & more",
                features: ["Mini Donne Biryani ₹75", "Chitranna ₹80", "Dal Rice ₹90", "Biryani Rice ₹85"],
                icon: "💰",
                popular: false,
              },
              {
                title: "Dummi Combos",
                price: "₹199",
                desc: "Complete meal with sides & drink",
                features: ["Biryani + Raita + Salan", "Papad & Soft Drink", "Gulab Jamun included", "Best value for workers"],
                icon: "🍱",
                popular: true,
              },
              {
                title: "Family Packs",
                price: "₹449",
                desc: "Feeds 3-4 people easily",
                features: ["Large portion biryani", "Full sides included", "Weekend family dinner", "Leftovers for tomorrow!"],
                icon: "👨‍👩‍👧‍👦",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`relative p-6 rounded-2xl border transition-all hover:shadow-lg ${
                  plan.popular
                    ? "bg-gradient-to-br from-amber-500 to-orange-500 border-amber-500 text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:border-amber-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-amber-600 text-xs font-bold rounded-full shadow-md">
                    MOST POPULAR
                  </span>
                )}
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">{plan.icon}</span>
                  <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-black ${plan.popular ? "text-white" : "text-amber-600"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-amber-100" : "text-slate-500"}`}>onwards</span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.popular ? "text-amber-100" : "text-slate-500"}`}>
                    {plan.desc}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-amber-50" : "text-slate-600"}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        plan.popular ? "bg-white/20 text-white" : "bg-green-100 text-green-600"
                      }`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center block transition-all ${
                    plan.popular
                      ? "bg-white text-amber-600 hover:bg-amber-50 shadow-lg"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Order Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6">
            <span className="text-lg">🏢</span>
            <span className="text-amber-300 text-sm font-semibold">Bulk Orders Welcome</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Office Lunch in Hubli? Worksite Meal? We've Got You.
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Order for your team, workers, or event. Special pricing for bulk orders above 10 servings. 
            Contact us for custom menus and scheduled daily deliveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call for Bulk Orders
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-2xl hover:bg-green-500 transition-all flex items-center justify-center gap-2"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-6">
            📞 +91 98765 43210 • Orders for 10+ servings • Scheduled daily delivery available
          </p>
        </div>
      </section>

      {/* Namma Hubbali Section */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Kannada Text */}
          <div className="mb-4">
            <span className="text-3xl sm:text-4xl font-bold text-white/90">
              ನಮ್ಮ ಹುಬ್ಬಳ್ಳಿ ಡುಮ್ಮಿ ಬಿರಿಯಾನಿ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Namma Hubbali Dummi Biriyani! 🔥
          </h2>
          <p className="text-lg text-amber-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            <em>"Hubli yalli best biryani endre Dummi Biriyani!"</em> — ಹುಬ್ಬಳ್ಳಿಯಲ್ಲಿ ಬೆಸ್ಟ್ ಬಿರಿಯಾನಿ ಅಂದ್ರೆ ದುಮ್ಮಿ ಬಿರಿಯಾನಿ!
            <br />
            From the heart of Uttara Karnataka, we bring you the real taste of Hubli-Dharwad. 
            Donne Biryani, Chitranna, Dal Rice — <strong className="text-white">nammooru food, namma style!</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["🍚 Donne Biryani", "🥘 Chitranna", "🍛 Dal Rice", "🌶️ Masala Rice", "🎁 Combos"].map((item) => (
              <span key={item} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm text-amber-200">
            📍 Hubli-Dharwad • ☁️ Cloud Kitchen • 🕐 10 AM – 8 PM • 📞 +91 98765 43210
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-100">
            <DummiLogo className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Hungry? Order from Dummi Biriyani! ☁️
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              From our Hubli cloud kitchen to your doorstep. Fresh Donne Biryani, Chitranna, Dal Rice & more — packed with care, delivered hot.
              <br />
              <span className="text-sm text-slate-500">Open daily: 10:00 AM – 8:00 PM</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-200"
              >
                Browse Menu & Order
              </Link>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 bg-white border-2 border-amber-200 text-amber-700 font-bold text-lg rounded-2xl hover:bg-amber-50 transition-all"
              >
                📞 Call: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
