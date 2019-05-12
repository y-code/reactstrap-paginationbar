import React from 'react'
import { shallow, mount } from 'enzyme'
import { Paginationbar } from '..'

describe('Paginationbar', () => {
  it('should render "nav" tag by default', () => {
    const wrapper = mount(<Paginationbar />)

    expect(wrapper.find('nav').hostNodes().length).toBe(1)
  })
})
