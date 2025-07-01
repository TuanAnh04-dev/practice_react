import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateUser } from "../service/UserService";


const UpdateModals = (props) => {

    const { showModalUpdate, setShowModalUpdate, user } = props;


    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    useEffect(() => {
        if (user, showModalUpdate) {
            setName(user.first_name);
            setJob(user.last_name);
        }
    }, [user]);

    const handleUpdateUser = async () => {
        let res = await updateUser(user.id, name, job);
        console.log("<<<<<<<<< Checking update user", res);
        if (res) {
            toast.success("Update user successfully");
            setShowModalUpdate(false);
        } else {
            toast.error("Update user failed");
            setShowModalUpdate(false);
        }
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={showModalUpdate} onHide={() => { setShowModalUpdate(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
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
                    <Button variant="secondary" onClick={() => { setShowModalUpdate(false) }}>Close</Button>
                    <Button variant="primary" onClick={() => { handleUpdateUser() }}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UpdateModals;