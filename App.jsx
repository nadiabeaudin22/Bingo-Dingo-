import React from "react";

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
  ];

  const container = {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #120018, #220033, #090011)",
    color: "white",
    fontFamily: "Arial",
    padding: "20px",
  };

  const card = {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "20px",
    marginTop: "20px",
  };

  return (
    <div style={container}>
      <h1 style={{ fontSize: "50px" }}>
        Bingo Dingo<br />
        <span style={{ fontSize: "24px" }}>en région</span>
      </h1>

      <p>Soirée festive avec DJ, lumières et ambiance survoltée 🔥</p>

      <a
        href="https://www.eventbrite.fr/e/bingo-dingo-en-region-tickets-1985545672556?aff=oddtdtcreator"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "12px 20px",
          background: "pink",
          color: "black",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Réserver maintenant
      </a>

      {cities.map((c, i) => (
        <div key={i} style={card}>
          <h2>{c.city}</h2>
          <p>{c.date}</p>
          <p>{c.venue}</p>
          <p>{c.dj}</p>
          <strong>{c.highlight}</strong>
        </div>
      ))}
    </div>
  );
}
