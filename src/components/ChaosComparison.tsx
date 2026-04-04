"use client"

import { useEffect, useRef } from "react"
import { AlertCircle, CheckCircle2, CircleX } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const painPoints = [
  "1 hafta gecikmiş WhatsApp mesajları",
  "Takip edilemeyen beton ve demir fireleri",
  "Şantiyede kaybolan fişler ve ekler",
  "Proje bitince fark edilen operasyon zararı",
]

const controlPoints = [
  "Anlık blok, kat ve malzeme görünürlüğü",
  "Tek ekranda çoklu şantiye operasyon takibi",
  "5 dakikada dijital raporlama ve paylaşım",
  "Tarayıcı içi Office erişimi ve merkezi arşiv",
]

export default function ChaosComparison() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".chaos-header > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      )

      gsap.fromTo(
        ".chaos-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".chaos-grid",
            start: "top 82%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-5 pb-8 pt-4 sm:px-8 sm:pb-10">
      <div className="mx-auto max-w-[88rem]">
        <div className="rounded-xl bg-[#fffaf0] px-6 py-14 text-black sm:px-10 sm:py-16 lg:px-16">
          <div className="chaos-header mx-auto max-w-4xl text-center">
            <h2 className="max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Patron kararlarını bir haftalık{" "}
              <span className="text-saha-accent-strong">WhatsApp mesajlarıyla</span> alıyor.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Gecikmiş raporlar, kayıp fişler, dağınık Excel dosyaları ve sözlü takip
              yüzünden operasyon görünmez hale gelir. E-Şantiye bu kaosu tek merkezde
              kontrol edilebilir bir düzene çevirir.
            </p>
          </div>

          <div className="chaos-grid mt-12 grid gap-5 lg:grid-cols-2">
            <article className="chaos-card rounded-xl bg-white p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fff1f2] text-[#ef4444]">
                  <CircleX className="size-5" />
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.03em] text-black">
                    Eski Dünya (Kaos)
                  </p>
                  <p className="mt-2 text-base text-slate-500">
                    Bilgi kişilere, mesajlara ve dağınık dosyalara bağlı kalır.
                  </p>
                </div>
              </div>

              <ul className="mt-10 space-y-5">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-slate-600">
                    <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-[#fff1f2] text-[#ef4444]">
                      <AlertCircle className="size-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="chaos-card rounded-xl bg-[#fff4db] p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#ffe7ab] text-saha-accent-strong">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.03em] text-saha-accent-strong">
                    E-Şantiye (Kontrol)
                  </p>
                  <p className="mt-2 text-base text-slate-600">
                    Operasyon, doküman ve raporlama tek platformda izlenir.
                  </p>
                </div>
              </div>

              <ul className="mt-10 space-y-5">
                {controlPoints.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-slate-700">
                    <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-[#ffe7ab] text-saha-accent-strong">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl bg-white px-5 py-4 text-sm text-slate-600">
                Şantiye kararları sahadan gelen dağınık mesajlarla değil; dashboard,
                OnlyOffice belgeleri ve canlı hareket kayıtlarıyla alınır.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
