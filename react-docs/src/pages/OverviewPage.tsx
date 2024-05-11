import menuImg from "../assets/menuImg.png";
import selectImg from "../assets/selectImg.png";
import accordionImg from "../assets/accordionImg.png";
import modalImg from "../assets/modalImg.png";
import multiselectImg from "../assets/multiselectImg.png";
import { ItemsEnum } from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const OverviewPage = () => {
  const navigate = useNavigate();

  const handleItemClick = (newActiveItem: ItemsEnum) => {
    navigate(`/${newActiveItem}`);
  };

  return (
    <>
      <h1 className="main-page-content-title">Overview</h1>
      <p>
        X UI offers ready-to-use components that are both easy to implement and
        flexible, allowing for enhanced control and composability.
      </p>
      <div className="overview-wrapper">
        <div
          className="overview-item"
          onClick={() => handleItemClick(ItemsEnum.Menu)}
        >
          <h3>Menu</h3>
          <div>
            <img src={menuImg} className="overview-image" />
          </div>
        </div>
        <div
          className="overview-item"
          onClick={() => handleItemClick(ItemsEnum.Select)}
        >
          <h3>Select</h3>
          <div>
            <img src={selectImg} className="overview-image" />
          </div>
        </div>
        <div
          className="overview-item"
          onClick={() => handleItemClick(ItemsEnum.Accordion)}
        >
          <h3>Accordion</h3>
          <div>
            <img src={accordionImg} className="overview-image" />
          </div>
        </div>
        <div
          className="overview-item"
          onClick={() => handleItemClick(ItemsEnum.Modal)}
        >
          <h3>Modal</h3>
          <div>
            <img src={modalImg} className="overview-image" />
          </div>
        </div>
        <div
          className="overview-item"
          onClick={() => handleItemClick(ItemsEnum.Multiselect)}
        >
          <h3>Multiselect</h3>
          <div>
            <img src={multiselectImg} className="overview-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
