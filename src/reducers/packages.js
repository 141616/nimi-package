import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { GET_PACKAGES_LIST } from '../constants'

export default createReducer(fromJS({
  packages: []
}), {
  [GET_PACKAGES_LIST]: (state, actions) => {
    const { packages } = actions
    return state.merge({
      packages
    })
  }
})