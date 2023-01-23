import React from "react";

import { Button, Card, Col, Divider, Row } from "antd";

import { NoteResponse } from "../../../dto/types";
import { dateFormatter } from "../../../utils/DateUtil";

type NoteCardProps = {
  note: NoteResponse;
  onClick: (id: number) => void;
  onShowModal: (id: number) => void;
};

export default function NoteCard({ note, onClick, onShowModal }: NoteCardProps) {
  return (
    <>
      <Row justify="center">
        <Col span={24}>
          <Card
            title={note.title}
            bordered={false}
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  size="middle"
                  type="default"
                  htmlType="button"
                  onClick={() => onShowModal(note?.id)}
                >
                  Delete
                </Button>
                <Button size="middle" type="default" htmlType="button" onClick={() => onClick(note?.id)}>
                  Details
                </Button>
              </>
            }
          >
            <Row>
              <Col span={24}>
                <p>{dateFormatter(note.eventDate)}</p>
                <p style={{ wordBreak: "break-all" }}>
                  {note.description.length > 150 ? `${note.description.substring(0, 150)}...` : note.description}
                </p>
              </Col>
            </Row>
          </Card>
          <Divider />
        </Col>
      </Row>
    </>
  );
}
