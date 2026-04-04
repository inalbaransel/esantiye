"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ArrowRight, Activity, HardHat } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      gsap.from(".hero-mockups", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      })

      // Sadece masaüstünde floating effect ver (mobilde kasmaması ve layout bozmaması için)
      if (window.innerWidth > 1024) {
        gsap.to(".floating-element", {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative pt-32 lg:pt-40 pb-20 overflow-hidden min-h-screen flex items-center bg-white"
    >
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-[#fff4bf]/70 to-white -z-10" />

      <div className="container mx-auto max-w-[88rem] px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left: Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left z-10 pt-0 lg:pt-6">
          <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.1] lg:leading-none mb-6 text-black">
            100 Milyon TL&apos;lik Projenizde
            <br className="hidden lg:block" />
            <span className="text-[#f4c542]">8 Milyon TL Nerede?</span>
          </h1>

          <p className="hero-text text-base sm:text-lg md:text-xl lg:text-2xl text-saha-gray mb-8 lg:mb-10 max-w-lg leading-relaxed font-medium px-2 lg:px-0">
            Saha verileri WhatsApp mesajlarında kaybolmasın. Projeniz bittiğinde
            değil, bütçeniz erimeden görün.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-2 lg:px-0">
            <Link
              href="/contact"
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#f4c542] px-6 py-4 text-base font-bold text-black transition-all shadow-[0_14px_35px_rgba(244,197,66,0.25)] hover:bg-[#e0ae1a] sm:w-auto"
            >
              Demo Talep Et
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform text-black"
              />
            </Link>
          </div>
        </div>

        {/* Right: Mockups (Responsive) */}
        <div className="hero-mockups order-1 lg:order-2 relative w-full flex justify-center lg:block h-[580px] lg:h-[600px] mt-4 lg:mt-0 perspective-1000">
          {/* Sadece Tablet: Desktop ve büyük ekranlarda göster, mobilde gizle */}
          <div className="hidden lg:block absolute right-0 top-10 w-[680px] h-[470px] bg-white rounded-xl overflow-hidden floating-element transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg]">
            {/* Window bar */}
            <div className="w-full h-12 bg-saha-soft border-b border-saha-border flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-saha-accent" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            {/* Tablet Content */}
            <div className="p-6 grid grid-cols-3 gap-6 h-full bg-white">
              <div className="col-span-2 space-y-4">
                <div className="h-32 bg-saha-soft rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
                  <div>
                    <div className="text-saha-gray-light font-semibold text-sm mb-1 uppercase tracking-wider">
                      Günlük Bilanço
                    </div>
                    <div className="text-4xl font-black text-black">
                      ₺84.500
                      <span className="text-xl text-saha-green ml-2 tracking-normal font-bold">
                        ▲ %12
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 h-32 bg-white rounded-xl p-5 flex flex-col justify-center">
                    <div className="text-saha-gray-light font-semibold text-xs mb-2 uppercase">
                      Beton Firesi
                    </div>
                    <div className="text-3xl font-black text-saha-red flex items-center gap-2">
                      8 yeni belge <Activity size={20} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="flex-1 h-32 bg-white rounded-xl p-5 flex flex-col justify-center">
                    <div className="text-saha-gray-light font-semibold text-xs mb-2 uppercase">
                      Sabitlenen Klasör
                    </div>
                    <div className="text-3xl font-black text-black">
                      24{" "}
                      <span className="text-saha-gray text-base font-semibold">
                        Adet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-saha-soft rounded-xl p-5">
                <div className="text-xs text-black font-black mb-4 uppercase tracking-widest">
                  Son İşlemler
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl">
                    <div className="text-[10px] text-saha-red font-black mb-1 uppercase">
                      PAYLAŞIM
                    </div>
                    <div className="text-xs text-saha-gray font-medium leading-tight">
                      Hakediş klasörü için dış paylaşım linki oluşturuldu.
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl">
                    <div className="text-[10px] text-saha-green font-black mb-1 uppercase">
                      ONLYOFFICE
                    </div>
                    <div className="text-xs text-saha-gray font-medium leading-tight">
                      Metraj.xlsx tarayıcı içinde açıldı ve güncellendi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telefon: Hem mobilde merkezde, hem masaüstünde köşede görünür */}
          <div className="relative lg:absolute lg:left-0 lg:bottom-0 w-[280px] sm:w-[320px] lg:w-[280px] h-[580px] bg-black rounded-[50px] border-8 border-black shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden floating-element mx-auto lg:mx-0">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
            <div className="w-full h-full bg-white flex flex-col">
              <div className="pt-14 px-6 pb-6 bg-saha-soft border-b border-gray-100">
                <div className="text-[10px] text-saha-gray-light font-bold tracking-widest mb-1">
                  SAHA UYGULAMASI
                </div>
                <div className="text-2xl font-black text-black">Bugün</div>
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="w-full h-32 bg-white rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-black hover:border-black transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-saha-soft flex items-center justify-center mb-2">
                    <HardHat size={22} className="text-black" />
                  </div>
                  <span className="text-sm font-bold">Excel / PDF Yükle</span>
                </div>

                <div className="space-y-3">
                  <div className="h-14 bg-saha-soft rounded-xl flex items-center px-4 w-full justify-between">
                    <span className="text-sm text-black font-bold">
                      Keşif ve Metraj
                    </span>
                    <div className="w-6 h-6 rounded-full bg-saha-green flex items-center justify-center text-white text-[10px] font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="h-14 bg-saha-soft rounded-xl flex items-center px-4 w-full justify-between">
                    <span className="text-sm text-saha-gray font-medium">
                      Haftalık İlerleme Raporu
                    </span>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-auto block w-full cursor-pointer rounded-full bg-black py-4 text-center text-sm font-bold text-white shadow-xl shadow-black/20"
                >
                  Dokümanı Aç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
