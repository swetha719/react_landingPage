import React from 'react'
import image from '../assets/hero.png'
import Form from 'react-bootstrap/Form';

function Landing() {
  return (
    <>
      <div className="container bg-white">
        <div className='row landBg  '>
          <div className="col-lg-6 ">
            <div style={{ marginTop: '100px', marginLeft: '50px' }}>
              <h1 className='' style={{ fontFamily: "Protest Revolution, serif",fontWeight:'bold' }}>Enjoy our <br />delicious meal</h1>
              <p className='text-white fw-bold fs-10'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et <br /> eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore <br /> erat amet</p>
              <button className='text-white bg-warning fw-bold fs-5 border border-3 rounded' style={{ width: '200px', height: '50px' }}>Book A Table</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img style={{ width: '500px', height: '500px', padding: '10px', margin: '30px' }} src={image} alt="" />

          </div>
        </div>

        {/* cards */}
        <div className="row p-3 m-5">
          <div className="col-lg-3 border border-3 rounded p-3 " id='colss' style={{ width: '250px' }} >
            <div >
              <i className="fa-sharp fa-solid fa-kitchen-set text-warning fw-bold fs-3"></i>
              <h5 className='text-black'>Master Cheifs</h5>
              <p className='text-black'>Diam elitr kasd sed at elitr sed <br /> ipsum justo dolor sed clita amet <br />
                diam</p>
            </div>

          </div>
          <div className="col-lg-3 border border-3 rounded p-3 ms-5" id='colss' style={{ width: '250px' }}>
            <div>
              <i className="fa-solid fa-utensils text-warning fw-bold fs-3" ></i>
              <h5 className='text-black'>Quality Foods</h5>
              <p className='text-black'>Diam elitr kasd sed at elitr sed <br /> ipsum justo dolor sed clita amet <br />
                diam</p>
            </div>

          </div>
          <div className="col-lg-3 border border-3 rounded p-3 ms-5" id='colss' style={{ width: '250px' }}>
            <div>
              <i className="fa-sharp fa-solid fa-cart-shopping text-warning fw-bold fs-3" ></i>
              <h6 className='text-black'>Online Order</h6>
              <p className='text-black'>Diam elitr kasd sed at elitr sed <br /> ipsum justo dolor sed clita amet <br />
                diam</p>
            </div>
          </div>
          <div className="col-lg-3 border border-3 rounded p-3 ms-5 " id='colss' style={{ width: '250px' }}>
            <div>
              <i className="fa-sharp fa-solid fa-headphones-simple text-warning fw-bold fs-3" ></i>
              <h6 className='text-black'> 24/7 Service</h6>
              <p className='text-black'>Diam elitr kasd sed at elitr sed <br /> ipsum justo dolor sed clita amet <br />
                diam</p>
            </div>
          </div>
        </div>


        {/* about */}

        <div className="row">
          <div className="col-lg-6 ">
            <div className="row">
              <div className="col-lg-6">
                <img src="https://themewagon.github.io/restoran/img/about-1.jpg" width={'300px'} alt="" />
              </div>
              <div className="col-lg-6">
                <img src="https://themewagon.github.io/restoran/img/about-2.jpg" width={'250px'} height={'200px'} style={{ marginTop: '80px' }} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <img src="https://themewagon.github.io/restoran/img/about-3.jpg" width={'250px'} height={'200px'} style={{ marginTop: '20px', marginLeft: '50px' }} alt="" />
              </div>
              <div className="col-lg-6">
                <img src="https://themewagon.github.io/restoran/img/about-4.jpg" width={'300px'} alt="" />
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <h1 className='text-warning ' style={{ fontFamily: '"Satisfy", serif' }}>about us-------</h1>
            <h2 className='' style={{ color: 'black' }}>Welcome to  < i className=" icons fa-solid fa-utensils text-warning fw-bold fs-1"></i> Restoran</h2>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit. <br />
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <button className='text-white bg-warning fw-bold fs-5 border border-3 rounded' style={{ width: '200px', height: '50px' }}>Read More</button>


          </div>
        </div>


        {/* book table */}
        <div className="table m-5 p-5" >
          <img className='img1' style={{ marginLeft: '-45px' }} src="https://media.istockphoto.com/id/1188396853/photo/senior-couple-enjoying-a-glass-of-wine.jpg?b=1&s=612x612&w=0&k=20&c=ZHTyo5NRgVnGZMGUNrrtTw94pU5U7im8KbiZyq2KESY=" width={'100%'} height={'500px'} alt="" />
          <div className='forms p-3 ' style={{backgroundColor:"rgb(4, 2, 47)",width:'700px',height:'400px',marginLeft:'455px',marginTop:'-450px',position:'relative'}}>
          <h3 className='text-warning ' style={{ fontFamily: '"Satisfy", serif' }}>reservation-------</h3>
          <h2 className='' style={{ color: 'white' }}>Book A Table Online</h2>

           <div className='' >
              <Form style={{backgroundColor:"rgb(34, 2, 66)"}}> 
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  
                  <div className='d-flex'>
                    <Form.Control className='m-3' type="email" placeholder="Your  Name" />
                    <Form.Control type="email" className='m-3' placeholder="Your Email" />
                  </div>
                  <div className='d-flex'>
                    <Form.Control type="email" className='m-3' placeholder="Date and Time" />
                    <Form.Control type="email" className='m-3' placeholder="Count" />
                  </div>
                </Form.Group>
                
        <button className='btn text-white fw-bold fs-5' style={{marginLeft:'30px',backgroundColor:'orangered',width:'90%',height:'50px'}}>BOOK NOW</button>
               
              </Form>
           </div>
          </div>
        </div>

        {/* last */}
        <div className='end mt-5 p-5'>
       <div className='d-flex justify-content-center align-items-center flex-column'>
          <h3 className='text-warning m-1' style={{ fontFamily: '"Satisfy", serif' }}>-------Team members-------</h3> 
          
          <h2 className='' style={{ color: 'black' }}>Our Master Cheifs</h2>
       </div>
       <div className="row mt-2 p-2">
        <div className="col-lg-3 ">
          <img src="https://themewagon.github.io/restoran/img/team-1.jpg " width={'250px'} height={'250px'} style={{borderRadius:'250px'}} alt="" />
          <h4 style={{color:'black',fontWeight:'bold',marginLeft:'50px',padding:'10px'}}>Ranveer brar</h4></div>
        <div className="col-lg-3"><img src="https://themewagon.github.io/restoran/img/team-2.jpg" width={'250px'} height={'250px'} style={{borderRadius:'250px'}} alt="" />
        <h4 style={{color:'black',fontWeight:'bold',marginLeft:'50px',padding:'10px'}}>Harpal Sokhi</h4></div>
        <div className="col-lg-3"><img src="https://themewagon.github.io/restoran/img/team-3.jpg" width={'250px'} height={'250px'} style={{borderRadius:'250px'}} alt="" />
        <h4 style={{color:'black',fontWeight:'bold',marginLeft:'50px',padding:'10px'}}>Tarla Dalal</h4></div>
        <div className="col-lg-3"><img src="https://themewagon.github.io/restoran/img/team-4.jpg" width={'250px'} height={'250px'} style={{borderRadius:'250px'}} alt="" />
        <h4 style={{color:'black',fontWeight:'bold',marginLeft:'50px',padding:'10px'}}>Madhur Jaffrey</h4></div>

       </div>


        </div>

      </div>

    </>
  )
}

export default Landing