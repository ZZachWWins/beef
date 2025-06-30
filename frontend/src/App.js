import React, { useState } from 'react';
import './App.css';

function App() {
  const [showFeud, setShowFeud] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <img 
          src="https://res.cloudinary.com/dgjqe0pu2/image/upload/w_200,h_200,q_auto/1000019256_ldrh3l" 
          alt="BEEF TOKEN Logo" 
          className="logo"
        />
        <h1 className="title">BEEF TOKEN</h1>
        <p className="subtitle">The Conflict-Fueled Meme Token</p>
        <div className="social-links">
          <a href="https://t.me/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">Join Telegram</a>
          <a href="https://x.com/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">Follow on X</a>
        </div>
      </header>

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

        <h3 className="journey-subtitle">The Joe Rogan vs Liver King Feud</h3>
        <div className="milestone">
          <h4 className="milestone-title">2022: The Steroid Scandal Ignites</h4>
          <p className="milestone-text">
            Joe Rogan, on <em>The Joe Rogan Experience</em>, calls out Brian Johnson (Liver King) for his “ancestral lifestyle” claims, suggesting his physique is steroid-enhanced. Johnson denies it, but leaked emails reveal he spent $11,000 monthly on steroids and HGH. The scandal rocks his $100M supplement empire. Rogan calls him “preposterous,” declining a podcast invite, as memes flood the internet.
          </p>
        </div>
        <div className="milestone">
          <h4 className="milestone-title">2023: Apology and Netflix Spotlight</h4>
          <p className="milestone-text">
            Johnson admits to steroid use in a public apology after the email leak. Rogan’s podcast episode discussing the scandal amasses 8.7M YouTube views, amplifying the feud. Netflix’s <em>Untold: The Liver King</em> (released May 2025, filmed earlier) details Johnson’s rise and fall, spotlighting Rogan’s role in exposing him. Johnson blames Rogan for his brand’s damage, escalating tensions.
          </p>
        </div>
        <div className="milestone">
          <h4 className="milestone-title">June 2025: Threats and Arrest</h4>
          <p className="milestone-text">
            On June 23, 2025, Johnson posts Instagram videos challenging Rogan to a “man-to-man” fight, despite no jiu-jitsu skills against Rogan’s black belt. He travels to Austin, posting threats like “I’m going to make you pay.” On June 24, Austin Police arrest him at the Four Seasons for terroristic threats (Class B misdemeanor). Rogan, who never met Johnson, tells police he believes Johnson is “significantly unstable” with a “significant drug issue.” Johnson is released on $20,000 bail with a restraining order, ankle monitor, and mental health evaluation.
          </p>
        </div>
        <div className="milestone">
          <h4 className="milestone-title">Post-Arrest: X Reactions</h4>
          <p className="milestone-text">
            Johnson continues cryptic Instagram videos, avoiding Rogan’s name but referencing his Comedy Mothership club or “Seth Rogen.” He vows the “videos will never stop,” despite a 9 p.m. curfew. X posts show divided sentiment: some call Johnson unhinged, noting his erratic behavior; others argue Rogan provoked him by mocking his steroid use. One X user comments, “Liver King’s mental state is worrying—those videos feel desperate.” Another says, “Rogan just spoke truth, but this feud’s gone too far.”
          </p>
        </div>
        <div className="milestone">
          <h4 className="milestone-title">2025 and Beyond: $BEEF Takes Over</h4>
          <p className="milestone-text">
            <strong>$BEEF TOKEN</strong> launches on Solana via Pump.fun, turning this epic feud into a meme coin movement. The community fuels the journey, staking BEEF and debating truth vs. chaos. Join the BEEF Brigade to write the next chapter of this unapologetic clash.
          </p>
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

      <footer className="footer">
        <p className="footer-text">
          $BEEF TOKEN © 2025. Built with ❤️ for the BEEF Brigade. Special thanks to Zach for the epic support in bringing this vision to life!
        </p>
        <div className="social-links">
          <a href="https://t.me/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">Telegram</a>
          <a href="https://x.com/PumpTheBeef" target="_blank" rel="noopener noreferrer" className="social-btn">X</a>
        </div>
        <img 
          src="https://res.cloudinary.com/dgjqe0pu2/image/upload/w_100,h_100,q_auto/1000019251_lpaa2x" 
          alt="BEEF TOKEN Footer Image" 
          className="footer-logo"
        />
      </footer>
    </div>
  );
}

export default App;