import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>
          Copyright © {footerYear} - All right reserved by ACME
          Industries Ltd
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
