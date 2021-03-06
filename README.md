# generator-redux-component
Yeoman generator for React-Redux component. The code is written using ES7, so you need Babel for polyfill.

### Installing the generator

```bash
$ npm install -g generator-redux-component
```


### Usage

Run generator
```bash
yo redux-component
```
Choose component type ([Smart or Dump](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0))

#### Smart component

Reducers use Imutabale.js for state. I also use `createReducers` function for reduce boilerplate code.

```
import Immutable, { Map, List } from 'immutable';

export default function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    let newState = state;
    if (!Map.isMap(state) && !List.isList(state)) {
      newState = Immutable.fromJS(state);
    }

    const handler = handlers[action.type];

    if (!handler) {
      return newState;
    }

    newState = handler(newState, action);

    if (!Map.isMap(newState) && !List.isList(newState)) {
      throw new TypeError('Reducers must return Immutable objects.');
    }

    return newState;
  };
}

```

Don't forget to import generated reducer for `createStore` function!


#### Dump component

The dump component use [BEM](https://en.bem.info) by default. You can find `createBEM` function [here](https://gist.github.com/terpiljenya/45b9ce90bd3b618338cb)
