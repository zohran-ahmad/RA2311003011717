# Stage 1 - Priority Inbox

## Approach
- Notifications fetched from API
- Assigned priority weights:
  - Placement > Result > Event
- Sorted using:
  1. Weight (descending)
  2. Timestamp (latest first)
- Extracted top 10 notifications
