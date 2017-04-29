import initialState from './initialState';

export const notesArrayReducer = (state = initialState.keyStrokeEvents, action) => {
  switch (action.type) {
    case 'NOTE_TO_ARRAY':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const captureReducer = (state = initialState.capture, action) => {
  switch (action.type) {
    case 'TOGGLE_CAPTURE':
      if (!state.capture) {
        return { capture: true, captureText: 'End Capture' };
      } else if (state.capture) {
        return { capture: false, captureText: 'Capture Keyboard', disabled: 'disabled' };
      }
      break;
    default:
      return state;
  }
};

export const octaveReducer = (state = initialState.octave, action) => {
  switch (action.type) {
    case 'SHIFT_OCTAVES':
      if (action.payload === '+' && state.current === 4) {
        return { current: 5, up: "disabled", down: "" };
      } else if (action.payload === '-' && state.current === 4) {
        return { current: 3, up: "", down: "disabled" };
      } else if (action.payload === '-' && state.current === 5) {
        return { current: 4, up: "", down: "" };
      } else if (action.payload === '+' && state.current === 3) {
        return { current: 4, up: "", down: "" };
      }
      break;
    default:
      return state;
  }
};
