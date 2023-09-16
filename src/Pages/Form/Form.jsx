import { useForm } from "react-hook-form";
import { useCreateFeed } from "../Feed/useCreateFeed";
import { useUser } from "../Auth/useUser";
import Spinner from "../../../UI/Spinner";
const Form = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isCreating, createFeed } = useCreateFeed();
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  function onSubmit(data) {
    if (!data) return;
    createFeed(data);
    reset();
  }

  const formQuestions = [
    {
      id: "title",
      defaultContent: "Express Title",
      label: "What's the title?",
    },
    {
      id: "content",
      defaultContent: "Express Content",
      label: "What do you want to express?",
    },
    {
      id: "genre",
      defaultContent: "Express Genre",
      label: "Give us a genre",
    },
  ];

  return (
    <div className="">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        {formQuestions.map((questions) => (
          <div className="form-control w-full max-w-xs" key={questions.id}>
            <label className="label">
              <span className="label-text">{questions.label}</span>
            </label>
            <input
              id={questions.id}
              type="text"
              placeholder={questions.defaultContent}
              className="input input-bordered w-full max-w-xs"
              {...register(questions.id)}
            />
          </div>
        ))}
        <input
          type="text"
          value={user?.id}
          className="input input-bordered w-full max-w-xs hidden"
          {...register("u_id")}
        />
        <button className="btn my-2" type="submit" disabled={isCreating}>
          Express
        </button>
      </form>
    </div>
  );
};

export default Form;
