import Nav from '../components/Nav';

export default function ESLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}