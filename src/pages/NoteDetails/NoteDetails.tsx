import React, { useEffect, useState } from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { getNote } from "../../api/notes";
import { NoteResponse } from "../../dto/types";
import { dateFormatter } from "../../utils/DateUtil";

const { Title } = Typography;

export default function NoteDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState<NoteResponse>();

  useEffect(() => {
    getNote(id)
      .then((data: NoteResponse) => setNote(data))
      .catch((error: string) => console.log(error));
  }, [id]);

  return (
    <>
      <div className="w-1/2 m-auto">
        <Row justify="start">
          <Col>
            <ArrowLeftOutlined onClick={() => navigate("/panel")} />
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 20 }}>
          <Col>
            <Title level={2}>{note?.title}</Title>
          </Col>
        </Row>
        <Row justify="start">
          <Col>
            <h2>
              {note?.location !== ""
                ? `${note?.location}, ${dateFormatter(note?.eventDate)}`
                : `${dateFormatter(note.eventDate)}`}
            </h2>
          </Col>
        </Row>
        <Row justify="start" style={{ marginTop: "20px" }}>
          <Col>
            <Title level={5}>{note?.description}</Title>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Col>
            <Button size="large" type="default" htmlType="button" onClick={() => navigate(`/update-note/${id}`)}>
              Update Note
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
