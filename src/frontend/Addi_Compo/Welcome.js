import React from 'react';
// import img1 from '../../images/ethereumlogo.svg';
import img2 from '../../images/icons8-info.svg';
import './index.css';
import {shortenAddress} from '../utils/shortenAddress.js';
 const Welcome=({ web3Handler, account })=>{

    return(
        <div className="welcome">
            <div className="leftSection">
                <h1 className="heading">Buy the products with <br/> less price and from <br/> actual seller </h1>
                <p className="content">Customers will be provided with digital NFT warrenty card which will help <br/>to verify the authenticity of their product, prove their ownership of their<br/> product, and transfer ownership of them upon resale</p>
                {!account && <button onClick={web3Handler} type="button" className="btn-grad">Connect your Wallet</button> }
            </div>
            <div className="card">
                {/* <img src='../../images/ethereumlogo.svg' alt="Ethereum" className='eth'></img> */}
                <img src={img2} alt="Info" className='info'></img>
                <p className="address">{account?shortenAddress(account):"---"}</p>
                <p className="ethereum">Ethereum</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Welcome;