// used to change display mode in tables
export type Mode = "edit" | "consult" | "create";

// used to control the snackbar globally
export type SnackStatus = {
  open: boolean;
  message: string;
  severity: "error" | "success" | "warning";
};
