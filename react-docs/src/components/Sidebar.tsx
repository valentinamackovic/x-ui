import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export enum ItemsEnum {
  Overview = "overview",
  Menu = "menu",
  Select = "select",
  Accordion = "accordion",
  Modal = "modal",
  Multiselect = "multiselect",
}

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<ItemsEnum>(ItemsEnum.Overview);
  const navigate = useNavigate();

  useEffect(() => {
    const currentActiveItem = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    setActiveItem(currentActiveItem as ItemsEnum);
  }, []);

  const handleItemClick = (newActiveItem: ItemsEnum) => {
    setActiveItem(newActiveItem);
    navigate(`/${newActiveItem}`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <p
          className={`sidebar-item ${
            activeItem === ItemsEnum.Overview && "sidebar-item-active"
          }`}
          onClick={() => handleItemClick(ItemsEnum.Overview)}
        >
          Overview
        </p>
        <p
          className={`sidebar-item ${
            activeItem === ItemsEnum.Menu && "sidebar-item-active"
          }`}
          onClick={() => handleItemClick(ItemsEnum.Menu)}
        >
          Menu
        </p>
        <p
          className={`sidebar-item ${
            activeItem === ItemsEnum.Select && "sidebar-item-active"
          }`}
          onClick={() => handleItemClick(ItemsEnum.Select)}
        >
          Select
        </p>
        <p
          className={`sidebar-item ${
            activeItem === ItemsEnum.Accordion && "sidebar-item-active"
          }`}
          onClick={() => handleItemClick(ItemsEnum.Accordion)}
        >
          Accordion
        </p>
        <p
          className={`sidebar-item ${
            activeItem === ItemsEnum.Modal && "sidebar-item-active"
          }`}
          onClick={() => handleItemClick(ItemsEnum.Modal)}
        >
          Modal
        </p>
        <p
          className={`sidebar-item ${
            activeItem === ItemsEnum.Multiselect && "sidebar-item-active"
          }`}
          onClick={() => handleItemClick(ItemsEnum.Multiselect)}
        >
          Multiselect
        </p>
      </div>
    </div>
  );
};
