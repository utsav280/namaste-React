import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a team of developers</p>
      {/* <User /> */}
      <UserClass name="Utsav Goyal" location="Mathura" />
    </div>
  );
};
export default About;
