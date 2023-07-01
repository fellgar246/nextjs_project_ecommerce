import styles from './AuthLayout.module.scss';

export const AuthLayout = (props) => {
    const { children } = props;


  return (
    <div>
        <h2>Authlayout</h2>
        <div>{children}</div>
    </div>
  )
}
