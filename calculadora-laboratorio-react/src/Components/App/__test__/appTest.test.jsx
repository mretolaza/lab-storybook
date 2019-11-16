import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../app.jsx'

// En esta sección encontrará los test principales de las 
// operaciones que se realizan en la calculadora 

/*
Comprueba que el click de los valores se 
hace de forma correcta. 
*/

describe('Check if a number is display when press', () => {
  it('should show a number 1 on the calculator screen, when the number 1 its press', () => {
    const wrapper = mount(<App />);
    const btn = wrapper.find('#b1')
    btn.simulate('click')
    const pantalla = wrapper.find('#Display')
    expect(pantalla.text()).toEqual('1')
  });
});

/*
Comprueba que la multiplicación se realice 
de forma correcta
*/

describe('Check if the multiplication works as expected', () => {
  it('should show the result of making the multiplication of 2 and 3', () => {
    const wrapper = mount(<App />);
    const btn = wrapper.find('#b2')
    btn.simulate('click')
    const btn2 = wrapper.find('#bX')
    btn2.simulate('click')
    const btn3 = wrapper.find('#b6')
    btn3.simulate('click')
    const btn4 = wrapper.find('#bE')
    btn4.simulate('click')
    const pantalla = wrapper.find('#Display')
    expect(pantalla.text()).toEqual('12')
  });
});

/*
Comprueba que la división se realice de forma correcta
*/

describe('Check if the succesive division works as expected', () => {
  it('should show the result of making the division of 8 by 4, and by 2 ', () => {
    const wrapper = mount(<App />);
    const btn = wrapper.find('#b8')
    btn.simulate('click')
    const btn2 = wrapper.find('#bD')
    btn2.simulate('click')
    const btn3 = wrapper.find('#b4')
    btn3.simulate('click')
    btn2.simulate('click')
    const btn4 = wrapper.find('#b2')
    btn4.simulate('click')
    const btn5 = wrapper.find('#bE')
    btn5.simulate('click')
    const pantalla = wrapper.find('#Display')
    expect(pantalla.text()).toEqual('1')
  });
});
/*
Comprueba que se despliegue el error de forma correcta
cuando un resultado es negativo 
*/
describe('Check if the calculator throws error when the result is negative', () => {
  it('should show Error when the result is negative', () => {
    const wrapper = mount(<App />);
    const btn = wrapper.find('#b1')
    btn.simulate('click')
    const btn2 = wrapper.find('#bR')
    btn2.simulate('click')
    const btn3 = wrapper.find('#b8')
    btn3.simulate('click')
    const btn5 = wrapper.find('#bE')
    btn5.simulate('click')
    const pantalla = wrapper.find('#Display')
    expect(pantalla.text()).toEqual('Error')
  });
});

/*
Comprueba que el error se muestre de forma correcta
cuando es mayor a 9 dígitos 
*/
describe('Check if the calculator throws error when the result is bigger than 9 digits', () => {
  it('should show Error when the result is bigger than 9 digits', () => {
    const wrapper = mount(<App />);
    const btn = wrapper.find('#b9')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')
    const btn2 = wrapper.find('#bX')
    btn2.simulate('click')
    const btn3 = wrapper.find('#b8')
    btn3.simulate('click')
    const btn5 = wrapper.find('#bE')
    btn5.simulate('click')
    const pantalla = wrapper.find('#Display')
    expect(pantalla.text()).toEqual('Error')
  });
});

/*
Prueba que indica que la calculadora maneja un mayor de 9 
dígitos 
*/
describe('Check if the calculator handles number bigger than 9 digits', () => {
  it('should show 9 digits, despite having click a number button 10 times', () => {
    const wrapper = mount(<App />);
    const btn = wrapper.find('#b9')
    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')

    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')

    btn.simulate('click')
    btn.simulate('click')
    btn.simulate('click')

    btn.simulate('click')
    const pantalla = wrapper.find('#Display')
    expect(pantalla.text()).toEqual('999999999')
  });
});