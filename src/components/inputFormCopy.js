import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewOrder } from '../actions';
import { Form, Input, Button } from 'antd';

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let orderInfo = {
        name: form.getFieldValue('password'),
        address: '',
        dueDate: '',
        redSquare: '',
        blueSquare: '',
        yellowSquare: '',
        redTriangle: '',
        blueTriangle: '',
        YellowSquare: '',
        redCircle: '',
        blueCircle: '',
        YellowSquare: ''
      }
      this.props.createNewOrder(orderInfo);
    }
    this.setState({ 
      validated: true
     });     
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="text-left">
         <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
          <hr />
          <h5>User Information</h5>
          <hr />
          <Row gutter={24}>
          <Col span={8} >
          <Form.Item label={`Name`}>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input name.' }],
          })(
            <Input
              placeholder="Please enter name"
            />,
          )}
          </Form.Item>
        </Col>
          </Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
              type="text"
              placeholder="Please enter address" 
              required
              />
              <Form.Control.Feedback type="invalid">
                Please input address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
              type="Date"
              placeholder="Please enter date" 
              required
              />
              <Form.Control.Feedback type="invalid">
                Please input due date.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <hr />
          <h5>Toy Blocks Production Information</h5>
          <hr />

          <Form.Row>
            <Form.Group as={Col} controlId="formGridRedSquare">
              <Form.Label>Red Square</Form.Label>
              <Form.Control type="number" placeholder="Enter red square number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBlueSquare">
              <Form.Label>Blue Square</Form.Label>
              <Form.Control type="number" placeholder="Please enter blue square number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridYellowSquare">
              <Form.Label>Yellow Square</Form.Label>
              <Form.Control type="number" placeholder="Please enter yellow square number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridRedTriangle">
              <Form.Label>Red Triangle</Form.Label>
              <Form.Control type="number" placeholder="Enter red triangle number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBlueTriangle">
              <Form.Label>Blue Triangle</Form.Label>
              <Form.Control type="number" placeholder="Please enter blue triangle number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridYellowTriangle">
              <Form.Label>Yellow Triangle</Form.Label>
              <Form.Control type="number" placeholder="Please enter yellow triangle number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridRedCircle">
              <Form.Label>Red Circle</Form.Label>
              <Form.Control type="number" placeholder="Enter red circle number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBlueCircle">
              <Form.Label>Blue Circle</Form.Label>
              <Form.Control type="number" placeholder="Please enter blue circle number" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridYellowCircle">
              <Form.Label>Yellow Circle</Form.Label>
              <Form.Control type="number" placeholder="Please enter yellow circle number" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">Create New Order</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewOrder: bindActionCreators(createNewOrder, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)