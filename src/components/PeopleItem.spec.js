import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PeopleItem from './PeopleItem';

describe('<PeopleItem />', () => {
  it('should contain <PersonItem />', () => {
    const item = {name: "Luke Skywalker", url: "https://swapi.co/api/people/1/"};
    const wrapper = shallow(<PeopleItem item={item}/>);
    expect(wrapper.find('p')).to.be.length(1);
  });
});
