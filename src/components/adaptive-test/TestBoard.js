import React, { useState } from 'react';

const MOCK_RESULT = "滾滾長江東逝水滾滾長滾滾長江東逝水滾滾長江東滾滾長江東逝水滾滾長江東";

const TestBoard = (props) => {
  const { questions } = props;
  const [questionList, setQuestionList] = useState((
    (questions || []).map((question) => ({
      ...question,
      isChecked: null,
    }))
  ));
  const [showResult, setShowResult] = useState(false);

  const responseToQuestion = (question, isChecked) => {
    if (showResult) {
      return;
    }

    setQuestionList((
      (questionList || []).map((questionInstance) => {
        return question.id === questionInstance.id
          ? {
            ...questionInstance,
            isChecked,
          }
          : questionInstance
      })
    ))
  };

  const renderQuestion = (question) => (
    <tr className="question" key={question.id}>
      <td className="row">
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
              <div
                className="question__control-button text-center"
                onClick={() => responseToQuestion(question, true)}
              >
                {
                  question.isChecked === true
                    ? <img src="assets/images/adaptive-test/checked.svg" alt="check" />
                    : <img src="assets/images/adaptive-test/check.svg" alt="check" />
                }
                可以
              </div>
            </div>
            <div className="col-6">
              <div
                className="question__control-button text-center"
                onClick={() => responseToQuestion(question, false)}
              >
                {
                  question.isChecked === false
                    ? <img src="assets/images/adaptive-test/checked.svg" alt="check" />
                    : <img src="assets/images/adaptive-test/check.svg" alt="check" />
                }
                不行
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );

  const handleShowResult = () => {
    const isNotCompleted = questionList.some((question) => (
      question.isChecked === null
    ))

    if (!isNotCompleted) {
      setShowResult(true);
    }
  };

  return (
    <>
      <div className="adaptive-test__main">
        <div className="table-bg">
          <table className="table table-hover">
            <tbody>
              {
                (questionList || []).map((question) => (
                  renderQuestion(question)
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="adaptive-test__main-submit">
        <div className="question__submit-button" onClick={handleShowResult}>
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
                <div className="result-container__body">
                  <p>{MOCK_RESULT}</p>
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
