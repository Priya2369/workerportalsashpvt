import styles from '../../styles/Achievement.module.css';
import { GiAchievement } from 'react-icons/gi';

const Achievement = () => {
    return (
        <>
            <div className={styles.achievement}>

                <div className={styles.div}>

                    <h2 className={styles.h2}>Our Achievements <GiAchievement className={styles.achvmntIcon} /></h2>
                    <div className={styles.HR_div}>
                        <img src='HR_India.jpeg' alt='HR_India Img' className={styles.HR_India} />
                        <div>
                            <h3 className={styles.h3}>The best social impact startup award</h3>
                            <p>
                                ⚫ Self motivation is the force that keeps us to go on. National drive to success this great mission .
                            </p>
                            <p>
                                ⚫ Honoured to receive the best social impact startup award from HR India forum . Wininig excellence at national HR circle India level .
                            </p>
                        </div>
                    </div>
                    <div className={styles.HR_div}>
                        <div>
                            <h3 className={styles.h3}>Organisation of the year for social impact award</h3>
                            <p>
                                ⚫ Self motivation is the force that keeps us to go on. National drive to success this great mission .
                            </p>
                            <p>
                                ⚫ Honoured to receive organisation of the year for social impact award from HR India forum . Wininig excellence at national HR circle India level .
                            </p>
                        </div>
                        <img src='HR_IndiaAward.jpeg' alt='HR_India Award Img' className={styles.HR_IndiaAward} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Achievement;
