export interface ICommittee {
  name: string;
  semester: {
    SU: number;
    APP: number;
    ACC: number;
    APD: number;
    RE: number;
    FI: number;
    CO: number;
  };
  months: {
    name: string;
    SU: number;
    APP: number;
    ACC: number;
    APD: number;
    RE: number;
    FI: number;
    CO: number;
  }[];
}

export const UTPGoals = {
  name: "UTP",
  semester: {
    SU: 308,
    APP: 45,
    ACC: 5,
    APD: 5,
    RE: 6,
    FI: 2,
    CO: 1,
  },
  months: [
    {
      name: "Marzo",
      SU: 57,
      APP: 8,
      ACC: 1,
      APD: 1,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Abril",
      SU: 114,
      APP: 17,
      ACC: 2,
      APD: 0,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Mayo",
      SU: 114,
      APP: 17,
      ACC: 2,
      APD: 0,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Junio",
      SU: 15,
      APP: 2,
      ACC: 0,
      APD: 0,
      RE: 3,
      FI: 0,
      CO: 0,
    },
    {
      name: "Julio",
      SU: 0,
      APP: 0,
      ACC: 0,
      APD: 0,
      RE: 2,
      FI: 2,
      CO: 1,
    },
  ],
};

export const UPGoals = {
  name: "UP",
  semester: {
    SU: 269,
    APP: 13,
    ACC: 8,
    APD: 5,
    RE: 4,
    FI: 0,
    CO: 0,
  },
  months: [
    {
      name: "Marzo",
      SU: 40,
      APP: 3,
      ACC: 2,
      APD: 1,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Abril",
      SU: 75,
      APP: 5,
      ACC: 3,
      APD: 2,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Mayo",
      SU: 80,
      APP: 5,
      ACC: 3,
      APD: 2,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Junio",
      SU: 4,
      APP: 0,
      ACC: 0,
      APD: 0,
      RE: 2,
      FI: 0,
      CO: 0,
    },
    {
      name: "Julio",
      SU: 20,
      APP: 0,
      ACC: 0,
      APD: 0,
      RE: 2,
      FI: 0,
      CO: 0,
    },
  ],
};

export const SantiagoGoals = {
  name: "Santiago",
  semester: {
    SU: 166,
    APP: 31,
    ACC: 8,
    APD: 5,
    RE: 3,
    FI: 0,
    CO: 0,
  },
  months: [
    {
      name: "Marzo",
      SU: 32,
      APP: 8,
      ACC: 2,
      APD: 1,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Abril",
      SU: 57,
      APP: 12,
      ACC: 3,
      APD: 2,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Mayo",
      SU: 37,
      APP: 8,
      ACC: 2,
      APD: 1,
      RE: 1,
      FI: 0,
      CO: 0,
    },
    {
      name: "Junio",
      SU: 24,
      APP: 2,
      ACC: 0,
      APD: 1,
      RE: 0,
      FI: 0,
      CO: 0,
    },
    {
      name: "Julio",
      SU: 3,
      APP: 1,
      ACC: 1,
      APD: 0,
      RE: 2,
      FI: 0,
      CO: 0,
    },
  ],
};
