import { Button } from "@mui/material";

function PaginationBar({ page, setPage }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <Button onClick={() => setPage((p) => Math.max(1, p - 1))}>
        Prev
      </Button>
      <span style={{ margin: "0 10px" }}>Page {page}</span>
      <Button onClick={() => setPage((p) => p + 1)}>
        Next
      </Button>
    </div>
  );
}

export default PaginationBar;