import React, { useState } from 'react';

const TestBoard = (props) => {
  const { questions } = props;
  const [showResult, setShowResult] = useState(false);

  const renderQuestion = (question) => (
    <div className="row question" key={question.id}>
      <div className="col-lg-6 col-12">
        <div className="d-flex">
          <div className="question__label">
            {question.label}
          </div>
          <div className="question__title">
            {question.title}
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12 m-auto">
        <div className="question__control row">
          <div className="col-6">
            <div className="question__control-button text-center">
              <img src="assets/images/adaptive-test/check.png" alt="check" />
              可以
            </div>
          </div>
          <div className="col-6">
            <div className="question__control-button text-center">
              <img src="assets/images/adaptive-test/check.png" alt="check" />
              不行
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="adaptive-test__main">
        {
          (questions || []).map((question) => (
            renderQuestion(question)
          ))
        }
      </div>
      <div className="adaptive-test__main-submit">
        <div className="question__submit-button" onClick={() => setShowResult(true)}>
          <img src="assets/images/adaptive-test/submit-icon.png" alt="submit" />
          顯示診斷結果
        </div>
      </div>
      {
        showResult
          ? (
            <div className="adaptive-test__main-result">
              <div className="result-container">
                <div className="result-container__heading">
                  診斷結果
                </div>
              </div>
            </div>
          )
          : null
      }
    </>
  )
};

export default TestBoard;
