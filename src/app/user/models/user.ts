export interface User {
  id: Number,
  name: string,
  limit: Number,
  created_at: Date|undefined
}

export const defaultUser ={
  id: 1,
  name: "testUser12",
  limit: 0,
  created_at: undefined
}
