import React from "react";
import { TerritoriesTypes } from "@/components/Territories";

type SessionTypes = {
  key: string,
  data?: any
}

export const setSessionItem = ({ key, data }: SessionTypes) => {
  const item = typeof data === 'object' ? JSON.stringify(data) : data
  sessionStorage.setItem(key, item);
}

export const getSessionItem = ({ key }: SessionTypes) => {
  const item = sessionStorage.getItem(key)
  return item
}


export const flaTerritoryList = (territories?: TerritoriesTypes[] | null) => {
  if (!territories) return
  const rootParents = territories.filter(root => !root.parent)
  const childParents = territories.filter(child => child.parent)
  const flatList = rootParents.map(parent => {
    return (
      {
        ...parent,
        children: childParents.filter(child => child.parent === parent.id).map(chilParent => ({
          ...chilParent,
          children: childParents.filter(cp => cp.parent === chilParent.id)
        })) || []
      }
    )
  })
  return flatList
}