export const ProjConstants = {
  CLINIC_DATA: [
    {
      name: 'Clinic 1',
      address: 'ABC',
      doctors: [
        {
          name: 'Doctor A',
          id: 'ABC001'
        },
        {
          name: 'Doctor B',
          id: 'ABC002'
        },
        {
          name: 'Doctor C',
          id: 'ABC003'
        },
        {
          name: 'Doctor D',
          id: 'ABC004'
        }
      ]
    },
    {
      name: 'Clinic 2',
      address: 'DEF',
      doctors: [
        {
          name: 'Doctor E',
          id: 'DEF001'
        },
        {
          name: 'Doctor F',
          id: 'DEF002'
        },
        {
          name: 'Doctor G',
          id: 'DEF003'
        }
      ]
    }
  ],
  DOCTOR_ID_MAP: {
    ABC001: {
      time: 180,
      rate: 200,
      availableTime: 180
    },
    ABC002: {
      time: 120,
      rate: 300,
      availableTime: 120
    },
    ABC003: {
      time: 240,
      rate: 100,
      availableTime: 240
    },
    ABC004: {
      time: 180,
      rate: 250,
      availableTime: 180
    },
    DEF001: {
      time: 180,
      rate: 220,
      availableTime: 180
    },
    DEF002: {
      time: 120,
      rate: 250,
      availableTime: 120
    },
    DEF003: {
      time: 60,
      rate: 400,
      availableTime: 60
    }
  },
  LOGIN_DETAILS_MAP: {
    ABC001: {
      userId: 'ABC001',
      password: 'ABC@#001'
    },
    ABC002: {
      userId: 'ABC002',
      password: 'ABC@#002'
    },
    ABC003: {
      userId: 'ABC003',
      password: 'ABC@#003'
    },
    ABC004: {
      userId: 'ABC004',
      password: 'ABC@#004'
    },
    DEF001: {
      userId: 'DEF001',
      password: 'DEF#@001'
    },
    DEF002: {
      userId: 'DEF002',
      password: 'DEF#@002'
    },
    DEF003: {
      userId: 'DEF003',
      password: 'DEF#@003'
    },
  },
  DOCTOR_ID_NAME_MAP: {
    ABC001: 'Doctor A',
    ABC002: 'Doctor B',
    ABC003: 'Doctor C',
    ABC004: 'Doctor D',
    DEF001: 'Doctor E',
    DEF002: 'Doctor F',
    DEF003: 'Doctor G'
  }
};
