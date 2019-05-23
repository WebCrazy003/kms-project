const skill = (state, action) => {
  switch (action.type) {
    case 'SET_PROGRESS':
      return {
        ...state,
        skill: {
          wordpress: action.pos,
          photoshop: action.pos,
        },
      };
    default:
      return state;
  }
};

export default skill;
