import Head from 'next/head'
import styles from '../../styles/textField.module.css'

export default function TextField(props) {
  return (
    <>
    <input required="" type={props.types}  className={styles.input}  onChange={e => props.InputEvent(e)} value={props.val} 
    name={props.vName} placeholder={props.placeholder}/>
    <label alt="Email/Phone no." placeholder="Email/Phone no." className={styles.label}></label>

   
    </>
  )
}8