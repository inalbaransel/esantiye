import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Kullanim Kosullari",
  description:
    "E-Santiye platformuna iliskin kullanim kosullari, sorumluluklar ve fikri mulkiyet esaslarini inceleyin.",
  alternates: {
    canonical: "/kullanim-kosullari",
  },
}

export default function KullanimKosullariPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#fffaf0] p-8 ring-1 ring-[#f3d98b] sm:p-10">
          <h1 className="text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl">
            Kullanım Koşulları
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            Bu kullanım koşulları, E-Şantiye platformunu ziyaret eden ve
            kullanan tüm kullanıcılar için geçerlidir. Siteyi kullanarak aşağıda
            belirtilen koşulları kabul etmiş sayılırsınız.
          </p>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              1. Hizmetin Kapsamı
            </h2>
            <p>
              E-Şantiye, inşaat süreçlerinin yönetimine yönelik dijital çözümler
              sunar. Sunulan içerik ve hizmetler zaman içinde güncellenebilir,
              değiştirilebilir veya kaldırılabilir.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              2. Kullanıcı Yükümlülükleri
            </h2>
            <p>
              Kullanıcılar, platformu hukuka uygun şekilde kullanmakla, üçüncü
              kişilerin haklarını ihlal etmemekle ve yanıltıcı/zararlı içerik
              oluşturmamakla yükümlüdür.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              3. Fikri Mülkiyet
            </h2>
            <p>
              Platformda yer alan marka, logo, metin, tasarım ve diğer tüm
              içeriklerin fikri mülkiyet hakları E-Şantiye&apos;ye aittir.
              Yazılı izin olmadan kopyalanamaz veya ticari amaçla kullanılamaz.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              4. Sorumluluğun Sınırlandırılması
            </h2>
            <p>
              E-Şantiye, hizmetin kesintisiz veya hatasız olacağını taahhüt
              etmez. Kullanım sırasında oluşabilecek dolaylı veya doğrudan
              zararlardan, mevzuatın izin verdiği ölçüde sorumlu değildir.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              5. Değişiklik Hakkı
            </h2>
            <p>
              E-Şantiye, bu kullanım koşullarını önceden bildirim yapmaksızın
              güncelleme hakkını saklı tutar. Güncel metin bu sayfada
              yayımlandığı tarihten itibaren geçerli olur.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
