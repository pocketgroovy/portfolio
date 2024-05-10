export interface IProject {
    _id: string
    title: string
    year: string
    type: string[]
    image: {
        author: {
            name: string
            url: string
        }
        color: string
        url: string
    }
    createdAt?: string
    lastUpdated?: string
}

export interface ProjProp {
	project: IProject
	index: number
}