import MoodDropdown from '../MoodSelect/MoodSelect';

export default function CreateForm() {
  return (
    <>
      <form className="create-form">
        <label>
          <MoodDropdown />
          <input type="text"></input>
        </label>
        <button>save</button>
      </form>
    </>
  );
}
