import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Card.module.css";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dice from "../assets/images/icon-dice.svg";

const Card = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className={styles.Card}>
      <p className={styles.cardTitle}>ADVICE #{advice.id}</p>
      <h2 className={styles.cardContent}>“{advice.advice}”</h2>
      <img
        src={dividerDesktop}
        className={styles.dividerDesktop}
        alt="divider"
      />
      <img src={dividerMobile} className={styles.dividerMobile} alt="divider" />
      <div className={styles.dice} onClick={getAdvice}>
        <img src={dice} alt={styles.dice} />
      </div>
    </div>
  );
};

export default Card;
