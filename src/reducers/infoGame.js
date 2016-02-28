const initialState = {
  company: {
    name: "IT Tycoon",
    creationDate: 1980
  }
}

export function infoGame(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_COMPANY_INFO':
      return {
        ...state,
        company: {
          name: action.fields.name.value,
          creationDate: action.fields.creationDate.value,
        }
      };

    default:
      return state;
  }
}
