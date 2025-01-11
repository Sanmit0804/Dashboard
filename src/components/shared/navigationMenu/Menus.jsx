import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { menuList } from "@/utils/fackData/menuList";
import getIcon from "@/utils/getIcon";

const Menus = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [activeParent, setActiveParent] = useState("");
    const [activeChild, setActiveChild] = useState("");
    const pathName = useLocation().pathname;
    const [user, setUser] = useState(null); // State to store user data
    const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:2002';

    // Fetch current user details
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await fetch(`${url}/api/users/current`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setUser(data); // Set fetched user data
                    console.log('user---', data);
                } else {
                    console.error(data.error || 'Failed to fetch user');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchCurrentUser();
    }, []);

    const handleMainMenu = (e, name) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    const handleDropdownMenu = (e, name) => {
        e.stopPropagation();
        if (openSubDropdown === name) {
            setOpenSubDropdown(null);
        } else {
            setOpenSubDropdown(name);
        }
    };

    useEffect(() => {
        if (pathName !== "/") {
            const x = pathName.split("/");
            setActiveParent(x[1]);
            setActiveChild(x[2]);
            setOpenDropdown(x[1]);
            setOpenSubDropdown(x[2]);
        } else {
            setActiveParent("dashboards");
            setOpenDropdown("dashboards");
        }
    }, [pathName]);

    return (
        <>
            {user &&
                menuList
                    .filter((menuItem) => {
                        // If userType is available and user is admin, only show items with userType: 'admin'
                        if (menuItem.userType) {
                            if (user.role === 'admin') {
                                return menuItem.userType === 'admin';
                            }
                            return menuItem.userType !== 'admin';
                        }
                        // If no userType, show all items
                        return true;
                    })
                    .map(({ dropdownMenu, id, name, path, icon }) => {
                        return (
                            <li
                                key={id}
                                onClick={(e) => handleMainMenu(e, name)}
                                className={`nxl-item nxl-hasmenu ${activeParent === name ? "active nxl-trigger" : ""}`}
                            >
                                <Link to={path} className="nxl-link text-capitalize">
                                    <span className="nxl-micon"> {getIcon(icon)} </span>
                                    <span className="nxl-mtext" style={{ paddingLeft: "2.5px" }}>
                                        {name}
                                    </span>
                                    <span className="nxl-arrow fs-16">
                                        <FiChevronRight />
                                    </span>
                                </Link>
                                <ul
                                    className={`nxl-submenu ${openDropdown === name ? "nxl-menu-visible" : "nxl-menu-hidden"}`}
                                >
                                    {dropdownMenu.map(({ id, name, path, subdropdownMenu }) => {
                                        const x = name;
                                        return (
                                            <Fragment key={id}>
                                                {subdropdownMenu.length ? (
                                                    <li
                                                        className={`nxl-item nxl-hasmenu ${activeChild === name ? "active" : ""}`}
                                                        onClick={(e) => handleDropdownMenu(e, x)}
                                                    >
                                                        <Link to={path} className={`nxl-link text-capitalize`}>
                                                            <span className="nxl-mtext">{name}</span>
                                                            <span className="nxl-arrow">
                                                                <i>
                                                                    {" "}
                                                                    <FiChevronRight />
                                                                </i>
                                                            </span>
                                                        </Link>
                                                        {subdropdownMenu.map(({ id, name, path }) => {
                                                            return (
                                                                <ul
                                                                    key={id}
                                                                    className={`nxl-submenu ${openSubDropdown === x
                                                                        ? "nxl-menu-visible"
                                                                        : "nxl-menu-hidden "
                                                                        }`}
                                                                >
                                                                    <li
                                                                        className={`nxl-item ${pathName === path ? "active" : ""}`}
                                                                    >
                                                                        <Link
                                                                            className="nxl-link text-capitalize"
                                                                            to={path}
                                                                        >
                                                                            {name}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            );
                                                        })}
                                                    </li>
                                                ) : (
                                                    <li
                                                        className={`nxl-item ${pathName === path ? "active" : ""}`}
                                                    >
                                                        <Link className="nxl-link" to={path}>
                                                            {name}
                                                        </Link>
                                                    </li>
                                                )}
                                            </Fragment>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
        </>
    );
};

export default Menus;
