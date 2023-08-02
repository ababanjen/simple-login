'use client'
import React, { useState, useEffect } from "react"
import { getTerritories } from "@/helpers/requests/territories"
import Text from "./Forms/Text"
import { flaTerritoryList } from "@/helpers/helpers"
import RightArrow from "./icons/RightArrow"
import useVerifyToken from "@/hooks/useVerifyToken"

export type TerritoriesTypes = {
  name: string,
  id: string,
  parent: string | null
}
const TerritoriesContainer = () => {
  useVerifyToken()

  const [territories, setTerritories] = useState<null | TerritoriesTypes[]>(null)

  const reqTerritories = async () => {
    const res = await getTerritories()
    if (res) setTerritories(res)
  }

  useEffect(() => {
    reqTerritories()
  }, [])

  return (
    <div className="flex flex-col gap-4 m-6 p-6 justify-center">
      <Text as="h1">Territories:</Text>
      <div className="overflow-auto h-[40rem] mx-6 w-max">
        {
          flaTerritoryList(territories)?.map(territory => (
            <div key={territory.id} className="flex flex-col gap-2">
              <Text as="h2">{territory.name}</Text>
              {
                territory?.children.map(childParent => (
                  <div key={childParent.id} className="pl-2 flex flex-col gap-2">
                    <span className=" flex gap-2 items-center hover:bg-blue-300 cursor-pointer p-2 rounded">
                      <RightArrow />
                      <Text as="h3">{childParent.name}</Text>
                    </span>
                    {
                      childParent.children.map(child => (
                        <div className="pl-4" key={child.id}>
                          <span className=" flex gap-2 items-center  hover:bg-blue-200 cursor-pointer p-2 rounded">
                            <RightArrow />
                            <Text>{child.name}</Text>
                          </span>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          )) ?? <div><Text>No Territories found</Text></div>
        }
      </div>
    </div>
  )
}

export default TerritoriesContainer