import { handleGithubLogin } from "@/lib/action"
import { auth } from "@/lib/auth"

const LoginPage = async () => {

  const session = await auth();
  console.log("LOGEED", session)

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
    </div>
  )
}

export default LoginPage