import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';

import 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import './prism-graphql';

ReactDOM.render(
  <Presentation />,
  document.getElementById('root')
);
