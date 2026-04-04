"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Activity,
  BarChart3,
  Braces,
  ClipboardList,
  Grid2x2,
  Layers3,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const modules = [
  {
    title: "Doküman Yönetimi",
    description:
      "Klasörleme, yeniden adlandırma, kopyalama, sabitleme ve arşiv mantığı tek merkezde.",
    tag: "Merkezi",
    icon: ClipboardList,
    accent: "text-[#f4c542]",
    badge: "bg-[#f4c542]/12 text-[#f4c542]",
  },
  {
    title: "OnlyOffice",
    description:
      "Excel, CSV, Word, PowerPoint ve PDF dosyaları tarayıcı içinde açılır ve yönetilir.",
    tag: "Tarayıcı İçi",
    icon: Layers3,
    accent: "text-[#74a7ff]",
    badge: "bg-[#74a7ff]/12 text-[#74a7ff]",
  },
  {
    title: "Blok ve Kat Takibi",
    description:
      "Beton döküm durumu, planlanan tarih, miktar ve ilerleme bilgileri blok bazında izlenir.",
    tag: "Anlık Durum",
    icon: Braces,
    accent: "text-[#b18cff]",
    badge: "bg-[#b18cff]/12 text-[#b18cff]",
  },
  {
    title: "Görev Yönetimi",
    description:
      "Periyodik ve tekil görevler kişilere atanır, son tarih ve tamamlanma durumu sistemden izlenir.",
    tag: "Takipte",
    icon: Grid2x2,
    accent: "text-[#58d6a3]",
    badge: "bg-[#58d6a3]/12 text-[#58d6a3]",
  },
  {
    title: "Dashboard",
    description:
      "Şantiye, blok, kat, dosya ve klasör yoğunluğu ile son aktiviteler yönetsel ekranda görünür.",
    tag: "Canlı",
    icon: BarChart3,
    accent: "text-[#ff6b6b]",
    badge: "bg-[#ff6b6b]/12 text-[#ff6b6b]",
  },
  {
    title: "Aktivite ve Denetim",
    description:
      "Dosya yükleme, klasör işlemleri, blok güncellemeleri ve görev aksiyonları kayıt altına alınır.",
    tag: "İzlenebilir",
    icon: Activity,
    accent: "text-[#44d9e6]",
    badge: "bg-[#44d9e6]/12 text-[#44d9e6]",
  },
] as const

export default function ModuleShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".module-header > *",
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
        ".module-card",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".module-grid",
            start: "top 85%",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cozumler"
      className="py-20 lg:py-28 bg-white"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="rounded-xl bg-[#fffdf7] px-6 py-12 sm:px-10 lg:px-14 lg:py-16 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,197,66,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,244,191,0.55),transparent_30%)]" />
          <div className="relative z-10">
            <div className="module-header text-center mb-10 lg:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-[4rem] font-black tracking-tight leading-[1.05] text-black">
                Tek Ekran
                <span className="text-[#f4c542]"> Tam Hakimiyet</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-saha-gray font-medium">
                E-ŞANTİYE ile şantiyeniz cebinizde. Her veri anında dijital, her
                rapor anında hazır
              </p>
            </div>

            <div className="module-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {modules.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="module-card group rounded-xl bg-white p-6 lg:p-7 min-h-[220px] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-[#fff9e6] ${item.accent}`}
                      >
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <span
                        className={`px-0 py-1 text-[11px] font-black tracking-[0.2em] uppercase ${item.accent}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-saha-gray font-medium max-w-sm">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
