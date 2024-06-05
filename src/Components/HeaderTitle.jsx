
import './Header.css';
export default function Header({title, subtitle, description}) {
    return (
        <header className="header">
            <div className="header-content">
            <img src='https://drive.google.com/uc?export=download&id=1KyoHAuUCFcSe6qZ1FuF18khb1vHDmxIA' alt="photo" className="header-image" />

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
