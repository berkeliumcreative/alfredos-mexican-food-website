// @ts-nocheck
"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ACCENT = "#C84B31";
const ACCENT_DARK = "#6B2C20";
const ACCENT_LIGHT = "#FDB37F";
const BG = "#FDF8F0";
const BG_WARM = "#F8EFE0";
const TEXT = "#2A1810";
const TEXT_MUTED = "#5C4538";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.8s 0.15s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.8s 0.3s ease-out both; }
        .fade-in { animation: fadeIn 1.1s ease-out forwards; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(253,248,240,0.88)", borderBottom: `1px solid ${ACCENT}15` }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.5rem", fontWeight: 700, color: ACCENT_DARK }}>Alfredo's</span>
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#menu" className="hidden md:inline text-sm hover:opacity-70" style={{ color: TEXT }}>Menu</a>
            <a href="#reviews" className="hidden md:inline text-sm hover:opacity-70" style={{ color: TEXT }}>Reviews</a>
            <a href="#visit" className="hidden md:inline text-sm hover:opacity-70" style={{ color: TEXT }}>Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105" style={{ backgroundColor: ACCENT }}>Order Now</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(107,44,32,0.92) 0%, rgba(200,75,49,0.65) 50%, rgba(107,44,32,0.4) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 z-10 fade-up">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-6" style={{ color: ACCENT_LIGHT }}>Burbank • Family-run</p>
          <h1 className={display.className} style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.02em" }}>{content.hero.heading}</h1>
          <p className="text-xl md:text-2xl text-white/95 mt-8 max-w-2xl fade-up-d1" style={{ lineHeight: 1.5 }}>{content.hero.subheading}</p>
          <div className="mt-12 flex flex-wrap gap-4 fade-up-d2">
            <a href={content.hero.ctaLink} className="px-10 py-4 rounded-full text-white font-semibold transition-transform hover:scale-105 shadow-xl" style={{ backgroundColor: ACCENT }}>{content.hero.ctaText}</a>
            <a href="#menu" className="px-10 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white transition-all" style={{ color: "white" }}>See the Menu</a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-white/90 fade-up-d2">
            <span className="text-lg" style={{ color: ACCENT_LIGHT }}>★★★★★</span>
            <span className="text-sm">4.3 from 566 happy regulars</span>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-4" style={{ color: ACCENT }}>Our story</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: ACCENT_DARK, lineHeight: 1.1 }}>{content.about.heading}</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="menu" className="py-24 md:py-32" style={{ backgroundColor: BG_WARM }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-3" style={{ color: ACCENT }}>The menu</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: ACCENT_DARK }}>Made fresh. Every day.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow" style={{ border: `1px solid ${ACCENT}15` }}>
                <h3 className={display.className} style={{ fontWeight: 700, fontSize: "1.5rem", color: ACCENT_DARK }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{s.description}</p>
                {s.price && <p className="mt-5 font-semibold text-lg" style={{ color: ACCENT }}>{s.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-3" style={{ color: ACCENT }}>What people say</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: ACCENT_DARK }}>Regulars for a reason.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white" style={{ border: `1px solid ${ACCENT}15` }}>
              <div className="flex gap-1 mb-4 text-lg" style={{ color: ACCENT }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-base leading-relaxed italic" style={{ color: TEXT_MUTED }}>"{r.text}"</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT_DARK }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-24 md:py-32" style={{ backgroundColor: ACCENT_DARK, color: "white" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-3" style={{ color: ACCENT_LIGHT }}>Come hungry</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "white", lineHeight: 1.1 }}>Visit us in Burbank</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">{content.contact.address}</p>
            <a href={phoneTel} className="block mt-2 text-3xl font-bold transition-opacity hover:opacity-80" style={{ color: ACCENT_LIGHT }}>{content.contact.phone}</a>
            <table className="mt-10 w-full text-base">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} className="border-b border-white/15">
                    <td className="py-3.5 font-semibold">{day}</td>
                    <td className="py-3.5 text-right text-white/85">{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: "480px" }}>
            <iframe title="Alfredo's Mexican Food Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "480px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="rounded-3xl p-12 md:p-20 text-center" style={{ backgroundColor: ACCENT, color: "white" }}>
          <h3 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>Hungry yet?</h3>
          <p className="mt-5 text-xl text-white/90">Pick up the phone or stop by — we'll have your plate ready.</p>
          <a href={phoneTel} className="inline-block mt-10 px-12 py-5 rounded-full bg-white font-bold text-lg transition-transform hover:scale-105 shadow-xl" style={{ color: ACCENT_DARK }}>Call {content.contact.phone}</a>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: `${ACCENT}20`, backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.5rem", fontWeight: 700, color: ACCENT_DARK }}>Alfredo's Mexican Food</p>
            <p className="mt-2">{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} className="hover:underline">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Alfredo's Mexican Food. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}