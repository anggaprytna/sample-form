const initialState = {
  language: null,
};

const locales = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        language: action.payload,
      };

    default:
      return state;
  }
};

export default locales;
