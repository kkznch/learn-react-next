import { FC } from 'react';
import { Todo, TodoType } from './Todo';

const todoList: TodoType[] = [
    { id: 1, message: 'やっほー！' },
    { id: 2, message: 'こんにちは' },
    { id: 3, message: 'はろー' },
];

export const List: FC = () => (
    <ul>
        { todoList.map((todo: TodoType) => <Todo key={todo.id} todo={todo} />) }
    </ul>
);
