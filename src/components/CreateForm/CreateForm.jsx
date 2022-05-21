import MoodDropdown from '../MoodSelect/MoodSelect';
import NeedsDropdown from '../NeedsDropDown/NeedsDropDown';

export default function CreateForm() {
  const handleSubmit = () => {
    e.prevent.default();
  };
  return (
    <>
      <form className="create-form">
        <label>
          <MoodDropdown />
          <input type="text"></input>
          <NeedsDropdown />
        </label>

        <button onSubmit={handleSubmit}>save</button>
      </form>
    </>
  );
}
//Q: what is the point of writing out a handle submit function? Its handling the event which is saving the new entry but I don't get how. Data down events up
