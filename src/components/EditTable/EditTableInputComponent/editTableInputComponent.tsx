import { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./editTableInputComponent.scss";

interface Props {
  data: number;
  header: string;
  onChange: (value: number) => void;
}

const EditTableInputComponent: FC<Props> = ({ data, header, onChange }) => {
  const handleChange = (event: any) => {
    onChange(event?.currentTarget?.value);
  };

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
          <TextField variant="standard" value={data} onChange={handleChange} />
        </Box>
      </div>
    </div>
  );
};

export default EditTableInputComponent;
