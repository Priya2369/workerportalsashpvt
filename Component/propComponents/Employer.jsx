import Head from "next/head";
import styles from "../../styles/employer.module.css";

export default function Employer() {
  return (
    <>
      <div  className={styles.whol}>
        <div className={styles.ndy}>
          <div className={styles.first}>
            <div className={styles.circ}>
              <img src="https://contesty.com/wp-content/uploads/2014/05/paper-pen-icon-32-512x512.png" />
            </div>
            <div className={styles.numb}>Step-1</div>
            <div className={styles.names}>
              Enter job and company details at MoSahay
            </div>
          </div>

          <div className={styles.secon}>
            <div className={styles.circ}>
              <img src="https://conceptdraw.com/a3208c3/p6/preview/640/pict--checklist-hr-workflow---vector-stencils-library.png--diagram-flowchart-example.png" />
            </div>
            <div className={styles.numb}>Step-2</div>
            <div className={styles.namej}>Select a plan and post your job</div>
          </div>

          <div className={styles.third}>
            <div className={styles.circ}>
              <img src="https://cdn3.iconfinder.com/data/icons/web-hosting-flat-color-set-4/55/unlock__access__cloud__database_-512.png" />
            </div>
            <div className={styles.numb}>Step-3</div>
            <div className={styles.namee}>
              Get applications and access <br /> candidates database
            </div>
          </div>

          <div className={styles.four}>
            <div className={styles.circ}>
              <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/79/cd/7b/79cd7b24-227b-af8d-8e9e-37689a572fbe/source/512x512bb.jpg" />
            </div>
            <div className={styles.numb}>Step-4</div>
            <div className={styles.nameh}>
              Interview them and hire the best staff
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
