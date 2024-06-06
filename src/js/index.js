import React from 'react'
import ReactDOM from 'react-dom/client'

import RodziemAdminApp from './RodziemAdminApp'

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

const rootEl = document.getElementById('rodziem-admin-app');
const root = ReactDOM.createRoot(rootEl);
root.render(<RodziemAdminApp />);