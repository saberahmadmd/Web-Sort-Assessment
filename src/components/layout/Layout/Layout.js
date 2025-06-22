import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;