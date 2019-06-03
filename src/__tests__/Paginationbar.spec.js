import React from 'react'
import { shallow, mount } from 'enzyme'
import Paginationbar from '../Paginationbar'

describe('Paginationbar', () => {
  it('should render a single "nav" tag, a single "ul" tag, five "li" tags, and five "button" tags by default', () => {
    const wrapper = mount(<Paginationbar />)

    expect(wrapper.find('nav[aria-label="pagination"]').hostNodes().length).toBe(1)
    expect(wrapper.find('ul.pagination').hostNodes().length).toBe(1)
    expect(wrapper.find('li.page-item').hostNodes().length).toBe(5)
    expect(wrapper.find('button.page-link').hostNodes().length).toBe(5)
  })

  describe('Property totalItems', () => {
    it('should be defaulted to 0', () => {
      const wrapper = shallow(<Paginationbar/>)
      expect(wrapper.instance().props.totalItems).toBe(0)
    })

    it('should not be revised, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={3}/>)
      expect(wrapper.instance().rProps.totalItems).toBe(3)
    })

    it('should be revised to default value, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={-3}/>)
      expect(wrapper.instance().rProps.totalItems).toBe(0)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={'a'}/>)
      expect(wrapper.instance().rProps.totalItems).toBe(0)
    })

    it('should be revised to number value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={'3'}/>)
      expect(wrapper.instance().rProps.totalItems).toBe(3)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={{totalItems: 1}}/>)
      expect(wrapper.instance().rProps.totalItems).toBe(0)
    })

    it('should be revised to length of the array, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.totalItems).toBe(5)
    })
  })

  describe('Property pageSize', () => {
    it('should be defaulted to 10', () => {
      const wrapper = shallow(<Paginationbar totalItems={65}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(10)
    })

    it('should not be revised, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} pageSize={3}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(3)
    })

    it('should be revised to default value, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} pageSize={-3}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(10)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} pageSize={'a'}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(10)
    })

    it('should be revised to number value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} pageSize={'3'}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(3)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} pageSize={{first: 1}}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(10)
    })

    it('should be revised to default value, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} pageSize={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.pageSize).toBe(10)
    })
  })

  describe('Property first', () => {
    it('should be defaulted to 1', () => {
      // Total Items: 65
      // Page size: default (= 10)
      // First Page: default (= 1)
      // Current Page: default (= undefined)
      // Visibility Level: default (= 3)
      const wrapper = mount(<Paginationbar totalItems={65}/>)
      expect(wrapper.find('li.active').find("button").hostNodes().text()).toBe('1')
      expect(wrapper.find('li').find("button").hostNodes().at(2).text()).toBe('1')
    })

    it('should not be revised, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} first={3}/>)
      expect(wrapper.instance().rProps.first).toBe(3)
    })

    it('should not be revised, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} first={-3}/>)
      expect(wrapper.instance().rProps.first).toBe(-3)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} first={'a'}/>)
      expect(wrapper.instance().rProps.first).toBe(1)
    })

    it('should be revised to number value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} first={'3'}/>)
      expect(wrapper.instance().rProps.first).toBe(3)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} first={{first: 1}}/>)
      expect(wrapper.instance().rProps.first).toBe(1)
    })

    it('should be revised to default value, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} first={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.first).toBe(1)
    })
  })

  describe('Property current', () => {
    it('should be defaulted to undefined and handled as state.current = 1', () => {
      const wrapper = shallow(<Paginationbar />)
      expect(wrapper.instance().props.current).toBe(undefined)
      expect(wrapper.instance().state.current).toBe(1)
    })

    it('should not be revised, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} current={3}/>)
      expect(wrapper.instance().rProps.current).toBe(3)
    })

    it('should not be revised, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} current={-3}/>)
      expect(wrapper.instance().rProps.current).toBe(-3)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} current={'a'}/>)
      expect(wrapper.instance().rProps.current).toBe(undefined)
    })

    it('should be revised to number value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} current={'3'}/>)
      expect(wrapper.instance().rProps.current).toBe(3)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} current={{current: 1}}/>)
      expect(wrapper.instance().rProps.current).toBe(undefined)
    })

    it('should be revised to default value, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} current={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.current).toBe(undefined)
    })
  })

  describe('Property visibility', () => {
    it('should be defaulted to 3', () => {
      const wrapper = shallow(<Paginationbar totalItems={65}/>)
      expect(wrapper.instance().rProps.visibility).toBe(3)
    })

    it('should not be revised, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} visibility={5}/>)
      expect(wrapper.instance().rProps.visibility).toBe(5)
    })

    it('should be revised to default value, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} visibility={-6}/>)
      expect(wrapper.instance().rProps.visibility).toBe(3)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} visibility={'a'}/>)
      expect(wrapper.instance().rProps.visibility).toBe(3)
    })

    it('should be revised to number value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} visibility={'4'}/>)
      expect(wrapper.instance().rProps.visibility).toBe(4)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} visibility={{first: 1}}/>)
      expect(wrapper.instance().rProps.visibility).toBe(3)
    })

    it('should be revised to default value, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} visibility={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.visibility).toBe(3)
    })
  })

  describe('Property ellipsis', () => {
    it('should be defaulted to 3', () => {
      const wrapper = shallow(<Paginationbar totalItems={65}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })

    it('should not be revised, given a boolean is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={false}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(false)
    })

    it('should be revised to default value, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={5}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })

    it('should be revised to default value, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={-6}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={'a'}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })

    it('should be revised to default value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={'4'}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={{first: 1}}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })

    it('should be revised to default value, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} ellipsis={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.ellipsis).toBe(true)
    })
  })

  describe('Property onTurnPage', () => {
    it('should be defaulted to 3', () => {
      const wrapper = shallow(<Paginationbar totalItems={65}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })

    it('should not be revised, given a function is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={() => {}}/>)
      expect(typeof wrapper.instance().rProps.onTurnPage).toBe("function")
    })

    it('should be revised to default value, given a positive number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={5}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })

    it('should be revised to default value, given a negative number is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={-6}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })

    it('should be revised to default value, given a string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={'a'}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })

    it('should be revised to default value, given a number string is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={'4'}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })

    it('should be revised to default value, given a object is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={{first: 1}}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })

    it('should be revised to default value, given an array is provided', () => {
      const wrapper = shallow(<Paginationbar totalItems={50} onTurnPage={[1, 2, 3, 4, 5]}/>)
      expect(wrapper.instance().rProps.onTurnPage).toBe(undefined)
    })
  })

  var testEventOnTurnPage = (c) => {
    it('is called at the initial render', () => {
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar onTurnPage={onTurnPage} {...c}/>)

      expect(onTurnPage).toHaveBeenCalledTimes(1)
    })

    it('is triggered only when page button is clicked and page transition is required, given there is no item', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // Current Page: default (= undefined)
      // Visibility Level: 3
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar onTurnPage={onTurnPage} {...c}/>)

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

    it('is triggered only when page button is clicked and page transition is required, given there is only one page', () => {
      // Total Items: 10
      // Page size: default (= 10)
      // Current Page: default (= undefined)
      // Visibility Level: 3
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={10} onTurnPage={onTurnPage} {...c}/>)

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

    it('is triggered only when page button is clicked and page transition is required, given there are more than 2 pages', () => {
      // Total Items: 40
      // Page size: default (= 10)
      // Current Page: default (= undefined)
      // Visibility Level: 3
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={40} onTurnPage={onTurnPage} {...c}/>)

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

    it('is called with Event Data which fromItem and toItem are NaN, given there is no totalItems property', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // First Page: default (= 1)
      // Current Page: default (= 1)
      // Visibility Level: default (=3)
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar onTurnPage={onTurnPage}/>)

      let pageButtonCount = 0
      const buttons = wrapper.find('li button').hostNodes();
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons.at(i);
        if (!isNaN(button.text()))
          pageButtonCount++
      }
      expect(pageButtonCount).toBe(1)
      
      expect(onTurnPage).toHaveBeenCalledTimes(1)
      expect(onTurnPage.mock.calls[0][0].page).toBe(1)
      expect(onTurnPage.mock.calls[0][0].fromItem).toBe(NaN)
      expect(onTurnPage.mock.calls[0][0].toItem).toBe(NaN)
    })

    it('is called with Event Data which fromItem and toItem are NaN, given there is no item in totalItems property', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // First Page: default (= 1)
      // Current Page: default (= 1)
      // Visibility Level: default (=3)
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={[]} onTurnPage={onTurnPage}/>)

      let pageButtonCount = 0
      const buttons = wrapper.find('li button').hostNodes();
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons.at(i);
        if (!isNaN(button.text()))
          pageButtonCount++
      }
      expect(pageButtonCount).toBe(1)
      
      expect(onTurnPage).toHaveBeenCalledTimes(1)
      expect(onTurnPage.mock.calls[0][0].page).toBe(1)
      expect(onTurnPage.mock.calls[0][0].fromItem).toBe(NaN)
      expect(onTurnPage.mock.calls[0][0].toItem).toBe(NaN)
    })

    it('is called with Event Data which fromItem and toItem are NaN, given totalItems property is negative number', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // First Page: default (= 1)
      // Current Page: default (= 1)
      // Visibility Level: default (=3)
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={-1} onTurnPage={onTurnPage}/>)
      
      let pageButtonCount = 0
      const buttons = wrapper.find('li button').hostNodes();
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons.at(i);
        if (!isNaN(button.text()))
          pageButtonCount++
      }
      expect(pageButtonCount).toBe(1)
      
      expect(onTurnPage).toHaveBeenCalledTimes(1)
      expect(onTurnPage.mock.calls[0][0].page).toBe(1)
      expect(onTurnPage.mock.calls[0][0].fromItem).toBe(NaN)
      expect(onTurnPage.mock.calls[0][0].toItem).toBe(NaN)
    })

    it('is called with Event Data which fromItem and toItem are NaN, given totalItems property is non-integer number', () => {
      // Total Items: default (= 0)
      // Page size: default (= 10)
      // First Page: default (= 1)
      // Current Page: default (= 1)
      // Visibility Level: default (=3)
      const onTurnPage = jest.fn()
      const wrapper = mount(<Paginationbar totalItems={10.5} onTurnPage={onTurnPage}/>)
      
      let pageButtonCount = 0
      const buttons = wrapper.find('li button').hostNodes();
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons.at(i);
        if (!isNaN(button.text()))
          pageButtonCount++
      }
      expect(pageButtonCount).toBe(2)
      
      expect(onTurnPage).toHaveBeenCalledTimes(1)
      expect(onTurnPage.mock.calls[0][0].page).toBe(1)
      expect(onTurnPage.mock.calls[0][0].fromItem).toBe(0)
      expect(onTurnPage.mock.calls[0][0].toItem).toBe(9)
    })

    describe('Event Data page', () => {
      it('should increase by 1 when Go-to-Next button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= undefined)
        // Visibility Level: 3
        const onTurnPage = jest.fn()
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage} {...c}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(5).simulate('click')
        expect(onTurnPage).toHaveBeenCalledTimes(2)
        expect(onTurnPage.mock.calls[1][0].page).toBe(2 + (c.first === undefined ? 1 : c.first) - 1)
      })
  
      it('should be the last page when Go-to-Last button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= undefined)
        // Visibility Level: 3
        const onTurnPage = jest.fn()
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage} {...c}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(6).simulate('click')
        expect(onTurnPage).toHaveBeenCalledTimes(2)
        expect(onTurnPage.mock.calls[1][0].page).toBe(3 + (c.first === undefined ? 1 : c.first) - 1)
      })
  
      it('should decrease by 1 when Go-to-Previous button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= undefined)
        // Visibility Level: 3
        const onTurnPage = jest.fn()
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage} {...c}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(6).simulate('click')
        // [Current Page: 3]
        wrapper.find("button").hostNodes().at(1).simulate('click')
        expect(onTurnPage).toHaveBeenCalledTimes(3)
        expect(onTurnPage.mock.calls[2][0].page).toBe(2 + (c.first === undefined ? 1 : c.first) - 1)
      })
      
      it('should be the first page when Go-to-Last button is clicked', () => {
        // Total Items: 30
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= undefined)
        // Visibility Level: 3
        const onTurnPage = jest.fn()
        const wrapper = mount(<Paginationbar totalItems={30} onTurnPage={onTurnPage} {...c}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(6).simulate('click')
        // [Current Page: 3]
        wrapper.find("button").hostNodes().at(0).simulate('click')
        expect(onTurnPage).toHaveBeenCalledTimes(3)
        expect(onTurnPage.mock.calls[2][0].page).toBe(1 + (c.first === undefined ? 1 : c.first) - 1)
      })
    })

    describe('Event Data fromItem and toItem', () => {
      it('should be the index of the first item and the last item of the current page, given there\'s next page', () => {
        // Total Items: 15
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= undefined)
        // Visibility Level: 3
        const onTurnPage = jest.fn()
        const wrapper = mount(<Paginationbar totalItems={15} onTurnPage={onTurnPage} {...c}/>)
  
        // [Current Page: 1]
        expect(onTurnPage).toHaveBeenCalledTimes(1)
        expect(onTurnPage.mock.calls[0][0].fromItem).toBe(0)
        expect(onTurnPage.mock.calls[0][0].toItem).toBe(9)
      })

      it('should be the index of the first item of the current page and the last item of the whole items, given there isn\'t next page', () => {
        // Total Items: 15
        // Page size: default (= 10)
        // First Page: default (= 1)
        // Current Page: default (= undefined)
        // Visibility Level: 3
        const onTurnPage = jest.fn()
        const wrapper = mount(<Paginationbar totalItems={15} onTurnPage={onTurnPage} {...c}/>)
  
        // [Current Page: 1]
        wrapper.find("button").hostNodes().at(4).simulate('click')
        // [Current Page: 2]
        expect(onTurnPage).toHaveBeenCalledTimes(2)
        expect(onTurnPage.mock.calls[1][0].fromItem).toBe(10)
        expect(onTurnPage.mock.calls[1][0].toItem).toBe(14)
      })
    })
  }

  describe('Event onTurnPage', () => {
    testEventOnTurnPage({ })
    testEventOnTurnPage({ first: 2 })
    testEventOnTurnPage({ first: 3 })
  })
})
