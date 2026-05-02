import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import { getTopN } from "../services/priority";
import NotificationCard from "../components/NotificationCard";

function Priority() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications({ page: 1, limit: 50 }).then((data) => {
      setNotifications(getTopN(data, 10));
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Priority Inbox</h2>

      {notifications.map((n) => (
        <NotificationCard key={n.ID} notif={n} viewed={false} />
      ))}
    </div>
  );
}

export default Priority;