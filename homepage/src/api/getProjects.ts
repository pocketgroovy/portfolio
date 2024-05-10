import type { IProject } from '../types/iproject'
import axios from 'axios'
import type { AxiosResponse } from 'axios'

const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const apiService = axios.create({
    baseURL: BASE_URL
})

export default async function getProjects(): Promise<AxiosResponse<IProject[]>> {
    const response = await apiService.get<IProject[]>('/pgprojects')
    return response
}
