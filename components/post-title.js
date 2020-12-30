export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl lg:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight lg:leading-none mb-12 text-center lg:text-left">
      {children}
    </h1>
  );
}
