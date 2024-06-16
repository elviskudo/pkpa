/* eslint-disable camelcase */
import { extend, localize } from 'vee-validate'
import { required, email, numeric, alpha_spaces, mimes, regex } from 'vee-validate/dist/rules'

const dictionary = {
  en: {
    messages: {
      required: () => '* Required',
      numeric: () => '* Digit only'
    }
  }
}

// extend('required', {
//   ...required,
//   message: 'This field is required'
// })

// Install required rule.
extend('required', required)

// Install email rule.
extend('email', email)
extend('alpha_spaces', alpha_spaces)
extend('numeric', numeric)
extend('mimes', mimes)
extend('regex', regex)

extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

extend('decimal', {
  validate: (value, { decimals = '*', separator = '.' } = {}) => {
    if (value === null || value === undefined || value === '') {
      return {
        valid: false
      }
    }
    if (Number(decimals) === 0) {
      return {
        valid: /^-?\d*$/.test(value)
      }
    }
    const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`
    const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`)

    return {
      valid: regex.test(value)
    }
  },
  message: 'The {_field_} field must contain only decimal values'
})

localize(dictionary)
