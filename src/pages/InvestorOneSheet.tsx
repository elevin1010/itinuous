import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@/styles/investor-onesheet.css';
import intinuousBadge from '@/assets/intinuous-badge.png';

const InvestorOneSheet = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeEls = pageRef.current?.querySelectorAll('.fade-in');
    fadeEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="investor-onesheet" ref={pageRef}>
      <div className="page">
        {/* Header */}
        <header className="ios-header">
          <span className="logo">Intinuous</span>
          <span className="doc-label">Private Investor Overview · Confidential</span>
        </header>

        {/* Badge watermark */}
        <img
          src={intinuousBadge}
          alt=""
          className="ios-badge-watermark"
        />

        {/* Hero */}
        <div className="hero">
          <p className="hero-kicker">Identity Infrastructure · Pre-Seed</p>
          <h1>
            The cost of copying<br />
            a person just hit <em>zero.</em><br />
            Proof of ownership didn't.
          </h1>
          <p className="hero-lead">
            Generative AI can replicate anyone's face, voice, and likeness at scale — today, for free.
            What doesn't exist is a <strong>standardized, portable way for an individual to prove they came first.</strong>{' '}
            Platform verification is siloed. AI systems don't check identity registries before they generate.
            Contracts reference likeness rights with no infrastructure beneath them.
            <br /><br />
            Intinuous is building the missing layer: a timestamped, publicly referenceable attestation
            that links a verified person to their likeness — independent of any single platform,
            portable across every context where identity matters.
          </p>

          <div className="pull">
            <p>"A watermark protects a file.<br />Intinuous protects the person behind it."</p>
          </div>
        </div>

        {/* The Problem */}
        <div className="section fade-in">
          <span className="section-label">The Problem</span>
          <p>
            Anyone with a public face, a professional brand, or a commercial presence is now copyable.
            The entertainment industry learned this first — SAG-AFTRA's 2023 AI provisions introduced
            digital likeness protections into major contracts for the first time. California's AB 2602
            established consent requirements for AI-generated digital replicas of performers.{' '}
            <strong>The law is moving. The infrastructure underneath it doesn't exist yet.</strong>
          </p>
          <p>
            That gap — between the legal recognition of likeness as a protected asset and the absence
            of any standardized proof mechanism — is where Intinuous operates.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="stat-val">$<span>0</span></div>
              <div className="stat-label">Cost to clone a face or voice with AI today</div>
            </div>
            <div className="stat">
              <div className="stat-val"><span>0</span></div>
              <div className="stat-label">Cross-platform identity attestation standards in existence</div>
            </div>
            <div className="stat">
              <div className="stat-val">10<span>–</span>25<span>M</span></div>
              <div className="stat-label">Monetizing creators globally with direct economic exposure</div>
            </div>
          </div>
        </div>

        {/* The Product */}
        <div className="section fade-in">
          <span className="section-label">The Product</span>
          <p>
            Intinuous is a <strong>fully automated identity attestation platform.</strong>{' '}
            Each verified individual receives a complete attestation kit — available immediately upon verification:
          </p>
          <div className="tags">
            <span className="tag">Verified identity attestation</span>
            <span className="tag">Tamper-resistant private certificate</span>
            <span className="tag">Public attestation page with live status</span>
            <span className="tag">Unique Intinuous ID</span>
            <span className="tag">Badge + QR verification asset</span>
            <span className="tag">Embed-ready verification snippet</span>
            <span className="tag">Identity continuity dashboard</span>
            <span className="tag">Dispute documentation package</span>
          </div>
          <p style={{ marginTop: '1.4rem' }}>
            The public verification endpoint and API status route allow anyone — a casting director,
            a brand, a legal team — to check attestation status independently, in real time.
            The badge travels with the individual across platforms, contracts, and professional contexts.{' '}
            <strong>No platform can revoke it.</strong>
          </p>
        </div>

        {/* Early Signal */}
        <div className="section fade-in">
          <span className="section-label">Early Signal</span>
          <div className="signal-box">
            <p>
              Representatives managing <strong>notable public figures</strong> — representing musicians Cardi B and Tom Hamilton as well as soccer star Alisha Lehmann — have indicated that if Intinuous were
              available today, they would purchase it or advise their clients to do so.
            </p>
            <p>
              This is not surveyed interest. These are <strong>unsolicited, specific expressions
              of purchase intent</strong> from people whose job is to protect the identity and
              commercial value of high-profile talent.
            </p>
            <p className="signal-note">
              No formal commitments. Product launching shortly. The signal is early and real.
            </p>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="section fade-in">
          <span className="section-label">Market Opportunity</span>
          <p>
            We focus on individuals whose identity has <strong>economic value</strong> —
            not the broadest possible population.
          </p>
          <p>
            The beachhead is monetizing creators and talent: actors, voice artists, influencers,
            and public-facing professionals. Roughly <strong>10–25 million globally.</strong>{' '}
            At 5% adoption and $40/year, that's <strong>$20–50M ARR</strong> from this segment alone —
            before agency licensing, enterprise API revenue, or the broader expansion market
            of 30–60 million public-facing professionals.
          </p>
          <p>
            The business works at the attestation layer. The upside is in what the registry becomes
            as adoption compounds — a permission and licensing infrastructure layer for the
            generative era, intersecting a <strong>$100B+ creator economy.</strong>
          </p>
        </div>

        {/* The Path */}
        <div className="section fade-in">
          <span className="section-label">The Path</span>
          <div className="phases">
            <div className="phase phase-now">
              <div className="phase-num">01</div>
              <div className="phase-name">Identity Attestation</div>
              <div className="phase-status">Launching now</div>
            </div>
            <div className="phase">
              <div className="phase-num">02</div>
              <div className="phase-name">Registry Depth & Agency Adoption</div>
              <div className="phase-status">Near-term</div>
            </div>
            <div className="phase">
              <div className="phase-num">03</div>
              <div className="phase-name">Permission Signaling Layer</div>
              <div className="phase-status">Mid-term</div>
            </div>
            <div className="phase">
              <div className="phase-num">04</div>
              <div className="phase-name">Transactional Identity & IP Infrastructure</div>
              <div className="phase-status">Long-term</div>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Each phase builds on the recognition earned in the previous one.{' '}
            <strong>Infrastructure emerges from coordination, not features.</strong>{' '}
            The goal of Phase 1 is not scale — it is establishing the attestation layer
            as the recognized standard within a high-stakes vertical.
            Everything that follows compounds from that.
          </p>
        </div>

        {/* Founder */}
        <div className="section fade-in">
          <span className="section-label">Founder</span>
          <div className="founder-block">
            <div>
              <div className="founder-name">Eric Levin</div>
              <div className="founder-title">Founder, Intinuous</div>
              <p className="founder-bio">
                25+ years working directly with public-facing creatives, talent, and
                reputation-driven businesses. Deep operational exposure to likeness as
                a commercial asset — not as an abstract concept, but as something with
                contract language, economic stakes, and real consequences when misused.
              </p>
            </div>
            <div>
              <p className="founder-bio">
                The thesis for Intinuous didn't emerge from watching the AI industry.
                It emerged from 25 years of watching identity function as an economic asset —
                and watching the infrastructure around it fail to keep pace with those exploiting it.
                <br /><br />
                <strong style={{ color: 'var(--ink)' }}>That proximity is the founding advantage.</strong>{' '}
                It shapes the product, the go-to-market strategy, and the specific relationships
                that will drive early adoption.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section fade-in">
          <h2>Let's talk about<br /><em>what comes next.</em></h2>
          <p className="cta-sub">
            We're raising a pre-seed round to accelerate agency outreach and
            integration development. Happy to share the full investor brief
            or get on a call.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <Link to="/contact" className="btn-outline">Request Full Brief</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="ios-footer">
          <span className="footer-logo">Intinuous</span>
          <span className="footer-note">intinuous.com &nbsp;·&nbsp; Confidential &nbsp;·&nbsp; For Prospective Partners Only</span>
        </footer>
      </div>
    </div>
  );
};

export default InvestorOneSheet;
