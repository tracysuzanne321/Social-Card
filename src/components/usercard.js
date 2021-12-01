import { IoLogoGithub } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
// npm install react-icons --save //
const UserCard = () => {
  return (
    <div className="cardAll">
      <div className="cardLeft">
        <img src="" alt=""></img>
      </div>
      <div className="cardRight">
        <h3>Example User</h3>
        <p>
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify
          hammock starladder roathse. Craies vegan tousled etsy austin.
        </p>
        <ul>
          <li>
            <a href="/">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <TiSocialInstagramCircular />
            </a>
          </li>
          <li>
            <a href="/">
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
