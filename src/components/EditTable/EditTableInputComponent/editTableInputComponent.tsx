import { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./editTableInputComponent.scss";

interface Props {
  data: number;
  header: string;
}

const EditTableInputComponent: FC<Props> = ({ data, header }) => {
  return (
    <div className="edit-table__row">
      <div className="edit-table__column-header">{header}</div>
      <div className="edit-table__column-value">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "15ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField variant="standard" value={data} />
        </Box>
      </div>
    </div>
  );
};

export default EditTableInputComponent;
