type Star = {
  top: string;
  left: string;
  size: number;
  rotate: number;
  delay: string;
  duration: string;
};

const stars: Star[] = [
  { top: "8%", left: "6%", size: 14, rotate: -12, delay: "0s", duration: "4.2s" },
  { top: "15%", left: "18%", size: 9, rotate: 20, delay: "1.1s", duration: "3.4s" },
  { top: "6%", left: "34%", size: 12, rotate: -30, delay: "2.3s", duration: "5.1s" },
  { top: "22%", left: "48%", size: 8, rotate: 8, delay: "0.6s", duration: "3.8s" },
  { top: "10%", left: "62%", size: 16, rotate: -18, delay: "1.7s", duration: "4.6s" },
  { top: "18%", left: "78%", size: 10, rotate: 26, delay: "0.3s", duration: "3.2s" },
  { top: "5%", left: "90%", size: 13, rotate: -8, delay: "2.8s", duration: "5.4s" },
  { top: "30%", left: "10%", size: 9, rotate: 14, delay: "1.4s", duration: "4s" },
  { top: "35%", left: "26%", size: 18, rotate: -22, delay: "0.9s", duration: "5.8s" },
  { top: "28%", left: "40%", size: 8, rotate: 32, delay: "2.1s", duration: "3.6s" },
  { top: "33%", left: "58%", size: 11, rotate: -14, delay: "0.2s", duration: "4.4s" },
  { top: "25%", left: "70%", size: 9, rotate: 18, delay: "1.9s", duration: "3.9s" },
  { top: "38%", left: "86%", size: 14, rotate: -26, delay: "2.6s", duration: "5.2s" },
  { top: "46%", left: "4%", size: 10, rotate: 10, delay: "0.7s", duration: "4.1s" },
  { top: "50%", left: "20%", size: 21, rotate: -16, delay: "1.2s", duration: "6s" },
  { top: "44%", left: "36%", size: 8, rotate: 24, delay: "2.4s", duration: "3.3s" },
  { top: "52%", left: "52%", size: 17, rotate: -10, delay: "0.4s", duration: "4.8s" },
  { top: "47%", left: "66%", size: 9, rotate: 30, delay: "1.6s", duration: "3.7s" },
  { top: "41%", left: "82%", size: 12, rotate: -20, delay: "2.9s", duration: "5.5s" },
  { top: "58%", left: "12%", size: 9, rotate: 16, delay: "0.5s", duration: "3.5s" },
  { top: "62%", left: "30%", size: 13, rotate: -28, delay: "1.8s", duration: "4.9s" },
  { top: "55%", left: "44%", size: 8, rotate: 12, delay: "2.2s", duration: "3.1s" },
  { top: "60%", left: "60%", size: 19, rotate: -6, delay: "0.8s", duration: "5.6s" },
  { top: "56%", left: "74%", size: 10, rotate: 22, delay: "1.3s", duration: "4.3s" },
  { top: "64%", left: "90%", size: 12, rotate: -24, delay: "2.7s", duration: "5.3s" },
  { top: "70%", left: "6%", size: 11, rotate: 18, delay: "0.1s", duration: "4.5s" },
  { top: "74%", left: "22%", size: 8, rotate: -12, delay: "1.5s", duration: "3.6s" },
  { top: "68%", left: "38%", size: 15, rotate: 28, delay: "2.5s", duration: "5.7s" },
  { top: "76%", left: "54%", size: 9, rotate: -18, delay: "0.6s", duration: "4s" },
  { top: "71%", left: "68%", size: 12, rotate: 14, delay: "1.9s", duration: "5s" },
  { top: "66%", left: "84%", size: 8, rotate: -32, delay: "2.0s", duration: "3.4s" },
  { top: "82%", left: "14%", size: 16, rotate: 20, delay: "0.3s", duration: "4.7s" },
  { top: "86%", left: "32%", size: 10, rotate: -8, delay: "1.1s", duration: "3.8s" },
  { top: "80%", left: "48%", size: 9, rotate: 26, delay: "2.3s", duration: "5.1s" },
  { top: "88%", left: "64%", size: 13, rotate: -22, delay: "0.9s", duration: "4.2s" },
  { top: "84%", left: "78%", size: 8, rotate: 10, delay: "1.7s", duration: "3.2s" },
  { top: "92%", left: "40%", size: 11, rotate: -16, delay: "2.6s", duration: "5.9s" },
  { top: "94%", left: "8%", size: 14, rotate: 24, delay: "0.4s", duration: "4.6s" },
  { top: "90%", left: "92%", size: 9, rotate: -28, delay: "1.4s", duration: "3.9s" },
  { top: "12%", left: "96%", size: 10, rotate: 18, delay: "2.1s", duration: "4.4s" },
  { top: "40%", left: "96%", size: 8, rotate: -14, delay: "0.7s", duration: "3.7s" },
  { top: "78%", left: "96%", size: 12, rotate: 30, delay: "1.6s", duration: "5.2s" },
  { top: "20%", left: "4%", size: 8, rotate: -24, delay: "2.8s", duration: "3.5s" },
  { top: "48%", left: "92%", size: 15, rotate: 12, delay: "0.2s", duration: "5.8s" },
  { top: "72%", left: "96%", size: 9, rotate: -20, delay: "1.0s", duration: "4.1s" },
];

function StarShape({ size, rotate }: { size: number; rotate: number }) {
  return (
    <svg
      className="star"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M50 6 L61.8 38.2 L96.6 38.2 L68.5 58.6 L79.4 92 L50 71.6 L20.6 92 L31.5 58.6 L3.4 38.2 L38.2 38.2 Z"
        fill="#ffdf7e"
        stroke="#ffdf7e"
        strokeWidth="13"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="site-canvas">
      <div className="starfield" aria-hidden="true">
        {stars.map((star, index) => (
          <span
            key={index}
            className="star-wrap"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          >
            <StarShape size={star.size} rotate={star.rotate} />
          </span>
        ))}
      </div>
    </main>
  );
}

export default App;
