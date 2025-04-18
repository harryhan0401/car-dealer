export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="bg-[#FEFEFE]/20">{children}</div>;
}
