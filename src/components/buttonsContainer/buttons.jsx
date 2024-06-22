import React from "react";
import styles from "./buttons.module.css";


export default function Buttons({onButtonClick}) {
    const button1 = ["C", "+/-", "%"];
    const button2 = ["/", "*", "-", "+", "="];
    const button3 = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
    const button4 = ["0", "."];

    return (
       
        <div className={styles.container}>
             
            <div className={styles.leftButtons}>
                <div className={styles.topButton}>
                    {button1.map((btn) => (
                        <button key={btn} onClick={()=>{onButtonClick(btn)}}>{btn}</button>
                    ))}
                </div>
                <div className={styles.midButton}>
                    
                    {button3.map((btn) => (
                        <button key={btn} onClick={()=>{onButtonClick(btn)}}>{btn}</button>  
                    ))}
                   
                </div>
                <div className={styles.bottomButtons}>
                    {button4.map((btn) => (
                        <button
                            key={btn}
                            onClick={()=>{onButtonClick(btn)}}
                            className={btn === "0" ? styles.leftBottomButton : styles.rightBottomButton}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.rightButton}>
                {button2.map((btn) => (
                    <button key={btn} onClick={()=>{onButtonClick(btn)}}>{btn}</button>
                ))}
            </div>
        </div>
    );
}
