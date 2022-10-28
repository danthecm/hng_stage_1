import slack_logo from "../images/slack.png";
import github_logo from "../images/github.png";
import classes from "./Main.module.css";
import share_svg from "../images/Icon.svg";
import menu_svg from "../images/icon-2.svg";
import camera from "../images/camera.png";
import { useState } from "react";

const Main = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <main id="link">
      <div className={classes.share_svg}>
        <img src={share_svg} alt="share-btn" />
        <div className={classes.tip}>
        <p className={classes.tooltip}>Share Link</p>
        <p className={classes.tooltip__after}></p>
      </div>
      </div>
      <div className={`${classes.share_svg}  ${classes.mobile}`}>
        <img src={menu_svg} alt="share-btn" />
      </div>
      <div
        id="profile__img"
        onMouseLeave={() => setShowCamera(false)}
        onMouseEnter={() => setShowCamera(true)}
        className={classes.profile_img}
      ></div>
      {showCamera && (
        <img className={classes.camera} src={camera} alt="camera-btn" />
      )}
      <h2>Victory Daniel</h2>
      <p style={{ display: "none" }} id="slack">
        CM
      </p>
      <a
        id="twitter"
        className={classes.card}
        href="https://twitter.com/daniel_etchie"
      >
        Twitter Link
      </a>

      <a
        id="btn__zuri"
        className={classes.card}
        href="https://training.zuri.team/"
      >
        <p>Zuri Team</p>
      </a>

      <a
        id="books"
        title="This is where you find books about design and coding"
        className={classes.card}
        href="https://books.zuri.team/"
      >
        <p>Zuri Books</p>
      </a>

      <a
        id="book__python"
        title="Get the lastest books on python for cheap amount"
        className={classes.card}
        href="https://books.zuri.team/python-for-beginners?ref_id=%3cm%3E"
      >
        <p>Python Books</p>
      </a>

      <a
        id="pitch"
        title="where you pitch a service for doing background checks on coders. "
        className={classes.card}
        href="https://background.zuri.team/"
      >
        <p>Background Check for Coders</p>
      </a>

      <a
        id="book__design"
        title="where you pitch the free design book offered by Zuri."
        className={classes.card}
        href="https://books.zuri.team/design-rules"
      >
        <p>Design Books</p>
      </a>

      <div className={classes.social_links}>
        <img src={slack_logo} alt="slack" />
        <img src={github_logo} alt="github" />
      </div>
    </main>
  );
};
export default Main;
