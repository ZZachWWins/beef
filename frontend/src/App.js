import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Story from './Story';
import './App.css';

function App() {
  const [showFeud, setShowFeud] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1 className="title">$BEEF TOKEN</h1>
          <p className="subtitle">The Conflict-Fueled Meme Token</p>
          <div className="social-links">
            <NavLink to="/story" className="nav-btn">The Story</NavLink>
            <a href="https://t.me/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">Join Telegram</a>
            <a href="https://x.com/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">Follow on X</a>
          </div>
        </header>

        <a
          href="https://raydium.io/swap/?inputMint=sol&outputMint=CPkbe6eSwido2gHWkp3HM1KQ9sL8BocmqWApeTy6Xmwt"
          target="_blank"
          rel="noopener noreferrer"
          className="contract-btn"
        >
          Buy $BEEF on Raydium
        </a>

        <Routes>
          <Route path="/" element={
            <section className="journey-section">
              <h2 className="journey-title">$BEEF — Fueling Truth and Conflict</h2>
              <div className="intro-text">
                <p className="milestone-text">
                  This isn’t about food. It’s about the kind of <strong>BEEF</strong> that makes people stop, think, and feel something. Conflict. Truth. Calling things out. Stirring up what matters.
                </p>
                <p className="milestone-text">
                  <strong>$BEEF</strong> was born out of a personal awakening — one that came later in life, after fighting through addiction and finally seeing the world for what it is. The developer behind this token started noticing patterns: real men being mocked, truth being softened, and strong voices being silenced.
                </p>
                <p className="milestone-text">
                  One of those voices? <strong>Liver King</strong>. While many laugh at him, there’s something deeper there — how he speaks, how he loves his family, how he doesn’t bend to modern nonsense. There’s a clarity behind the chaos, and <strong>$BEEF</strong> leans into that energy. It questions what we’re told. It digs into cultural contradictions. It’s not about sides — it’s about being real.
                </p>
                <p className="milestone-text">
                  <strong>$BEEF</strong> is about fueling that energy — sometimes funny, sometimes serious, but always unapologetic. We’re not here to serve you meat. We’re here to serve you <strong>truth</strong>.
                </p>
                <p className="milestone-text font-bold text-[#f5e050]">
                  Got BEEF? You’re in the right place.
                </p>
              </div>

              <div className="youtube-iframe-container">
                <iframe
                  className="youtube-iframe"
                  src="https://www.youtube.com/embed/wI_fmeX3wSU"
                  title="BEEF TOKEN Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="journey-subtitle">Roadmap: The Path Ahead</h3>
              <div className="milestone">
                <h4 className="milestone-title">Q2 2025: Lighting the Match</h4>
                <p className="milestone-text">
                  Token launched on Solana via <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="text-[#ca8a04] hover:underline">Pump.fun</a>. Telegram and X channels opened. Meme rollout begins — both serious and satirical. Organic growth and community discussion underway.
                </p>
              </div>
              <div className="milestone">
                <h4 className="milestone-title">Q3 2025: Fueling the Fire</h4>
                <p className="milestone-text">
                  Ongoing meme drops targeting trending topics and cultural conflict. First round of BEEF-themed NFT concepts under development. Community meme contests to reward creativity. Begin outreach to influencers — including plans to invite Liver King to join a <a href="https://x.com/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="text-[#ca8a04] hover:underline">Space or interview</a>.
                </p>
              </div>
              <div className="milestone">
                <h4 className="milestone-title">Q4 2025: Controlled Burn</h4>
                <p className="milestone-text">
                  Official BEEF NFT drop (community decides what gets minted). Launch of “Callout Campaigns” – memes tied to real-time controversy or public conflict. Expand Telegram with themed voice chats and meme battles. Branded assets (non-food related) released for supporters.
                </p>
              </div>
              <div className="milestone">
                <h4 className="milestone-title">Q1 2026: Into the Arena</h4>
                <p className="milestone-text">
                  Launch of “Who’s Got BEEF?” leaderboard to recognize active holders and community contributors. More details to be shaped by the BEEF Brigade as we grow.
                </p>
              </div>

              <div className="cta-buttons">
                <a
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=CPkbe6eSwido2gHWkp3HM1KQ9sL8BocmqWApeTy6Xmwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                >
                  Buy $BEEF Now
                </a>
                <button onClick={() => setShowFeud(true)} className="cta-btn">
                  About $BEEF
                </button>
              </div>
              <p className="journey-disclaimer">
                Disclaimer: BEEF TOKEN is a meme coin for entertainment and community engagement. Cryptocurrency investments carry risks. Do your own research and invest responsibly.
              </p>

              {showFeud && (
                <div className="feud-modal">
                  <div className="feud-content">
                    <h2 className="feud-title">$BEEF: The Conflict-Fueled Meme Token</h2>
                    <p className="feud-text">
                      Born from the Joe Rogan vs Liver King feud, <strong>$BEEF TOKEN</strong> is a Solana-based meme coin that channels unapologetic energy. Inspired by a developer’s awakening from addiction, $BEEF questions cultural contradictions and celebrates voices like Liver King’s — raw, real, and resilient. From Rogan’s 2022 steroid callout to Johnson’s 2025 arrest in Austin, this feud fuels our mission. Join the BEEF Brigade on <a href="https://t.me/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="text-[#ca8a04] hover:underline">Telegram</a> and <a href="https://x.com/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="text-[#ca8a04] hover:underline">X</a> to stake your BEEF and fuel the truth!
                    </p>
                    <button className="close-btn" onClick={() => setShowFeud(false)}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </section>
          } />
          <Route path="/story" element={<Story />} />
        </Routes>

        <footer className="footer">
          <p className="footer-text">
            $BEEF TOKEN © 2025. Built with ❤️ for the BEEF Brigade. Special thanks to Zachary for the epic support in bringing this vision to life!
          </p>
          <div className="social-links">
            <a href="https://t.me/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">Telegram</a>
            <a href="https://x.com/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">X</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;