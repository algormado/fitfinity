import React from 'react';
import { NotificationManager } from 'react-notifications';

const Reminders = () => {
  const showReminder = () => {
    NotificationManager.info('Don\'t forget to workout today!');
  };

  return (
    <div>
      {/* You can trigger this function wherever you want in your app */}
      <button onClick={showReminder}>Show Reminder</button>
    </div>
  );
};

export default Reminders;
