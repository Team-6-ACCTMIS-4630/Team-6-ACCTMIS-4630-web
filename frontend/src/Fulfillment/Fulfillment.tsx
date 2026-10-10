import React from 'react';
import data from '../Fulfillment/data';

function Fulfillment(){
    return(
        <div className = "content content-margined">
            <div className = "order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className = "fulfillment-list">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ORDER ID</th>
                            <th>CUSTOMER</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillments.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.orderID}</td>
                <td>{item.customerName}</td>
                <td style={{color: item.isShipped ? 'inherit' : 'red', fontWeight: item.isShipped ? 'normal' : 'bold' }}>
                  {item.status}
                </td>
              </tr>
            ))}
                    </tbody>
                </table>
            </div>
        </div>
    
    )
}
export default Fulfillment;