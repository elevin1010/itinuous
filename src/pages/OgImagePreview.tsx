const OgImagePreview = () => (
  <div style={{
    width: 1200, height: 630, position: 'relative', overflow: 'hidden',
    background: 'radial-gradient(ellipse 70% 60% at 50% 50%, #5a3e1a 0%, #2a1f0e 40%, #121010 80%, #080808 100%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'Montserrat', sans-serif",
  }}>
    <h1 style={{
      fontSize: 72, fontWeight: 300, letterSpacing: '0.28em', textTransform: 'uppercase' as const,
      background: 'linear-gradient(135deg, #f5e6c8 0%, #d7b25a 40%, #b8924a 70%, #f5e6c8 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      margin: 0, lineHeight: 1,
    }}>
      Intinuous
    </h1>
    <p style={{
      fontSize: 22, fontWeight: 300, letterSpacing: '0.12em', color: 'rgba(250,250,250,0.7)',
      marginTop: 20,
    }}>
      The Continuity Layer for Identity
    </p>
  </div>
);

export default OgImagePreview;
