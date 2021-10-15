import Head from "next/head";
import styles from "../../styles/jobseeker.module.css";
export default function Jobseekers() {
  return (
    <>
      <div className={styles.whol}>
        <div className={styles.ndy}>
          <div className={styles.first}>
            <div className={styles.circ}>
              <img src="https://th.bing.com/th/id/Rd9db03d96fb174b8eeec4f133db335ff?rik=1FpG9APz%2fXlcjw&riu=http%3a%2f%2fp13cdn4static.sharpschool.com%2fUserFiles%2fServers%2fServer_82103%2fImage%2fStudent+Services%2fGuidance%2fGuidance+Images%2fRegister+Icon.jpeg&ehk=oPyzVPyv6mF0FOHBoQGf2oCUaOijkYBS1p9EOuGyOHM%3d&risl=&pid=ImgRaw" />
            </div>
            <div className={styles.numb}>Step-1</div>
            <div className={styles.names}>Register at MoSahay</div>
          </div>

          <div className={styles.secon}>
            <div className={styles.circ}>
              <img src="https://th.bing.com/th/id/OIP.9yCexsNPgd52WLyrdhBlOwHaHa?pid=ImgDet&rs=1" />
            </div>
            <div className={styles.numb}>Step-2</div>
            <div className={styles.namej}>Search and apply for jobs</div>
          </div>

          <div className={styles.third}>
            <div className={styles.circ}>
              <img src="https://cdn1.iconfinder.com/data/icons/colored-hand-phone/96/Whatsapp-mobile_phone-512.png" />
            </div>
            <div className={styles.numb}>Step-3</div>
            <div className={styles.namee}>
              Directly call or Whatsapp employers
            </div>
          </div>

          <div className={styles.four}>
            <div className={styles.circ}>
              <img src="https://image.flaticon.com/icons/png/512/1256/1256676.png" />
            </div>
            <div className={styles.numb}>Step-4</div>
            <div className={styles.nameh}>Give interview and get hired</div>
          </div>
        </div>
      </div>
    </>
  );
}
