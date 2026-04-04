"use client"

import { useEffect, useRef } from "react"
import { Bolt, ClipboardCheck, FolderKanban, LineChart } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const steps = [
  {
    day: "Gün 1",
    title: "Sistem Kurulumu",
    description:
      "Projelerin, ekiplerin ve şantiye yapısının sisteme tanımlanması.",
    icon: Bolt,
  },
  {
    day: "Gün 5",
    title: "Saha Eğitimi",
    description:
      "Şantiye şefleri ve teknik ofis ekipleri mobil kullanım akışına alınır.",
    icon: ClipboardCheck,
  },
  {
    day: "Gün 10",
    title: "Doküman Merkezi",
    description:
      "Excel, PDF ve OnlyOffice dosyaları klasör yapısıyla tek merkezde toplanır.",
    icon: FolderKanban,
  },
  {
    day: "Gün 15",
    title: "Canlı Yönetim",
    description:
      "Dashboard, raporlama ve kontrol panelleriyle tüm operasyon görünür hale gelir.",
    icon: LineChart,
  },
]

export default function RoadmapTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".roadmap-header > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".roadmap-step-left .roadmap-card",
        { opacity: 0, x: -90 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".roadmap-track",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".roadmap-step-right .roadmap-card",
        { opacity: 0, x: 90 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".roadmap-track",
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".roadmap-step-icon",
        { opacity: 0, scale: 0.75 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".roadmap-track",
            start: "top 82%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[88rem] rounded-xl bg-[#fffdf7] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="roadmap-header mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
            Dijitalleşme Yol Haritası
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Sadece 15 günde şantiye operasyonunu kontrol altına alıp ekipleri
            tek sistemde çalışır hale getiriyoruz.
          </p>
        </div>

        <div className="roadmap-track relative mx-auto mt-14 max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#eadfb8] lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const alignLeft = index % 2 === 0

              return (
                <div
                  key={step.day}
                  className={`roadmap-step grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr] ${
                    alignLeft ? "roadmap-step-left" : "roadmap-step-right"
                  }`}
                >
                  <div className={`${alignLeft ? "lg:block" : "lg:order-3"} `}>
                    <article className="roadmap-card rounded-xl bg-white p-7 lg:max-w-[29rem] lg:p-8">
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-saha-accent-strong">
                        {step.day}
                      </div>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-black">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-slate-600">
                        {step.description}
                      </p>
                    </article>
                  </div>

                  <div
                    className={`relative z-10 hidden lg:flex ${alignLeft ? "" : "lg:order-2"} items-center justify-center`}
                  >
                    <div className="roadmap-step-icon flex size-14 items-center justify-center rounded-full bg-black text-saha-accent shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  <div
                    className={`${alignLeft ? "lg:order-3" : "lg:block"} hidden lg:block`}
                  />

                  <div className="flex items-center gap-4 lg:hidden">
                    <div className="roadmap-step-icon flex size-12 shrink-0 items-center justify-center rounded-full bg-black text-saha-accent">
                      <Icon className="size-5" />
                    </div>
                    <div className="h-px flex-1 bg-[#eadfb8]" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
