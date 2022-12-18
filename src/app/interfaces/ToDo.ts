export class TodoItem {

    constructor(public id: string, public state: string, public name: string) {

    }
}

export interface TodoItem {
    id: string;
    state: string;
    name: string;
}