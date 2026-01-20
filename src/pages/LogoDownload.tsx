import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useRef } from 'react';
import '@fontsource/montserrat/300.css';

const LogoDownload = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadSVG = () => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" width="400" height="60">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&amp;display=swap');
    </style>
  </defs>
  <text x="0" y="45" font-family="Montserrat, sans-serif" font-weight="300" font-size="48" letter-spacing="8" fill="#FFFFFF">INT</text>
  <text x="115" y="45" font-family="Montserrat, sans-serif" font-weight="300" font-size="48" letter-spacing="8" fill="#D7B25A">INUOUS</text>
</svg>`;
    
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'intinuous-logo.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = (scale: number = 2) => {
    const canvas = document.createElement('canvas');
    const width = 400 * scale;
    const height = 60 * scale;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Transparent background
    ctx.clearRect(0, 0, width, height);
    
    // Set up text
    ctx.scale(scale, scale);
    ctx.font = '300 48px Montserrat, sans-serif';
    ctx.letterSpacing = '8px';
    ctx.textBaseline = 'middle';
    
    // Draw "INT" in white
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('INT', 0, 35);
    
    // Draw "INUOUS" in gold
    ctx.fillStyle = '#D7B25A';
    const intWidth = ctx.measureText('INT').width + 8; // Add letter spacing
    ctx.fillText('INUOUS', intWidth, 35);
    
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `intinuous-logo-${width}x${height}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-light text-foreground">Logo Download</h1>
          <p className="text-muted-foreground">Download the Intinuous logo in various formats</p>
        </div>

        {/* Logo Preview - Dark Background */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">On Dark Background</p>
          <div className="bg-black rounded-lg p-12 flex items-center justify-center border border-border/20">
            <span className="font-['Montserrat'] font-light tracking-widest uppercase text-4xl md:text-5xl">
              <span className="text-white">INT</span>
              <span className="text-primary">INUOUS</span>
            </span>
          </div>
        </div>

        {/* Logo Preview - Light Background */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">On Light Background</p>
          <div className="bg-white rounded-lg p-12 flex items-center justify-center border border-border/20">
            <span className="font-['Montserrat'] font-light tracking-widest uppercase text-4xl md:text-5xl">
              <span className="text-black">INT</span>
              <span className="text-primary">INUOUS</span>
            </span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={downloadSVG} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download SVG
          </Button>
          <Button onClick={() => downloadPNG(2)} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download PNG (2x)
          </Button>
          <Button onClick={() => downloadPNG(4)} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download PNG (4x)
          </Button>
        </div>

        {/* Back link */}
        <div className="text-center">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoDownload;
