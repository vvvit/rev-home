import {applyMiddleware, createStore, Middleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import {rootSaga, reducers} from './';

const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares: Middleware[] = [
        sagaMiddleware
    ];

    const store = createStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export {createAppStore};
