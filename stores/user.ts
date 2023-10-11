import { defineStore } from 'pinia'
import type { StoreResponse, User } from '../utils/types'

const userAPIBaseUrl = 'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/users'

export const useUserStore = defineStore('users', () => {
    async function getUsers() {
        try {

            const data = await fetch(userAPIBaseUrl)
            const json = await data.json()
            const users = await json
            return {
                data: users as User[],
                ok: true
            } as StoreResponse
        } catch (err) {
            return {
                error: err,
                ok: false
            } as StoreResponse
        }
    }
    return { getUsers }
})