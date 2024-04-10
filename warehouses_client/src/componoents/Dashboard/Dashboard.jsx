import React from "react"

import imageddd from './Prodcut/asset/login-2.jpg';
function Dashboard() {

  
  return (
    <>
         <div class="card mb-3 col-lg-12 ">
      <div class="row no-gutters text-center">
        <div class="col-md-4">
          <img src={imageddd} className=''style={{maxwidth:'400px',height:'auto',width
        :'100%'}}alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Frist going website read on  comming </h2>
            <p class="card-text">go home page that button in clicked admin page open</p>
            <p class="card-text">Add any other content or styling for the login message</p>
            <p class="card-text"><small class="text-muted">Thank you</small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard