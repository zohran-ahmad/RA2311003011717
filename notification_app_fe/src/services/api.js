const BASE_URL = "http://20.207.122.201/evaluation-service/notifications";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ6azM4NzVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzY5ODc4OCwiaWF0IjoxNzc3Njk3ODg4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjdkNDFiNjAtMzE5YS00NWU0LTg2NWYtMTQyMjkwNjg1NzkzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiem9ocmFuIGFobWFkIGtoYW4iLCJzdWIiOiI3ODFlYjA1NS00MjliLTQ1OWMtYTdhYi05MTc4MmQzMThkNzUifSwiZW1haWwiOiJ6azM4NzVAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJ6b2hyYW4gYWhtYWQga2hhbiIsInJvbGxObyI6InJhMjMxMTAwMzAxMTcxNyIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6Ijc4MWViMDU1LTQyOWItNDU5Yy1hN2FiLTkxNzgyZDMxOGQ3NSIsImNsaWVudFNlY3JldCI6IkR5amdkRGtxd2pCWEdjVWsifQ.cOQ1rC99POi16v9ft-5b7DUziwUxeGpcSi9TyIRPeMU";

export const fetchNotifications = async ({ page = 1, limit = 10, type = "" }) => {
  let url = `${BASE_URL}?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }
  const data = await res.json();
  return data.notifications || [];
};