export default function MobileEdgeAccent() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-0 z-40 w-4 rounded-l-full bg-orange-500/80 lg:hidden"
      style={{
        WebkitMaskImage: "url(/brand/pattern-blobs.png)",
        maskImage: "url(/brand/pattern-blobs.png)",
        WebkitMaskSize: "56px 220px",
        maskSize: "56px 220px",
        WebkitMaskPosition: "right center",
        maskPosition: "right center",
        WebkitMaskRepeat: "repeat-y",
        maskRepeat: "repeat-y",
      }}
    />
  );
}
