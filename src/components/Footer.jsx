import React from 'react'

function Footer() {
  return (
    <>
    <div className="container mt-5 w-100 " style={{height:'300px'}}>
      <div className="row">
       <div className="col-lg-3 p-3">
          <h5 className='text-warning' style={{fontFamily:'"Satisfy", serif'}}>Company-------</h5>
         <div>
           <ul >
             <li className="list-group-item text-white"> > About Us</li>
             <li className="list-group-item text-white"> > Contact Us</li>
             <li className="list-group-item text-white"> > Reservation</li>
             <li className="list-group-item text-white"> > Privacy Policy</li>
             <li className="list-group-item text-white"> > Terms & Condition</li>
           </ul>

          </div>

        </div>
        <div className="col-lg-3 p-3">
            <h5 className='text-warning' style={{fontFamily:'"Satisfy", serif'}}>Contact-------</h5>
          <div className='text-align-justify'>
            <div>
              <ul >
               <li className="list-group-item text-white"><i className="fa-solid fa-location-dot"></i> 123 Street,New York,USA</li>
               <li className="list-group-item text-white"> <i className="fa-solid fa-phone"></i> +012 34567890</li>
               <li className="list-group-item text-white"> </li>
               <li className="list-group-item text-white"> <i className="fa-sharp fa-solid fa-envelope" ></i>INFO@EXAMPLE.COM</li>
              
             </ul>
  
            </div>
            <div className='d-flex mt-3 ' >
                   <a href="" style={{fontSize:'20px',color:'white',width:'30px',height:'50px',borderRadius:'50px'}}> <i  className="fa-brands fa-facebook"></i></a>
                   <a href="" style={{fontSize:'20px',color:'white',width:'30px',height:'50px',borderRadius:'50px'}}><i className="fa-brands fa-twitter"></i></a>
                   <a href="" style={{fontSize:'20px',color:'white',width:'30px',height:'50px',borderRadius:'50px'}}><i className="fa-brands fa-youtube"></i></a>
  
                  <a href="" style={{fontSize:'20px',color:'white',width:'30px',height:'50px',borderRadius:'50px'}}>  <i className="fa-brands fa-instagram"></i></a>
               
    
            </div>
  
          </div>
        </div>

        <div className="col-lg-3 p-3">
          <h5 className='text-warning' style={{fontFamily:'"Satisfy", serif'}}>Opening-------</h5>
         <div>
          <p className='text-white'>Monday-Saturday <br />09AM-09PM</p>
         
          <p className='text-white'>Sunday <br />10AM-08PM</p>
          </div>

          
        </div>

        <div className="col-lg-3 p-3">
        <h5 className='text-warning' style={{fontFamily:'"Satisfy", serif'}}>Newsletter-------</h5>

          <div>
            <p className='text-white'> Dolor amet sit justo amet elitr clita <br /> ipsum ektir est.      </p>
            <div className='d-flex justify-content-between'>
              <input type="text" className='form-control'  placeholder='Enter email.....'/>
              <button className='btn btn-warning ms-3' >SIGNUP</button>
           </div>
          </div>
        </div>

      </div>

    </div>
    
    </>
  )
}

export default Footer