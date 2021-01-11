import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { ReactComponent as HomeImg } from './img-home.svg';
import Footer from '../Footer';
function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido<br />que entregamos<br />pra você!!!
                    </h1>
                        <h3 className="home-subtitle">
                            Escolha o seu pedido e em poucos minutos<br />levaremoss na sua porta
                    </h3>
                        <Link to="/orders" className="home-btn-order">FAZER O PEDIDO</Link>
                    </div>
                    <div className="home-img">
                        <HomeImg />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;