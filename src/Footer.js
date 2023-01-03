import './Footer.css';
import img from  './logo.svg';

function Footer() {
    return (
        <div className='footer'>
            <a href='#'>Привет</a>
            <img src={img}></img>
            <a href='#'>Пока</a>
        </div>
    );
}

export default Footer;