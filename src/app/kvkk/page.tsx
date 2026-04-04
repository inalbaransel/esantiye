import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "KVKK Aydinlatma Metni",
  description:
    "E-Santiye KVKK aydinlatma metni: kisisel verilerin hangi amaclarla islendigini, saklandigini ve haklarinizi aciklar.",
  alternates: {
    canonical: "/kvkk",
  },
}

export default function KvkkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#fffaf0] p-8 ring-1 ring-[#f3d98b] sm:p-10">
          <h1 className="text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl">
            KVKK Aydınlatma Metni
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
            kapsamında E-Şantiye tarafından işlenen kişisel verilere ilişkin
            bilgilendirme amacıyla hazırlanmıştır.
          </p>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              1. Veri Sorumlusu
            </h2>
            <p>
              E-Şantiye, kullanıcılarına sunduğu hizmetler kapsamında kişisel
              verileri veri sorumlusu sıfatıyla işlemektedir.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              2. İşlenen Kişisel Veriler
            </h2>
            <p>
              Ad-soyad, iletişim bilgileri, şirket bilgileri, talep ve kullanım
              verileri ile hizmet sunumu için gerekli teknik veriler
              işlenebilmektedir.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              3. İşleme Amaçları
            </h2>
            <p>
              Kişisel veriler; hizmetlerin sunulması, müşteri ilişkilerinin
              yürütülmesi, talep ve şikayetlerin yönetilmesi, yasal
              yükümlülüklerin yerine getirilmesi ve güvenlik süreçlerinin
              yürütülmesi amaçlarıyla işlenmektedir.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              4. Aktarım ve Saklama
            </h2>
            <p>
              Veriler, kanuni zorunluluklar ve hizmetin ifası kapsamında yetkili
              kurumlar veya iş ortaklarıyla sınırlı şekilde paylaşılabilir.
              Kişisel veriler, ilgili mevzuatta öngörülen süreler boyunca
              güvenli şekilde saklanır.
            </p>
          </section>

          <section className="mt-8 space-y-4 text-slate-700">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
              5. KVKK Kapsamındaki Haklarınız
            </h2>
            <p>
              KVKK&apos;nın 11. maddesi kapsamında kişisel verilerinize ilişkin
              bilgi talep etme, düzeltme, silme, işlemeye itiraz etme ve zararın
              giderilmesini talep etme haklarına sahipsiniz.
            </p>
            <p>
              Taleplerinizi
              <a
                href="mailto:hello@esantiye.com"
                className="ml-1 font-semibold text-black underline decoration-[#e0ae1a] decoration-2 underline-offset-4"
              >
                hello@esantiye.com
              </a>
              adresine iletebilirsiniz.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
