import React from 'react'
import { useParams } from 'react-router-dom'
import AllOrders from './AllOrders';
import PendingOrders from './PendingOrders';
import ProcessingOrder from './ProcessingOrders';
import DispatchOrders from './DispatchOrders';
import DeliveredOrders from './DeliveredOrders';
import CancelOrders from './CancelOrders';

const Orders = () => {
    const {ord} = useParams();
    // const orders = ["All Orders", "Pending Orders", "Processing Orders", "Dispatch Orders", "Delivered Orders", "Cancel Orders"];


    const renderContent = ()=>{
        switch(ord){
            case "All Orders":
                return <AllOrders/>
            case "Pending Orders":
                return <PendingOrders/>
            case "Processing Orders":
                return <ProcessingOrder/>
            case "Dispatch Orders":
                return <DispatchOrders/>
            case "Delivered Orders":
                return <DeliveredOrders/>
            case "Cancel Orders":
                return <CancelOrders/>  
        }
    }
  return (
    <div>
        {renderContent()}
    </div>

  )
}

export default Orders
