// Decorative chromatogram. Peaks are generated from the list below; the trace is not real data.
const peaks = [
  { c: 70, h: 26, w: 7 },
  { c: 150, h: 44, w: 8 },
  { c: 245, h: 100, w: 9 },
  { c: 330, h: 60, w: 10 },
  { c: 430, h: 32, w: 12 },
  { c: 520, h: 16, w: 9 },
];
const W = 600;
const BASE = 130;

const yAt = (x) => BASE - peaks.reduce((s, p) => s + p.h * Math.exp(-((x - p.c) ** 2) / (2 * p.w ** 2)), 0);

const line = [];
for (let x = 0; x <= W; x += 2) line.push(`${x === 0 ? 'M' : 'L'}${x} ${yAt(x).toFixed(1)}`);

const area = [];
for (let x = 215; x <= 275; x += 2) area.push(`${x === 215 ? 'M' : 'L'}${x} ${yAt(x).toFixed(1)}`);
const peakArea = `${area.join(' ')} L275 ${BASE} L215 ${BASE} Z`;

export default function Chromatogram() {
  return (
    <svg viewBox={`0 0 ${W} 150`} role="img" aria-label="Decorative HPLC chromatogram with six peaks" className="w-full">
      <path className="peak" d={peakArea} fill="rgb(var(--highlight))" fillOpacity="0.28" />
      <line x1="0" y1={BASE} x2={W} y2={BASE} stroke="rgb(var(--line))" strokeWidth="1" />
      {[100, 200, 300, 400, 500].map((x) => (
        <line key={x} x1={x} y1={BASE} x2={x} y2={BASE + 6} stroke="rgb(var(--line))" strokeWidth="1" />
      ))}
      <path
        className="trace"
        d={line.join(' ')}
        pathLength="1"
        fill="none"
        stroke="rgb(var(--accent))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
