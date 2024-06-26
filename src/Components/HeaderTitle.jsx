import './Header.css';

export default function Header({ title, subtitle, description }) {
    return (
        <header className="header">
            <div className="header-content">
                <img src="https://practicastorage.blob.core.windows.net/practicasblob/usuarios/1710393763804.jpg" alt="photo" className="header-image" />
                <div className="header-text">
                    <h1>CHRISTIAN CONTRERAS</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <p>{description}</p>
        </header>
    );
}
