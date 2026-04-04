"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ClosingCTA() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".closing-cta-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="overflow-hidden bg-saha-accent px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute" />
      <div className="relative mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-xl px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full border border-white/25" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-white/25" />

          <div className="closing-cta-reveal relative mx-auto max-w-5xl">
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              Sahadan Başlayın,
              <br />
              Geleceği İnşa Edin
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/88 sm:text-xl">
              İlk şantiyenizi bugün dijitalleştirin. Excel, doküman ve saha
              operasyonunu tek merkezde toplamak için ekibimizle görüşün.
            </p>

            <div className="closing-cta-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-black px-8 py-4 text-base font-black text-white transition-all hover:bg-black/90 sm:w-auto sm:min-w-64 sm:text-xl"
              >
                Hemen Başlayın
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                href="/contact"
                className="w-full cursor-pointer rounded-xl bg-white px-8 py-4 text-center text-base font-black text-black transition-all hover:bg-white/90 sm:w-auto sm:min-w-64 sm:text-xl"
              >
                Satış Ekibiyle Görüş
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
