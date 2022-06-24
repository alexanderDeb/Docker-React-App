import React, { Component } from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
// import image4 from '../assets/imagen4.jpg'



export default class NotesList extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <nav className="navbar navbar-dark bg-dark p-0 animate__animated animate__fadeInDown">
            <div className="container-fluid">
              <span className="navbar-text">
                <h5>PROYECTO SOLAR BETA</h5>
              </span>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='container-fluid'>
            <div className='container justify-content-center align-items-center p-5'>
              <div className='row'>
                <div className='col-md-4 ani'>
                  <div className='card text-center bg-dark animate__animated animate__fadeInDown cards'>
                    <img className='images card-img-top img-fluid' alt='...' src={image1} />
                    <div className='card-body text-light'>
                      <h4 className='card-title'>REGISTRO</h4>
                      <p className='card-text text-secondary'>En este apartado podras acceder a la seccion de crear notas, su destino todavia no se conoce pero en algun momento tendra funcionalidad</p>
                      <a href='http://localhost:3000/create' className='btn btn-outline-secondary rounded-5'>Vamos alla</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 ani'>
                  <div className='card text-center bg-dark animate__animated animate__fadeInDown cards'>
                    <img className='images card-img-top img-fluid' alt='...' src={image2} />
                    <div className='card-body text-light'>
                      <h4 className='card-title'>TABLA DE REGISTRO</h4>
                      <p className='card-text text-secondary'>En este apartado podras acceder a la seccion de crear usuarios, su destino todavia no se conoce pero en algun momento tendra funcionalidad</p>
                      <a href='http://localhost:3000/user' className='btn btn-outline-secondary rounded-5'>Vamos alla</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 ani'>
                  <div className='card text-center bg-dark animate__animated animate__fadeInDown cards'>
                    <img className='images card-img-top img-fluid' alt='...' src={image3} />
                    <div className='card-body text-light'>
                      <h4 className='card-title'>CANAL DE YOUTUBE</h4>
                      <p className='card-text text-secondary'>En este apartado podras acceder a la seccion de youtube, su destino todavia no se conoce pero en algun momento tendra funcionalidad</p>
                      <a href='https://youtu.be/2Xs1DAzYHXY' className='btn btn-outline-secondary rounded-5'>Vamos alla</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
