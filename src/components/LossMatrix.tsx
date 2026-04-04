"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertOctagon, TrendingDown, FileWarning, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LossMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Başlık animasyonları
      gsap.fromTo(".matrix-header > *", 
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Kart / Satır animasyonları
      gsap.fromTo(".matrix-row", 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".matrix-container",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="maliyet" className="py-20 lg:py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="matrix-header text-center mb-12 lg:mb-20">
           <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] leading-tight font-black tracking-tight mb-4 lg:mb-6">
            Görünmez Kayıpları <span className="text-saha-accent-strong">Durdurun</span>
          </h2>
          <p className="text-base sm:text-xl text-saha-gray font-medium max-w-2xl mx-auto">
            100 Milyon TL&apos;lik bir projede fark edilmeyen kayıplar bütçenin %8&apos;ine ulaşır. Gelin, görün!
          </p>
        </div>

        <div className="matrix-container bg-white rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4">
            
            <div className="hidden lg:grid grid-cols-12 gap-4 pb-4 text-sm font-bold text-saha-gray uppercase tracking-widest px-6">
              <div className="col-span-4">Kayıp Kalemi</div>
              <div className="col-span-2">Oran</div>
              <div className="col-span-3 text-black">Finansal Risk</div>
              <div className="col-span-3 text-saha-accent-strong">Çözüm</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center bg-saha-soft lg:bg-transparent p-5 sm:p-6 rounded-xl transition-all">
               <div className="lg:col-span-4 flex items-center gap-3 lg:gap-4">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-50 flex items-center justify-center text-saha-red shrink-0">
                    <AlertOctagon size={20} className="lg:w-6 lg:h-6" />
                 </div>
                 <span className="font-black text-lg sm:text-xl text-black">Beton/Demir Firesi</span>
               </div>
               
               <div className="lg:col-span-2 flex justify-between lg:block w-full text-sm sm:text-base text-saha-gray font-bold lg:text-lg">
                 <span className="lg:hidden text-saha-gray-light uppercase text-xs">Oran:</span> %5 - %12
               </div>
               
               <div className="lg:col-span-3 flex justify-between lg:block w-full text-xl sm:text-2xl font-black text-black">
                 <span className="lg:hidden text-saha-gray-light uppercase text-xs font-bold self-center">Risk:</span> 2.5 - 6 M₺
               </div>
               
               <div className="lg:col-span-3 text-xs sm:text-sm text-saha-gray font-semibold flex items-start lg:items-center gap-2 lg:gap-3 mt-2 lg:mt-0 pt-3 lg:pt-0 lg:border-none w-full">
                 <CheckCircle size={16} className="text-saha-accent-strong shrink-0 mt-0.5 lg:mt-0 lg:w-5 lg:h-5" />
                 <span>Otomatik icmal ile ilk günden tespit.</span>
               </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center bg-saha-soft lg:bg-transparent p-5 sm:p-6 rounded-xl transition-all">
               <div className="lg:col-span-4 flex items-center gap-3 lg:gap-4">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-saha-accent-soft flex items-center justify-center text-saha-accent-strong shrink-0">
                    <TrendingDown size={20} className="lg:w-6 lg:h-6" />
                 </div>
                 <span className="font-black text-lg sm:text-xl text-black">Puantaj Hataları</span>
               </div>
               
               <div className="lg:col-span-2 flex justify-between lg:block w-full text-sm sm:text-base text-saha-gray font-bold lg:text-lg">
                 <span className="lg:hidden text-saha-gray-light uppercase text-xs">Oran:</span> %1 - %2
               </div>
               
               <div className="lg:col-span-3 flex justify-between lg:block w-full text-xl sm:text-2xl font-black text-black">
                 <span className="lg:hidden text-saha-gray-light uppercase text-xs font-bold self-center">Risk:</span> 1 - 2 M₺
               </div>
               
               <div className="lg:col-span-3 text-xs sm:text-sm text-saha-gray font-semibold flex items-start lg:items-center gap-2 lg:gap-3 mt-2 lg:mt-0 pt-3 lg:pt-0 lg:border-none w-full">
                 <CheckCircle size={16} className="text-saha-accent-strong shrink-0 mt-0.5 lg:mt-0 lg:w-5 lg:h-5" />
                 <span>SGK uyarıları ile tutarsızlık engeli.</span>
               </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center bg-saha-soft lg:bg-transparent p-5 sm:p-6 rounded-xl transition-all">
               <div className="lg:col-span-4 flex items-center gap-3 lg:gap-4">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <FileWarning size={20} className="lg:w-6 lg:h-6" />
                 </div>
                 <span className="font-black text-lg sm:text-xl text-black">Denetim Cezaları</span>
               </div>
               
               <div className="lg:col-span-2 flex justify-between lg:block w-full text-sm sm:text-base text-saha-gray font-bold lg:text-lg">
                 <span className="lg:hidden text-saha-gray-light uppercase text-xs">Oran:</span> Değişken
               </div>
               
               <div className="lg:col-span-3 flex justify-between lg:block w-full text-xl sm:text-2xl font-black text-black">
                 <span className="lg:hidden text-saha-gray-light uppercase text-xs font-bold self-center">Risk:</span> 500 Bin ₺+
               </div>
               
               <div className="lg:col-span-3 text-xs sm:text-sm text-saha-gray font-semibold flex items-start lg:items-center gap-2 lg:gap-3 mt-2 lg:mt-0 pt-3 lg:pt-0 lg:border-none w-full">
                 <CheckCircle size={16} className="text-saha-accent-strong shrink-0 mt-0.5 lg:mt-0 lg:w-5 lg:h-5" />
                 <span>EBiS ve İSG mevzuat uyumu.</span>
               </div>
            </div>

            {/* Total */}
            <div className="mt-4 sm:mt-6 bg-saha-accent-soft p-6 sm:p-8 lg:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
               <div>
                 <div className="text-saha-accent-strong font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Toplam Yönetim Riski</div>
                 <div className="text-black text-sm sm:text-base lg:text-lg font-medium max-w-sm">100M₺&apos;lik projede fark edilmeyen minimum maliyet</div>
               </div>
               <div className="text-center md:text-right shrink-0">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4">~ 8 Milyon ₺</div>
                  <div className="text-black bg-[#f4c542] px-4 sm:px-6 py-2 sm:py-3 rounded-[999px] inline-block font-black tracking-wide text-[10px] sm:text-sm whitespace-nowrap">E-ŞANTİYE İLE %90 TASARRUF EDİN</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
