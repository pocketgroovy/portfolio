import type { IProject } from '../types/iproject'
import axios, { AxiosResponse } from 'axios'

// const BASE_URL: string = "https://dbserver.pocketgroovy.com"
const BASE_URL: string = "https://localhost:3660"

const apiService = axios.create({
    baseURL: BASE_URL
})

export default async function getProjects(): Promise<AxiosResponse<IProject[]>> {
    try {
        const response = await apiService.get<IProject[]>('/pgprojects')
        // console.log(response)
        return response
    } catch (e) {
        throw e
    }
}
