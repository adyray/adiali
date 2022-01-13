import React from 'react'

function body() {
  
  return (
    <div className="about">
    <div className="paragraph">
    {/* <h1 style={{}}> */}
    A little about me...
    {/* </h1> */}
      <h1 style={{"background" : "#e90349", "width" : "fit-content", "color": "white", "padding" : "10px"}}>
        Hi, I'm Adnan
        </h1>
    <p>
    I am a versatile graphic designer / creative technologist, who covers multiple digital platforms, from UX and UI, video production, web skins, HTML5 banners and applications to digital static graphics, OOH and DOOH. My position includes working with creative agencies to build and localise worldwide campaigns. Clients I have worked with are Oracle, EA, Sage, F5, Facebook, NetJets, Supercell, IHG, Indeed, Fitbit, Twitch, Twitter and many more.
    </p>
    </div>
    </div>
  );
}

export default body;
