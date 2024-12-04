// pages/accueil.js
import React from 'react';

import Link from "next/link";

const Accueil = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Ceci est la page Accueil de notre application Next.js..</p>
      {/* <Link href="/chat" style={{ color: "blue", textDecoration: "underline" }}>
                Go to Chat
            </Link> */
            <Link href="/chat" legacyBehavior>
                <a style={{ color: "blue", textDecoration: "underline" }}>Go to Chat</a>
            </Link>}
    </div>
    
    

  );
};

export default Accueil;
