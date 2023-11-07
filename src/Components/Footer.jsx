import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Contact Me</h4>
            <p>If you have any questions or would like to work together, feel free to get in touch.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Add your contact information or social media links here */}
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="mailto:youremail@example.com" className="text-light">Email</a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com/yourprofile" className="text-light">LinkedIn</a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/yourprofile" className="text-light">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
