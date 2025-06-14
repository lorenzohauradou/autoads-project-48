'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Eye, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="TopMask Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 rounded-lg"
                            />
                            <span className="font-semibold text-xl">TopMask Pro</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Features
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Reviews
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-cyan-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/49948898-e64c-4b64-958e-24f1083b6b28.jpg?"
                                    alt="TopMask Pro Full-Face Snorkeling Mask - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/f4dcb3bf-d1e9-405a-9296-546ebd6b5a01.jpg?"
                                        alt="TopMask Pro underwater view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/44a00406-28ea-4815-a57f-67f0549d0162.jpg?"
                                        alt="TopMask Pro side view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/3a91ef26-e8c5-4eae-8c70-aba9e57ef413.jpg?"
                                        alt="TopMask Pro features"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/49948898-e64c-4b64-958e-24f1083b6b28.jpg?"
                                        alt="TopMask Pro detail view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium bg-cyan-100 text-cyan-800">
                                    🇩🇪 German Engineering
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    TopMask Pro Full-Face Snorkeling Mask
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(4,892 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Experience underwater freedom with 180° panoramic vision and revolutionary CO2 safety system. Breathe naturally through nose and mouth while exploring the ocean's wonders.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$89.99</span>
                                    <span className="text-xl text-slate-500 line-through">$129.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        31% OFF - Limited Time
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Eye, text: "180° View" },
                                    { icon: Shield, text: "CO2 Safety" },
                                    { icon: Zap, text: "Fog-Free" },
                                    { icon: Camera, text: "GoPro Ready" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:from-cyan-100 hover:to-blue-100 transition-colors"
                                    >
                                        <feature.icon className="h-5 w-5 text-cyan-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Size Selection */}
                            <div className="space-y-3">
                                <span className="font-medium text-slate-700">Select Size:</span>
                                <div className="flex gap-3">
                                    <Button variant="outline" className="flex-1 h-12 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                        S/M
                                    </Button>
                                    <Button variant="outline" className="flex-1 h-12 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                        L/XL
                                    </Button>
                                    <Button variant="outline" className="flex-1 h-12 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                        Kids
                                    </Button>
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div className="space-y-3">
                                <span className="font-medium text-slate-700">Choose Color:</span>
                                <div className="flex gap-3 flex-wrap">
                                    {['Turquoise', 'Blue', 'Green', 'Black', 'White'].map((color) => (
                                        <Button key={color} variant="outline" className="h-10 px-4 border-2 hover:border-cyan-500 hover:bg-cyan-50">
                                            {color}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                                    >
                                        Dive into Adventure - $89.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Transform Your Experience - Buy Now
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Worldwide</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Risk-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Perfect Fit</p>
                                        <p className="text-xs text-slate-500">Guaranteed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Revolutionary Features
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 overflow-hidden">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/f4dcb3bf-d1e9-405a-9296-546ebd6b5a01.jpg?"
                                        alt="CO2 Safety System"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Advanced CO2 Safety System</h3>
                                    <p className="text-slate-600">Patented valve technology prevents CO2 buildup, ensuring safe breathing throughout your adventure.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 overflow-hidden">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/44a00406-28ea-4815-a57f-67f0549d0162.jpg?"
                                        alt="180° Panoramic View"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-3">180° Panoramic Vision</h3>
                                    <p className="text-slate-600">Crystal-clear full-face design offers unmatched underwater perspective for amazing exploration.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 overflow-hidden">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/3a91ef26-e8c5-4eae-8c70-aba9e57ef413.jpg?"
                                        alt="Perfect Fit Design"
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Perfect Fit Guarantee</h3>
                                    <p className="text-slate-600">Multiple sizes and adjustable straps ensure maximum comfort and zero leaks for everyone.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-slate-100 rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose TopMask Pro?</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Breathe Naturally",
                                                    description: "No more uncomfortable mouthpieces - breathe through nose and mouth naturally",
                                                },
                                                {
                                                    title: "Fog-Free Technology",
                                                    description: "Advanced airflow design keeps your view crystal clear throughout your dive",
                                                },
                                                {
                                                    title: "Prescription Compatible",
                                                    description: "Supports prescription lenses from -6.0 to +6.0 diopters",
                                                },
                                                {
                                                    title: "Action Camera Ready",
                                                    description: "Built-in mount compatible with GoPro and other action cameras",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/49948898-e64c-4b64-958e-24f1083b6b28.jpg?"
                                            alt="TopMask Pro features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Material", value: "Premium Silicone & PC" },
                                                { label: "Viewing Angle", value: "180° Panoramic" },
                                                { label: "Sizes Available", value: "S/M, L/XL, Kids" },
                                                { label: "Colors", value: "5 Options" },
                                                { label: "Prescription Range", value: "-6.0 to +6.0" },
                                                { label: "Camera Mount", value: "Universal" },
                                                { label: "Certification", value: "CE, FDA Approved" },
                                                { label: "Warranty", value: "2 Years" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x TopMask Pro Full-Face Mask",
                                                "1x Premium Carrying Bag",
                                                "1x Camera Mount",
                                                "1x User Manual",
                                                "1x Size Adjustment Guide",
                                                "1x Warranty Card",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-cyan-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 4,892 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "12%" : "3%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "4,158" : stars === 4 ? "587" : "147"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Sarah Mitchell",
                                                avatar: "SM",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for snorkeling!",
                                                content:
                                                    "I can finally breathe naturally underwater! The 180° view is incredible and no fogging at all. Worth every penny!",
                                            },
                                            {
                                                name: "James Chen",
                                                avatar: "JC",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Perfect for our family vacation",
                                                content:
                                                    "Bought 4 masks for our Hawaii trip. Everyone loved them! The kids especially enjoyed breathing normally. Great quality!",
                                            },
                                            {
                                                name: "Maria Rodriguez",
                                                avatar: "MR",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Finally, a mask that fits!",
                                                content:
                                                    "As someone who wears glasses, the prescription lens compatibility is amazing. Crystal clear underwater vision!",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-cyan-100 text-cyan-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How does the CO2 safety system work?",
                                                answer:
                                                    "Our patented valve system separates inhaled and exhaled air, preventing CO2 buildup. Fresh air enters through the top while exhaled air exits through side channels.",
                                            },
                                            {
                                                question: "Can I dive underwater with this mask?",
                                                answer:
                                                    "TopMask Pro is designed for surface snorkeling. The dry-top system prevents water entry when you're at the surface, but it's not intended for deep diving.",
                                            },
                                            {
                                                question: "How do I choose the right size?",
                                                answer:
                                                    "Measure from the bridge of your nose to the bottom of your chin. S/M fits 10-12cm, L/XL fits 12cm+. Kids size fits most children 6-12 years.",
                                            },
                                            {
                                                question: "Is it really fog-free?",
                                                answer:
                                                    "Yes! The innovative airflow design channels air across the lens, preventing fogging. No anti-fog sprays needed.",
                                            },
                                            {
                                                question: "Can I attach my GoPro?",
                                                answer:
                                                    "Absolutely! The built-in camera mount is compatible with most action cameras including GoPro, DJI, and others.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Join Thousands of Satisfied Explorers
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Transform your underwater experience today with TopMask Pro
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-xl bg-white text-cyan-600 hover:bg-gray-100">
                            Get Your TopMask Pro Now - Save 31%
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="TopMask Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 rounded-lg"
                            />
                            <span className="font-semibold text-xl">TopMask Pro</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 TopMask Pro. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}