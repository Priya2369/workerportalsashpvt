import { StyleRounded } from '@material-ui/icons'
import Head from 'next/head'
import styles from '../../styles/opening.module.css'
import Process from './Process'
import Link from 'next/link'

export default function Open  () {
    return(
        <>
            <div className={styles.hedar}>
                  <h1>Hire staff or search jobs in All Cities</h1>
                  <div className={styles.btngrp}>
                      <button className={styles.post}><Link href="https://corporate.mosahay.org/sign-in"><a>Post New Job</a></Link></button>
                      <button className={styles.srch}><Link href="/signup"><a>Search Job</a></Link></button>
                  </div>
                  <Process/>
                  

            </div>
        </>
    )
}