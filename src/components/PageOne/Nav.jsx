import menu from "../Img/menu.png"
import "./Nav.css"
const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-sub">
            <div className="nav-sub-text">Главная</div>
            <div className="nav-sub-text">Оклейка автомобилей</div>
            <div className="nav-sub-text" >Детейлинг автомобилей</div>
            <div className="nav-sub-text">Галерея работ</div>

            </div>
            <div className="nav-img">
                <img src={menu}></img>
            </div>
        </div>
    )
    
}

export default Nav