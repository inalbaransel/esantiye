"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function formatCompactTl(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M TL`
  }

  if (value >= 1_000) {
    return `${Math.round(value / 1_000)}K TL`
  }

  return `${value.toLocaleString("tr-TR")} TL`
}

export default function RoiCalculator() {
  const [siteCount, setSiteCount] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)

  const metrics = useMemo(() => {
    const annualSavings = siteCount * 1_850_000
    const annualCost = siteCount * 71_000
    const netGain = annualSavings - annualCost
    const roi = Math.round(netGain / annualCost)

    return { annualSavings, annualCost, netGain, roi }
  }, [siteCount])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".roi-header > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        },
      )

      gsap.fromTo(
        ".roi-panel",
        { opacity: 0, y: 40, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".roi-panel",
            start: "top 85%",
          },
        },
      )

      gsap.fromTo(
        ".roi-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".roi-cards",
            start: "top 88%",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-white" ref={containerRef}>
      <div className="container mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="roi-header text-center mb-10 lg:mb-14">
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1.05] text-black">
            Ne kadar <span className="text-[#f4c542]">tasarruf</span> edersiniz?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-saha-gray font-medium">
            Aktif şantiye sayınızı seçin, yıllık tasarruf ve net getiri
            potansiyelini anında görün.
          </p>
        </div>

        <div className="roi-panel rounded-xl bg-white p-2 sm:p-3 lg:p-4">
          <div className="rounded-xl bg-[#fffdf4] p-5 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <div className="text-sm sm:text-base font-black text-black mb-2">
                  Aktif Şantiye Sayısı
                </div>
                <div className="text-sm text-saha-gray font-medium">
                  1 ile 20 arası ölçek senaryosu
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-[#f4c542] tabular-nums">
                {siteCount}
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              value={siteCount}
              onChange={(event) => setSiteCount(Number(event.target.value))}
              className="w-full accent-[#f4c542] cursor-pointer"
            />

            <div className="mt-3 flex justify-between text-sm font-bold text-saha-gray-light">
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          <div className="roi-cards mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            <article className="roi-card rounded-xl bg-white p-6 lg:p-7">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
                Yıllık Tasarruf
              </div>
              <div className="mt-4 text-4xl lg:text-5xl font-black text-emerald-600 tracking-tight">
                {formatCompactTl(metrics.annualSavings)}
              </div>
              <p className="mt-3 text-sm lg:text-base text-saha-gray font-medium">
                Fire, işçilik ve yönetim kayıplarının azaltılmasıyla oluşan
                toplam etki.
              </p>
            </article>

            <article className="roi-card rounded-xl bg-[#fff9e6] p-6 lg:p-7">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-[#c58d00]">
                Yazılım Maliyeti
              </div>
              <div className="mt-4 text-4xl lg:text-5xl font-black text-[#c58d00] tracking-tight">
                {formatCompactTl(metrics.annualCost)}
              </div>
              <p className="mt-3 text-sm lg:text-base text-saha-gray font-medium">
                {siteCount} şantiye için yıllık lisans ve operasyonel kullanım
                maliyeti.
              </p>
            </article>

            <article className="roi-card rounded-xl bg-white p-6 lg:p-7">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                Net Getiri
              </div>
              <div className="mt-4 text-4xl lg:text-5xl font-black text-violet-600 tracking-tight">
                {formatCompactTl(metrics.netGain)}
              </div>
              <p className="mt-3 text-sm lg:text-base text-saha-gray font-medium">
                Yaklaşık {metrics.roi}x ROI ile yatırımın geri dönüşü ilk yılda
                net görünür hale gelir.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
