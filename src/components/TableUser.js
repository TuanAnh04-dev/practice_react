import { useEffect, useState } from "react";

import { fetchtAllUser } from "../service/UserService";
import ReactPaginate from "react-paginate";
import { Table } from "react-bootstrap";

const TableUser = () => {
    const [listUser, setListUser] = useState([]);
    const [totalUser, setTotalUser] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

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
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>id </th>
                    <th> Email </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                </tr>
            </thead>
            <tbody>
                {
                    listUser && listUser.length > 0 &&
                    listUser.map((item, i) => {
                        return (
                            <tr key={`users-${i}`
                            }>
                                <td>{item.id} </td>
                                < td > {item.email} </td>
                                < td > {item.first_name} </td>
                                < td > {item.last_name} </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
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
    </>);
}

export default TableUser;