// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//       </ul>
//     </nav>
//   );
// };

import Navbar from '../components/Navbar';
// import '../styles/globals.css';
import '../styles/navbar.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
        
    );
}

export default MyApp;
