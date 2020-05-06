import React from 'react';

const renderStepColumn = (step) => (
  <div className="col-lg-6" data-aos="fade-in" key={step.id}> 
    <div className="step d-lg-flex">
      <div className="step__label text-center d-block d-lg-none">
        <span>{step.label}</span>
      </div>
      <div className="step__image mx-auto mx-lg-0">
        <img className="mw-100" src={step.image} alt={step.label} />
      </div>
      <div className="step__content text-center text-lg-left">
        <div className="step__label d-none d-lg-block">
          <span>{step.label}</span>
        </div>
        <div className="step__description">
          <p>{step.description}</p>
        </div>
      </div>
    </div>
  </div>
);

const MakeUpStepList = (props) => {
  const { list } = props;

  return (
    <div className="step-wrapper">
      <div className="row">
        {
          (list || []).map((step) => (
            renderStepColumn(step)
          ))
        }
      </div>
    </div>
  );
};

export default MakeUpStepList;
