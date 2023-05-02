import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"

export const Imagen = () => {
  return (
    <div class="imagen">
      <h2>.</h2>
      <h2>.</h2>
      <h2>.</h2>
    </div>

  );
};

export const Alumno = () => {
  return (
    <div>
      <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
        <div className='TarjetaFoto'>
          <img src="./img/Yo1.jpg" alt="Foto mía"
            class="d-block w-full"></img>
          <h2>
            Nombre del Alumno: <br></br>
            Matricula del Alumno: <br></br>
            Escolaridad: <br></br> 
          </h2>

          <h3>
            Rubén Castillo Ramirez <br></br>
            S20020314 <br></br>
            602 Ingeniería de Software, UV
          </h3>
        </div>
      </div>


    </div>

  )
}