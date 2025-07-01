import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const AppModals = (props) => {
    const { showModal, setShowModal } = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={showModal} onHide={setShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-group mb-3">
                        <label >Name</label>
                        <input type="text" class="form-control" value={name} onChange={(event) => { setName(event.target.value) }} />

                    </div>
                    <div className="form-group mb-3">
                        <label >Job</label>
                        <input type="text" class="form-control" value={job} onChange={(event) => { setJob(event.target.value) }} />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={setShowModal}>Close</Button>
                    <Button variant="primary" onClick={() => { console.log("name:", name, "- Job:", job) }}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AppModals;