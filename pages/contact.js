 
import styles from "../styles/Home.module.scss";

import React from "react";
import { InlineWidget } from "react-calendly";

 
import { useState } from "react";
 

export default function Home() {
  const [register, setRegister] = useState(false);

  const handleSetRegister = (value) => {
    setRegister(value);
  };

  return (
    <div >
       

                    <InlineWidget url="https://calendly.com/grex-onboarding/1" />

    </div>
  );
}
