import { StyleRounded } from "@material-ui/icons";
import Head from "next/head";
import styles from "../../styles/opening.module.css";
import Process from "./Process";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Open() {
  const router = useRouter();
  
  return (
    <>
      <div className={styles.hedar}>
        <h1>Hire staff or search jobs in All Cities</h1>
        <div className={styles.btngrp}>
          
            
              <button className={styles.post}>
                  <a href="https://corporate.mosahay.org/sign-in" rel="noopener noreferrer" target="_blank">Post New Job </a></button>
           
          
          <Link href="/signup">
            
              <button className={styles.srch}><a>Search Job</a></button>
            
          </Link>
        </div>

        <Process />
      </div>
      
    </>
  );
}
