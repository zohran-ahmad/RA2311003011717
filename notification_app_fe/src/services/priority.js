const weightMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopN = (notifications, n = 10) => {
  return [...notifications]
    .sort((a, b) => {
      const w1 = weightMap[a.Type];
      const w2 = weightMap[b.Type];

      if (w1 !== w2) return w2 - w1;
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, n);
};