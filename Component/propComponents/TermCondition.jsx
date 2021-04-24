import Head from 'next/head'
import styles from '../../styles/termCondition.module.css'


export default function TermCondition() {
    return (
    <>

            

<div id="termsConditions" className={styles.tabcontent}>
        <div className={styles.main}>
            <h3 className={styles.h3}>
                Terms & Condition
            </h3>
            <div className={styles.box}>
                <ul className={styles.ul}>
                    <li>I am 18 and above.</li>
                    <li>If hired,I agree to abide by all of the company rules and regulations.<br/>
                        I agree that in the event my employment may be terminated at any time by either party
                        for any reason or for no reason. </li>
                    <li>I accept all the above information given are correct.</li>
                </ul>
                <div className={styles.tacbox}>
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox"> Agree To All Conditions</label>
                </div>
            </div>
            <div className={styles.abs}>
                <button type="submit" className={styles.btn}>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}