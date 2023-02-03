//contact us page with semantic-ui-react

import React, { Component } from 'react'
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'

export default class FormExampleFieldControlId extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

// Path: src/pages/contact.jsx
// Compare this snippet from src/components/Menu.jsx:
// import React, { Component } from 'react'
// import { Menu, Segment } from 'semantic-ui-react'
// 
// export default class MenuExampleInvertedSecondary extends Component {
//   state = { activeItem: 'home' }
// 
//   handleItemClick = (e, { name }) => this.setState({ activeItem