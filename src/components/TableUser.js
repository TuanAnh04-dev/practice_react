import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchtAllUser } from "../service/UserService";

const TableUser = (props) => {
    const [listUser, setListUser] = useState([]);


    const getUsers = async () => {
        let res = await fetchtAllUser();

        if (res && res.data) {
            setListUser(res.data)
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    console.log("check list user: ", listUser)
    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    listUser && listUser.length > 0 &&
                    listUser.map((item, i) => {
                        return (
                            <tr key={`users-${i}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    </>);
}

export default TableUser;