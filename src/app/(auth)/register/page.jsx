"use client"

import Link from "next/link"
import styles from "./register.module.css"
import { register } from "@/lib/action"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom"

const Register = () => {

    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();
  
    useEffect(() => {
      state?.success && router.push("/login");
    }, [state?.success, router]);

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <form className={styles.form} action={formAction}>
                <input type="text" placeholder="username" name="username" />
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <input
                    type="password"
                    placeholder="password again"
                    name="passwordRepeat"
                />
                <button>Register</button>
                {state?.error}
                <Link href="/login">
                    Have an account? <b>Login</b>
                </Link>
            </form>    
        </div>
    </div>    
  )
}

export default Register