import romb from "../Img/romb.png";
import "./PageOneText.css";

const PageOneText = () => {
  return (
    <div className="PageOne-text">
      <div className="PageOne-sub">CAR MUSC</div>
      <div className="PageOne-img">
        <img src={romb} alt="" />
      </div>
      <div className="PageOne-sub1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
        dolor.
      </div>
      <div className="PageOne-sub2">Наши услуги</div>
    </div>
  );
};

export default PageOneText;
