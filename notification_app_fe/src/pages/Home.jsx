import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import PaginationBar from "../components/PaginationBar";

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [viewed, setViewed] = useState(new Set());

  useEffect(() => {
    fetchNotifications({ page, limit: 10, type }).then(setNotifications);
  }, [page, type]);

  const markViewed = (id) => {
    setViewed((prev) => new Set(prev).add(id));
  };

  return (
    <div className="container" style={{ padding: 20 }}>
      <h2 className="title">All Notifications</h2>

      <FilterBar type={type} setType={setType} />
      <PaginationBar page={page} setPage={setPage} />

      {notifications &&
        notifications.map((n) => (
          <NotificationCard
            key={n.ID}
            notif={n}
            viewed={viewed.has(n.ID)}
            onClick={() => markViewed(n.ID)}
          />
        ))}
    </div>
  );
}

export default Home;
