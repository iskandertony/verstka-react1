import Nav from "./Nav";
import "./PageOne.css";
import car from "../Img/car.png";
import PageOneText from "./PageOneText";
import PageOneFooter from "./PageOneFooter";

const PageOne = () => {
  return (
    <div className="body">
      <div>
        <Nav />
      </div>
      <div>
        <PageOneText />
      </div>
      <div>
        <PageOneFooter/>
      </div>
    </div>
  );
};

export default PageOne;
