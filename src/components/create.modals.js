import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { postUser } from "../service/UserService";
import { toast } from "react-toastify";

const CreateModals = (props) => {
    const { showModal, setShowModal } = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleClose = () => {
        setShowModal();
        setName("");
        setJob("");
    }

    const handleSaveUser = async () => {
        let res = await postUser(name, job);
        console.log("<<<<<<<<<Checking");
        if (res && res.name != '') {
            console.log("<<<<<<<<< Checking create user", res);
            handleClose();
            toast.success("Save user successfully");
        } else {
            handleClose();
            toast.error("Save user failed");
        }
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-group mb-3">
                        <label >Name</label>
                        <input type="text" className="form-control" value={name} onChange={(event) => { setName(event.target.value) }} />

                    </div>
                    <div className="form-group mb-3">
                        <label >Job</label>
                        <input type="text" className="form-control" value={job} onChange={(event) => { setJob(event.target.value) }} />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={() => { handleSaveUser() }}>Create</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateModals;