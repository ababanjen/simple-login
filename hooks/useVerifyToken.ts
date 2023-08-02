/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { getSessionItem } from "@/helpers/helpers";
import { useRouter, usePathname } from "next/navigation";

const useVerifyToken = () => {
  const publicRoutes = ['/', 'login']
  const path = usePathname()
  const { push } = useRouter()
  useEffect(() => {
    const user = getSessionItem({ key: 'user' })
    const isPublicRoute = publicRoutes.some(route => route === path)
    // if (!user && !isPublicRoute) {
    //   push('/')
    //   return
    // }
    // if (user && isPublicRoute) {
    //   push('/territories')
    //   return
    // }
  }, [])

}

export default useVerifyToken