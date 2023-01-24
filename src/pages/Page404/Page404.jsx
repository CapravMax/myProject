import React from 'react'
import './Page404.scss'

export const Page404 = () => {
    

    return (
        
         <div className="error-wrap ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="error-content">
                  <span className="trans_text v4">Опаньки!</span>
                  <h2>404 error</h2>
                  <p> Такой странички нету!!!</p>
                  <a href="index.html" className ="btn style3">Back to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>

          
    )
}
