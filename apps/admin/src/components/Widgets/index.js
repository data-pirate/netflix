import { useEffect, useState } from 'react';
import WidgetItem from './WidgetItem'

import './widgets.css'
import axios from 'axios';

const users = [
    {
        name: 'damanpreet singh',
        status: 'success'
    },
    {
        name: 'Ajay kumar',
        status: 'success'
    },
    {
        name: 'Dilpreet',
        status: 'pending'
    },
    {
        name: 'Nobal',
        status: 'success'
    },
    {
        name: 'Ashish kumar',
        status: 'declined'
    },
];


// const transactions = [];

function Button({type}){
    return <button className={"widget-button " + type}>{type}</button>
}


function Widget() {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        async function getNewUserData(){
            const res = await axios.get('/api/users?new=true', {
                headers:{
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTFjMGFiOTUxMGU2ZmFmN2I2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQwODU5MiwiZXhwIjoxNjQxMDEzMzkyfQ.yFXYoQcURw_y6jofBNysNQEQL-rgX5fTL1FHZbbfa50"
                }
            });
            setNewUsers(res.data);
        }
        getNewUserData();
    }, [])


    return (
        <div className='widgets'>
            <div className="small">
                <span className="widget-title">New Members</span>
                <ul className="widget-list">
                    {
                        newUsers.map(user=> <WidgetItem { ...user } key={user._id} />)
                    }
                </ul>
            </div>
            <div className="large">
                <span className="widget-title">Latest Transactions</span>
                <table className="widget-table">
                    <tbody>
                    <tr className='table-row'>
                        <th className='table-heading'>Customer</th>
                        <th className='table-heading'>Date</th>
                        <th className='table-heading'>Amount</th>
                        <th className='table-heading'>Status</th>
                    </tr>

                    {
                        users.map(
                            user => {
                                return(
                                <tr className="table-row" key={user.name + 'su1'}>
                                    <td className="table-data">{user.name}</td>
                                    <td className="table-data">10 Dec 2021</td>
                                    <td className="table-data">$12.99</td>
                                    <td className="table-data">
                                        <Button type={user.status}/>
                                    </td>
                                </tr>
                                )
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Widget
