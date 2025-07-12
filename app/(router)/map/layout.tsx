import NavBar from 'components/navigation/navBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}
