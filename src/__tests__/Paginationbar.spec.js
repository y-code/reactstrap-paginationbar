import React from 'react'
import { shallow, mount } from 'enzyme'
import { Paginationbar } from '..'

describe('Paginationbar', () => {
  it('should render a single "nav" tag, a single "ul" tag, five "li" tags, and five "button" tags by default', () => {
    const wrapper = mount(<Paginationbar />)

    expect(wrapper.find('nav[aria-label="pagination"]').hostNodes().length).toBe(1)
    expect(wrapper.find('ul.pagination').hostNodes().length).toBe(1)
    expect(wrapper.find('li.page-item').hostNodes().length).toBe(5)
    expect(wrapper.find('button.page-link').hostNodes().length).toBe(5)
  })

  describe('Property current', () => {
    it('should be initially 1 by default, and only Page-1 button should be active', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // First Page: default (= 1)
      // Current Page: default (= 1)
      // Visibility Level: 3
      const wrapper = mount(<Paginationbar />)
      expect(wrapper.find('li.active').find("button").hostNodes().text()).toBe('1')
    })
  })

  describe('Event onTurnPage', () => {
    it('is called at the initial render', () => {
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar onTurnPage={onTurnPage}/>)

      expect(onTurnPage).toHaveBeenCalledTimes(1)
    })

    it('is triggered only when page button is clicked and page transition is required, given there\'s no items', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // Current Page: default (= 1, at the beginning)
      // Visibility Level: 3
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar onTurnPage={onTurnPage}/>)

      let clickCount = 1

      // [Current Page: 1]
      // Click Go-to-First button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(0).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Previous button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(1).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Page-1 button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(2).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Next button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(3).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Last button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(4).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
    })

    it('is triggered only when page button is clicked and page transition is required, given there\'s only one page', () => {
      // Total Items: 10
      // Page size: default (= 10)
      // Current Page: default (= 1, at the beginning)
      // Visibility Level: 3
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={10} onTurnPage={onTurnPage}/>)

      let clickCount = 1

      // [Current Page: 1]
      // Click Go-to-First button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(0).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Previous button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(1).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Page-1 button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(2).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Next button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(3).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Last button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(4).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
    })

    it('is triggered only when page button is clicked and page transition is required, given there\'re more than 2 pages', () => {
      // Total Items: 40
      // Page size: default (= 10)
      // Current Page: default (= 1, at the beginning)
      // Visibility Level: 3
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={40} onTurnPage={onTurnPage}/>)

      let clickCount = 1

      // [Current Page: 1]
      // Click Go-to-First button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(0).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Go-to-Previous button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(1).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Page-1 button
      // then it should not trigger onTurnPage event
      wrapper.find('button').hostNodes().at(2).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(clickCount)
      // [Current Page: 1]
      // Click Page-2 button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(3).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(++clickCount)
      // [Current Page: 2]
      // Click Go-to-Next button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(6).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(++clickCount)
      // [Current Page: 4]
      // Click Go-to-Last button
      // then it should trigger onTurnPage event
      wrapper.find('button').hostNodes().at(7).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(++clickCount)
      // [Current Page: 3]
      // Click Go-to-Previous button
      // then it should trigger onTurnPage event this time
      wrapper.find('button').hostNodes().at(1).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(++clickCount)
      // [Current Page: 1]
      // Click Go-to-First button
      // then it should trigger onTurnPage event this time
      wrapper.find('button').hostNodes().at(0).simulate('click')
      expect(onTurnPage).toHaveBeenCalledTimes(++clickCount)
    })

    describe('Event Data page', () => {
      it('should increase by 1 when Go-to-Next button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= 1, at the beginning)
        // Visibility Level: 3
        let page
        const onTurnPage = jest.fn(e => page = e.page)
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(5).simulate('click')
        expect(page).toBe(2)
      })
  
      it('should be the last page when Go-to-Last button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= 1, at the beginning)
        // Visibility Level: 3
        let page
        const onTurnPage = jest.fn(e => page = e.page)
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(6).simulate('click')
        expect(page).toBe(3)
      })
  
      it('should decrease by 1 when Go-to-Previous button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= 1, at the beginning)
        // Visibility Level: 3
        let page
        const onTurnPage = jest.fn(e => page = e.page)
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(6).simulate('click')
        // [Current Page: 3]
        wrapper.find("button").hostNodes().at(1).simulate('click')
        expect(page).toBe(2)
      })
      
      it('should be the first page when Go-to-Last button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= 1, at the beginning)
        // Visibility Level: 3
        let page
        const onTurnPage = jest.fn(e => page = e.page)
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(6).simulate('click')
        // [Current Page: 3]
        wrapper.find("button").hostNodes().at(0).simulate('click')
        expect(page).toBe(1)
      })
    })

    describe('Event Data fromItem and toItem', () => {
      it('should be the index of the first item and the last item of the current page, given there\'s next page', () => {
        // Total Items: 15
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= 1, at the beginning)
        // Visibility Level: 3
        let fromItem, toItem
        const onTurnPage = jest.fn(e => {
          fromItem = e.fromItem
          toItem = e.toItem
        })
        const wrapper = mount(<Paginationbar totalItems={15} onTurnPage={onTurnPage}/>)
  
        // [Current Page: 1]
        expect(fromItem).toBe(0)
        expect(toItem).toBe(9)
      })

      it('should be the index of the first item of the current page and the last item of the whole items, given there isn\'t next page', () => {
        // Total Items: 15
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= 1, at the beginning)
        // Visibility Level: 3
        let fromItem, toItem
        const onTurnPage = jest.fn(e => {
          fromItem = e.fromItem
          toItem = e.toItem
        })
        const wrapper = mount(<Paginationbar totalItems={15} onTurnPage={onTurnPage}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(4).simulate('click')
        // [Current Page: 2]
        expect(fromItem).toBe(10)
        expect(toItem).toBe(14)
      })
    })
  })
})
