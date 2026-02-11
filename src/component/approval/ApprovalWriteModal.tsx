import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

type Props = {
  show: boolean;
  onClose: () => void;
  onSaved: () => void;
};

export default function ApprovalWriteModal({ show, onClose, onSaved }: Props) {
  const [title, setTitle] = useState("");

  const save = () => {
    console.log("저장:", title);
    onSaved();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>기안 작성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" onClick={save}>
          저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
