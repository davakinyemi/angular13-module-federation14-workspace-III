export interface Todo {
    id: string;
    completed: boolean;
    label: string;
}

export const dummyTodos = [
    {
        label: 'Buy groceries',
        completed: false,
        id: 42
    },
    {
        label: 'Upgrade welding equipment',
        completed: false,
        id: '43'
    }
];