import { IoLogoFacebook } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

// npm install react-icons --save

const UserCard = () => {
  return (
    <div className="box-content h-2rem w-6rem border-rounded-md">
      <div className="cardLeft">
        <img src="" alt="" className=""></img>{" "}
      </div>
      <div className="cardRight">
        <h3 className="text-black text-xl">Example User</h3>
        <p className="text-grey-md">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify
          hammock starladder roathse. Craies vegan tousled etsy austin.
        </p>
        <ul>
          <li classname="w-2 h-2">
            <a href="">
              <IoLogoFacebook />
            </a>
          </li>
          <li classname="w-2 h-2">
            <a href="">
              <IoLogoGithub />
            </a>
          </li>
          <li classname="w-2 h-2">
            <a href="">
              <TiSocialInstagramCircular />
            </a>
          </li>
          <li classname="w-2 h-2">
            <a href="">
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
