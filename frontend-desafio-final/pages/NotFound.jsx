import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main className="p-5" id="notfound" style={styles.box}>
            <div className="text-center py-5" style={styles.container}>
                <h1 className="display-1" style={styles.heading}>404</h1>
                <h2 style={styles.subHeading}>File not found</h2>
                <p style={styles.text}>La URL solicitada no se encontró en este servidor.</p>
                <Link to="/" style={styles.link}>Volver al Home</Link>
            </div>
        </main>
    );
}

const styles = {
    box: {
        marginTop: '165px'
    },
    container: {
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        padding: '20px',
        paddingTop: '20px',
        maxWidth: '400px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '6rem',
        color: '#ff5555',
        margin: '0',
    },
    subHeading: {
        fontSize: '2rem',
        margin: '0',
    },
    text: {
        fontSize: '1.2rem',
    },
    link: {
        display: 'block',
        fontSize: '1.2rem',
        marginTop: '20px',
        textDecoration: 'none',
        color: '#007bff',
    },
}