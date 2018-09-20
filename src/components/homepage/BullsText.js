import React from 'react';

const BullsText = () => {
  return (
    <div>
      <div className="page-header__content">
        <div className="text-bg">
          <svg>
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%"/>
                <text id="title1" x="50%" y="30%" dy="1em" letterSpacing="0.02em">Bulls</text>
              </mask>
              <mask id="mask-2" x="0" y="0" width="100%" height="100%">
                <rect id="alpha-2" x="-66%" y="0" width="85%" height="100%" transform="skewX(40)"/>
                <text id="title2" x="50%" y="30%" dy="1em" letterSpacing="0.02em">Bulls</text>
              </mask>
              <mask id="mask-3" x="0" y="0" width="100%" height="100%">
                <rect id="alpha-3" x="-66%" y="0" width="70%" height="100%" transform="skewX(40)"/>
                <text id="title3" x="50%" y="30%" dy="1em" letterSpacing="0.02em">Bulls</text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" mask="url(#mask)"/>
            <rect id="base-3" x="0" y="0" width="100%" height="100%" mask="url(#mask-2)"/>
            <rect id="base-4" x="0" y="0" width="100%" height="100%" mask="url(#mask-3)"/>
            <text id="title4" x="50%" y="30%" dy="1em" letterSpacing="0.02em">Bulls</text>
          </svg>
        </div>
      </div>
    </div>

  );

};


export default BullsText;

