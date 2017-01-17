import React from 'react';
import App from 'App';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';


describe('App', () => {
    it('should exists', () => {
        expect(App).to.exist;
    });
    it('have class name', () => {
        expect(shallow(<App />).contains(<span className='glyphicon glyphicon-ok'/>)).to.equal(true);
    });


});
