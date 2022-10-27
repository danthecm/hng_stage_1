import classes from "./Footer.module.css";
import zuri_logo from "../images/zuri_training.png";
import I4G_logo from "../images/I4G.png";

const Footer = () => {
    return (
    <footer className={classes.footer}>
        <div>
        <img src={zuri_logo} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G_logo} alt="I4G" />
        </div>
    </footer>
    )
}
export default Footer