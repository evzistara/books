import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const title = formJson.title;
    const author = formJson.author;
    console.log(title, author);
    handleClose();
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-CTA text-white font-semibold"
        onClick={handleClickOpen}
      >
        + Add book
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "500px",
            padding: "10px",
            backgroundColor: "#faf7f2",
          },
        }}
      >
        <DialogTitle
          sx={{ color: "#1a1a1a", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          Add a new book
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="book-form">
            <TextField
              autoFocus
              required
              margin="normal"
              id="title"
              name="title"
              label="Book Title"
              type="text"
              fullWidth
              color="primary"
              placeholder="e.g. Harry Potter and the Sorcerer's Stone"
              variant="outlined"
              sx={{
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#eae3d8",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6b6355",
                    borderWidth: "1px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "#2e2e2e",
                },
              }}
            />
            <TextField
              autoFocus
              required
              margin="normal"
              id="author"
              name="author"
              label="Book Author"
              type="text"
              fullWidth
              placeholder="e.g. J.K. Rowling"
              variant="outlined"
              sx={{
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#eae3d8",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6b6355",
                    borderWidth: "1px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "#2e2e2e",
                },
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "#1a1a1a",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="book-form"
            variant="contained"
            sx={{
              backgroundColor: "#c0522a",
            }}
          >
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
