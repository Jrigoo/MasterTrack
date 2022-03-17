import React from "react";

interface Props {
  className: string;
  rounded: string;
  goals: {
    name?: string;
    SU: number;
    APP: number;
    ACC: number;
    APD: number;
    RE: number;
    FI: number;
    CO: number;
  };
}

export const Numbers: React.FC<Props> = ({ goals, rounded, className }) => {
  return (
    <div className={className}>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.SU} <b>SU</b>
        </p>
      </div>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.APP} <b>APP</b>
        </p>
      </div>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.ACC} <b>ACC</b>
        </p>
      </div>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.APD} <b>APD</b>
        </p>
      </div>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.RE} <b>RE</b>
        </p>
      </div>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.FI} <b>FI</b>
        </p>
      </div>
      <div className={`numbers ${rounded}`}>
        <p>
          {goals.CO} <b>CO</b>
        </p>
      </div>
    </div>
  );
};

export default Numbers;
