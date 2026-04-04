"use client"

import { useEffect, useRef } from "react"
import { Boxes, Zap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const features = [
  {
    title: "3D İlerleme Çubuğu",
    description: "Projenin fiziksel ilerlemesini kat ve blok bazında tek bakışta görün.",
  },
  {
    title: "Gömülü Excel Teknolojisi",
    description: "Alışık olduğunuz Excel esnekliği, merkezi veri yapısı ile birlikte çalışır.",
  },
  {
    title: "Log Kayıtları",
    description: "Kim, ne zaman, hangi veriyi girdi; tüm hareketler geriye dönük izlenir.",
  },
]

export default function MobileExecutiveSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-exec-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-[88rem] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="mobile-exec-reveal rounded-xl bg-[#fffdf7] p-7 sm:p-9 lg:p-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex size-11 items-center justify-center rounded-xl bg-[#fff1c9] text-saha-accent-strong">
              <Boxes className="size-5" />
            </div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Teknik Üstünlük
            </div>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fff1c9] text-saha-accent-strong">
                  <Zap className="size-4" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-lg leading-8 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-exec-reveal">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-7xl">
            Saha Şefi için Mobil,
            <br />
            <span className="text-saha-accent-strong">CEO için Dashboard.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Veri sahadan girilir, karar ofisten verilir. E-Şantiye bu iki dünyayı
            saniyeler içinde birleştirir.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-3">
              <div className="size-14 rounded-full border-2 border-white bg-[linear-gradient(135deg,#d6d3d1,#78716c)]" />
              <div className="size-14 rounded-full border-2 border-white bg-[linear-gradient(135deg,#fde68a,#f59e0b)]" />
              <div className="size-14 rounded-full border-2 border-white bg-[linear-gradient(135deg,#86efac,#15803d)]" />
              <div className="size-14 rounded-full border-2 border-white bg-[linear-gradient(135deg,#bfdbfe,#2563eb)]" />
            </div>

            <div>
              <div className="text-2xl font-semibold tracking-[-0.03em] text-black">
                120+ Firma
              </div>
              <div className="mt-1 text-lg text-slate-500">
                E-Şantiye ile operasyonunu kontrol altına aldı.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
