import React, { useEffect, useState } from "react";

import { Button, Col, Empty, message, Modal, Row } from "antd";
import { useNavigate } from "react-router-dom";

import NoteCard from "./components/NoteCard";
import { deleteNote, getNotes } from "../../api/notes";
import { NoteResponse } from "../../dto/types";

const { confirm } = Modal;

export default function UserPanel() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState<number>(0);
  const [notes, setNotes] = useState<NoteResponse[]>([]);

  useEffect(() => {
    getNotes()
      .then((data: NoteResponse[]) => setNotes(data))
      .catch((error: string) => console.log(error));

    setCounter(notes.length);
  }, [counter, notes.length]);

  const onClick = (id: number) => {
    navigate(`/notes/${id}`);
  };

  const showModal = (id: number) => {
    confirm({
      title: "Delete Note",
      content: "Deleting a note will permanently remove it from your network",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        deleteNote(id)
          .then((isOk: boolean) => {
            if (isOk) {
              message.success("Successfully deleted selected Note");
              setCounter(counter - 1);
            }
          })
          .catch((error: string) => console.log(error));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <div className="w-1/2 m-auto">
        <Row justify="center">
          <Col>
            <Button size="large" type="default" htmlType="button" onClick={() => navigate("/add-note")}>
              Add new note
            </Button>
          </Col>
        </Row>
        {notes.length === 0 ? (
          <Empty style={{ marginTop: "30px" }} />
        ) : (
          notes?.map((note: NoteResponse) => {
            return (
              <NoteCard
                key={note?.id}
                note={note}
                onClick={() => onClick(note?.id)}
                onShowModal={() => showModal(note?.id)}
              />
            );
          })
        )}
      </div>
    </>
  );
}
