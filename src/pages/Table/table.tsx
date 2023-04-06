import { FC } from "react";
import { tableData } from "../../data";
import TableComponent from "../../components/TableComponent/tableComponent";
import "./table.scss";
import { TableData } from "../../interfaces/table";

const Table: FC = () => {
  const data = tableData?.data;
  const headers = ["ID", "CAR ID", "IN STOCK", "HP", "PRICE", "COLOR", "EDIT"];

  const handleEditClick = (item: TableData) => {
    console.log(item);
  };
  return (
    <>
      <div className="container">
        <div className="container__table">
          <TableComponent
            headers={headers}
            tableData={data}
            onClick={handleEditClick}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
