import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ notif, viewed, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        margin: 2,
        cursor: "pointer",
        backgroundColor: viewed ? "#eeeeee" : "#ffffff",
        borderLeft: viewed ? "5px solid gray" : "5px solid green",
      }}
    >
      <CardContent>
        <Typography variant="h6">{notif.Type}</Typography>
        <Typography>{notif.Message}</Typography>
        <Typography variant="caption">{notif.Timestamp}</Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;