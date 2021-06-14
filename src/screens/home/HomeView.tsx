import React from "react";
import "./index.css";
import { HeroContext } from "../../HeroContext";
import { useHistory } from "react-router-dom";

const HomeView: React.FC = () => {
  const { heroes } = React.useContext(HeroContext);
  const history = useHistory();

  return (
    <div className="h-100 d-flex flex-column align-items-center ">
      <div className="w-100 border" style={{ height: "400px" }}>
        <h1>My team</h1>
      </div>

      <div className="row w-100 d-flex justify-content-center mt-2 mb-5">
        {heroes.map((hero) => (
          <div key={hero.id} className="col-12 col-md-3 mt-5">
            <div className="card">
              <div className="mt-2">
                <img alt="hero" height="250px" src={hero.image.url} />
              </div>
              <h5 className="mt-2">{hero.name}</h5>
            </div>
          </div>
        ))}

        {heroes.length < 6 && (
          <div className="col-12 col-md-3 mt-5 mb-5" style={{ minHeight: "300px" }}>
            <div className="card h-100 bg-light d-flex justify-content-center align-items-center">
              <button className="buttonAdd" onClick={() => history.push("/search")}>
                <img
                  alt="add hero"
                  src="https://icongr.am/fontawesome/plus-circle.svg?size=128&color=currentColor"
                  width="50px"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeView;
