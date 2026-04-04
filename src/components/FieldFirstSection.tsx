"use client"

import { useEffect, useRef } from "react"
import { Smartphone, Siren, LayoutDashboard } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const cards = [
  {
    icon: Smartphone,
    title: "5 Dakikada Rapor",
    description: "Şefin elinde telefon, 5 dakikada günlük rapor hazır. Fotoğraflı, imzalı ve anlık.",
  },
  {
    icon: Siren,
    title: "Anlık Kritik Uyarılar",
    description: "Geciken iş, eksik evrak ve blok bazlı sapmalar yönetime anında görünür.",
  },
  {
    icon: LayoutDashboard,
    title: "CEO Dashboard",
    description: "Tüm şantiyelerin ilerlemesi, bütçesi ve operasyon ritmi tek ekranda izlenir.",
  },
]

export default function FieldFirstSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".field-first-reveal",
        { opacity: 0, y: 26 },
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
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="field-first-reveal">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-7xl">
              Diğerleri ofisten başlar,
              <br />
              <span className="text-saha-accent-strong">E-Şantiye sahadan başlar.</span>
            </h2>
          </div>

          <div className="field-first-reveal max-w-xl lg:justify-self-end">
            <p className="text-xl leading-9 text-slate-500 lg:text-right">
              Şantiyenin gerçeklerini biliyoruz. Karmaşık yazılımlar değil,
              sahada kullanılan net operasyon akışları üretiyoruz.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon

            return (
              <article key={card.title} className="field-first-reveal rounded-xl bg-[#fffdf7] p-7 sm:p-8">
                <div className="flex size-14 items-center justify-center rounded-xl bg-[#fff1c9] text-saha-accent-strong">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em] text-black">
                  {card.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {card.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
