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


const GALLERY = ["https://lh3.googleusercontent.com/gps-cs-s/APNQkAFVMdMQQEaoitHL5Lsr9qlfTZGPMw0Wr5pugVla2oBAQKVp870eQAsziZ7cbA1wozseIMDi440FOpniswWacaKmObjX44Oo3-dgIxZbCCrlmoGnsINK1_RSlhDRruZKYjETQnqgpkLR0rQ=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEpFeqaXIdo20zK0IXk7AfsdyUGS15_6xbasykKzuddT85Ni496qvxmT0oO2iextaQj-peXmkvsmkOM2gwoqL90kW1x0MPkYXvn8dIIYT-3fWJoT4waAKYgxCrIoZ1G0H9MgOaiCzbPiGHH=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHAzDoCM66oAC6B6c6tUvi_Scs9EvJs2u-RFTs6YRw36hb3oDOwMngDorDX9c3yl1Uty-19sba5-g-JT8N5FEyczEjoxydPKuIP86bIZirr1Ga79j7VmP_JfRItwy5SFlirpBHuY4251mY=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEtX_c9gjh0GP_alH7gYXwMD2bnI4iPT6_Jise3w1CRDLSrP0N7mWONai3QVK0SffIVzV5PwCh1nn0dUsxfEECvQOs-L54-GYJQqrNafCH5ro17fy_kF_y-x6xt6DJ7p0LarwhjFIGPfJcy=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAH_Tn571ZEMvMZyEfj9mtYJIUaCDUu47plL5bdnkbNKQQ1Wf_q-CjfaVm41sU2B7gB7X29-KBLHhWpIRu4DIAuKvh805JzsR3j7PzB4wakXLZ2QYOmVxKht-KG4ZVizcqtsCGZkuQ=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEcb8SHcKa3wBId5VDcDoxNZJSTE1-UFqQ19beV_WbaQrIHya23mrk_HOEATK5Q6Hf-vedWqghm_XNX0UUhJ8hq9Vt0QAtG5g3a5tR5nod2MIgTFKLth5HMxHt3wTrgsacrvngYhWB76ZE=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEzZLslwr4IXHj45jbGzAvOPnU9VXl05ICUIeveBlXJu3G0ro9LlQAkBQoYvB3Z46peCFoPp5JGP63cxitENyxnq9_gR53D7mtOdzAxMiNa_byOTAY9ro_19f4MPF1VRdoFteKj11eHLayp=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEkjU6FP80Atup4GTFYpA5pIpyoU7E4zfVh0TVM6mdNfGTk2_WXy5iArvxHd0a6GYHnfqIREDJKGNcQWstu2Zovw2VpT45Nodf41XrstuIYKNJ7ObzUBLPMtWBADaTGs2QAzED7=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHscE90pm_mN6vjg3nW5t3FDM-N9PNYM6a53bQhami-a1zV_Ms0Byo78z5apFdhhEx9HeJ1c3r4CMIfvzemaM_-ewNYCcFRMvFJ9GkUjMgVH2PQwxaVsNv2F8u6i95yBVk5k5r45E-x5O0I=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTl6TbYeGagQvvJ6JMddMmpz0N7A0ZgbdBHgGITygTQUz-FbbCypSqP3PgpqhPQsuobXvZNFWM_ucnoDoHVAnFDLTzsChTpJ9UGhORRg4NcVDbbtJn2GtC6xKHYLq_YtaouSTxikRRKTw-=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGVX-Rh2ERvLkVUXsIXNHSQlQgqAwOChQgzbuCOv4fgl01EvnI1AmM5T2k0YKlB0HrTELVHxlFtGD9PL-_u5TLiYwQMoDsiMDjJ1UC3T1cWYaVnWUpiILZdZlWZM8H8QVR4o8TTZ5m87xQ=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAF_FygynBOQllSw6AZ2DIRoSLhz3qm722aJTWJb08MmOLcUw4fFQuLOeGkxsWjZ-1SBg7K_PiYqTEpowpwmTeLeB2DMALbsgIWS4vOdVpI7jP1gCCMNas4OHULWm2Yk8YqXnyg4mw=w1920-h1080-k-no","https://lh3.googleusercontent.com/proxy/0wWd500O1sCsj1OWeA_05C6nQaadpsbQhXlQ5z6yCr_ODNp4fTRyy5hP_H6KktCiDZ6BW0yW00uEVFTBSJU_SkfX9v0JuHbc7HeyQxgZHL7Fy4Y6175T2xXypfKIXIIyEPT6UEgVEGzMDdkClxwd_aCGiROuj1HMb6m-Cg=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdlzZm99s0He2fHNbPt-y52QeaCytxd6Swn2XMX6xdQuVFnp9ZVsORDUY1j5gY_nJC61cPoNepqky_JvINUz6qs-3QmaL1ahgPgNFznuCuk1aqLHqHnKtl323H0Y1zU3U-tajG=w1920-h1080-k-no","https://lh6.googleusercontent.com/proxy/gLfSqkxF0qWJ-Vnrinn5XkN4Dhlf5QAONCPaEVgu__amumbPtDQ3yvDlYBzFig1IFaAuFGJQpW2Rlsi6l1r9qM0PGqakr3fEb7aUD0GFYJMJFimks-QGkCv5KvdkekF0nnjDQJ9i-1V1ZIQVu_FSEA9_ImKaVQNt-g6Xpw=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAFoXisdN8gQnhsPu5f5TnW_aFzCO1wKXtPJjF60PmTPyEEIx_rcWFjKH_aaawAurgxS7FE0iFMG8BaSt7B2HSwU_EyjNdRpDMSs3wbwsZC9e35tnf94cJ3r5PZsTP5l6YKsdVE=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAE2-LE1kir8t67q-3_nFwuUWaL3g_RiOHqgM4jr-6ye6bgjblaU0vAhrB4Z4tQFzUIHpbGM806mrgLN-ndqwo-5KzMzuEH40buvs2yEKxulSDVudJuWTh8tn9DhLqCftYSyIkQ=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAEKlnxKwVghnRXYHyjspvqblF1NHFTT4Yn0AxV4LURXNc7HHaQRDXh53mfzu20QbOcndqWmRKn2aS87UL-Wv_tEaHnhO36hLgDw86D0ysC9RjE6KH-EFrj79IJqOJEJA77v8hY=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAGXJl2VJs45-hpdyKWrnG0KWr8T_5kXEWo3XtFTNqFX70V0tIobn9Ks7JKfv8wPjwinAifBTnvaNtWcJ5oYMyRxzFo61RHohbuffpnFLpxs6JlOSHMGiIOp1BKfZHAYW4wrIFA=w1920-h1080-k-no","https://lh3.googleusercontent.com/gps-cs-s/APNQkAE6TSVT226Wb9fURr-ks9mOZVM6ozHltS0V0tkwZcxqPP0Ta3STwCtLwiz-rXhV_qQBhCcTyHq70jTwTPcuDg08vN0_O6A7VEXxqQ4SfCb_p4CQIyMNVqoP3B18Ypt7Zb3QWcgLyA=w1920-h1080-k-no"];

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

      {/* GALLERY — festive geometric food grid */}
      <section style={{ backgroundColor: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: RED, textTransform: "uppercase", letterSpacing: "0.3em" }}>★ The Kitchen</p>
              <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: CHARCOAL, lineHeight: 0.95, fontWeight: 700, marginTop: "1.5rem" }}>
                Behind the<br /><span style={{ color: RED }}>counter.</span>
              </h2>
            </div>
            <p className="hidden md:block text-sm font-bold uppercase tracking-widest" style={{ color: GOLD_DEEP }}>From our kitchen ↓</p>
          </div>
          <div className="grid md:grid-cols-4 gap-1">
            {GALLERY.slice(0, 20).map((p, i) => (
              <div key={i} className="aspect-square bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url("${p}")` }} />
            ))}
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
