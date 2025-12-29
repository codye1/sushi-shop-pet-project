import Inner from '../../../../icons/Inner';
import Outer from '../../../../icons/Outer';

interface IGroupItem {
  pickedId: string;
  id: string;
  name: string;
  title: string;
}
const GroupItem = ({ pickedId, id, name, title }: IGroupItem) => {
  return (
    <label className="input-item" htmlFor="1">
      <span className="input-button">
        <input
          defaultChecked={pickedId == id}
          type="radio"
          id={id}
          name={name}
        />
        <div className="input-inner-outer">
          <Inner />
          <Outer />
        </div>
      </span>
      <p>{title}</p>
    </label>
  );
};

export default GroupItem;
