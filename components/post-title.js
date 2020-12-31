export default function PostTitle({ children }) {
  return (
    <h1 className="text-8xl xs:text-5xl sm:text-7xl font-bold tracking-tighter leading-tight leading-none mb-12 text-left">
      {children}
    </h1>
  );
}
