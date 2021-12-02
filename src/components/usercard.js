import { IoLogoGithub } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import User from "../images/User.jpg";
// npm install react-icons --save //
const UserCard = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-around">
      <div className="flex md:flex-row flex-col lg:ml-10 max-w-2xl mb-10 rounded-2xl shadow-2xl">
        <img
          className="max-h-96 md:rounded-l-2xl object-cover object-top rounded-t-2xl"
          src={User}
          alt="blank user"
        />
        <div className="flex-col flex-wrap px-4">
          <p className="mb-1 text-4xl mt-6">Danny Baily</p>
          <p className="mb-1 text-base">Software Engineer</p>
          <p className="mb-4 text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus
            purus, maximus vitae dolor et, sodales bibendum mauris. Donec
            tempor, lorem vitae vestibulum auctor, lectus velit ultricies metus,
            vel ultrices massa sapien eget ipsum.
          </p>

          <a href="/">
            <IoLogoFacebook />
          </a>

          <a href="/">
            <IoLogoGithub />
          </a>

          <a href="/">
            <TiSocialInstagramCircular />
          </a>

          <a href="/">
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
