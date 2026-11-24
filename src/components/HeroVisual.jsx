import { Code2, Cloud, Database, Smartphone } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract digital globe and connected technology illustration" role="img">
      <div className="hero-glow" />
      <div className="globe-orbit orbit-a" /><div className="globe-orbit orbit-b" /><div className="globe-orbit orbit-c" />
      <div className="globe-core">
        <svg viewBox="0 0 440 440" className="globe-svg" aria-hidden="true">
          <defs>
            <radialGradient id="globeFill" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#ff9c48" stopOpacity=".22"/><stop offset=".62" stopColor="#e66a12" stopOpacity=".08"/><stop offset="1" stopColor="#050505" stopOpacity=".08"/></radialGradient>
            <linearGradient id="globeStroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff8a2a" stopOpacity=".9"/><stop offset="1" stopColor="#ff8a2a" stopOpacity=".05"/></linearGradient>
          </defs>
          <circle cx="220" cy="220" r="176" fill="url(#globeFill)" stroke="url(#globeStroke)" strokeWidth="1.5" />
          <ellipse cx="220" cy="220" rx="82" ry="176" fill="none" stroke="#ff8b2d" strokeOpacity=".32" />
          <ellipse cx="220" cy="220" rx="138" ry="176" fill="none" stroke="#ff8b2d" strokeOpacity=".20" />
          <ellipse cx="220" cy="220" rx="176" ry="62" fill="none" stroke="#ff8b2d" strokeOpacity=".27" />
          <ellipse cx="220" cy="220" rx="176" ry="119" fill="none" stroke="#ff8b2d" strokeOpacity=".20" />
          <path d="M70 154 C118 128 158 139 183 165 L175 193 147 201 130 232 101 221 82 188Z" fill="#f47c24" fillOpacity=".2" stroke="#ff983e" strokeOpacity=".36" />
          <path d="M192 85 L231 80 251 106 240 131 260 152 245 176 215 169 194 190 174 171 181 143 164 119Z" fill="#f47c24" fillOpacity=".17" stroke="#ff983e" strokeOpacity=".35" />
          <path d="M235 209 L269 190 309 205 323 235 302 261 286 298 252 308 232 279 211 256Z" fill="#f47c24" fillOpacity=".16" stroke="#ff983e" strokeOpacity=".35" />
          <path d="M137 280 L168 264 194 281 188 316 164 341 144 321Z" fill="#f47c24" fillOpacity=".15" stroke="#ff983e" strokeOpacity=".3" />
          {[ [95,170],[148,115],[221,76],[310,133],[355,220],[284,312],[175,344],[73,261],[260,184],[185,223],[319,278] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?3.5:2.3} fill="#ff9a43" />)}
          <path d="M52 220 H388 M220 44 V396" stroke="#ff8a2a" strokeOpacity=".12" strokeDasharray="3 8" />
        </svg>
      </div>
      <div className="floating-tech tech-code"><Code2 size={19} /><span>Build</span></div>
      <div className="floating-tech tech-cloud"><Cloud size={20} /><span>Scale</span></div>
      <div className="floating-tech tech-data"><Database size={18} /><span>Connect</span></div>
      <div className="floating-tech tech-mobile"><Smartphone size={18} /><span>Engage</span></div>
      <div className="hero-visual-caption"><span className="pulse-dot" /> Ideas into digital reality</div>
    </div>
  );
}
