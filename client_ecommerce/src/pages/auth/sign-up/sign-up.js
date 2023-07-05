import Link from 'next/link';
import { RegisterForm } from "@/components/Auth"
import { AuthLayout } from '@/layouts';
import styles from './sign-up.module.scss';

const signUpPage = () => {
  return (
    <>
      <AuthLayout>
        <div className={styles.signIn}>
         <h3>Crear cuenta</h3>
          <RegisterForm />
          
          <div className={styles.actions}>
            <Link href="/auth/sign-in">Atrás</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default signUpPage