import React, { useState, useEffect } from 'react';

function Project() {
  const [notifications, setNotifications] = useState([]);
  const [show, setShow] = useState(false);
  const [unread, setUnread] = useState(0);

  const messages = [
    '🍽️ New table reservation received!',
    '📦 Your ingredient delivery has arrived!',
    '🧾 A new bill has been generated!',
    '📝 A customer just left a review!',
    '📱 Online order placed for pickup!',
    '🚗 A delivery driver is on the way!',
    '⭐ You received a 5-star rating!',
    '🕐 Reservation in 30 minutes!',
    '🔔 New message from a customer!',
    '🔥 A dish just went out of stock!',
    '👨‍🍳 Chef’s special updated on the menu!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      const newNotification = {
        id: Date.now(),
        message: randomMessage,
        time: new Date().toLocaleTimeString(),
      };

      setNotifications(prev => [newNotification, ...prev]);
      setUnread(prev => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setShow(!show);
    setUnread(0);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <button onClick={toggleDropdown} className="relative text-3xl">
          🔔
          {unread > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {unread}
            </span>
          )}
        </button>

        {show && (
          <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-10">
            <div className="p-4 border-b font-semibold text-gray-700">Notifications</div>
            <ul className="max-h-60 overflow-y-auto">
              {notifications.length === 0 ? (
                <li className="p-4 text-gray-500">No notifications</li>
              ) : (
                notifications.map((note) => (
                  <li key={note.id} className="p-4 border-b hover:bg-gray-100">
                    <p>{note.message}</p>
                    <p className="text-sm text-gray-400">{note.time}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
