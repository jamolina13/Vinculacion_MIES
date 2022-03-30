import React, { useState } from "react";
import { Alert } from "react-native";

export const startLogIn = (cedula, password) => {
  return async (dispatch) => {
    try {
      let response = "";
      let json = "";
      let aux = "";
      let rol = "";
      let isLogin = false;

      response = await fetch(
        "http://192.188.58.82:3000/tecnicoByCedula/" + cedula + "",
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      json = await response.json();
      aux = Object.keys(json).length;
      if (aux !== 0) {
        const tec_contraseña = json.map(function (item) {
          return item.tec_contraseña;
        });
        if (tec_contraseña == password) {
          const tec_id = json.map(function (item) {
            return item.tec_id;
          });
          const tec_nombre = json.map(function (item) {
            return item.tec_nombre;
          });
          const tec_apellido = json.map(function (item) {
            return item.tec_apellido;
          });
          const tec_telefono = json.map(function (item) {
            return item.tec_telefono;
          });
          const tec_correo = json.map(function (item) {
            return item.tec_correo;
          });
          const tec_direccion = json.map(function (item) {
            return item.tec_direccion;
          });
          isLogin = true;
          rol = "tecnico";
          dispatch(
            login(
              tec_id,
              tec_nombre,
              tec_apellido,
              cedula,
              tec_telefono,
              tec_correo,
              tec_direccion,
              isLogin,
              rol
            )
          );
        } else {
          //dispatch(logout());
          Alert.alert("MIES APP", "La contraseña es incorrecta, vuelva a intentarlo", [
            {
              text: "Continuar",
              style: "destructive",
            },
          ]);
        }
      } else {
        response = await fetch(
          "http://192.188.58.82:3000/supervisorByCedula/" + cedula + "",
          {
            method: "GET",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        json = await response.json();
        aux = Object.keys(json).length;
        if (aux !== 0) {
          const sup_contraseña = json.map(function (item) {
            return item.sup_contraseña;
          });
          if (sup_contraseña == password) {
            const sup_id = json.map(function (item) {
              return item.sup_id;
            });
            const sup_nombre = json.map(function (item) {
              return item.sup_nombre;
            });
            const sup_apellido = json.map(function (item) {
              return item.sup_apellido;
            });
            const sup_telefono = json.map(function (item) {
              return item.sup_telefono;
            });
            const sup_correo = json.map(function (item) {
              return item.sup_correo;
            });
            const sup_direccion = json.map(function (item) {
              return item.sup_direccion;
            });
            isLogin = true;
            rol = "supervisor";
            dispatch(
              login(
                sup_id,
                sup_nombre,
                sup_apellido,
                cedula,
                sup_telefono,
                sup_correo,
                sup_direccion,
                isLogin,
                rol
              )
            );
          } else {
            Alert.alert(
              "MIES APP",
              "La contraseña es incorrecta, vuelva a intentarlo",
              [
                {
                  text: "Continuar",
                  style: "destructive",
                },
              ]
            );
          }
        } else {
          Alert.alert(
            "MIES APP",
            "El número de cédula es incorrecto",
            [
              {
                text: "Continuar",
                style: "destructive",
              },
            ]
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const login = (
  id,
  nombre,
  apellido,
  cedula,
  telefono,
  correo,
  direccion,
  isLogin,
  rol
) => {
  return {
    type: "[Auth] LogInState",
    payload: {
      id,
      nombre,
      apellido,
      cedula,
      telefono,
      correo,
      direccion,
      isLogin,
      rol
    },
  };
};

export const logout = () => {
  return {
    type: "[Auth] LogOutState",
    payload: {
      isLogin: false,
    },
  };
};
