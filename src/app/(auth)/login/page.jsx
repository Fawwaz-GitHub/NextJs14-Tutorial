import { handleGithubLogin, login } from "@/lib/action"
import { auth } from "@/lib/auth"
import styles from "./login.module.css"
import Link from "next/link";
import { useFormState } from "react-dom"

const LoginPage = async () => {

  const [state, formAction] = useFormState(login, undefined);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <form className={styles.form} action={formAction}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {state?.error}
          <Link href="/register">
            {"Don't have an account?"} <b>Register</b>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage