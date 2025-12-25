
import './BackButton.css';
const BackButton = ({onClick}: { onClick: () => void }) => {


  return (
    <div
      onClick={onClick}
      className="back"
    >
      <span>
        <strong>Назад</strong>
      </span>
    </div>
  );
};

export default BackButton;