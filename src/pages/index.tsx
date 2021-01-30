import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoListSlice';
import { Input } from '../components/Todo/Input';
import { List } from '../components/Todo/List';

type FormData = {
    todo: string;
};

const Home: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      todo: '',
    },
  });
  const dispatch = useDispatch();
  const onSubmit = handleSubmit(({todo}) => {
    dispatch(addTodo(todo));
    reset();
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input name="todo" ref={register} />
      </form>
      <List />
    </div>
  )
}

export default Home;
