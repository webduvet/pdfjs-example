import React from 'react';
import { Provider } from 'react-redux'
import { Button } from '@material-ui/core';

import {
  PdfView
} from './PdfView'

import {
  store
} from './store'

function App() {
  return (
  <Provider store={store}>
    <Button color="primary">Hello World</Button>
    <Button
      variant="contained"
      component="label"
    >
        Upload File
      <input
        type="file"
        hidden
        onChange={(val) => { console.log(val) }}
      />
    </Button>
    <PdfView name="view1"/>
  </Provider>
  )
}

export default App;
