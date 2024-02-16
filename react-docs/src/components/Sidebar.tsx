import { useState } from "react"

enum ItemsEnum {
    Overview,
    Menu,
    Select,
    Accordion,
    Modal,
}

export const Sidebar = () => {
    const [activeItem, setActiveItem] = useState<ItemsEnum>(ItemsEnum.Overview)
    
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <p className={`sidebar-item ${activeItem === ItemsEnum.Overview && 'sidebar-item-active'}`} onClick={() => setActiveItem(ItemsEnum.Overview)}>Overview</p>
                <p className={`sidebar-item ${activeItem === ItemsEnum.Menu && 'sidebar-item-active'}`} onClick={() => setActiveItem(ItemsEnum.Menu)}>Menu</p>
                <p className={`sidebar-item ${activeItem === ItemsEnum.Select && 'sidebar-item-active'}`} onClick={() => setActiveItem(ItemsEnum.Select)}>Select</p>
                <p className={`sidebar-item ${activeItem === ItemsEnum.Accordion && 'sidebar-item-active'}`} onClick={() => setActiveItem(ItemsEnum.Accordion)}>Accordion</p>
                <p className={`sidebar-item ${activeItem === ItemsEnum.Modal && 'sidebar-item-active'}`} onClick={() => setActiveItem(ItemsEnum.Modal)}>Modal</p>
            </div>
        </div>
    )
}