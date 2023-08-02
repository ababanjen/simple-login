'use client'
import React, { useState } from "react"
import Input from "./Forms/Input"
import Button from "./Forms/Button"
import Text from "./Forms/Text"
import { login } from "@/helpers/requests/login"
import { useRouter } from "next/navigation"
import { setSessionItem } from "@/helpers/helpers"

const LoginForm = () => {
  const { push } = useRouter()
  const [fields, setFields] = useState<{ username: string, password: string }>({
    username: '',
    password: ''
  })

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const res = await login(fields)
    if (res?.status !== 200) {
      alert('Error!')
      return
    }
    setSessionItem({ key: 'user', data: res })
    push('/territories')
  }
  const handleChange = ({ target: { value, name } }: { target: { value: string, name: string } }) => setFields({ ...fields, [name]: value })

  return (
    <form onSubmit={onSubmit} className="w-[20rem]">
      <div className="flex bg-white shadow-md rouded justify-center flex-col p-6 gap-5">
        <div className="flex w-full justify-center">
          <Text as="h1">Login</Text>
        </div>
        <div className="flex flex-col">
          <Text as="span">Username</Text>
          <Input required name="username" placeholder="Username" value={fields.username} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <Text as="span">Password</Text>
          <Input required name="password" type="password" value={fields.password} placeholder="Password" onChange={handleChange} />
        </div>
        <div className="w-full flex justify-end">
          <Button type="submit" className="bg-blue-400 w-20">Login</Button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm