import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ChaosComparison from "@/components/ChaosComparison"
import StatsStrip from "@/components/StatsStrip"
import ModuleShowcase from "@/components/ModuleShowcase"
import RoiCalculator from "@/components/RoiCalculator"
import LossMatrix from "@/components/LossMatrix"
import FieldFirstSection from "@/components/FieldFirstSection"
import RoadmapTimeline from "@/components/RoadmapTimeline"
import MobileExecutiveSection from "@/components/MobileExecutiveSection"
import ClosingCTA from "@/components/ClosingCTA"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "E-Santiye ile saha operasyonlarini tek panelden yonetin. Is planlama, ekip koordinasyonu, kayip analizi ve raporlama sureclerini hizlandirin.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white selection:bg-saha-accent selection:text-black">
      <Navbar />
      <Hero />
      <ChaosComparison />
      <StatsStrip />
      <ModuleShowcase />
      <RoiCalculator />
      <LossMatrix />
      <FieldFirstSection />
      <MobileExecutiveSection />
      <RoadmapTimeline />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
