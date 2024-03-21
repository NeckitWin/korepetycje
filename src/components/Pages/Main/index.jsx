import s from './Main.module.css';
import Description from "./Description";
import Images from "./Images";

const Main = () => {
    return (
        <div className={s.main}>
            <Description />
            <Images />
        </div>
    )
}

export default Main;