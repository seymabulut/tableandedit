import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./editTableCheckboxComponent.scss";

interface Props {
  data: boolean;
  header: string;
}

const EditTableCheckboxComponent: FC<Props> = ({ data, header }) => {
  return (
    <div className="edit-table__row">
      <div className="edit-table__column-header">{header}</div>
      <div className="edit-table__column-value">
        <Checkbox checked={data} />
      </div>
    </div>
  );
};

export default EditTableCheckboxComponent;
