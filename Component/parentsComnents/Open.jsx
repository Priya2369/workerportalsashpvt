import { StyleRounded } from '@material-ui/icons'
import Head from 'next/head'
import styles from '../../styles/opening.module.css'
import Process from './Process'

export default function Open  () {
    return(
        <>
            <div className={styles.hedar}>
                  <h1>Hire staff or search jobs in All Cities</h1>
                  <div className={styles.btngrp}>
                      <button className={styles.post}><a>Post New Job</a></button>
                      <button className={styles.srch}><a>Search Job</a></button>
                  </div>
                  <Process/>
                  

            </div>
        </>
    )
}