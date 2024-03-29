import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoHome, IoLogOut, IoBusiness, IoFastFood, IoAirplane, IoBagHandle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoBagHandle /> Panen
            </NavLink>
          </li>
        </ul>
        {/* Bisa seperti ini apabila ingin menampilkan data sama user && (user.role === "admin" || user.role === "pabrik") && (*/}
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>

        )}
        <div>
          <p className="menu-label">Data-data</p>
          {user && (user.role === "pabrik") && (
            <ul className="menu-list">
              <li>
                <NavLink to={"/datapabrik"}>
                  <IoPerson /> Profile Pabrik
                </NavLink>
              </li>
            </ul>
          )}
          {user && (user.role === "admin" || user.role === "pabrik") && (
            <ul className="menu-list">
              <li>
                <NavLink to={"/data-pabrik"}>
                  <IoBusiness /> Data Pabrik
                </NavLink>
              </li>
            </ul>
          )}
          {user && (user.role === "petani") && (
            <ul className="menu-list">
              <li>
                <NavLink to={"/datapetani"}>
                  <IoPerson /> Profile Petani
                </NavLink>
              </li>

            </ul>
          )}
          {user && (user.role === "admin" || user.role === "petani") && (
            <ul className="menu-list">
              <li>
                <NavLink to={"/datalahan"}>
                  <IoFastFood /> Data Petani
                </NavLink>
              </li>
            </ul>
          )}
          {user && (user.role === "logistik") && (
            <ul className="menu-list">
              <li>
                <NavLink to={"/datalogistik"}>
                  <IoPerson /> Profile Logistik
                </NavLink>
              </li>
            </ul>

          )}
          {user && (user.role === "admin" || user.role === "logistik") && (
            <ul className="menu-list">
              <li>
                <NavLink to={"/data-logistik"}>
                  <IoAirplane /> Data Logistik
                </NavLink>
              </li>
            </ul>

          )}

        </div>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
