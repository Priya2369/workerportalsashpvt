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
          <a
            href="https://corporate.mosahay.org/sign-in"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className={styles.post}>Post Job</button>{" "}
          </a>

          <Link href="/jobs">
            <button className={styles.srch}>
              <a>Search Job</a>
            </button>
          </Link>
        </div>
        <Process />
      </div>
    </>
  );
}
