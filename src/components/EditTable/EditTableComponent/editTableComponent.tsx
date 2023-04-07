import { FC, useState, useEffect } from "react";
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
  const initialData: TableData = {
    id: 0,
    car_id: "",
    color: "",
    price: 0,
    currency: "",
    instock: false,
    hp: 0,
  };
  const [item, setItem] = useState<TableData>(initialData);
  const headers: Record<string, string> = {
    id: "ID",
    car_id: "CAR ID",
    color: "COLOR",
    price: "PRICE",
    currency: "CURRENCY",
    hp: "HORSE POWER",
    instock: "INSTOCK",
  };

  useEffect(() => {
    setItem(data);
  }, []);

  const handleCheckboxChange = (value: boolean, id: string) => {
    let temp_data = item;
    const key = id as keyof TableData;
    (temp_data[key] as boolean) = value;
    setItem({ ...temp_data });
  };

  const handleNumberChange = (value: number, id: string) => {
    let temp_data = item;
    const key = id as keyof TableData;
    (temp_data[key] as number) = value;
    setItem({ ...temp_data });
  };

  const handleStringChange = (value: string, id: string) => {
    let temp_data = item;
    const key = id as keyof TableData;
    (temp_data[key] as string) = value;
    setItem({ ...temp_data });
  };

  const handleSaveClick = (data: TableData) => {
    onSaveClick(data);
  };

  return (
    <div className="container">
      <div className="edit-table">
        <EditTableDisabledComponent data={item?.id} header={headers?.id} />
        <EditTableDisabledComponent
          data={item?.car_id}
          header={headers?.car_id}
        />
        <EditTableCheckboxComponent
          data={item?.instock}
          header={headers?.instock}
          onChange={(value) => handleCheckboxChange(value, "instock")}
        />
        <EditTableInputComponent
          data={item?.hp}
          header={headers?.hp}
          onChange={(value) => handleNumberChange(value, "hp")}
        />

        <EditTableInputComponent
          data={item?.price}
          header={headers?.price}
          onChange={(value) => handleNumberChange(value, "price")}
        />
        <EditTableDisabledComponent
          data={item?.currency}
          header={headers?.currency}
        />
        <EditTableColorComponent
          data={item?.color}
          header={headers?.color}
          onChange={(value) => handleStringChange(value, "color")}
        />
        <div className="edit-table__buttons">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={onBackClick}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => handleSaveClick(item)}>
              Save
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default EditTableComponent;
