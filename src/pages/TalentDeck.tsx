import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '@/assets/intinuous-mark-clean.png';
import '@/styles/talent-deck.css';

const TalentDeck = () => {
  useEffect(() => {
    // noindex
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.talent-deck .reveal').forEach((el) => observer.observe(el));

    // Obfuscated email
    const encoded = 'aGVsbG9AaW50aW51b3VzLmNvbQ==';
    const decoded = atob(encoded);
    document.querySelectorAll('.talent-deck .email-link').forEach((el) => {
      (el as HTMLAnchorElement).href = 'mailto:' + decoded;
      el.textContent = decoded;
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(meta);
    };
  }, []);

  const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const CornerLogo = ({ label = 'Intinuous', style }: { label?: string; style?: React.CSSProperties }) => (
    <div className="corner-logo" style={style}>
      <img src={logoMark} alt="" />
      <span>{label}</span>
    </div>
  );

  return (
    <div className="talent-deck">
      {/* Nav */}
      <nav className="td-nav">
        <a href="#cover" className="nav-logo">
          <img src={logoMark} alt="Intinuous" />
          <span>Intinuous</span>
        </a>
        <span className="nav-badge">For Talent &amp; Representation &nbsp;&middot;&nbsp; Confidential</span>
        <Link to="/deck/contact" className="nav-cta">
          Get in Touch
          <ArrowIcon />
        </Link>
      </nav>

      <div className="td-page">
        {/* 1. COVER */}
        <section className="slide slide-cream gold-bar" id="cover">
          <img className="watermark" src={logoMark} alt="" />
          <div style={{ position: 'relative', zIndex: 1, paddingLeft: '1.5rem' }}>
            <div className="pill reveal">For Talent &amp; Representation</div>
            <h1 className="display-xl reveal" style={{ color: 'var(--ink)', maxWidth: 780, marginBottom: '1rem' }}>
              Likeness is replicable<br />at scale.
            </h1>
            <p className="display reveal" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: 'var(--gold)', fontStyle: 'italic', marginBottom: 0 }}>
              Here is how to protect it.
            </p>
            <div className="rule-line reveal"></div>
            <p className="reveal" style={{ fontSize: '0.88rem', color: 'var(--muted)', fontWeight: 300, letterSpacing: '0.04em' }}>
              Intinuous — Portable Identity Attestation for the AI Era
            </p>
          </div>
          <CornerLogo label="Confidential" />
        </section>

        {/* 2. REALITY */}
        <section className="slide slide-cream" id="reality">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100 }}>
            <div className="pill reveal">The New Reality</div>
            <h2 className="display reveal">AI has changed the<br /><em>economics of identity.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="card-grid reveal">
              <div className="fact-card"><div className="card-num">01</div><div className="card-head">Replication is inexpensive</div><div className="card-body">AI can recreate faces and voices with high realism. The cost is near zero and falling.</div></div>
              <div className="fact-card"><div className="card-num">02</div><div className="card-head">Contracts are adapting</div><div className="card-body">Digital doubles, synthetic media, and voice models are already entering negotiation rooms.</div></div>
              <div className="fact-card"><div className="card-num">03</div><div className="card-head">Verification stays siloed</div><div className="card-body">Instagram, IMDb, SAG — each verifies within their own ecosystem. None travels cross-platform.</div></div>
              <div className="fact-card"><div className="card-num">04</div><div className="card-head">No standard exists yet</div><div className="card-body">There is currently no way for a performer to publicly establish ownership of their likeness.</div></div>
            </div>
          </div>
          <CornerLogo />
        </section>

        {/* 3. THE GAP */}
        <section className="slide slide-cream" id="gap">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
            <div className="pill reveal">The Gap</div>
            <h2 className="display reveal">Platform verification<br /><em>does not travel.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="gap-grid">
              <div className="platform-list reveal">
                <div className="platform-row"><div><div className="platform-name">Instagram</div><div className="platform-sub">Verifies on Instagram only</div></div><div className="platform-x">✕</div></div>
                <div className="platform-row"><div><div className="platform-name">IMDb</div><div className="platform-sub">Verifies inside IMDb only</div></div><div className="platform-x">✕</div></div>
                <div className="platform-row"><div><div className="platform-name">SAG-AFTRA</div><div className="platform-sub">Verifies membership only</div></div><div className="platform-x">✕</div></div>
              </div>
              <div className="dark-panel reveal">
                <p>AI-generated content travels everywhere.<br /><br />Platform verification does not.</p>
              </div>
            </div>
            <p className="reveal" style={{ marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--muted)', fontStyle: 'italic', fontWeight: 300 }}>
              There is currently no portable, cross-platform attestation tied to a performer's likeness.
            </p>
          </div>
          <CornerLogo />
        </section>

        {/* 4. ANALOGY (DARK) */}
        <section className="slide slide-dark" id="analogy">
          <img className="watermark watermark-dark" src={logoMark} alt="" />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
            <div className="pill pill-dark reveal">What It Is</div>
            <h2 className="display-xl display-dark reveal" style={{ maxWidth: 700 }}>Think of it as a<br />copyright for your<br />likeness.</h2>
            <p className="display reveal" style={{ color: 'var(--goldlt)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>But better.</p>
            <div className="analogy-attrs reveal">
              <div className="attr"><div className="attr-label">Faster</div><div className="attr-sub">Verify in minutes,<br />not months</div></div>
              <div className="attr"><div className="attr-label">Easier</div><div className="attr-sub">Fully automated —<br />no legal filing</div></div>
              <div className="attr"><div className="attr-label">Cheaper</div><div className="attr-sub">~$40/year vs.<br />attorney fees</div></div>
              <div className="attr"><div className="attr-label">Portable</div><div className="attr-sub">API-ready,<br />embeds anywhere</div></div>
            </div>
          </div>
          <CornerLogo label="Intinuous" style={{ opacity: 0.25 }} />
        </section>

        {/* 5. THE KIT */}
        <section className="slide slide-cream" id="kit">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
            <div className="pill reveal">The Attestation Kit</div>
            <h2 className="display reveal">Everything your client<br /><em>receives at verification.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="kit-grid reveal">
              <div className="kit-card"><div className="kit-header"><div className="kit-num">01</div><div className="kit-tag">Private</div></div><div className="kit-title">Tamper-Resistant Private Certificate</div><div className="kit-body">For contracts, agencies, and legal recordkeeping. Timestamped at the moment of attestation.</div></div>
              <div className="kit-card"><div className="kit-header"><div className="kit-num">02</div><div className="kit-tag">Public</div></div><div className="kit-title">Public Attestation Page</div><div className="kit-body">A live, hosted verification page. Anyone can check status: ACTIVE · EXPIRED · REVOKED.</div></div>
              <div className="kit-card"><div className="kit-header"><div className="kit-num">03</div><div className="kit-tag">Portable</div></div><div className="kit-title">Badge · QR Code · Digital Signature</div><div className="kit-body">Embeddable anywhere. Links to the live attestation page in real time. No platform dependency.</div></div>
              <div className="kit-card"><div className="kit-header"><div className="kit-num">04</div><div className="kit-tag">Managed</div></div><div className="kit-title">Identity Continuity Dashboard</div><div className="kit-body">Manage, renew, and monitor attestation status. Dispute documentation package included.</div></div>
            </div>
          </div>
          <CornerLogo />
        </section>

        {/* 6. WHERE IT LIVES */}
        <section className="slide slide-cream" id="where">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
            <div className="pill reveal">Where It Lives</div>
            <h2 className="display reveal">It travels wherever<br /><em>your client's identity appears.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="uses-grid reveal">
              {['Casting submissions', 'Digital likeness negotiations', 'Email signatures', 'Press kits and EPKs', 'Personal websites', 'AI-generated media descriptions', 'Link-in-bio profiles', 'Platforms without native verification', 'Contract appendices'].map((item) => (
                <div className="use-item" key={item}><div className="use-bar"></div><div className="use-label">{item}</div></div>
              ))}
            </div>
            <div className="uses-note reveal">
              <p>The badge and digital signature link to a live, hosted attestation page — viewable by anyone, in real time. No platform can revoke it.</p>
            </div>
          </div>
          <CornerLogo />
        </section>

        {/* 7. WHY IT MATTERS */}
        <section className="slide slide-cream" id="matters">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
            <div className="pill reveal">Why It Matters</div>
            <h2 className="display reveal">Verification is checked<br /><em>when stakes are high.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="scenario-list reveal">
              <div className="scenario-row"><div><div className="scenario-who">Casting Directors</div></div><div className="scenario-action">Verifying submission authenticity before offers are extended</div><div className="scenario-when">Before a booking</div></div>
              <div className="scenario-row"><div><div className="scenario-who">Brands &amp; Studios</div></div><div className="scenario-action">Reviewing talent before licensing likeness for AI use</div><div className="scenario-when">Before a contract</div></div>
              <div className="scenario-row"><div><div className="scenario-who">Your Representation</div></div><div className="scenario-action">Negotiating digital likeness clauses with documented proof</div><div className="scenario-when">At the table</div></div>
              <div className="scenario-row"><div><div className="scenario-who">Legal Teams</div></div><div className="scenario-action">Establishing prior claim in disputes or unauthorized use</div><div className="scenario-when">When it matters most</div></div>
            </div>
            <p className="reveal" style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: 'var(--muted)', fontStyle: 'italic', fontWeight: 300 }}>
              Verification is not checked casually. It is checked when money, contracts, and reputation are on the line.
            </p>
          </div>
          <CornerLogo />
        </section>

        {/* 8. PRIOR CLAIM */}
        <section className="slide slide-cream" id="claim">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
            <div className="pill reveal">Prior Claim</div>
            <h2 className="display reveal">Early documentation<br /><em>becomes later leverage.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="claim-grid">
              <div className="claim-points reveal">
                <div className="claim-point"><div className="claim-bar"></div><div><div className="claim-head">Establishes prior public claim</div><div className="claim-body">A timestamped record is harder to contest than an assertion made after the fact.</div></div></div>
                <div className="claim-point"><div className="claim-bar"></div><div><div className="claim-head">Strengthens contractual leverage</div><div className="claim-body">When digital likeness clauses arise, documented clients negotiate from a stronger position.</div></div></div>
                <div className="claim-point"><div className="claim-bar"></div><div><div className="claim-head">Creates proof before misuse occurs</div><div className="claim-body">Reactive defense is harder than documented ownership. Anchoring identity first is always the stronger position.</div></div></div>
              </div>
              <div className="quote-block reveal">
                <blockquote><p>"Ownership is most defensible when established early."</p></blockquote>
                <p className="quote-sub">Proactive documentation is stronger than reactive defense. It is easier to define ownership before the market demands it.</p>
              </div>
            </div>
          </div>
          <CornerLogo />
        </section>

        {/* 9. WHAT IT IS NOT */}
        <section className="slide slide-cream" id="positioning">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
            <div className="pill reveal">Positioning</div>
            <h2 className="display reveal">What Intinuous<br /><em>is not.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="not-grid reveal">
              <div>
                <div className="not-col-label">Not this</div>
                <div className="not-list">
                  <div className="not-item"><span className="sym">✕</span>&nbsp; It does not control AI systems</div>
                  <div className="not-item"><span className="sym">✕</span>&nbsp; It does not police the internet</div>
                  <div className="not-item"><span className="sym">✕</span>&nbsp; It does not replace SAG or representation</div>
                  <div className="not-item"><span className="sym">✕</span>&nbsp; It does not eliminate impersonation</div>
                  <div className="not-item"><span className="sym">✕</span>&nbsp; It is not crypto or NFT-adjacent</div>
                </div>
              </div>
              <div>
                <div className="not-col-label not-col-label-gold">But this</div>
                <div className="not-list">
                  <div className="is-item"><span className="sym">✓</span>&nbsp; It formalizes authenticity</div>
                  <div className="is-item"><span className="sym">✓</span>&nbsp; It creates portable proof of prior ownership</div>
                  <div className="is-item"><span className="sym">✓</span>&nbsp; It complements every layer of representation</div>
                  <div className="is-item"><span className="sym">✓</span>&nbsp; It introduces a clear, referenceable identity signal</div>
                  <div className="is-item"><span className="sym">✓</span>&nbsp; It is serious infrastructure — not hype</div>
                </div>
              </div>
            </div>
          </div>
          <CornerLogo />
        </section>

        {/* 10. WHY NOW */}
        <section className="slide slide-cream" id="whynow">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
            <div className="pill reveal">Why Now</div>
            <h2 className="display reveal">The window is open.<br /><em>It will not stay open.</em></h2>
            <div className="rule-line reveal"></div>
            <div className="timing-list reveal">
              <div className="timing-row"><div className="timing-label">SAG-AFTRA AI Provisions (2023)</div><div className="timing-body">Digital likeness protections entered major contracts for the first time — with no standardized proof mechanism beneath them. That gap is the opening.</div></div>
              <div className="timing-row"><div className="timing-label">California AB 2602</div><div className="timing-body">Establishes consent requirements for AI-generated replicas of performers. The law exists. The verification infrastructure does not.</div></div>
              <div className="timing-row"><div className="timing-label">AI Is Already in the Room</div><div className="timing-body">Studios and brands are discussing digital usage rights now. Performers are being scanned. Synthetic content is expanding faster than industry standards.</div></div>
              <div className="timing-row"><div className="timing-label">Early Adoption = Early Advantage</div><div className="timing-body">Once AI clauses become standard, those who documented early will negotiate from a stronger position. That window is open now.</div></div>
            </div>
          </div>
          <CornerLogo />
        </section>

        {/* 11. BIGGER PICTURE (DARK) */}
        <section className="slide slide-dark" id="future">
          <img className="watermark watermark-dark" src={logoMark} alt="" />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
            <div className="pill pill-dark reveal">Where This Goes</div>
            <h2 className="display-xl display-dark reveal" style={{ maxWidth: 700 }}>Today, a portable<br />identity attestation.</h2>
            <p className="display reveal" style={{ color: 'var(--goldlt)', fontStyle: 'italic', fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}>Tomorrow, the reference layer.</p>
            <div className="future-grid reveal">
              <div className="future-item"><div className="future-label">AI Platform Checks</div><div className="future-body">Generative systems referencing the registry before producing likeness content.</div></div>
              <div className="future-item"><div className="future-label">Contractual Standard</div><div className="future-body">Digital likeness clauses citing Intinuous ID as the recognized verification reference.</div></div>
              <div className="future-item"><div className="future-label">Cross-Platform Validation</div><div className="future-body">A portable identity record that travels across every platform and ecosystem.</div></div>
            </div>
            <div className="disclaimer reveal">
              <p>No promises. No adoption claims. Intinuous delivers immediate value today — and is built with this future in mind.</p>
            </div>
          </div>
          <CornerLogo label="Intinuous" style={{ opacity: 0.25 }} />
        </section>

        {/* 12. CTA */}
        <section className="slide slide-cream gold-bar" id="cta">
          <img className="watermark" src={logoMark} alt="" />
          <div style={{ position: 'relative', zIndex: 1, paddingLeft: '1.5rem', maxWidth: 700 }}>
            <h2 className="display-xl reveal" style={{ color: 'var(--ink)' }}>Let's talk about<br />protecting your clients.</h2>
            <p className="display reveal" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}>
              <Link to="/deck/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Get in Touch →</Link>
            </p>
            <div className="rule-line reveal" style={{ maxWidth: 400 }}></div>
            <div className="cta-contact reveal">
              <a className="email-link" href="#">loading...</a>
              <a href="https://intinuous.com" className="url">intinuous.com</a>
            </div>
            <div className="cta-closes reveal">
              <span>Verify once.</span>
              <span>Receive a formal, portable attestation.</span>
              <span>Carry it anywhere your identity appears.</span>
            </div>
          </div>
          <CornerLogo label="Confidential · For Talent & Representation" />
        </section>

        {/* Footer */}
        <footer className="td-footer">
          <div className="footer-logo"><img src={logoMark} alt="" /><span>Intinuous</span></div>
          <span className="footer-note">intinuous.com &nbsp;·&nbsp; Confidential &nbsp;·&nbsp; For Talent &amp; Representation</span>
        </footer>
      </div>
    </div>
  );
};

export default TalentDeck;
