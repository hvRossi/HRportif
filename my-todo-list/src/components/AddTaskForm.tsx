const AddTaskForm = ({
  onHandleSubmit,
  setInputValue,
  inputValue,
}: {
  onHandleSubmit: (e: any) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}) => {
  return (
    <form id="new-task-form" onSubmit={onHandleSubmit}>
      <input
        type="text"
        id="new-task-input"
        placeholder="what's your task?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <input type="submit" id="new-task-submit" value="Add task" />
    </form>
  );
};

export default AddTaskForm;
