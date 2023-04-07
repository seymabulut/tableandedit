import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tableData } from "../../data";
import TableComponent from "../../components/TableComponent/tableComponent";
import { TableData } from "../../interfaces/table";
import "./table.scss";

const Table: FC = () => {
  const [data, setData] = useState<TableData[]>(tableData?.data);
  const headers = ["ID", "CAR ID", "IN STOCK", "HP", "PRICE", "COLOR", "EDIT"];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.data) {
      updateData(location?.state?.data);
    }
  }, []);

  const handleEditClick = (item: TableData) => {
    navigate("/edit", { state: { history: "/", data: item } });
  };

  const updateData = (updatedData: TableData) => {
    const data_to_delete_index = data?.findIndex(
      (item: TableData) => item?.id === updatedData?.id
    );
    const temp_data = data;
    temp_data.splice(data_to_delete_index, 1);

    temp_data.push(updatedData);
    setData([...temp_data]);
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
