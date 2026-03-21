import React from "react";

export default function App() {
  const eventLink = "https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator";

  const cities = [
    {
      city: "Baie-Comeau",
      date: "22 mai",
      venue: "Centre Sportif Alcoa",
      dj: "DJ Boubou",
      status: "En vente",
      button: "Réserver maintenant",
      link: eventLink,
      highlight: "5 000 $ et plus en prix cadeau",
    },
    {
      city: "Prochaine ville",
      date: "À venir",
      venue: "Annonce bientôt",
      dj: "DJ invité à annoncer",
      status: "Bientôt",
      button: "Reste à l'affût",
      link: "#",
      highlight: "Nouvelle date bientôt",
    },
    {
      city: "Prochaine ville",
      date: "À venir",
      venue: "Annonce bientôt",
      dj: "DJ invité à annoncer",
      status: "Bientôt",
      button: "Reste à l'affût",
      link: "#",
      highlight: "Ta ville sera-t-elle la prochaine ?",
    },
  ];

  const glowStickStyle = (left, top, rotate, color) => ({
    position: "absolute",
    left,
    top,
    width: 90,
    height: 8,
    borderRadius: 999,
    transform: `rotate(${rotate}deg)`,
    background: color,
    boxShadow: `0 0 18px ${color}, 0 0 36px ${color}`,
    opacity: 0.95,
  });

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, Helvetica, sans-serif; }
        a { text-decoration: none; }
        .pulse { animation: pulseGlow 2.4s ease-in-out infinite; }
        .floaty { animation: floaty 6s ease-in-out infinite; }
        .laser { animation: laserFlicker 2.2s ease-in-out infinite; }
        .card-hover { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(0,0,0,.35); }
        .button-pop { transition: transform .2s ease, opacity .2s ease; }
        .button-pop:hover { transform: scale(1.04); opacity: .96; }
        @keyframes pulseGlow {
          0%,100% { opacity: .8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes laserFlicker {
          0%,100% { opacity: .75; }
          50% { opacity: 1; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .city-grid { grid-template-columns: 1fr !important; }
          .info-grid { grid-template-columns: 1fr 1fr !important; }
          .title-main { font-size: 68px !important; }
          .title-sub { font-size: 28px !important; }
        }
        @media (max-width: 640px) {
          .title-main { font-size: 52px !important; }
          .title-sub { font-size: 22px !important; letter-spacing: 3px !important; }
          .info-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div style={styles.bgOrb1} />
      <div style={styles.bgOrb2} />
      <div style={styles.bgOrb3} />

      <div style={styles.wrapper}>
        <section style={styles.heroSection}>
          <div style={styles.heroBackdrop}>
            <div style={styles.crowdImage} />
            <div style={styles.overlayDark} />
            <div className="laser" style={styles.laser1} />
            <div className="laser" style={styles.laser2} />
            <div className="laser" style={styles.laser3} />
            <div className="laser" style={styles.laser4} />
            <div className="pulse" style={styles.lightBurst1} />
            <div className="pulse" style={styles.lightBurst2} />
            <div className="pulse" style={glowStickStyle("6%", "72%", 32, "#63f3ff")} />
            <div className="pulse" style={glowStickStyle("18%", "62%", -26, "#ff67d4")} />
            <div className="pulse" style={glowStickStyle("33%", "78%", 20, "#ffe45e")} />
            <div className="pulse" style={glowStickStyle("74%", "77%", -18, "#b7ff4a")} />
            <div className="pulse" style={glowStickStyle("83%", "63%", 28, "#ff91cf")} />
            <div className="pulse" style={glowStickStyle("90%", "73%", -30, "#63f3ff")} />
          </div>

          <div style={styles.heroPanel}>
            <div className="hero-grid" style={styles.heroGrid}>
              <div>
                <div style={styles.badge}>Bingo Dingo en tournée</div>

                <div className="title-main" style={styles.titleMain}>
                  <span style={styles.titlePink}>BINGO</span>
                  <br />
                  <span style={styles.titleLime}>DINGO</span>
                </div>

                <div className="title-sub" style={styles.titleSub}>EN RÉGION</div>

                <p style={styles.lead}>
                  Une expérience festive, lumineuse et complètement survoltée.
                  Prépare-toi pour une soirée où le bingo rencontre l'ambiance party.
                </p>

                <div style={styles.buttonRow}>
                  <a className="button-pop" href={eventLink} target="_blank" rel="noreferrer" style={styles.primaryButton}>
                    Réserve ta place
                  </a>
                  <a className="button-pop" href="#villes" style={styles.secondaryButton}>
                    Voir les villes
                  </a>
                </div>

                <div className="info-grid" style={styles.infoGrid}>
                  {[
                    "22 mai",
                    "Baie-Comeau",
                    "DJ Boubou",
                    "5 000 $+ en prix",
                  ].map((item) => (
                    <div key={item} style={styles.infoPill}>{item}</div>
                  ))}
                </div>
              </div>

              <div>
                <div className="card-hover floaty" style={styles.featureCard}>
                  <div style={styles.smallLabel}>Événement vedette</div>
                  <div style={styles.cityBig}>Baie-Comeau</div>
                  <div style={styles.venueText}>22 mai · Centre Sportif Alcoa</div>

                  <div style={styles.djBox}>
                    <div style={styles.djLabel}>DJ invité</div>
                    <div style={styles.djName}>DJ Boubou</div>
                  </div>

                  <div style={styles.ticketRow}>
                    <div style={styles.ticketBox}>
                      <div style={styles.ticketLabel}>Billet régulier</div>
                      <div style={styles.ticketPrice}>40 $</div>
                    </div>
                    <div style={styles.ticketBox}>
                      <div style={styles.ticketLabel}>Zone VIP</div>
                      <div style={styles.ticketPrice}>65 $</div>
                    </div>
                  </div>

                  <div style={styles.prizeBox}>
                    <div style={styles.prizeLabel}>En prix cadeau</div>
                    <div style={styles.prizeValue}>5 000 $ et plus</div>
                  </div>

                  <a className="button-pop" href={eventLink} target="_blank" rel="noreferrer" style={styles.whiteButton}>
                    Acheter les billets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.stripRow}>
          {[
            "Ambiance party",
            "Lumières, musique et énergie",
            "Seulement 400 places",
          ].map((item) => (
            <div key={item} className="card-hover" style={styles.stripCard}>{item}</div>
          ))}
        </section>

        <section id="villes" style={styles.section}>
          <div style={styles.sectionHeaderRow}>
            <div>
              <div style={styles.sectionMini}>Villes à venir</div>
              <h2 style={styles.sectionTitle}>La tournée en région</h2>
              <p style={styles.sectionText}>
                Découvre les villes annoncées et reste à l'affût des prochaines dates.
                La première escale est Baie-Comeau avec une soirée complètement explosive.
              </p>
            </div>
            <a className="button-pop" href={eventLink} target="_blank" rel="noreferrer" style={styles.smallAction}>
              Billets Baie-Comeau
            </a>
          </div>

          <div className="city-grid" style={styles.cityGrid}>
            {cities.map((item, index) => (
              <div
                key={`${item.city}-${index}`}
                className="card-hover"
                style={index === 0 ? styles.cityCardFeatured : styles.cityCard}
              >
                <div style={styles.cardTopRow}>
                  <div>
                    <div style={styles.cityMini}>Ville</div>
                    <div style={styles.cityTitle}>{item.city}</div>
                  </div>
                  <div style={styles.statusBadge}>{item.status}</div>
                </div>

                <div style={styles.cityLine}><strong>Date :</strong> {item.date}</div>
                <div style={styles.cityLine}><strong>Lieu :</strong> {item.venue}</div>
                <div style={styles.cityLine}><strong>DJ invité :</strong> {item.dj}</div>

                <div style={styles.highlightBox}>{item.highlight}</div>

                <a
                  className="button-pop"
                  href={item.link}
                  target={item.link !== "#" ? "_blank" : undefined}
                  rel={item.link !== "#" ? "noreferrer" : undefined}
                  style={index === 0 ? styles.whiteButton : styles.secondaryButtonFull}
                >
                  {item.button}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.twoColSection}>
          <div className="card-hover" style={styles.bigInfoCard}>
            <div style={styles.sectionMiniBlue}>Billets</div>
            <h2 style={styles.sectionTitle}>Choisis ton entrée</h2>
            <div style={styles.twoTicketGrid}>
              <div style={styles.ticketPanel}>
                <div style={styles.ticketLabel}>Régulier</div>
                <div style={styles.ticketPriceLarge}>40 $</div>
                <p style={styles.panelText}>Accès à la soirée Bingo Dingo et à toute l'ambiance party.</p>
              </div>
              <div style={styles.ticketPanelVip}>
                <div style={styles.ticketLabelGold}>Zone VIP</div>
                <div style={styles.ticketPriceLarge}>65 $</div>
                <ul style={styles.vipList}>
                  <li>1 consommation</li>
                  <li>1 glow stick</li>
                  <li>Accès prioritaire</li>
                  <li>Expérience VIP</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-hover" style={styles.bigInfoCardAlt}>
            <div style={styles.sectionMini}>Pourquoi venir ?</div>
            <h2 style={styles.sectionTitle}>Prépare-toi à faire le party</h2>
            <div style={styles.whyGrid}>
              {[
                "DJ invité",
                "Prix cadeaux",
                "Ambiance festive",
                "Glow et énergie",
                "Soirée unique",
                "Première édition en région",
              ].map((item) => (
                <div key={item} style={styles.whyItem}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <div className="card-hover" style={styles.ctaCard}>
            <div style={styles.ctaMini}>Es-tu prêt Baie-Comeau ?</div>
            <div style={styles.ctaTitle}>Réserve ta place maintenant</div>
            <p style={styles.ctaText}>
              La tournée commence fort avec une soirée signée Bingo Dingo, DJ Boubou,
              une ambiance explosive et 5 000 $ et plus en prix cadeau.
            </p>
            <div style={styles.buttonRowCenter}>
              <a className="button-pop" href={eventLink} target="_blank" rel="noreferrer" style={styles.primaryButton}>
                Acheter sur Eventbrite
              </a>
              <a className="button-pop" href="#villes" style={styles.secondaryButton}>
                Voir la tournée
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0b0014 0%, #180022 30%, #230031 65%, #0a0011 100%)",
    color: "white",
    position: "relative",
    overflowX: "hidden",
  },
  bgOrb1: {
    position: "fixed",
    top: -80,
    left: -60,
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(255, 0, 153, 0.18)",
    filter: "blur(70px)",
    pointerEvents: "none",
  },
  bgOrb2: {
    position: "fixed",
    top: 120,
    right: -60,
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "rgba(0, 221, 255, 0.14)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  bgOrb3: {
    position: "fixed",
    bottom: -60,
    left: "30%",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(255, 204, 0, 0.12)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },
  wrapper: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "24px",
    position: "relative",
    zIndex: 2,
  },
  heroSection: {
    position: "relative",
    borderRadius: 34,
    overflow: "hidden",
    boxShadow: "0 25px 70px rgba(0,0,0,.45)",
    border: "1px solid rgba(255,255,255,.08)",
    marginBottom: 26,
  },
  heroBackdrop: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at top, rgba(255,0,153,.15), transparent 35%), radial-gradient(circle at right, rgba(0,217,255,.12), transparent 30%), #120018",
  },
  crowdImage: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.48,
    filter: "saturate(1.2)",
  },
  overlayDark: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(9,0,15,.45) 0%, rgba(9,0,15,.60) 40%, rgba(9,0,15,.72) 100%)",
  },
  laser1: {
    position: "absolute",
    top: "14%",
    left: "-3%",
    width: "42%",
    height: 4,
    transform: "rotate(15deg)",
    background: "linear-gradient(90deg, rgba(255,66,184,.9), transparent)",
    boxShadow: "0 0 18px rgba(255,66,184,.95)",
  },
  laser2: {
    position: "absolute",
    top: "24%",
    left: "-3%",
    width: "34%",
    height: 4,
    transform: "rotate(26deg)",
    background: "linear-gradient(90deg, rgba(87,239,255,.95), transparent)",
    boxShadow: "0 0 18px rgba(87,239,255,.95)",
  },
  laser3: {
    position: "absolute",
    top: "16%",
    right: "-3%",
    width: "42%",
    height: 4,
    transform: "rotate(-14deg)",
    background: "linear-gradient(270deg, rgba(186,255,71,.9), transparent)",
    boxShadow: "0 0 18px rgba(186,255,71,.95)",
  },
  laser4: {
    position: "absolute",
    top: "30%",
    right: "-3%",
    width: "30%",
    height: 4,
    transform: "rotate(-24deg)",
    background: "linear-gradient(270deg, rgba(255,226,94,.95), transparent)",
    boxShadow: "0 0 18px rgba(255,226,94,.95)",
  },
  lightBurst1: {
    position: "absolute",
    top: "8%",
    left: "20%",
    width: 240,
    height: 110,
    borderRadius: "50%",
    background: "rgba(255, 0, 153, .18)",
    filter: "blur(34px)",
  },
  lightBurst2: {
    position: "absolute",
    top: "10%",
    right: "18%",
    width: 220,
    height: 100,
    borderRadius: "50%",
    background: "rgba(0, 225, 255, .15)",
    filter: "blur(34px)",
  },
  heroPanel: {
    position: "relative",
    zIndex: 2,
    padding: "34px",
    backdropFilter: "blur(3px)",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr .85fr",
    gap: 28,
    alignItems: "center",
  },
  badge: {
    display: "inline-block",
    padding: "11px 18px",
    borderRadius: 999,
    background: "rgba(255,0,153,.17)",
    border: "1px solid rgba(255,255,255,.18)",
    fontSize: 13,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 18,
  },
  titleMain: {
    fontSize: 92,
    lineHeight: 0.9,
    fontWeight: 900,
    textTransform: "uppercase",
    marginBottom: 10,
    textShadow: "0 0 24px rgba(255,255,255,.12)",
  },
  titlePink: {
    color: "#ff59c7",
    textShadow: "0 0 18px rgba(255,89,199,.45)",
  },
  titleLime: {
    color: "#dfff49",
    textShadow: "0 0 18px rgba(223,255,73,.35)",
  },
  titleSub: {
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: 6,
    marginBottom: 18,
    color: "rgba(255,255,255,.92)",
  },
  lead: {
    maxWidth: 700,
    fontSize: 21,
    lineHeight: 1.5,
    color: "rgba(255,255,255,.86)",
    marginBottom: 24,
  },
  buttonRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 24,
  },
  buttonRowCenter: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 16,
  },
  primaryButton: {
    display: "inline-block",
    padding: "15px 24px",
    borderRadius: 18,
    background: "linear-gradient(90deg, #ff4dc4 0%, #ff7a00 100%)",
    color: "#120018",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 1,
    boxShadow: "0 12px 28px rgba(255,95,168,.32)",
  },
  secondaryButton: {
    display: "inline-block",
    padding: "15px 24px",
    borderRadius: 18,
    background: "rgba(255,255,255,.10)",
    border: "1px solid rgba(255,255,255,.18)",
    color: "white",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  secondaryButtonFull: {
    display: "block",
    textAlign: "center",
    padding: "15px 24px",
    borderRadius: 18,
    background: "rgba(255,255,255,.10)",
    border: "1px solid rgba(255,255,255,.18)",
    color: "white",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 18,
  },
  whiteButton: {
    display: "block",
    textAlign: "center",
    padding: "15px 24px",
    borderRadius: 18,
    background: "white",
    color: "#0d0016",
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 18,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0,1fr))",
    gap: 12,
  },
  infoPill: {
    background: "rgba(0,0,0,.35)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 18,
    padding: "14px 12px",
    textAlign: "center",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: 13,
    letterSpacing: 1,
    backdropFilter: "blur(6px)",
  },
  featureCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,.13), rgba(255,255,255,.06))",
    border: "1px solid rgba(255,255,255,.13)",
    borderRadius: 30,
    padding: 26,
    backdropFilter: "blur(8px)",
  },
  smallLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "#ffe45e",
    fontWeight: 800,
  },
  cityBig: {
    fontSize: 50,
    fontWeight: 900,
    textTransform: "uppercase",
    marginTop: 10,
  },
  venueText: {
    color: "rgba(255,255,255,.82)",
    marginTop: 8,
    fontSize: 18,
  },
  djBox: {
    marginTop: 18,
    padding: 16,
    borderRadius: 22,
    background: "rgba(0, 229, 255, .12)",
    border: "1px solid rgba(0,229,255,.22)",
  },
  djLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#8ef7ff",
    fontWeight: 800,
  },
  djName: {
    fontSize: 38,
    fontWeight: 900,
    marginTop: 6,
  },
  ticketRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginTop: 18,
  },
  ticketBox: {
    background: "rgba(255,255,255,.08)",
    borderRadius: 20,
    padding: 16,
  },
  ticketLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "rgba(255,255,255,.7)",
    fontWeight: 800,
  },
  ticketPrice: {
    fontSize: 34,
    fontWeight: 900,
    marginTop: 4,
  },
  prizeBox: {
    marginTop: 18,
    padding: 16,
    borderRadius: 22,
    background: "rgba(255, 215, 77, .12)",
    border: "1px solid rgba(255,215,77,.22)",
  },
  prizeLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#ffe45e",
    fontWeight: 800,
  },
  prizeValue: {
    fontSize: 34,
    fontWeight: 900,
    marginTop: 6,
  },
  stripRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginBottom: 30,
  },
  stripCard: {
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 28,
    padding: 18,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: 1,
    boxShadow: "0 12px 28px rgba(0,0,0,.22)",
  },
  section: {
    marginTop: 18,
    marginBottom: 34,
  },
  sectionHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 20,
  },
  sectionMini: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "#ff8bdd",
    fontWeight: 800,
  },
  sectionMiniBlue: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "#8ef7ff",
    fontWeight: 800,
  },
  sectionTitle: {
    fontSize: 44,
    lineHeight: 1,
    margin: "10px 0 10px",
    textTransform: "uppercase",
  },
  sectionText: {
    maxWidth: 760,
    color: "rgba(255,255,255,.74)",
    fontSize: 18,
    lineHeight: 1.5,
    margin: 0,
  },
  smallAction: {
    display: "inline-block",
    padding: "14px 18px",
    borderRadius: 16,
    background: "rgba(255,0,153,.15)",
    border: "1px solid rgba(255,255,255,.16)",
    color: "white",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  cityGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
  },
  cityCard: {
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 28,
    padding: 22,
  },
  cityCardFeatured: {
    background: "linear-gradient(180deg, rgba(255,0,153,.18), rgba(255,255,255,.06))",
    border: "1px solid rgba(255,113,202,.25)",
    borderRadius: 28,
    padding: 22,
  },
  cardTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 16,
  },
  cityMini: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "rgba(255,255,255,.6)",
    fontWeight: 800,
  },
  cityTitle: {
    marginTop: 8,
    fontSize: 34,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  statusBadge: {
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(0,0,0,.30)",
    border: "1px solid rgba(255,255,255,.10)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: 800,
  },
  cityLine: {
    marginBottom: 10,
    color: "rgba(255,255,255,.84)",
    fontSize: 17,
  },
  highlightBox: {
    marginTop: 14,
    padding: 15,
    borderRadius: 18,
    background: "rgba(0,0,0,.28)",
    border: "1px solid rgba(255,255,255,.09)",
    color: "#ffe45e",
    fontSize: 22,
    fontWeight: 900,
  },
  twoColSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    marginBottom: 32,
  },
  bigInfoCard: {
    background: "rgba(255,255,255,.07)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 30,
    padding: 24,
  },
  bigInfoCardAlt: {
    background: "linear-gradient(180deg, rgba(255,0,153,.12), rgba(0,224,255,.08))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 30,
    padding: 24,
  },
  twoTicketGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 18,
  },
  ticketPanel: {
    background: "rgba(0,0,0,.22)",
    borderRadius: 24,
    padding: 20,
  },
  ticketPanelVip: {
    background: "rgba(255,215,77,.10)",
    border: "1px solid rgba(255,215,77,.18)",
    borderRadius: 24,
    padding: 20,
  },
  ticketLabelGold: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#ffe45e",
    fontWeight: 800,
  },
  ticketPriceLarge: {
    fontSize: 56,
    lineHeight: 1,
    marginTop: 10,
    fontWeight: 900,
  },
  panelText: {
    color: "rgba(255,255,255,.75)",
    lineHeight: 1.5,
    fontSize: 17,
    marginTop: 12,
  },
  vipList: {
    marginTop: 14,
    paddingLeft: 18,
    lineHeight: 1.9,
    color: "rgba(255,255,255,.86)",
    fontSize: 16,
  },
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginTop: 18,
  },
  whyItem: {
    background: "rgba(0,0,0,.22)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 18,
    padding: 16,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  ctaSection: {
    paddingBottom: 26,
  },
  ctaCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 34,
    padding: 34,
    textAlign: "center",
  },
  ctaMini: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 4,
    color: "#ffe45e",
    fontWeight: 800,
  },
  ctaTitle: {
    fontSize: 56,
    lineHeight: 1,
    marginTop: 14,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  ctaText: {
    maxWidth: 820,
    margin: "16px auto 0",
    color: "rgba(255,255,255,.78)",
    fontSize: 19,
    lineHeight: 1.6,
  },
};
