import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/Navbar"
import ClosingCTA from "@/components/ClosingCTA"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Iletisim",
  description:
    "Demo talebi ve kurulum sureci icin E-Santiye ekibiyle iletisime gecin. Sahaniza uygun yol haritasini birlikte belirleyelim.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-xl bg-[#fffaf0] p-8 sm:p-10">
              <h1 className="text-4xl font-black tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
                Demo ve İletişim
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                E-Şantiye&apos;yi kendi operasyonunuza göre görmek için ekibimizle
                iletişime geçin. Size en uygun kurulum akışını birlikte
                netleştirelim.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4 rounded-xl bg-white p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1c9] text-saha-accent-strong">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      E-posta
                    </div>
                    <a
                      href="mailto:hello@esantiye.com"
                      className="mt-2 block cursor-pointer text-lg font-semibold text-black"
                    >
                      hello@esantiye.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1c9] text-saha-accent-strong">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Telefon
                    </div>
                    <a
                      href="tel:+905357631907"
                      className="mt-2 block cursor-pointer text-lg font-semibold text-black"
                    >
                      +90 535 763 19 07
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1c9] text-saha-accent-strong">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Konum
                    </div>
                    <div className="mt-2 text-lg font-semibold text-black">
                      İstanbul, Türkiye
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl bg-white p-8 ring-1 ring-black/6 sm:p-10">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
                İletişim Formu
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Bilgilerinizi bırakın, ekibimiz en kısa sürede size dönüş yapsın.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-500">
                      Ad Soyad
                    </span>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-500">
                      Firma
                    </span>
                    <input
                      type="text"
                      placeholder="Firma adı"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-500">
                      E-posta
                    </span>
                    <input
                      type="email"
                      placeholder="ornek@firma.com"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-500">
                      Telefon
                    </span>
                    <input
                      type="tel"
                      placeholder="+90 5xx xxx xx xx"
                      className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-500">
                    Mesajınız
                  </span>
                  <textarea
                    rows={6}
                    placeholder="Şantiye sayınız, ekip yapınız veya görmek istediğiniz modülleri yazabilirsiniz."
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
                  />
                </label>

                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-[#f4c542] px-8 py-4 text-base font-bold text-black transition hover:bg-[#e0ae1a]"
                >
                  Formu Gönder
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <ClosingCTA />
      <Footer />
    </>
  )
}
