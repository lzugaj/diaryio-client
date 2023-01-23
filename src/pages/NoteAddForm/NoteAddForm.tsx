import React from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, message, Row } from "antd";
import { useNavigate } from "react-router-dom";

import { addNote } from "../../api/notes";
import { NoteRequest } from "../../dto/types";
import { validateMessages } from "../../validations/validation";

const { TextArea } = Input;

const initialValues: NoteRequest = {
  title: "",
  description: "",
  location: "",
  eventDate: null,
};

export default function NoteAddForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: NoteRequest) => {
    addNote(values)
      .then((isOk: boolean) => {
        if (isOk) {
          message.success("Successfully added new Note");
          navigate("/panel");
        }
      })
      .catch((error: string) => console.log(error));

    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Submit failed");
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        autoComplete="off"
      >
        <div className="m-auto w-1/2">
          <Row justify="start">
            <Col>
              <ArrowLeftOutlined onClick={() => navigate("/panel")} />
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col span={24}>
              <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                <Input size="large" placeholder="Enter title" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                <TextArea rows={4} placeholder="What happens on this date?" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={12}>
              <Form.Item label="Location" name="location" rules={[{ required: false }]}>
                <Input size="large" placeholder="Enter location" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Event date" name="eventDate" rules={[{ required: true }]}>
                <DatePicker size="large" placeholder="Enter event date" format="YYYY-MM-DD" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={4}>
              <Form.Item>
                <Button size="large" type="default" htmlType="submit">
                  Add Note
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </>
  );
}
