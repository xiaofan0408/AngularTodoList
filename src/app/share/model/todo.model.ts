export class Todo {
    id: number;
    title = '';
    isDone = false;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
