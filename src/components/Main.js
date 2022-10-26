import profile_img from "../images/profile_img.png";
import slack_logo from "../images/slack.png";
import github_logo from "../images/github.png";
import classes from "./Main.module.css"

const Main = () => {
    return (
        <main>
            <img id="profile__img" src={profile_img} alt="profile" />
            <h2>Annette Black</h2>

            <div className={classes.card}>
                <a href="#">
                    <p>Twitter Link</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="#">
                    <p>Zuri Team</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="#">
                    <p>Zuri Books</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="#">
                    <p>Python Books</p>
                </a>
            </div>

            <div className={classes.card}>
                <a>
                    <p>Background Check for Coders</p>
                </a>
            </div>

            <div className={classes.card}>
                <a>
                    <p>Design Books</p>
                </a>
            </div>

            <div className={classes.social_links}>
                <img src={slack_logo} alt="slack" />
                <img src={github_logo} alt="github" />
            </div>

        </main>
    )

}
export default Main