import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (

    <div className="Encabezado">

      <div className="RecuadroLogo">
        <h1><b className="Logo_Text">MyGamesList</b></h1>
        <img className='Logo_Img' src='./img/Logo.png' alt='Textp'></img>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/Inicio" className="no-underline black">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/listas" className="no-underline black">
                Mostrar Datos
              </Link>
            </li>

            <li>
              <Link to="/add" className="no-underline black" >
                Agregar Datos
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Header;