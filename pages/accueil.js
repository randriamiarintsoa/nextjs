// pages/accueil.js
import React from 'react';

import Link from "next/link";

const Accueil = () => {
  return (
    <div>
      <h1>Accueil Us</h1>
      <p>This is the Accueil page of our Next.js application.</p>
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
