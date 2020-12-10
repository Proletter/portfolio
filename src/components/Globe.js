import React, { useRef, useEffect, useState } from "react";
import profile from "./profile.svg";
import "./Globe.css";

import { images, projects, about } from "../mini-images";
import Tooltip from "./Tooltip";

export default function Globe() {
  const graph = useRef(null);
  const [spin, setSpin] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fastSpin, setFastSpin] = useState(false);
  const [newCircles, setNewCircles] = useState(false);
  const [proj, setProj] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);

  const handleClick = (ev) => {
    setSpin(true);
  };

  useEffect(() => {
    let timeout;
    if (spin) {
      timeout = setTimeout(() => {
        setSpin(false);
      }, 1000);
    }
    if (fastSpin) {
      timeout = setTimeout(() => {
        setFastSpin(false);
      }, 1000);
    }
    if (fadeIn) {
      timeout = setTimeout(() => {
        setFadeIn(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [spin, fastSpin, fadeIn]);

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  }, [newCircles]);

  const toggleCircles = (e) => {
    if (e.target.alt === "projects") {
      e.preventDefault();
      setFadeIn(true);
      setFastSpin(true);
      setAboutMe(false);
      setProj(true);
      setNewCircles(!newCircles);
    }
    if (e.target.alt === "about-me") {
      e.preventDefault();
      setFadeIn(true);
      setFastSpin(true);
      setAboutMe(true);
      setProj(false);
      setNewCircles(!newCircles);
    }
  };

  const setMapper = () => {
    var mapper = images;
    if (newCircles && proj) {
      mapper = projects;
    }
    if (newCircles && aboutMe) {
      mapper = about;
    }
    return mapper;
  };

  const mapper = setMapper();

  return (
    <>
      <div
        className={`ciclegraph ${spin && "spin"} ${fastSpin && "fadeSpin"}`}
        ref={graph}
      >
        {mapper.map((image, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={"/portfolio" + image.url}
            className={`circle ${fadeIn && "fadeIn"}`}
            onClick={toggleCircles}
          >
            <Tooltip
              header={image.label}
              content={image.text}
              direction={image.direction}
              spinning={fastSpin}
            >
              <img src={image.src} alt={image.alt} />
            </Tooltip>
          </a>
        ))}
      </div>
      <div className="big__globe">
        <img
          src={profile}
          alt="collins profile"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        />
      </div>
    </>
  );
}
