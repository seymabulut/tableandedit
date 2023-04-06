import { FC } from "react";
import "./editTableDisabledComponent.scss";

interface Props {
  data: number | string;
  header: string;
}

const EditTableDisabledComponent: FC<Props> = ({ data, header }) => {
  return (
    <div className="edit-table__row">
      <div className="edit-table__column-header">{header}</div>
      <div className="edit-table__column-value">{data}</div>
    </div>
  );
};

export default EditTableDisabledComponent;
