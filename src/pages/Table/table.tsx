import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { tableData } from "../../data";
import TableComponent from "../../components/TableComponent/tableComponent";
import { TableData } from "../../interfaces/table";
import "./table.scss";

const Table: FC = () => {
  const data = tableData?.data;
  const headers = ["ID", "CAR ID", "IN STOCK", "HP", "PRICE", "COLOR", "EDIT"];
  const navigate = useNavigate();

  const handleEditClick = (item: TableData) => {
    navigate("/edit", { state: { histoey: "/", data: item } });
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
