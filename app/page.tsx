"use client" // This component needs to be a client component for dynamic background

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function Component() {
  const [dynamicGradientColor, setDynamicGradientColor] = useState("rgb(95 134 237 / 0.07)") // Initial state with new opacity

  useEffect(() => {
    // Function to generate a random RGB color with 0.07 opacity (7%)
    const getRandomRgbColor = () => {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgb(${r} ${g} ${b} / 0.07)` // Updated opacity to 0.07 (7%)
    }
    setDynamicGradientColor(getRandomRgbColor())
  }, []) // Empty dependency array means this runs once on mount

  // Base64 encoded SVG for a subtle dot pattern
  const dotPattern = `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMSIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==")`

  const backgroundStyle = {
    background: `${dotPattern}, linear-gradient(201deg, #f1f0ee 0%, #f1f0ee 30%, ${dynamicGradientColor} 67%, rgb(201 185 50 / 0%) 100%)`, // Changed 50% to 30%
  }

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden" style={backgroundStyle}>
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-3 px-6 flex items-center justify-center space-x-2 relative z-30">
        <Sparkles className="h-4 w-4 text-yellow-400" />
        <span className="font-semibold">Style Guide export is live</span>{" "}
        <Link href="#" className="underline hover:text-gray-300">
          Try it now
        </Link>
      </div>

      {/* Header (Navbar) - Now full width with centered content */}
      <header className="w-full py-5 bg-transparent text-gray-900 relative z-20">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="#" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Wasit</span> {/* Changed name to Wasit */}
            </Link>
            <nav className="hidden md:flex items-center space-x-8 text-gray-700 text-sm">
              <Link href="#" className="flex items-center hover:text-gray-900">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="#" className="flex items-center hover:text-gray-900">
                Community <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Learn
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Contact Sales
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-900 hover:bg-gray-200 text-sm">
              <span>Log in</span>
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-lg px-5 py-2 text-sm font-medium">
              <span>Start for free</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper - Centered and with appropriate max-width */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex flex-col min-h-[62vh] px-6">
        {" "}
        {/* min-height changed to 62vh */}
        {/* Hero Section */}
        <main className="relative w-full text-center flex flex-col items-center justify-center flex-grow">
          {/* Central Content */}
          <div className="relative z-20 w-full max-w-3xl mx-auto" style={{ marginBottom: "-80px" }}>
            {" "}
            {/* px-2 removed */}
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 text-black px-4 py-1.5 rounded-[4px] mb-10 text-sm font-medium border border-gray-300">
              <span className="text-red-500 font-semibold">700k+</span>{" "}
              <span className="text-gray-800">Designers & Developers trust Wasit</span> {/* Changed name to Wasit */}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.2] text-black">
              Websites designed & built faster with AI
            </h1>
            {/* Input Section */}
            <div className="py-8">
              <div className="relative p-px rounded-none bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500">
                <Input
                  type="text"
                  placeholder="Describe a company in a sentence or two..."
                  className="min-h-[68px] rounded-none resize-none px-6 py-4 border-0 shadow-sm pr-32 text-lg bg-white text-black placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {/* Corner boxes for the input */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-black"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-black"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black"></div>
                <Button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg px-7 py-3.5 flex items-center space-x-2 text-base font-medium"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>Generate</span>
                </Button>
              </div>
              <p className="text-xs text-gray-600 mt-3 text-center">
                Native business solutions, fit for every project.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Image Showcase Section - Horizontal Marquee (Moved to bottom) */}
      <div className="w-full overflow-x-hidden py-8 px-6">
        {" "}
        {/* overflow-x-hidden to hide scrollbar */}
        <div className="flex space-x-4 min-w-max animate-marquee">
          {" "}
          {/* min-w-max and animate-marquee */}
          {/* Duplicate images for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <>
              {/* Image 1 */}
              <div
                key={`img-1-${setIndex}`}
                className="relative flex-shrink-0 w-[295px] h-[177px] border border-gray-400 rounded-lg overflow-hidden -ml-10"
              >
                <Image src="/images/image-left-1.png" alt="Website preview 1" layout="fill" objectFit="cover" />
              </div>
              {/* Image 2 */}
              <div
                key={`img-2-${setIndex}`}
                className="relative flex-shrink-0 w-[295px] h-[177px] border border-gray-400 rounded-lg overflow-hidden"
              >
                <Image src="/images/image-left-2.png" alt="Website preview 2" layout="fill" objectFit="cover" />
              </div>
              {/* Image 3 */}
              <div
                key={`img-3-${setIndex}`}
                className="relative flex-shrink-0 w-[295px] h-[177px] border border-gray-400 rounded-lg overflow-hidden"
              >
                <Image src="/images/image-right-1.png" alt="Website preview 3" layout="fill" objectFit="cover" />
              </div>
              {/* Image 4 */}
              <div
                key={`img-4-${setIndex}`}
                className="relative flex-shrink-0 w-[295px] h-[177px] border border-gray-400 rounded-lg overflow-hidden"
              >
                <Image src="/images/image-right-3.png" alt="Website preview 4" layout="fill" objectFit="cover" />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
