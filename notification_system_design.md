# Stage 1 - Priority Inbox

## Approach
- Notifications fetched from API
- Assigned priority weights:
  - Placement > Result > Event
- Sorted using:
  1. Weight (descending)
  2. Timestamp (latest first)
- Extracted top 10 notifications

## Optimization
- For real-time updates:
  - Maintain a Min Heap of size 10
  - Ensures O(log n) update time

## Complexity
- Sorting: O(n log n)
- Optimized approach: O(log n) per insert

## Logging
- Used custom logging middleware for:
  - API calls
  - Processing steps
  - Error handling