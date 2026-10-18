import Marquee from "../components/Marquee";

const highlights = [
  {
    value: "253×",
    title: "Lower allocation latency",
    detail: "CUDADL stream-ordered memory pool vs. raw cudaMalloc/cudaFree.",
  },
  {
    value: "97%",
    title: "Of cuBLAS throughput",
    detail: "Custom Tensor Core GEMM with FP16/BF16 mixed precision.",
  },
  {
    value: "4.9×",
    title: "Faster than the naive kernel",
    detail: "Measured on the CUDADL Tensor Core GEMM implementation.",
  },
  {
    value: "30%",
    title: "Lower API response latency",
    detail: "After adding targeted MongoDB indexes in CollabLearn.",
  },
  {
    value: "15%",
    title: "Stability improvement",
    detail: "After resolving 10+ legacy defects at ZM Lifestyle.",
  },
  {
    value: "1780",
    title: "Peak LeetCode rating",
    detail: "470+ problems solved across arrays, trees, graphs, and DP.",
  },
  {
    value: "1.6×",
    title: "Kernel speedup",
    detail: "Fused Bias+ReLU/GELU kernels in the mixed-precision tensor framework.",
  },
];

const firstRow = highlights.slice(0, 4);
const secondRow = highlights.slice(4);

function HighlightCard({ value, title, detail }) {
  return (
    <article className="w-72 shrink-0 rounded-xl border border-white/10 bg-gradient-to-br from-indigo to-storm p-5">
      <p className="text-3xl font-bold text-white">{value}</p>
      <h3 className="mt-2 text-sm font-semibold text-neutral-100">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-neutral-400">{detail}</p>
    </article>
  );
}

export default function Achievements() {
  return (
    <section className="mt-25 c-space md:mt-35" id="achievements">
      <h2 className="text-heading">A few numbers behind the projects</h2>
      <div className="relative mt-10 flex w-full flex-col items-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:32s]">
          {firstRow.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:36s]">
          {secondRow.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-primary" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-primary" />
      </div>
      <p className="mt-5 text-sm leading-relaxed text-neutral-400">
        Also certified in App Development with Swift (Associate, Certiport; October 2026, 925/1000), IBM AI Fundamentals (September 2025), and AWS Academy Cloud Foundations (September 2025).
      </p>
    </section>
  );
}
