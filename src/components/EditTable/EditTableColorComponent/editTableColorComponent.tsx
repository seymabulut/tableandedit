import { FC } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Colors } from "../../../colors.js";
import "./editTableColorComponent.scss";

interface Props {
  data: string;
  header: string;
}

const EditTableColorComponent: FC<Props> = ({ data, header }) => {
  return (
    <div className="edit-table__row">
      <div className="edit-table__column-header">{header}</div>
      <div className="edit-table__column-value">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={data}
            name="radio-buttons-group"
          >
            {Colors?.map((color: string) => (
              <FormControlLabel
                key={color}
                value={color}
                control={<Radio />}
                label={color}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default EditTableColorComponent;
