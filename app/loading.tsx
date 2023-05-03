export default function Loading() {
  return (
    <div>
      <LoadingSinWave fromVia="from-blue-900 via-blue-300" />
    </div>
  );
}

const Box = ({ delay, fromVia }: { delay: number; fromVia: string }) => (
  <div
    key={delay}
    className={`bg-gradient-to-t ${fromVia} to-transparent w-1 h-8  transform transition-transform duration-1000 ease-in-out origin-bottom`}
    style={{
      animation: `sinWave 1.5s ease-in-out infinite ${delay}s`,
    }}
  >
    &nbsp;
  </div>
);

const LoadingSinWave = ({ fromVia }: { fromVia: string }) => (
  <div key={"hello"} className="flex justify-around">
    {Array.from({ length: 80 }, (_, index) => (
      <Box key={index} delay={index * 0.02} fromVia={fromVia} />
    ))}
  </div>
);
