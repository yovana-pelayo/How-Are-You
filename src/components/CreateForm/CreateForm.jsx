import MoodDropdown from '../MoodSelect/MoodSelect';
import NeedsDropdown from '../NeedsDropDown/NeedsDropDown';

export default function CreateForm() {
  return (
    <>
      <form className="create-form">
        <label>
          <MoodDropdown />
          <input type="text"></input>
          <NeedsDropdown />
        </label>

        <button>save</button>
      </form>
    </>
  );
}
