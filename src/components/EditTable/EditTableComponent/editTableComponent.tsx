import { FC } from "react";
import { TableData } from "../../../interfaces/table";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  EditTableCheckboxComponent,
  EditTableInputComponent,
  EditTableDisabledComponent,
  EditTableColorComponent,
} from "../index";
import "./editTableComponent.scss";

interface Props {
  data: TableData;
  onBackClick: () => void;
  onSaveClick: (data: TableData) => void;
}

const EditTableComponent: FC<Props> = ({ data, onBackClick, onSaveClick }) => {
  const headers: Record<string, string> = {
    id: "ID",
    car_id: "CAR ID",
    color: "COLOR",
    price: "PRICE",
    currency: "CURRENCY",
    hp: "HORSE POWER",
    instock: "INSTOCK",
  };

  return (
    <div className="container">
      <div className="edit-table">
        <EditTableDisabledComponent data={data?.id} header={headers?.id} />
        <EditTableDisabledComponent
          data={data?.car_id}
          header={headers?.car_id}
        />
        <EditTableCheckboxComponent
          data={data?.instock}
          header={headers?.instock}
        />
        <EditTableInputComponent data={data?.hp} header={headers?.hp} />

        <EditTableInputComponent data={data?.price} header={headers?.price} />
        <EditTableDisabledComponent
          data={data?.currency}
          header={headers?.currency}
        />
        <EditTableColorComponent data={data?.color} header={headers?.color} />
        <div className="edit-table__buttons">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={onBackClick}>
              Cancel
            </Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default EditTableComponent;
