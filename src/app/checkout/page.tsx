"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { Check, Truck, CreditCard, Shield, ArrowLeft, ShoppingBag, MapPin, Phone, Mail, User } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  // Static site - no router needed

  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    instructions: "",
    timeSlot: "asap",
  });

  const deliveryFee = totalPrice >= 299 ? 0 : 30;
  const grandTotal = totalPrice + deliveryFee;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone.replace(/\s/g, ""))) errs.phone = "Enter valid 10-digit phone";
    if (!form.address.trim()) errs.address = "Address is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);
    // Simulate order processing (no API for static GitHub Pages)
    setTimeout(() => {
      setOrderId(Math.floor(Math.random() * 90000) + 10000);
      setOrderPlaced(true);
      clearCart();
      setLoading(false);
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">Order Confirmed! 🎉</h1>
            <p className="text-green-100">Your biryani is being prepared in our cloud kitchen</p>
          </div>

          <div className="p-8 sm:p-10">
            {/* Order Details */}
            <div className="text-center mb-8">
              {orderId && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                  <span className="text-xs text-slate-500">Order ID</span>
                  <span className="text-sm font-bold text-slate-900">#{orderId}</span>
                </div>
              )}
              <p className="text-sm text-slate-500 mb-6">
                Confirmation sent to <strong className="text-slate-700">{form.email}</strong>
              </p>
            </div>

            {/* Delivery Status Timeline */}
            <div className="space-y-4 mb-8">
              {[
                { status: "Order Received", icon: "☁️", done: true, time: "Just now" },
                { status: "Cooking Fresh", icon: "🔥", done: true, time: "Starting now" },
                { status: "Quality Checked", icon: "✅", done: false, time: "~15 min" },
                { status: "Packed & Dispatched", icon: "📦", done: false, time: "~20 min" },
                { status: "Delivered to You", icon: "🚚", done: false, time: "~30 min" },
              ].map((step, i) => (
                <div key={step.status} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    step.done ? "bg-green-100" : "bg-slate-100"
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${step.done ? "text-slate-900" : "text-slate-400"}`}>
                      {step.status}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-8">
              <p className="text-sm text-amber-700 text-center">
                📞 For any queries, call us: <a href="tel:+919876543210" className="font-bold hover:underline">+91 98765 43210</a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg text-center"
              >
                Order More Biryani
              </Link>
              <Link
                href="/"
                className="py-4 px-6 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-center"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Your cart is empty</h1>
        <p className="text-slate-500 mb-6">Add some biryani before checking out!</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-all"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back Link */}
      <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-amber-700 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Menu
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          {/* Steps */}
          <div className="flex items-center gap-4 mb-8">
            {[
              { num: 1, label: "Delivery" },
              { num: 2, label: "Payment" },
              { num: 3, label: "Confirm" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-4">
                <button
                  onClick={() => s.num <= step && setStep(s.num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s.num
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-200"
                      : "bg-slate-200 text-slate-500"
                  } ${s.num < step ? "cursor-pointer hover:bg-amber-400" : ""}`}
                >
                  {s.num < step ? <Check className="w-5 h-5" /> : s.num}
                </button>
                <span className={`text-sm font-medium hidden sm:block ${step >= s.num ? "text-slate-900" : "text-slate-400"}`}>
                  {s.label}
                </span>
                {i < 2 && <div className={`w-12 h-0.5 ${step > s.num ? "bg-amber-500" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Delivery Details */}
          {step === 1 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                Delivery Details
              </h2>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? "border-red-300 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? "border-red-300 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? "border-red-300 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <textarea
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="House/Flat No., Street, Landmark, City, Pincode"
                      rows={3}
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.address ? "border-red-300 focus:ring-red-500" : "border-slate-200 focus:ring-amber-500"
                      }`}
                    />
                  </div>
                  {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                </div>

                {/* Delivery Time Slot */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    🕐 Delivery Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: "asap", label: "ASAP", desc: "25-35 min" },
                      { value: "30", label: "In 30 min", desc: "" },
                      { value: "60", label: "In 1 hour", desc: "" },
                      { value: "scheduled", label: "Schedule", desc: "Later" },
                    ].map((slot) => (
                      <label
                        key={slot.value}
                        className={`flex flex-col items-center gap-1 p-3 border rounded-xl cursor-pointer text-center transition-all ${
                          form.timeSlot === slot.value
                            ? "border-amber-500 bg-amber-50 ring-1 ring-amber-500"
                            : "border-slate-200 hover:border-amber-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot.value}
                          checked={form.timeSlot === slot.value}
                          onChange={() => setForm({ ...form, timeSlot: slot.value })}
                          className="sr-only"
                        />
                        <span className="text-sm font-bold text-slate-900">{slot.label}</span>
                        {slot.desc && <span className="text-[10px] text-slate-500">{slot.desc}</span>}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    📝 Delivery Instructions <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <textarea
                    value={form.instructions}
                    onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                    placeholder="e.g., Ring doorbell, leave at security desk, extra spoons needed, less spicy, call before delivery..."
                    rows={2}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  if (validate()) setStep(2);
                }}
                className="w-full mt-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-amber-600" />
                Payment Method
              </h2>

              <div className="space-y-4">
                {[
                  { value: "cod", label: "Cash on Delivery", desc: "Pay when your biryani arrives", icon: "💵" },
                  { value: "upi", label: "UPI Payment", desc: "Google Pay, PhonePe, Paytm", icon: "📱" },
                  { value: "card", label: "Credit/Debit Card", desc: "Visa, Mastercard, RuPay", icon: "💳" },
                ].map((method) => (
                  <label
                    key={method.value}
                    className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-amber-300 hover:bg-amber-50/50 transition-all has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      defaultChecked={method.value === "cod"}
                      className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{method.label}</p>
                      <p className="text-xs text-slate-500">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-4 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg"
                >
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="w-5 h-5 text-amber-600" />
                Order Summary
              </h2>

              {/* Delivery Info */}
              <div className="p-4 bg-slate-50 rounded-xl mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">☁️</span>
                  <h3 className="text-sm font-semibold text-slate-900">Cloud Kitchen Delivery</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Name</p>
                    <p className="text-slate-900 font-medium">{form.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Phone</p>
                    <p className="text-slate-900 font-medium">{form.phone}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-slate-500 text-xs mb-0.5">Address</p>
                    <p className="text-slate-900 font-medium">{form.address}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Delivery Time</p>
                    <p className="text-slate-900 font-medium">
                      {form.timeSlot === "asap" ? "🔥 ASAP (25-35 min)" : form.timeSlot === "scheduled" ? "📅 Scheduled" : `🕐 ${form.timeSlot} min`}
                    </p>
                  </div>
                  {form.instructions && (
                    <div className="sm:col-span-2">
                      <p className="text-slate-500 text-xs mb-0.5">Instructions</p>
                      <p className="text-slate-900 font-medium text-amber-700">{form.instructions}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 text-sm">{item.product.name}</p>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-slate-900">
                      {formatPrice(parseFloat(item.product.price) * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-4 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Placing Order..." : `Place Order • ${formatPrice(grandTotal)}`}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Order Summary</h3>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-slate-600">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-medium text-slate-900">
                    {formatPrice(parseFloat(item.product.price) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="text-slate-900">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Delivery</span>
                <span className={deliveryFee === 0 ? "text-green-600 font-medium" : "text-slate-900"}>
                  {deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-100">
                <span>Total</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-amber-50 rounded-lg">
              <p className="text-xs text-amber-700">
                🛡️ Your order is protected. Full refund if not satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
