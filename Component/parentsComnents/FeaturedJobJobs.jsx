import Head from 'next/head'
import styles from '../../styles/featuredJob.module.css'
import FeaturedJob from '../propComponents/FeaturedJob'
import FeaturdJobData from '../array/FeaturedJobData'

export default function FeaturedJobJobs() {
    return (
        <>
            <div>
                {FeaturdJobData.map((val) => {
                    return (
                        <FeaturedJob image={val.image} company={val.company}
                            skill={val.skill} location={val.location}
                            dutyTime={val.dutyTime} salary={val.salary} />);
                         })}

            </div>
        </>
    )
}