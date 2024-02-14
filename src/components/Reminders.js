import React from "react";
import { NotificationsManager } from 'react-notifications'

const Reminder = () =>{
    const showRemainder = () =>{
        NotificationsManager.info ('Don\'t forget to workout today!')
    }

    return (
        <div>
            <button onClick={showRemainder}>Show Reminder</button>
        </div>
    )
}
export default Reminder