
import './Header.css';
export function Header({title, subtitle, description}) {
    return (
        <header className="header">
            <div className="header-content">
            <img src='../src/assets/1710393763804.jpg' alt="photo" className="header-image" />

                <div className="header-text">
                    <h1>CHRISTIAN CONTRERAS</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <p>{description}
            </p>
        </header>
    );
}
