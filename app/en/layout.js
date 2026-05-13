import NavEN from '../components/NavEN';

export default function ENLayout({ children }) {
  return (
    <>
      <NavEN />
      {children}
    </>
  );
}