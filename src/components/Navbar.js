// component ka firt letter humesha capital letter me likhna chahie  case me N ,Navbar ke lie 
import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <div>
      {/* NAVBAR */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">

          <a className="navbar-brand" href="/">{props.title}</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">  

            {/* MODE BUTTON  */}
            <div className="form-check form-switch">
              {/* //passing togglemode function as a prop */}
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlfor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable dark' : 'Enable light'}</label>
            </div>


          </div>

        </div>
      </nav>


    </div>
  )
}

// import PropTypes from 'prop-types'  import karna padega proptype ke lie
Navbar.propTypes = {
  title: PropTypes.string,
 
  //this is to make sure that we cannot pass a NO: in title so we have done a validation that we are adding strig

}


// defaultProps will get applied when we have not passed any prop

Navbar.defaultProps = {
  title: "set title",

}

// title: PropTypes.string.isRequired            WE USE THIS WHEN HAVE TO MAKE SURE THAT THE ONTENT INSIDE TITLE DOESN'T REMAIN EMPTY  AND THE ENTERED VALUE SHOULD BE STRING AS SPECIFIED

