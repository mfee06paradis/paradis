import React from 'react';
import { NavLink } from 'react-router-dom';

const renderTutorialColumn = (tutorial) => (
  <div className="col-lg-4" key={tutorial.id}>
    <NavLink
      to={tutorial.url}
    >
      <div className="tutorial">
        <div className="tutorial__label">
          <span>{tutorial.label}</span>
        </div>
        <div className="tutorial__image">
          <img className="w-100" src={tutorial.image} alt={tutorial.label} />
        </div>
        <div className="tutorial__content text-center">
          <div className="main-title-before" />
          <p>{tutorial.contentTop}<br />{tutorial.contentBottom}</p>
          <div className="main-title-after" />
        </div>
      </div>
    </NavLink>
  </div>
);

const TutorialList = (props) => {
  const { list } = props;

  return (
    <div className="tutorial-wrapper" data-aos="fade-up">
      <div className="row">
        {
          (list || []).map((tutorial) => (
            renderTutorialColumn(tutorial)
          ))
        }
      </div>
    </div>
  );
};

export default TutorialList;
