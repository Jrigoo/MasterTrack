import React from "react";

interface Props {
  className: string;
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

export const Numbers: React.FC<Props> = ({ goals, className }) => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.SU} <b>SU</b>
        </p>
      </div>
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.APP} <b>APP</b>
        </p>
      </div>
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.ACC} <b>ACC</b>
        </p>
      </div>
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.APD} <b>APD</b>
        </p>
      </div>
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.RE} <b>RE</b>
        </p>
      </div>
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.FI} <b>FI</b>
        </p>
      </div>
      <div
        className={`w-[60px] h-[60px] mb-1 grid place-content-center bg-white shadow-default ${className}`}
      >
        <p>
          {goals.CO} <b>CO</b>
        </p>
      </div>
    </div>
  );
};

export default Numbers;
