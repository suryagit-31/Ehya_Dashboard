import React, { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-RCY3VF43FL";
    document.head.appendChild(script);

    // Configure GA
    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RCY3VF43FL');
    `;
    document.head.appendChild(configScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(configScript);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
