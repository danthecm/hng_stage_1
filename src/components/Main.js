import profile_img from "../images/profile_img.png";
import slack_logo from "../images/slack.png";
import github_logo from "../images/github.png";
import classes from "./Main.module.css"

const Main = () => {
    return (
        <main id="link">
            <img id="profile__img" src={profile_img} alt="profile" />
            <h2>Annette Black</h2>

            <div className={classes.card}>
                <a href="https://twitter.com/daniel_etchie">
                    <p>Twitter Link</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="https://training.zuri.team/">
                    <p>Zuri Team</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="https://books.zuri.team/">
                    <p>Zuri Books</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E">
                    <p>Python Books</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="https://background.zuri.team/">
                    <p>Background Check for Coders</p>
                </a>
            </div>

            <div className={classes.card}>
                <a href="https://books.zuri.team/design-rules">
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