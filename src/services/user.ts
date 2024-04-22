import { API } from './config'

export const login = (email:string, password:string) => {
    return API.post("/user/login", {email:email, password:password})
}
