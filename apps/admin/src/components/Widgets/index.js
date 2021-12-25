import WidgetItem from './WidgetItem'

import './widgets.css'

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
    return (
        <div className='widgets'>
            <div className="small">
                <span className="widget-title">New Members</span>
                <ul className="widget-list">
                    {
                        users.map(user=> <WidgetItem { ...user } key={user.name} />)
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
