export default function App() {
  const cities = [
    {
      city: "Baie-Comeau",
      date: "22 mai",
      venue: "Centre Sportif Alcoa",
      dj: "DJ Boubou",
      status: "En vente",
      button: "Réserver maintenant",
      link: "https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator",
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

  const vipItems = [
    "1 consommation",
    "1 glow stick",
    "Accès prioritaire",
    "Expérience VIP",
  ];

  const lasers = [
    { top: "12%", left: "-2%", width: "38%", rotate: "14deg", color: "rgba(244,114,182,0.55)" },
    { top: "22%", left: "-2%", width: "32%", rotate: "22deg", color: "rgba(103,232,249,0.5)" },
    { top: "14%", right: "-2%", width: "38%", rotate: "-14deg", color: "rgba(190,242,100,0.5)" },
    { top: "28%", right: "-2%", width: "30%", rotate: "-24deg", color: "rgba(253,224,71,0.45)" },
  ];

  const arms = [
    { left: "6%", height: "132px", rotate: "-24deg" },
    { left: "14%", height: "158px", rotate: "18deg" },
    { left: "24%", height: "142px", rotate: "-8deg" },
    { left: "34%", height: "166px", rotate: "20deg" },
    { right: "34%", height: "166px", rotate: "-20deg" },
    { right: "24%", height: "142px", rotate: "8deg" },
    { right: "14%", height: "158px", rotate: "-18deg" },
    { right: "6%", height: "132px", rotate: "24deg" },
  ];

  const glowsticks = [
    { left: "8%", top: "58%", rotate: "36deg", color: "rgba(103,232,249,0.95)" },
    { left: "20%", top: "48%", rotate: "-30deg", color: "rgba(244,114,182,0.95)" },
    { left: "34%", top: "60%", rotate: "18deg", color: "rgba(253,224,71,0.95)" },
    { right: "34%", top: "60%", rotate: "-18deg", color: "rgba(253,224,71,0.95)" },
    { right: "20%", top: "49%", rotate: "28deg", color: "rgba(249,168,212,0.95)" },
    { right: "8%", top: "58%", rotate: "-34deg", color: "rgba(103,232,249,0.95)" },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-fuchsia-600/25 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        <section className="relative px-6 py-10 md:px-10 lg:px-16">
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            {/* REAL CROWD IMAGE BACKGROUND */}
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop')",
              }}
            />

            {/* DARK OVERLAY FOR READABILITY */}
            <div className="absolute inset-0 bg-black/65" />

            {/* LASER EFFECTS */}
            {lasers.map((laser, index) => (
              <div
                key={index}
                className="absolute h-[3px]"
                style={{
                  top: laser.top,
                  left: laser.left,
                  right: laser.right,
                  width: laser.width,
                  transform: `rotate(${laser.rotate})`,
                  background: `linear-gradient(to right, ${laser.color}, transparent)`,
                  boxShadow: `0 0 18px ${laser.color}`,
                }}
              />
            ))}

            {/* GLOW LIGHTS */}
            <div className="absolute inset-x-[10%] top-[10%] h-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute inset-x-[18%] top-[22%] h-24 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* EXTRA GLOWSTICKS OVER IMAGE */}
            {glowsticks.map((item, index) => (
              <div
                key={index}
                className="absolute h-[5px] w-24 rounded-full"
                style={{
                  left: item.left,
                  right: item.right,
                  top: item.top,
                  transform: `rotate(${item.rotate})`,
                  background: item.color,
                  boxShadow: `0 0 20px ${item.color}`,
                }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-200">
                  Bingo Dingo en tournée
                </div>

                <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
                  <span className="block bg-gradient-to-r from-fuchsia-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
                    Bingo
                  </span>
                  <span className="block bg-gradient-to-r from-lime-300 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                    Dingo
                  </span>
                  <span className="mt-2 block text-xl font-bold uppercase tracking-[0.3em] text-white/80 md:text-2xl">
                    en région
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-lg text-white/80 md:text-xl">
                  Une expérience festive, lumineuse et complètement survoltée.
                  Prépare-toi pour une soirée où le bingo rencontre l'ambiance party.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-yellow-400 px-6 py-4 text-base font-extrabold uppercase tracking-wide text-black shadow-lg transition hover:scale-105"
                  >
                    Réserve ta place
                  </a>
                  <a
                    href="#villes"
                    className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
                  >
                    Voir les villes
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {["22 mai", "Baie-Comeau", "DJ Boubou", "5 000 $+ en prix"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center text-sm font-bold uppercase tracking-wide text-white/90 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-[2rem] border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/15 via-white/5 to-cyan-500/10 p-6 shadow-2xl">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
                    <div className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
                      Événement vedette
                    </div>
                    <div className="mt-3 text-4xl font-black uppercase text-white md:text-5xl">
                      Baie-Comeau
                    </div>
                    <div className="mt-3 text-lg text-white/80">22 mai · Centre Sportif Alcoa</div>

                    <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                      <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">DJ invité</div>
                      <div className="mt-1 text-3xl font-extrabold text-white">DJ Boubou</div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <div className="text-sm uppercase text-white/60">Billet régulier</div>
                        <div className="mt-1 text-3xl font-black">40 $</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <div className="text-sm uppercase text-white/60">Zone VIP</div>
                        <div className="mt-1 text-3xl font-black">65 $</div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-yellow-300/30 bg-yellow-400/10 p-5">
                      <div className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">En prix cadeau</div>
                      <div className="mt-2 text-3xl font-black text-white">5 000 $ et plus</div>
                    </div>

                    <a
                      href="https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 block rounded-2xl bg-white px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-black transition hover:scale-[1.02]"
                    >
                      Acheter les billets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {["Ambiance party", "Lumières, musique et énergie", "Seulement 400 places"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-lg font-bold uppercase tracking-wide text-white shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="villes" className="px-6 py-12 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-300">Villes à venir</div>
                <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">La tournée en région</h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  Découvre les villes annoncées et reste à l'affût des prochaines dates.
                  La première escale est Baie-Comeau avec une soirée complètement explosive.
                </p>
              </div>
              <a
                href="https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/15 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-fuchsia-100"
              >
                Billets Baie-Comeau
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {cities.map((item, index) => (
                <div
                  key={`${item.city}-${index}`}
                  className={`rounded-[2rem] border p-6 shadow-2xl backdrop-blur ${
                    index === 0
                      ? "border-fuchsia-400/40 bg-gradient-to-b from-fuchsia-500/20 to-white/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">Ville</div>
                      <h3 className="mt-2 text-3xl font-black uppercase">{item.city}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/80">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-6 space-y-3 text-white/80">
                    <div><span className="font-bold text-white">Date :</span> {item.date}</div>
                    <div><span className="font-bold text-white">Lieu :</span> {item.venue}</div>
                    <div><span className="font-bold text-white">DJ invité :</span> {item.dj}</div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4 text-lg font-extrabold text-yellow-300">
                    {item.highlight}
                  </div>

                  <a
                    href={item.link}
                    target={item.link !== "#" ? "_blank" : undefined}
                    rel={item.link !== "#" ? "noreferrer" : undefined}
                    className={`mt-6 block rounded-2xl px-5 py-4 text-center text-sm font-extrabold uppercase tracking-wide transition ${
                      index === 0
                        ? "bg-white text-black hover:scale-[1.02]"
                        : "border border-white/15 bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {item.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Billets</div>
              <h2 className="mt-2 text-4xl font-black uppercase">Choisis ton entrée</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/60">Régulier</div>
                  <div className="mt-2 text-5xl font-black">40 $</div>
                  <p className="mt-3 text-white/70">Accès à la soirée Bingo Dingo et à toute l'ambiance party.</p>
                </div>
                <div className="rounded-3xl border border-yellow-300/30 bg-yellow-400/10 p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-yellow-200">Zone VIP</div>
                  <div className="mt-2 text-5xl font-black">65 $</div>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {vipItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/15 to-cyan-500/10 p-8 shadow-xl">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-200">Pourquoi venir ?</div>
              <h2 className="mt-2 text-4xl font-black uppercase">Prépare-toi à faire le party</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["DJ invité", "Prix cadeaux", "Ambiance festive", "Glow et énergie", "Soirée unique", "Première édition en région"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 font-bold uppercase tracking-wide text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 pt-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl md:p-12">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">Es-tu prêt Baie-Comeau ?</div>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">Réserve ta place maintenant</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
              La tournée commence fort avec une soirée signée Bingo Dingo, DJ Boubou,
              une ambiance explosive et 5 000 $ et plus en prix cadeau.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gradient-to-r from-yellow-300 via-pink-400 to-fuchsia-500 px-7 py-4 text-base font-extrabold uppercase tracking-wide text-black shadow-lg transition hover:scale-105"
              >
                Acheter sur Eventbrite
              </a>
              <a
                href="#villes"
                className="rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-base font-extrabold uppercase tracking-wide text-white transition hover:bg-white/20"
              >
                Voir la tournée
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
