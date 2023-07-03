import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './AuthLayout.module.scss';

export const AuthLayout = (props) => {
    const { children } = props;


  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href="/">
            <img src="/images/logo.png" alt="Gaming" />
          </Link>
          <Link href="/">
            <AiOutlineClose />  
          </Link>
        </div>

        <div className={styles.blockLeft}>{children}</div>

        <div className={styles.blockRight}/>
    </div>
  )
}
