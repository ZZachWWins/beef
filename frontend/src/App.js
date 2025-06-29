import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [showFeud, setShowFeud] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/.netlify/functions/login', { username, password });
      setUser(res.data.user);
      setUsername('');
      setPassword('');
    } catch (err) {
      alert('Login failed—check your credentials!');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/.netlify/functions/signup', { username: signupUsername, password: signupPassword });
      alert('Signup successful! Please log in.');
      setSignupUsername('');
      setSignupPassword('');
    } catch (err) {
      alert('Signup failed—username might be taken!');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/.netlify/functions/logout');
      setUser(null);
    } catch (err) {
      alert('Logout failed—try again!');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">🥩 BEEF TOKEN</h1>
        <p className="subtitle">The Journey of the Feud</p>
        {user ? (
          <div className="auth-section">
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout} className="auth-btn">Logout</button>
          </div>
        ) : (
          <div className="auth-section">
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button type="submit" className="auth-btn">Login</button>
            </form>
            <form onSubmit={handleSignup} className="signup-form">
              <input
                type="text"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                placeholder="Choose Username"
                required
              />
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Choose Password"
                required
              />
              <button type="submit" className="auth-btn">Signup</button>
            </form>
          </div>
        )}
      </header>

      <section className="journey-section">
        <h2 className="journey-title">The Journey of BEEF TOKEN</h2>
        <div className="milestone">
          <h3 className="milestone-title">2022: The Steroid Scandal Ignites</h3>
          <p className="milestone-text">
            Joe Rogan, on *The Joe Rogan Experience*, calls out Brian Johnson (Liver King) for his “ancestral lifestyle” claims, suggesting his physique is steroid-enhanced, not just raw meat and primal tenets. Johnson denies it, but leaked emails reveal he spent $11,000 monthly on steroids and human growth hormone. The internet erupts with memes, and Johnson’s $100M supplement empire takes a hit. Rogan mocks him as “preposterous,” refusing a podcast invite.[](https://www.hollywoodreporter.com/tv/tv-news/the-liver-king-netflix-brian-johnson-arrest-joe-rogan-1236298842/)[](https://www.hollywoodreporter.com/news/general-news/the-liver-king-joe-rogan-out-of-jail-1236300001/)[](https://people.com/liver-king-charged-over-online-threats-to-joe-rogan-11761206)
          </p>
        </div>
        <div className="milestone">
          <h3 className="milestone-title">2023: Apology and Netflix Spotlight</h3>
          <p className="milestone-text">
            Johnson admits to steroid use, issuing a public apology after the email leak. Rogan discusses the scandal on his podcast, which garners 8.7M YouTube views, further fueling the feud. Netflix’s *Untold: The Liver King* (released May 2025, but filmed earlier) chronicles Johnson’s rise and fall, highlighting Rogan’s role in exposing him. Johnson blames Rogan for damaging his brand, deepening the rift.[](https://www.nbcnews.com/news/us-news/liver-king-arrested-threatening-joe-rogan-rcna215004)[](https://www.hollywoodreporter.com/news/general-news/the-liver-king-joe-rogan-out-of-jail-1236300001/)[](https://www.independent.co.uk/news/world/americas/liver-king-brian-johnson-arrest-threats-joe-rogan-b2776703.html)
          </p>
        </div>
        <div className="milestone">
          <h3 className="milestone-title">June 2025: Threats and Arrest</h3>
          <p className="milestone-text">
            On June 23, 2025, Johnson posts Instagram videos challenging Rogan to a “man-to-man” fight, despite no jiu-jitsu training against Rogan’s black belt. Traveling to Austin, he escalates with threats like “I’m going to make you pay.” Austin Police arrest him on June 24 at the Four Seasons Hotel for terroristic threats (Class B misdemeanor). Rogan, who never met Johnson, tells police he finds the posts threatening and believes Johnson is “significantly unstable” with a “significant drug issue.” Johnson is released on $20,000 bail with a 200-yard restraining order, ankle monitor, and mandatory mental health evaluation.[](https://abcnews.go.com/US/liver-king-arrested-austin-after-threatening-joe-rogan/story?id=123196365)[](https://variety.com/2025/digital/news/liver-king-arrested-joe-rogan-terroristic-threats-police-1236440335/)[](https://www.independent.co.uk/news/world/americas/liver-king-joe-rogan-threats-arrest-drugs-b2777637.html)
          </p>
        </div>
        <div className="milestone">
          <h3 className="milestone-title">Post-Arrest: Doubling Down</h3>
          <p className="milestone-text">
            After release, Johnson continues posting cryptic videos, avoiding Rogan’s name but referencing his Comedy Mothership club or “Seth Rogen.” He claims the “videos will never stop” and hints at a future fight, despite the restraining order and a 9 p.m. curfew. X posts reflect mixed sentiment: some call Johnson unhinged, others say Rogan provoked him by mocking his steroid use. One X user notes, “Rogan called it out long before, but that isn’t Rogan’s fault.” Another suggests Johnson’s mental state is concerning.[](https://x.com/barstoolsports/status/1938609562182992353)[](https://www.yahoo.com/lifestyle/articles/joe-rogan-responds-liver-king-180334878.html)[](https://www.hollywoodreporter.com/news/general-news/the-liver-king-joe-rogan-out-of-jail-1236300001/)
          </p>
        </div>
        <div className="milestone">
          <h3 className="milestone-title">2025 and Beyond: BEEF TOKEN’s Legacy</h3>
          <p className="milestone-text">
            BEEF TOKEN launches on Solana to immortalize this epic feud, turning internet drama into a meme coin movement. The community fuels the journey, staking BEEF and debating Team Rogan vs. Team Liver King. Join the BEEF Brigade to write the next chapter of this legendary clash. Buy BEEF, pick a side, and keep the feud alive!
          </p>
        </div>
        <div className="cta-buttons">
          <button
            className="cta-btn"
            onClick={() => window.location.href = 'https://raydium.io/swap/?inputMint=sol&outputMint=CPkbe6eSwido2gHWkp3HM1KQ9sL8BocmqWApeTy6Xmwt'}
          >
            Buy BEEF Now
          </button>
          <button className="cta-btn" onClick={() => setShowFeud(true)}>
            Feud Summary
          </button>
        </div>
        <p className="journey-disclaimer">
          Disclaimer: BEEF TOKEN is a meme coin for entertainment and community engagement. Cryptocurrency investments carry risks. Do your own research and invest responsibly.
        </p>

        {showFeud && (
          <div className="feud-modal">
            <div className="feud-content">
              <h2 className="feud-title">Rogan vs. Liver King: The Feud Summary</h2>
              <p className="feud-text">
                The journey began in 2022 when Joe Rogan accused Liver King (Brian Johnson) of steroid use, debunking his “ancestral lifestyle” claims. Leaked emails confirmed Rogan’s suspicions, leading to Johnson’s 2023 apology and a Netflix documentary. In June 2025, Johnson escalated with Instagram threats, leading to his arrest in Austin for terroristic threats. Post-release, he continued cryptic callouts under a restraining order. BEEF TOKEN, launched on Solana, turns this drama into a meme coin, inviting the community to stake their BEEF and join the feud’s legacy.[](https://abcnews.go.com/US/liver-king-arrested-austin-after-threatening-joe-rogan/story?id=123196365)[](https://www.hollywoodreporter.com/news/general-news/the-liver-king-joe-rogan-out-of-jail-1236300001/)[](https://www.rollingstone.com/culture/culture-news/liver-king-mental-health-restraining-order-joe-rogan-arrest-1235373593/)
              </p>
              <button className="close-btn" onClick={() => setShowFeud(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;