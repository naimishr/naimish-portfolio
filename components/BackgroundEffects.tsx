export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed -top-50 -left-25 w-125 h-125 bg-purple-500/20 blur-[140px] rounded-full pointer-events-none z-[-1]" />

      <div className="fixed -bottom-50 -right-25 w-125 h-125 bg-blue-500/20 blur-[140px] rounded-full pointer-events-none z-[-1]" />
    </>
  );
}