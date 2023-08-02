'use client'
import LoginForm from "@/components/LoginForm"
import useVerifyToken from "@/hooks/useVerifyToken";

const Login = () => {
  useVerifyToken()
  return <div className="flex min-h-screen flex-col items-center justify-between p-24"><LoginForm /></div>
}

export default Login