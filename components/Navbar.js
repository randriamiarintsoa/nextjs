
// export default Navbar;
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/navbar.css';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav>
            <ul>
                <li className={router.pathname === '/accueil' ? 'active' : ''}>
                    <Link href="/accueil">Accueil</Link>
                </li>
                <li className={router.pathname === '/about' ? 'active' : ''}>
                    <Link href="/about">À propos</Link>
                </li>
                <li className={router.pathname === '/contact' ? 'active' : ''}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
