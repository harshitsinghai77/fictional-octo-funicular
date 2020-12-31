export default function Container({ children }) {
  return (
    <div className="mx-auto px-5 sm:container md:container lg:container xl:container 2xl:container">
      {children}
    </div>
  );
}
