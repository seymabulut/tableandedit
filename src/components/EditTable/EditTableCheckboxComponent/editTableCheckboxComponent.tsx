import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./editTableCheckboxComponent.scss";

interface Props {
  data: boolean;
  header: string;
  onChange: (value: boolean) => void;
}

const EditTableCheckboxComponent: FC<Props> = ({ data, header, onChange }) => {
  const handleChange = (event: any) => {
    onChange(event?.currentTarget?.checked);
  };

  return (
    <div className="edit-table__row">
      <div className="edit-table__column-header">{header}</div>
      <div className="edit-table__column-value">
        <Checkbox checked={data} onChange={handleChange} />
      </div>
    </div>
  );
};

export default EditTableCheckboxComponent;
