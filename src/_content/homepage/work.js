import meta from '../../_img/client/meta-logo.png'
import React from 'react'
import ea from '../../_img/client/EA-Emblem.png'
import epic from '../../_img/client/Epic_Games_logo.png'
import google from '../../_img/client/google.png'
import shell from '../../_img/client/shell.png'
import ihg from '../../_img/client/ihg.png'
import supercell from '../../_img/client/supercell.png'
import amazongames from '../../_img/client/amazongames.png'
function work() {
  return (
    <>
    {/* <p className="title">Clients</p> */}
    {/* <h1 className="flashyTitles"> test </h1> */}
    <div className="clientTabs-fullwrapper">
    <div className="clientTabs-wrapper">
    <ul className="clientsTabs">
      <li>
        <img src={meta} width="100%"alt="meta"/>
      </li>
      <li>
      <img src={ea} width="100%"alt="ea"/>
      </li>
      <li>
      <img src={epic} width="60%"alt="epic"/>
      </li>
      <li>
      <img src={google} width="60%"alt="fit"/>
      </li>
      </ul>
      <ul className="clientsTabs">
      <li>
        <img src={shell} width="60%"alt="shell"/>
      </li>
      <li>
      <img src={ihg} width="70%"alt="ihg"/>
      </li>
      <li>
      <img src={supercell} width="60%"alt="supercell"/>
      </li>
      <li>
      <img src={amazongames} width="80%"alt="fit"/>
      </li>
      </ul>
    </div>
    </div>
    </>

  )
}

export default work;