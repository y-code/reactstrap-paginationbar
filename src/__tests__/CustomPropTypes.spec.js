import React from 'react'
import { shallow, mount } from 'enzyme'
import { CustomPropTypes } from '../Paginationbar'

const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

describe('CustomPropTypes', () => {
  describe('integer type checker', () => {
    let createSuccessfulValidation = target => () => {
      let error = CustomPropTypes.integer({ target }, 'target', 'Test', null, 'Test.target', ReactPropTypesSecret)
      expect(error).toBeNull()
    }
    it('should succeed when validating an positive integer value', createSuccessfulValidation(1))
    it('should succeed when validating an zero value', createSuccessfulValidation(0))
    it('should succeed when validating an negative integer value', createSuccessfulValidation(-1))

    let createFailedValidation = target => () => {
      expect(() => {
        let error = CustomPropTypes.integer({ target }, 'target', 'Test', null, 'Test.target', ReactPropTypesSecret)
        if (error)
          throw error
      })
      .toThrowError('Invalid prop `target` supplied to `Paginationbar`, expected an integer.')
    }
    it('should fail when validating a positive decimal number value', createFailedValidation(1.4))
    it('should fail when validating a negative decimal number value', createFailedValidation(-4.3))
    it('should fail when validating an object value', createFailedValidation({}))
    it('should fail when validating an array value', createFailedValidation([]))
  })

  describe('natualNumber type checker', () => {
    let createSuccessfulValidation = target => () => {
      let error = CustomPropTypes.natualNumber({ target }, 'target', 'Test', null, 'Test.target', ReactPropTypesSecret)
      expect(error).toBeNull()
    }
    it('should succeed when validating an positive integer value', createSuccessfulValidation(1))
    it('should succeed when validating an zero value', createSuccessfulValidation(0))

    let createFailedValidation = target => () => {
      expect(() => {
        let error = CustomPropTypes.natualNumber({ target }, 'target', 'Test', null, 'Test.target', ReactPropTypesSecret)
        if (error)
          throw error
      })
      .toThrowError('Invalid prop `target` supplied to `Paginationbar`, expected a natural number.')
    }
    it('should fail when validating a positive decimal number value', createFailedValidation(1.4))
    it('should fail when validating an negative integer value', createFailedValidation(-1))
    it('should fail when validating a negative decimal number value', createFailedValidation(-4.3))
    it('should fail when validating an object value', createFailedValidation({}))
    it('should fail when validating an array value', createFailedValidation([]))
  })

  describe('arrayOrNatualNumber type checker', () => {
    let createSuccessfulValidation = target => () => {
      let error = CustomPropTypes.arrayOrNatualNumber({ target }, 'target', 'Test', null, 'Test.target', ReactPropTypesSecret)
      expect(error).toBeNull()
    }
    it('should succeed when validating an positive integer value', createSuccessfulValidation(1))
    it('should succeed when validating an zero value', createSuccessfulValidation(0))
    it('should succeed when validating an array value', createSuccessfulValidation([]))

    let createFailedValidation = target => () => {
      expect(() => {
        let error = CustomPropTypes.arrayOrNatualNumber({ target }, 'target', 'Test', null, 'Test.target', ReactPropTypesSecret)
        if (error)
          throw error
      })
      .toThrowError('Invalid prop `target` supplied to `Paginationbar`, expected an array or a natural number.')
    }
    it('should fail when validating a positive decimal number value', createFailedValidation(1.4))
    it('should fail when validating an negative integer value', createFailedValidation(-1))
    it('should fail when validating a negative decimal number value', createFailedValidation(-4.3))
    it('should fail when validating an object value', createFailedValidation({}))
  })

  describe('currentPageNumber type checker', () => {
    let createSuccessfulValidation = (current, first, totalItems, pageSize) => () => {
      let error = CustomPropTypes.currentPageNumber({ current, first, totalItems, pageSize }, 'current', 'Test', null, 'Test.target', ReactPropTypesSecret)
      expect(error).toBeNull()
    }
    let createFailedValidation = (current, first, totalItems, pageSize) => () => {
      expect(() => {
        let error = CustomPropTypes.currentPageNumber({ current, first, totalItems, pageSize }, 'current', 'Test', null, 'Test.target', ReactPropTypesSecret)
        if (error)
          throw error
      })
      .toThrowError('Invalid prop `current` supplied to `Paginationbar`, expected an integer number more than the first page and less than the last page.')
    }

    it('should succeed when validating an positive integer value, given current page is less than the first page',
      createFailedValidation(0, 1, 24, 5))
    it('should succeed when validating an positive integer value, given current page is more than the first page and less than the last page',
      createSuccessfulValidation(1, 1, 24, 5))
    it('should succeed when validating an positive integer value, given current page is more than the first page and less than the last page',
      createSuccessfulValidation(5, 1, 24, 5))
    it('should succeed when validating an positive integer value, given current page is more than the last page',
      createFailedValidation(6, 1, 24, 5))
    it('should succeed when validating an zero value', createSuccessfulValidation(0, 0, 24, 5))
    it('should succeed when validating an negative integer value', createSuccessfulValidation(-1, -1, 24, 5))
    it('should fail when validating a positive decimal number value', createFailedValidation(1.4, 1, 24, 5))
    it('should fail when validating a negative decimal number value', createFailedValidation(-4.3, -5, 24, 5))
    it('should fail when validating an object value', createFailedValidation({}, 1, 24, 5))
    it('should fail when validating an array value', createFailedValidation([], 1, 24, 5))
  })
})
