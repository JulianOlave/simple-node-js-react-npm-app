import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


// // const path = require('path');

// module.exports = ()=> {
//   console.log('###############################################');
//   return {
//       entry: '/client',
//       output: {
//           path: '/public',
//           filename: 'app.js'
//       },
//       resolve: {
//         extensions: ['.js']
//       },
//       module: {
//           rules: [
//               {
//                   test: /\.js$/,
//                   use: {
//                       loader: 'babel-loader',
//                       options: {
//                           presets: ['@babel/flow', '@babel/preset-env']
//                       }
//                   }
//               }
//           ]
//       }        
//   }
// }

// const path = require('path');

// module.exports = {
//     entry: path.resolve(__dirname, 'src', 'client', 'app.js'),
//     output: {
//         path: path.resolve(__dirname, 'public','js'),
//         filename: 'app.js'
//     },
//     resolve: {
//       extensions: ['.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/flow', '@babel/preset-env']
//                     }
//                 }
//             }
//         ]
//     }
// }


