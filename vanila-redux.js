//library code
function createStore(reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state

    /* the state */
    let state;
    /* getting the state */
    const getState = () => state;

    /* listen to change on the state */
    let listeners = [];

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
          listeners = listeners.filter((l) => l !== listener)
        }
      }

    /* update the state */
    const dispatch = (action) => {
        /* reducer is a pure function */
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch,
      }
}