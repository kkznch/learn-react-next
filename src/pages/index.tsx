import { useForm, NestedValue } from 'react-hook-form';
import { Input } from '../components/Todo/Input';
import { List } from '../components/Todo/List';

type FormData = {
    todo: string;
};

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      todo: '',
    },
  });
  const onSubmit = handleSubmit(({todo}) => {
    console.log('submit: ', todo);
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
