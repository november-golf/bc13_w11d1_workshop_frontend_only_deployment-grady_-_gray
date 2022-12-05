import React from "react";


function CancelLaunchButton(handleClick) {
  return (
    <button className="cancel-launch" onClick= {() => window.open('https://media.tenor.com/v2n3rVxTeJQAAAAd/jeff-goldblum.gif')}>
      CANCEL LAUNCH
    </button>
  );
}

export default CancelLaunchButton;
