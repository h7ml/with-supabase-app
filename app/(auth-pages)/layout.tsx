export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center min-h-[80vh] relative px-4 py-10">
      {/* 科技风格背景效果 */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none" />
      
      {/* 背景装饰元素 */}
      <div className="absolute top-[30%] left-[10%] w-72 h-72 rounded-full bg-tech-radial opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-tech-radial opacity-15 blur-3xl pointer-events-none" />
      
      {/* 具有科技感的装饰线条 */}
      <div className="absolute top-20 left-0 right-0 h-[1px] bg-tech-glow opacity-30" />
      <div className="absolute bottom-10 left-0 right-0 h-[1px] bg-tech-glow opacity-30" />
      
      {/* 主要内容 */}
      {children}
    </div>
  );
}
