import { useState } from 'react'
import React from 'react';
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export const Login = ({ marketplace, nft }) => {

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <div>
                Login here
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login