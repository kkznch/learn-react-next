import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { TodoType } from '../../slices/todoListSlice';
import { Todo } from './Todo';

export const List: FC = () => {
  const todoList = useSelector((state: RootState) => state.todoList);

  return (
    <ul>
      { todoList.map((todo: TodoType) => <Todo key={todo.id} todo={todo} />) }
    </ul>
  );
};
