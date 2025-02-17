import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "vbcfb",
        location: "dfbdfbv",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/utsav280");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <figure className="bg-orange-300 rounded-xl p-8 max-w-sm mx-auto border border-gray-200 shadow-lg">
        <img
          className="w-32 h-32 rounded-full mx-auto shadow-md mb-4 transition-transform duration-300 hover:scale-110"
          src={avatar_url}
          alt={name}
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-700">
              “Passionate about building scalable and efficient software
              solutions. Dedicated to continuous learning and improvement.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-700">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">{location}</div>
          </figcaption>
        </div>
      </figure>
    );
  }
}

export default UserClass;
