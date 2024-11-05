import  { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []); 

  const formatDateTime = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const weekday = days[date.getDay()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${month} ${day} ${weekday}, ${year} - ${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm} (IST)`;
  };

  return (
    <span className="text-xs sm:text-sm text-gray-500">
      {formatDateTime(currentDateTime)}
    </span>
  );
};

export default CurrentDate;