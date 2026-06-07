import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {

  let content = '';

  resp.on('data', (c) => content += c);

  resp.on('end', () => {

    let jsonContent = JSON.parse(content);
    let jsonContentArray = jsonContent.data.split(', ');  // Fix 1: split on ', '
    let keyArray = [];

    for (let i = 0; i < jsonContentArray.length; i++) {
      let keySplit = jsonContentArray[i].trim().split(' ');  // Fix 2: split on space first
      keyArray.push(keySplit[0].split(':')[1]);              // then grab value after 'key:'
    }

    console.log(keyArray.slice(10, 16).toString());  // indices 10 to 15
  });

});