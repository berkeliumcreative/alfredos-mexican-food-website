// @ts-nocheck
"use client";

import { Playfair_Display_SC, Karla } from "next/font/google";
import content from "../data/content.json";

const display = Playfair_Display_SC({ subsets: ["latin"], weight: ["400", "700"] });
const body = Karla({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// Vibrant & Block-based — festive Mexican duotone
const RED = "#CE1126";
const RED_DEEP = "#8B0918";
const GOLD = "#F4C430";
const GOLD_DEEP = "#B8941F";
const GREEN = "#1B5E20";
const CREAM = "#FFF8E7";
const CHARCOAL = "#1A1A1A";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  const services = content.services;

  return (
    <main className={body.className} style={{ backgroundColor: CREAM, color: CHARCOAL, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes slideBlock { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes panBg { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
        .slide-block { animation: slideBlock 0.7s cubic-bezier(.2,.9,.2,1) forwards; }
        .slide-block-d1 { animation: slideBlock 0.7s 0.15s cubic-bezier(.2,.9,.2,1) both; }
        .slide-block-d2 { animation: slideBlock 0.7s 0.3s cubic-bezier(.2,.9,.2,1) both; }
        .pan-bg { animation: panBg 22s linear infinite; background-size: 200% 200%; }
        .block-hover { transition: background-color 220ms, color 220ms, transform 220ms; }
        .block-hover:hover { background-color: ${RED}; color: ${CREAM}; }
      `}</style>

      {/* NAV — flat bold block */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: CREAM, borderBottom: `4px solid ${CHARCOAL}` }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.45rem", fontWeight: 700, color: CHARCOAL, letterSpacing: "0.04em" }}>
            ALFREDO&apos;S
          </span>
          <div className="flex items-center gap-6 md:gap-10">
            <a href="#menu" className="hidden md:inline text-sm font-bold uppercase tracking-widest hover:text-[#CE1126] transition-colors duration-200">Menu</a>
            <a href="#story" className="hidden md:inline text-sm font-bold uppercase tracking-widest hover:text-[#CE1126] transition-colors duration-200">Story</a>
            <a href="#visit" className="hidden md:inline text-sm font-bold uppercase tracking-widest hover:text-[#CE1126] transition-colors duration-200">Visit</a>
            <a href={phoneTel} className="px-6 py-3 text-sm font-bold uppercase tracking-widest block-hover" style={{ backgroundColor: CHARCOAL, color: CREAM }}>Call</a>
          </div>
        </div>
      </nav>

      {/* HERO — block duotone */}
      <section className="relative overflow-hidden" style={{ backgroundColor: RED }}>
        <div className="absolute inset-0 pan-bg opacity-25" style={{ backgroundImage: `radial-gradient(circle at 20% 20%, ${GOLD} 0%, transparent 30%), radial-gradient(circle at 80% 70%, ${GREEN} 0%, transparent 35%)` }} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-32 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 slide-block">
            <p className={body.className + " mb-8"} style={{ fontSize: "0.85rem", fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: "0.3em" }}>★ Familia · Burbank · Since Day One</p>
            <h1 className={display.className} style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)", color: CREAM, lineHeight: 0.88, letterSpacing: "0.01em", fontWeight: 700 }}>
              Real<br />Mexican.<br /><span style={{ color: GOLD }}>Period.</span>
            </h1>
            <p className="mt-10 max-w-md text-xl md:text-2xl slide-block-d1" style={{ color: CREAM, lineHeight: 1.45, fontWeight: 400 }}>
              {content.hero.subheading}
            </p>
            <div className="mt-12 flex flex-wrap gap-5 slide-block-d2">
              <a href={content.hero.ctaLink} className="px-10 py-5 block-hover text-base font-bold uppercase tracking-widest" style={{ backgroundColor: GOLD, color: CHARCOAL }}>
                Order &rarr; {content.contact.phone}
              </a>
              <a href="#menu" className="px-10 py-5 block-hover text-base font-bold uppercase tracking-widest" style={{ backgroundColor: "transparent", color: CREAM, border: `3px solid ${CREAM}` }}>
                See the Menu
              </a>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 slide-block-d2 text-sm font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
              <span>★ 4.3 / 5</span>
              <span>566 reviews</span>
              <span>Open 7 days</span>
            </div>
          </div>
          <div className="md:col-span-5 slide-block-d1">
            <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")`, boxShadow: `12px 12px 0 ${GOLD}` }} />
          </div>
        </div>
      </section>

      {/* STORY — bold full-bleed block */}
      <section id="story" style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: RED, textTransform: "uppercase", letterSpacing: "0.3em" }}>The Story</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: CHARCOAL, lineHeight: 0.95, fontWeight: 700, marginTop: "1.5rem" }}>
              Generations<br /><span style={{ color: RED }}>of regulars.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-xl md:text-2xl" style={{ color: CHARCOAL, lineHeight: 1.55, fontWeight: 400 }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* MENU — geometric blocks, NOT cards */}
      <section id="menu" style={{ backgroundColor: CHARCOAL }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-12">
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: "0.3em" }}>The Menu</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)", color: CREAM, lineHeight: 0.92, fontWeight: 700, marginTop: "1.5rem", maxWidth: "900px" }}>
            Six things<br />we make <span style={{ color: GOLD }}>just right.</span>
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-36 grid md:grid-cols-3 gap-1">
          {services.map((s, i) => {
            const palette = [
              { bg: RED, fg: CREAM, accent: GOLD },
              { bg: GOLD, fg: CHARCOAL, accent: RED },
              { bg: GREEN, fg: CREAM, accent: GOLD },
              { bg: CREAM, fg: CHARCOAL, accent: RED },
              { bg: CHARCOAL, fg: CREAM, accent: GOLD },
              { bg: RED_DEEP, fg: CREAM, accent: GOLD },
            ][i % 6];
            return (
              <div key={i} className="p-8 md:p-10 aspect-[5/4] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]" style={{ backgroundColor: palette.bg, color: palette.fg }}>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: palette.accent, letterSpacing: "0.3em", textTransform: "uppercase" }}>0{i + 1}</p>
                  <h3 className={display.className} style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.0, marginTop: "1rem" }}>
                    {s.title}
                  </h3>
                </div>
                <div>
                  <p className="text-base leading-relaxed" style={{ opacity: 0.85 }}>{s.description}</p>
                  {s.price && <p className={display.className} style={{ fontSize: "1.6rem", fontWeight: 700, color: palette.accent, marginTop: "1.5rem", letterSpacing: "0.02em" }}>{s.price}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS — big pull quotes on alternating blocks */}
      <section className="border-t-4" style={{ borderColor: CHARCOAL, backgroundColor: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: RED, textTransform: "uppercase", letterSpacing: "0.3em" }}>What Burbank Says</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: CHARCOAL, lineHeight: 0.95, fontWeight: 700, marginTop: "1.5rem" }}>
            566 regulars<br /><span style={{ color: RED }}>can&apos;t be wrong.</span>
          </h2>
          <div className="mt-16 space-y-2">
            {content.reviews.map((r, i) => {
              const isAlt = i % 2 === 1;
              return (
                <div key={i} className="p-8 md:p-14 grid md:grid-cols-12 gap-8 items-center" style={{ backgroundColor: isAlt ? CHARCOAL : RED, color: CREAM }}>
                  <div className="md:col-span-2">
                    <p className={display.className} style={{ fontSize: "4rem", lineHeight: 1, color: GOLD, fontWeight: 700 }}>★{r.rating || 5}</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className={display.className} style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)", lineHeight: 1.3, fontWeight: 400, fontStyle: "italic" }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <p className="text-sm font-bold uppercase tracking-widest" style={{ color: GOLD }}>— {r.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISIT — full bleed map + hours block */}
      <section id="visit" style={{ backgroundColor: GOLD }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: RED_DEEP, textTransform: "uppercase", letterSpacing: "0.3em" }}>Visit Us</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: CHARCOAL, lineHeight: 0.95, fontWeight: 700, marginTop: "1.5rem" }}>
              911 N San<br />Fernando Blvd.
            </h2>
            <p className="mt-6 text-lg" style={{ color: CHARCOAL, opacity: 0.8 }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-3 transition-opacity hover:opacity-70"} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: RED_DEEP, fontWeight: 700, letterSpacing: "0.02em" }}>
              {content.contact.phone}
            </a>
            <div className="mt-10" style={{ backgroundColor: CREAM, padding: "2rem" }}>
              <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: RED }}>Hours</p>
              <table className="w-full text-base">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} className="border-b" style={{ borderColor: `${CHARCOAL}20` }}>
                      <td className="py-3 font-bold uppercase tracking-wide text-sm" style={{ color: CHARCOAL }}>{day}</td>
                      <td className="py-3 text-right font-semibold" style={{ color: CHARCOAL }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:col-span-7" style={{ minHeight: "560px", boxShadow: `12px 12px 0 ${CHARCOAL}` }}>
            <iframe title="Alfredo's Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "560px", display: "block" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA — full bleed block above fold style */}
      <section style={{ backgroundColor: RED }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
          <h3 className={display.className} style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: CREAM, lineHeight: 0.9, fontWeight: 700 }}>
            Hungry?<br /><span style={{ color: GOLD }}>Pick up the phone.</span>
          </h3>
          <a href={phoneTel} className={display.className + " inline-block mt-12 px-14 py-6 transition-transform hover:scale-105"} style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", backgroundColor: GOLD, color: CHARCOAL, fontWeight: 700, letterSpacing: "0.02em" }}>
            {content.contact.phone}
          </a>
        </div>
      </section>

      {/* FOOTER — minimal flat block */}
      <footer style={{ backgroundColor: CHARCOAL, color: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className={display.className} style={{ fontSize: "1.5rem", fontWeight: 700, color: CREAM, letterSpacing: "0.04em" }}>ALFREDO&apos;S</p>
            <p className="mt-3 text-sm" style={{ color: `${CREAM}99` }}>Authentic Mexican food, Burbank.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Visit</p>
            <p className="text-sm" style={{ color: `${CREAM}cc` }}>{content.contact.address}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Order</p>
            <a href={phoneTel} className="text-sm hover:opacity-70" style={{ color: CREAM }}>{content.contact.phone}</a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: `${CREAM}22` }}>
          <p className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 text-xs uppercase tracking-widest" style={{ color: `${CREAM}66` }}>
            © {new Date().getFullYear()} Alfredo&apos;s Mexican Food
          </p>
        </div>
      </footer>
    </main>
  );
}
