import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      <div className="p-6 bg-gradient-to-r from-orange-300 to-orange-500 flex flex-col items-center w-full  shadow-lg mt-4 flex-grow">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are a team of developers
        </p>
        <UserClass name="Utsav Goyal" location="Mathura" />
      </div>
    </div>
  );
};

export default About;
