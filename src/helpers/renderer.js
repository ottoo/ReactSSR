import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';

export default (req, store) => {
  const context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <title>Otto Kivikärki</title>
      <head></head>
      <body>
        <div id="app-container">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};
