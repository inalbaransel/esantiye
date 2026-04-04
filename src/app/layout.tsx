import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "E-ŞANTİYE - Şantiyede Görünmez Kayıplara Son",
  description: "Türkiye'nin ilk saha-first inşaat yönetim platformu.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-saha-bg text-saha-text font-sans">
        {children}
      </body>
    </html>
  )
}
