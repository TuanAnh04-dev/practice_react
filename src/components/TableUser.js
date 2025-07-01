import { useEffect, useState } from "react";
import { fetchtAllUser } from "../service/UserService";
import ReactPaginate from "react-paginate";
import { Table, Button } from "react-bootstrap";
import CreateModals from "./create.modals";
import UpdateModals from "./update.modals";

const TableUser = () => {
    const [listUser, setListUser] = useState([]);
    const [totalUser, setTotalUser] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [userUpdate, setUserUpdate] = useState(null);

    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);


    const handleClose = () => { setShowModalCreate(false); }

    useEffect(() => {
        getUsers(1);
    }, []);

    const getUsers = async (page) => {
        let res = await fetchtAllUser(page);
        console.log(res)



        if (res && res.data) {
            setListUser(res.data);
            setTotalUser(res.total);
            setTotalPages(res.total_pages);
        }
    }

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1)
    }

    return (<>
        < div className='my-3 d-flex justify-content-between align-items-center' >
            <div>List user </div>
            <Button variant="success" onClick={() => { setShowModalCreate(true) }}>Thêm mới</Button>
        </div>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>id </th>
                    <th> Email </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                {
                    listUser && listUser.length > 0 &&
                    listUser.map((item, i) => {
                        return (
                            <>
                                <tr key={`users-${i}`
                                }>
                                    <td>{item.id} </td>
                                    < td > {item.email} </td>
                                    < td > {item.first_name} </td>
                                    < td > {item.last_name} </td>
                                    <td className="d-flex gap-2">
                                        <Button variant="warning" className="btn-edit" onClick={() => { setShowUpdateModal(true); setUserUpdate(item) }}>Edit</Button>
                                        <Button variant="danger" className="btn-delete" onClick={() => { }}>Delete</Button>
                                    </td>
                                </tr>

                            </>
                        );
                    })
                }
            </tbody>
        </Table >
        < ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"

            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"

        />
        <CreateModals showModal={showModalCreate} setShowModal={setShowModalCreate} />
        <UpdateModals showModalUpdate={showUpdateModal} setShowModalUpdate={setShowUpdateModal} user={userUpdate} />
    </>);
}

export default TableUser;