import React from 'react'
import {shallow} from 'enzyme'
import App from './Components/App/app.jsx'
/*
Este se encarga de verificar si el componente de la aplicación 
está montado de forma correcta. 
*/
describe('Check if the component of the app is mounting', () => {
    it('should render without any problems', () => {
       shallow(<App />);
     });
 });
