import moment from 'moment';
import 'moment/locale/en-gb';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewOrder } from '../actions';
import { Form, Input, Button, Row, Col, DatePicker, InputNumber, Alert } from 'antd';
moment.locale('en-gb');

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      showAlert: false,
      createSuccess: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.limitNumber = this.limitNumber.bind(this);
  }
  handleReset() {
    const { setFieldsValue } = this.props.form;
    this.setState({
      showAlert: false,
      createSuccess: false
    }, function() {
      setFieldsValue({'userName': ''});
      setFieldsValue({'address': ''});
      setFieldsValue({'dueDate': null});
      setFieldsValue({'redSquare': 0});
      setFieldsValue({'blueSquare': 0});
      setFieldsValue({'yellowSquare': 0});
      setFieldsValue({'redTriangle': 0});
      setFieldsValue({'blueTriangle': 0});
      setFieldsValue({'yellowTriangle': 0});
      setFieldsValue({'redCircle': 0});
      setFieldsValue({'blueCircle': 0});
      setFieldsValue({'yellowCircle': 0});
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let orderInfo = {
          userName: form.getFieldValue('userName'),
          address: form.getFieldValue('address'),
          dueDate: moment(form.getFieldValue('dueDate')).format('DD MMM YYYY'),
          redSquare: form.getFieldValue('redSquare'),
          blueSquare: form.getFieldValue('blueSquare'),
          yellowSquare: form.getFieldValue('yellowSquare'),
          redTriangle: form.getFieldValue('redTriangle'),
          blueTriangle: form.getFieldValue('blueTriangle'),
          yellowTriangle: form.getFieldValue('yellowTriangle'),
          redCircle: form.getFieldValue('redCircle'),
          blueCircle: form.getFieldValue('blueCircle'),
          yellowCircle: form.getFieldValue('yellowCircle')
        };
        let blockSum = orderInfo.redSquare +
          orderInfo.blueSquare +
          orderInfo.yellowSquare +
          orderInfo.redTriangle +
          orderInfo.blueTriangle +
          orderInfo.yellowTriangle +
          orderInfo.redCircle +
          orderInfo.blueCircle +
          orderInfo.yellowCircle;
        if (blockSum === 0) {
          this.setState({ 
            showAlert: true,
            createSuccess: false
          });
        } else {
          this.setState({ 
            showAlert: false,
            createSuccess: true
          });
          this.props.createNewOrder(orderInfo);
        }
      }
    });
  }

  disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  limitNumber(value) {
    if (typeof value === 'string') {
      return !isNaN(Number(value)) ? value.replace(/\./g, '') : 0
    } else if (typeof value === 'number') {
      return !isNaN(value) ? String(value).replace(/\./g, '') : 0
    } else {
      return 0
    }
  }
  

  render() {
    const { getFieldDecorator } = this.props.form;
    let { showAlert, createSuccess } = this.state;
    const FormItem = Form.Item;
    return (
      <div className="text-left">
        <Form ref={this.formRef} className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
        {showAlert && <Alert
            className="mb10 mt10"
            message="Error"
            description="The number of toy blocks should not be empty."
            type="error"
            showIcon
          />}
          {createSuccess && <Alert
            className="mb10 mt10"
            message="Success"
            description="The order create successfully."
            type="success"
            showIcon
          />}
          <hr className="bg-gray" />
          <h3>User Information</h3>
          <hr className="bg-gray" />
          <Row gutter={24}>
            <Col span={8}>
              <FormItem label={`Name`}>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input name.' }]
                })(
                  <Input
                    maxLength={100}
                    placeholder="Please enter name"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Address`}>
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: 'Please input address.' }]
                })(
                  <Input
                    maxLength={200}
                    placeholder="Please enter address"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Due Date`}>
                {getFieldDecorator('dueDate', {
                  rules: [{ required: true, message: 'Please input due date.' }]
                })(
                  <DatePicker format="DD MMM YYYY" disabledDate={this.disabledDate} style={{ width: '100%' }} placeholder="Please enter due date" />
                )}
              </FormItem>
            </Col>
          </Row>
          <hr className="bg-gray" />
          <h3>Toy Blocks Production Information</h3>
          <hr className="bg-gray" />
          <Row gutter={24}>
            <Col span={8}>
              <FormItem label={`Red Square`}>
                {getFieldDecorator('redSquare', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter red square number"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Blue Square`}>
                {getFieldDecorator('blueSquare', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter blue square number"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Yellow Square`}>
                {getFieldDecorator('yellowSquare', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter yellow square number"
                  />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <FormItem label={`Red Triangle`}>
                {getFieldDecorator('redTriangle', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter red triangle number"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Blue Triangle`}>
                {getFieldDecorator('blueTriangle', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter blue triangle number"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Yellow Triangle`}>
                {getFieldDecorator('yellowTriangle', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter yellow triangle number"
                  />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <FormItem label={`Red Circle`}>
                {getFieldDecorator('redCircle', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter red circle number"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Blue Circle`}>
                {getFieldDecorator('blueCircle', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter blue circle number"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Yellow Circle`}>
                {getFieldDecorator('yellowCircle', {
                  rules: [],
                  initialValue: 0
                })(
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={this.limitNumber}
                    parser={this.limitNumber}
                    placeholder="Please enter yellow circle number" />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'left' }}>
              <Button type="primary" htmlType="submit">
                Create New Order
            </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
            </Button>
            </Col>
          </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(InputForm));