import profile_img from "../images/profile_img.png";
import classes from "./Main.module.css"

const Main = () => {
    return (
        <main>
            <img id="profile__img" src={profile_img} alt="profile" />
            <h2>Annette Black</h2>
        </main>
    )

}
export default Main