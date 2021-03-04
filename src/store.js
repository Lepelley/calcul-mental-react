import { applyMiddleware, createStore } from 'redux'

// permet la gestion de l'async dans Redux
import thunkMiddleware from 'redux-thunk'
import feedbackMiddleware from './middlewares/feedback'

// middleware pour gérer l'historique lorsqu'on change la date de la devise

// les reducers (parties algo & gestion du store global)
import rootReducer from './reducers'

const configureStore = (preloadedState = {}) => {
  const middlewares = [thunkMiddleware, feedbackMiddleware]

  const middlewareEnhancer = applyMiddleware(...middlewares)

  return createStore(rootReducer, preloadedState, middlewareEnhancer)
}

export default configureStore
