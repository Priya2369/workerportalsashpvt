import Head from 'next/head'
import styles from '../../styles/textField.module.css'

export default function TextField(props) {
  return (
    <>
    <input  type={props.types}  className={styles.input}  onChange={e => props.InputEvent(e)} value={props.val} 
    name={props.name} placeholder={props.placeholder} onBlur={props.onBlur} />
    {/* <label alt="Email/Phone no." placeholder="Email/Phone no." className={styles.label}></label> */}

   
    </>
  )
}