import React from "react";
import phot from "./pt.png";
export default function Home() {
  return (
    <div className="home">
      <div className="divImg">
        <img src={phot}></img>
      </div>
      <div className="divWelcome">
        <h1>
          We are <span>ABBAS Bilal</span> and <span>Bey massi</span>
          <br />
          Welcome to our home page
        </h1>

        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue.
        </p>
      </div>
    </div>
  );
}
