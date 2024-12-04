import '../styles/footer.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Mon Application apprend le Framework NesxtJs.</p>
            <div>
                <a href="https://twitter.com" style={{ color: 'white', margin: '0 1rem' }}>Twitter</a>
                <a href="https://facebook.com" style={{ color: 'white', margin: '0 1rem' }}>Facebook</a>
                <a href="https://instagram.com" style={{ color: 'white', margin: '0 1rem' }}>Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
