import Link from 'next/dist/client/link'
import styles from '../styles/Home.module.css'

export default function FourOhFour() {
  return (
   
    <div className={styles.home}>
      <h1>Four Oh Four Page</h1>

    <p>Return <Link href="/things/onething">Home</Link></p>

      <section>
        <ul>
          <li><Link href="/things/onething">One Thing</Link></li>
          <li><Link href="/things/thingtwo">Thing Two</Link></li>
          <li><Link href="/things/thirdthing">Third Thing - doesn&apos;t exist</Link></li>
        </ul>
      </section>


    </div>

  )
}
