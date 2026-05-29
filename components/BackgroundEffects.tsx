export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed top-[-200px] left-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full pointer-events-none z-[-1]" />

      <div className="fixed bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full pointer-events-none z-[-1]" />
    </>
  );
}