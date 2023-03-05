export type CategoryState = {
    categories: Category[];
    machines: Machine[];
}

export type UserState = {
    username: string;
}

export type Category = {
    id: number;
    title: string;
}

export type Machine = {
    title?: string;
}


export interface Action {
    type: string;
    payload: any
}