// src/store/undo-redo-plugin.js
export default (options) => {
  const moduleName = 'undoRedo' || options.moduleName;
  const UNDO = 'undo';
  const REDO = 'redo';
  const UPDATE_CURRENT_POSITION = 'UPDATE_CURRENT_POSITION';
  const UPDATE_SNAPSHOTS = 'UPDATE_SNAPSHOTS';
  const undoType = `${moduleName}/${UNDO}`;
  const redoType = `${moduleName}/${REDO}`;
  const currentPositionType =
    `${moduleName}/${UPDATE_CURRENT_POSITION}`;
  const updateSnapshotType =
    `${moduleName}/${UPDATE_SNAPSHOTS}`;
  const canUndoGetter = `${moduleName}/canUndo`;
  const canRedoGetter = `${moduleName}/canRedo`;

  const statePropsToExclude = {
    [moduleName]: '',
  };
  if (options.statePropsToExclude) {
    options.statePropsToExclude.forEach((toExclude) => {
      statePropsToExclude[toExclude] = '';
    });
  }

  const mutationsToExclude = {
    [undoType]: '',
    [redoType]: '',
    [currentPositionType]: '',
    [updateSnapshotType]: '',
  };
  if (options.mutationsToExclude) {
    options.mutationsToExclude.forEach((toExclude) => {
      mutationsToExclude[toExclude] = '';
    });
  }

  const undoRedoPlugin = (store) => {
    function takeStateSnapshot(state) {
      const toClone = {};
      Object.keys(state).forEach((key) => {
        if (statePropsToExclude[key] === undefined) {
          toClone[key] = state[key];
        }
      });

      return JSON.stringify(toClone);
    }

    function restoreStateSnapshot(state, toRestore) {
      const clone = JSON.parse(toRestore);
      Object.keys(clone).forEach((key) => {
        state[key] = clone[key];
      });
    }

    store.subscribe(({ type }, state) => {
      if (mutationsToExclude[type] === undefined) {
        const index = state[moduleName].currentPosition + 1;
        const snapshots = state[moduleName].snapshots.slice();
        snapshots.length = index + 1;
        snapshots[index] = takeStateSnapshot(state);
        store.commit(currentPositionType, index);
        store.commit(updateSnapshotType, snapshots);
      }
    });

    store.registerModule(moduleName, {
      namespaced: true,
      getters: {
        canUndo({ currentPosition }) {
          return currentPosition >= 1;
        },
        canRedo({ currentPosition, snapshots }) {
          return currentPosition < snapshots.length - 1;
        },
      },
      state: {
        currentPosition: 0,
        snapshots: [takeStateSnapshot(store.state)],
      },
      mutations: {
        [UNDO](state) {
          if (store.getters[canUndoGetter]) {
            state.currentPosition--;
            const { snapshots } = state;
            const snapShot = snapshots[state.currentPosition];
            restoreStateSnapshot(store.state, snapShot);
          }
        },
        [REDO](state) {
          if (store.getters[canRedoGetter]) {
            state.currentPosition++;
            const { snapshots } = state;
            const snapShot = snapshots[state.currentPosition];
            restoreStateSnapshot(store.state, snapShot);
          }
        },
        [UPDATE_CURRENT_POSITION](state, value) {
          state.currentPosition = value;
        },
        [UPDATE_SNAPSHOTS](state, value) {
          state.snapshots = value;
        },
      },
    });
  };

  return undoRedoPlugin;
};
