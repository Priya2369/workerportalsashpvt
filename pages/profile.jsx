import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Registration from '../Component/parentsComnents/Registration'
import Flex from '../Component/Flex'
import Stepper from '../Component/parentsComnents/Stepper'


export default function ProfilePage() {
  return (
    <>
    <div><Flex  line1="Find the"  line2="most exciting" line3="job here"/></div>
    <div className={styles.profiles}><Stepper/></div>
    <Registration/>
    
    
    </>
  )
}