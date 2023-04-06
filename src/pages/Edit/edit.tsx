import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditTableComponent from "../../components/EditTable/EditTableComponent/editTableComponent";
import "./edit.scss";

const Edit: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(location?.state?.history || "/");
  };

  const handleSaveClick = () => {
    console.log("save clicked!");
  };

  return (
    <EditTableComponent
      data={location?.state?.data}
      onBackClick={handleBackClick}
      onSaveClick={handleSaveClick}
    />
  );
};

export default Edit;
