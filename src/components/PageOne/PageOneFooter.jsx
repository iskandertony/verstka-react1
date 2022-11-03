import line1 from "./Lines/Line1.png";
import line2 from "./Lines/Line2.png";
import "./PageOneFooter.css";

const PageOneFooter = () => {
  return (
    <div className="PageOneFooter">
      <div className="PageOneFooter-text">
        <div className="PageOneFooter-text-sub">
          <div className="PageOneFooter-text-sub1">АДРЕС:</div>
          <div className="PageOneFooter-text-sub2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className="PageOneFooter-text-sub">
          <div className="PageOneFooter-text-sub1">ТЕЛЕФОН:</div>
          <div className="PageOneFooter-text-sub2">
            <div className="PageOneFooter-text-sub2-margin">+996 (0500) 12-32-12</div>
            <div>+996 (0550) 12-32-12</div>
          </div>
        </div>

        <div className="PageOneFooter-text-sub">
          <div className="PageOneFooter-text-sub1">РЕЖИМ РАБОТЫ:</div>
          <div className="PageOneFooter-text-sub2">
            <div className="PageOneFooter-text-sub2-margin">ПН-ПТ : 10:00 - 20:00</div>
            <div>СБ-ВСК : 12-00 - 20-00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOneFooter;
