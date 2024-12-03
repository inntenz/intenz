import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="public/intenz.png" alt="my Logo" className={styles.logo} />
      </footer>
    </>
  )
}
