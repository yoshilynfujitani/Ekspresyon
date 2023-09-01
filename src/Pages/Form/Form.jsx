import { useForm } from "react-hook-form";
import { useCreateFeed } from "../Feed/useCreateFeed";
const Form = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isCreating, createFeed } = useCreateFeed();
  function onSubmit(data) {
    createFeed(data);
    reset();
  }
  return (
    <div className="">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input id="title" defaultValue="test" {...register("title")} />
        <input id="content" defaultValue="test" {...register("content")} />
        <input id="genre" defaultValue="test" {...register("genre")} />

        <input type="submit" disabled={isCreating} />
      </form>
    </div>
  );
};

export default Form;
