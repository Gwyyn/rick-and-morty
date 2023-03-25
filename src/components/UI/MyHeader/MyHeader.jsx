import React from 'react';
import cl from './MyHeader.module.css'
import txtLogo from './LogoText.module.css'

const MyHeader = () => {
    return (
       // <div className={cl.myHeader}>
          //  <div className={cl.txtLogo}>
             //   <div className={cl.container}>
                  //  {/*<div className={txtLogo.portal}>*/}

                  //  {/*</div>*/}
                    <header className={txtLogo.title}>Rick<span className={txtLogo.spanAnd}>and</span>Morty</header>
                 //   {/*<div className={txtLogo.titleMiddle}>Rick<span>and</span>Morty</div>*/}
                 //   {/*<div className={txtLogo.titleBottom}>Rick<span>and</span>Morty</div>*/}
              //  </div>
          //  </div>
      //  </div>
    );
};

export default MyHeader;