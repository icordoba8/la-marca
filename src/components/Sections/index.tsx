import React from "react";
import assetbg from "../../images/asset-bg.png";
import assetPerson from "../../images/asset-person.png";
import assetPerson2 from "../../images/asset-2.png";

import asset from "../../images/asset.png";

import "./styles.sass";
const Sections = () => {
  return (
    <div className="container-selctions">
      <section className="selction-1">
        <img className="img-bike" src={assetbg} alt="La marca" />
        <img className="img-person" src={assetPerson} alt="La marca" />
      </section>
      <section className="selction-2">
        <div className="container">
          <div className="row ">
            <div className="col-9">
              <h4>
                Lorem ipsum dolor sit amet consectetur
                <span className="separate">|</span>
              </h4>
            </div>
            <div className="col-3  ">
              <img className="" src={asset} alt="La marca" />
            </div>
          </div>
        </div>
      </section>
      <section className="selction-3 ">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6  col-xs-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, nam tempore. Mollitia laudantium nulla quo doloribus
                omnis nemo nam quibusdam, suscipit quis necessitatibus
                obcaecati, esse ullam at, iusto dolore modi.
              </p>
            </div>
            <div className="col-lg-6  col-xs-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, nam tempore. Mollitia laudantium nulla quo doloribus
                omnis nemo nam quibusdam, suscipit quis necessitatibus
                obcaecati, esse ullam at, iusto dolore modi. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quibusdam, nam tempore.
                Mollitia laudantium nulla quo doloribus omnis nemo nam
                quibusdam, suscipit quis necessitatibus obcaecati, esse ullam
                at, iusto dolore modi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="selction-4">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6  col-xs-12">
              <img
                className="imag-person-2"
                src={assetPerson2}
                alt="La marca"
              />
            </div>
            <div className="col-lg-6  col-xs-12">
              <h4>
                Lorem ipsum dolor sit amet consectetur
                <span className="separate">|</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, nam tempore. Mollitia laudantium nulla quo doloribus
                omnis nemo nam quibusdam, suscipit quis necessitatibus
                obcaecati, esse ullam at, iusto dolore modi. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quibusdam, nam tempore.
                Mollitia laudantium nulla quo doloribus omnis nemo nam
                quibusdam, suscipit quis necessitatibus obcaecati, esse ullam
                at, iusto dolore modi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
