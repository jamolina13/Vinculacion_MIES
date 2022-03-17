import React, { useState, useEffect } from "react";
import {

    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
} from "react-native";

import { styles } from "../../../estilos/styleReporte";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello World!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

export const ReporteBarthel = (props) => {
    const [selectedPrinter, setSelectedPrinter] = React.useState();
    const [allowances, setAllowances] = useState([]);


    const params = props.route.params;
    const navigation = props.navigation;
    var [values, setValues] = useState({
        lista: [],
        datosReporte: [],
    });

    var { lista } = values;
    var { datosReporte } = values;
    const idEncabezado = params.idEncabezado

    console.log(idEncabezado + "aasas")
    const [state, setState] = useState({
        isReady: false,
    })
    useEffect(() => {
        llamarDatos();
        return () => {
            setValues({});
        }
    }, [state.isReady]);

    const llamarDatos = async () => {

        try {
            const responseE = await fetch(
                "http://192.188.58.82:3000/reporteBarthelById/" + idEncabezado + "",

                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                });
            const json = await responseE.json();
            setValues({
                ...values,
                lista: json,
                refreshing: false,
            });

        } catch (error) {

            console.error(error);
        }

    }



    values.lista.filter((item) => {
        datosReporte[0] = `${item.am_nombre}`;
        datosReporte[1] = `${item.uni_zona}`;
        datosReporte[2] = `${item.uni_distrito}`;
        datosReporte[3] = `${item.uni_modalidad}`;
        datosReporte[4] = `${item.uni_unidad_atencion}`;
        datosReporte[5] = `${item.am_fecha_de_nacimiento}`;
        datosReporte[6] = `${item.tec_nombre}`;
        datosReporte[7] = `${item.tec_apellido}`;
        datosReporte[8] = `${item.ef_fecha_aplicacion}`;
        datosReporte[9] = `${item.ib_id}`;
        datosReporte[10] = `${item.ef_id}`;
        datosReporte[11] = `${item.ib_p1_comer}`;
        datosReporte[12] = `${item.ib_p2_trasladarse}`;
        datosReporte[13] = `${item.ib_p3_aseo_personal}`;
        datosReporte[14] = `${item.ib_p4_uso_retrete}`;
        datosReporte[15] = `${item.ib_p5_bañarse}`;
        datosReporte[16] = `${item.ib_p6_desplazarse}`;
        datosReporte[17] = `${item.ib_p7_escaleras}`;
        datosReporte[18] = `${item.ib_p8_vestirse_desvertirse}`;
        datosReporte[19] = `${item.ib_p9_control_heces}`;
        datosReporte[20] = `${item.ib_p10_control_orina}`;
        datosReporte[21] = `${item.ib_tiempo_inicial}`;
        datosReporte[22] = `${item.ib_tiempo_final}`;
        datosReporte[23] = `${item.ib_tiempo_total}`;
        datosReporte[24] = `${item.ib_estado}`;
        datosReporte[25] = `${item.ib_puntaje_total}`;
    });
    const print = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        await Print.printAsync({
            html: createDynamicTable(),
            printerUrl: selectedPrinter?.url, // iOS only
        });
    }

    const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({
            html
        });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    const selectPrinter = async () => {
        const printer = await Print.selectPrinterAsync(); // iOS only
        setSelectedPrinter(printer);
    }

    function calcularEdad(fecha) {
        console.log(fecha)
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }
    
    function calcularMes(fecha) {
        console.log(fecha)
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return Math.abs(m);
    }

    const createDynamicTable = () => {


        // await useEffect(() => {
        //     fetch("192.188.58.82:3000/consultaEscalaLawtonBrodyByIdAm/1")
        //       .then(data => {
        //         return data.json();
        //       })
        //       .then(data => {
        //         setAllowances(data);
        //       })
        //       .catch(err => {
        //         console.log(err);
        //       });
        //   }, []);




        const html = `
    <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <title>Hola Mundo!</title>
</head>

<body>
<p>&nbsp;</p>
<p data-pm-slice="1 4 []">&nbsp;</p>
<p style="text-align: center;"><strong><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQTEhcUFRQXFxcYHCIeGxsbGhsXGxwXHR0eGBsdIB0bIi4kGx4pKx0bJ0QpKS4wMzMzHCQ5QTkxPSw1MzABCwsLEA4QHRISHj0pIikyNjU9OD0wOz0yNTEzOzA4OTk9MDI8Mz00PTQyMDI0NTIyOzI0MzIyMjMwMjA9PTQyPf/AABEIAG0BzgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADwQAAICAQIDBgMFBgUFAQAAAAECABEDEiEEMUEFEyJRYXEygZEGI0KhsRRSYnLB0RUzQ4KyB6LS8PHC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAIBAwQF/8QAJhEBAQACAQMCBgMAAAAAAAAAAAECEQMSITFBUQQTImFxgTKRof/aAAwDAQACEQMRAD8A+zREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDyIkXBxauWUXa8wdjJuUlkvq1LiIlMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgeREi8dx2PCobI4QE0CfOZbondvLgVZ58pW5u2MalNNuH1bjkoQWxP5SmbI+RtOR07xHd8elltBpKoxUfEu979ITjGGIPjcM5QMyotIBqpyAepPpYBMjLLpupN68mWNmO96WY+0OLvBjYMpZNY1AURRNbHnsZITtZC2NaYNlvSpG9C7J8htOYfI/flExkZcZDo+XxKyciAxA03q8/PrN2XiMWBVU5WK62x7buHY2y31Vb53XzlZ7naS29v6VjcbJbddv9dWnFIylg6kA0SCCAboi5D/YSc3eA6R1r8X9hy+koex+HVRWMnSgdQjH/ADGIssa2AqvahJ/ZDOm6uuTHyYI2rQ3OqHP5Sbhx8sl34u0fMst1O3u6SJWcZx2jLjWxpe1PKwxoqfn/AGlmJUstsNvYiJTSRuI4zHj+N1X0J3+nOb2Fij1lRx/Z+FBrONiL30kkgedE7wNeX7S4QaXUfWv6czNWL7Ro7hFFk3VgqDXS7+I9NudCZY+yOFyg6LsbGmsi9xs18x+UgcZ2KdZOMq2lQdviG23I9avr7AQOnPFIKt1F+olV2j28mJgDuDyABLEVuasaR063RlInF5EDLkUq7bG9hXQ6a3P95p4Hs7vsjaNO25JJ8PTrz67784F7j+1OI8w30Illwva2HJWlxZ6HY/nIOL7PYdI1EseZIIHr06TDBw3Cu6rjQvYssGbSF33Jve+VQOgiasOFUGlRQkbJxBBcBk8P4SPEfCG/e9fKBOiYjlMoCIiAiIgIiICIiAiIgImjLmplWvivfyqv7xmzaSoq9R+g8/0Hzgb4kbBxIYkVWwI9bAJ+lj6zH9p3oDc8t6H4uv8AtMCXEjl3q9K2P4jVeh0/0mIzN4fCtty8Rqqvnp5wJUSN3rXp0rdX8RrnX7sDiR1BFdOe96aHnvAkxIxzMN2UAehsj1Irl7EzPNkKiwLJIHOuZrnUDdEivxBANrRAJ52DXka/UTahb8QA9mJ/UCBtiVHHdtLi760Zu5CE0R4u8NCvabl7TRmxBfEMysyt0AUBt/rAsYlTw3arZWHd4XOO67wlVU1zIUnUV9akjguPGTD3oUgeLY8/CzKf+MCdEq/8VXucOXQazHGANrXvOV+1zHB2qz5Cq4XbGHKHJagBl2bwk6tIPWBbRKrJ2wirkZlb7vJ3YA3Z3IUgKB1OqvlNPC9qOrhM+LJj7xqRm0Fd/hQlCab35wLuJTYu3cbjPSkNg1alNWwW9x6GiJZ8Pl1IrVWoA17i4G6IiBrZgOc4PheIQHLk73IA7EZnerUeLuwoF+Zqt7HpLz7UY1c4lbKEBY+He2JoLVD3FnYapCDFg50Jh1Puyhcmp12qtxY3Njr7zlzZXCS77erJq2yy/bTxHLFclBmVdJfQLyeEmy3xqKIBBAI3mjs7KxxHHiZcToumlbX43Ysh1i9iA1eW8kd0XyvlZA7KpUgMpGkjSToBGljvtqPM9dpXftKpg1JqXKdZGnGRaqLIN/EV52bqRMssrddvy6a1Jqbna/tZd5pR2D2wpnRiKfTTuU9dj05Ga+G0ZMePK2NFrXkRNydZJ0NXNy3gAHXahymsJry47IQYcauuT8LuwqiT1v8AQzDgc4DsuR0XuTQBssXYNatVnSL/AO6ox6+mXKzc1394Z9GPaTz3/G0luIZwq/dmg3eaXUk6yxKEjZGO48N+8r+w+PqsuNmw4w2luHChyWoX4zz9zuKqplgy4R3gB0KtDQUdVfKLIJIBOkA8rBJB2rnJx8T4wgZGyAs7BMRBYquy69NA7HfmJ1x6bvpmrfWp3njbjjdzTpuO7NTMRr6eVA/XnXpJuJAqhQKAFAeglV9nONXNg1Lq2JBDNqIPOtVC9iJcSumY2pj2Iia15KTi+0+6ZkyLrQsACByDHkRVGvzl5Kjt5RpxbDfKo/JoFTkYY9ZQ6C2VjS0AwQlQD5DcR2RmZFJ1MBY8JCtq28+g9B069ZF7aQLmVR5Am+QvV5dOvzMuOE4cAbKDXIkA9AWO5Av6naaIXE5Tl1FkZ6HmoAGxrYGhYHXpznnZGLHjYuASaOmyDW3Svi9tj6HpYZEOo8t/3lAPy9OvuBMu7FAGmrzUWPYggj6wK3huLa9F0CdJ/lJH9Nr8gBN/C8anDoqLjt2OQAgfusSATzrr7CQe0X7tlYVZ3I8ut+16hLHuwMvDnnqYk311Y2MC44EsUBc2TvsKAvkB7Q+FjrA00/vY8IX+klyGbYsfFSmgFNdAbO4vn+Uwb8Wr8Wn5X/WbZBwDWNWpqsgUSKAJFmuZNXvI75Gtx42KAAFeV225HI9L26QLaeSu4di7Gyx32Kkha1NXI+gmnWxRaLglQWJN7EVYvrZEC3nsrnzsWRb0k6lb0I0mx7i6/mE3OmmiCx3AIJu7NWL5EXe3rAlxEQEREBERAi58Wph/K2/kbUj9L+U1qGbxFSDYFeQF3+d/KpOiBAw4m08qYaSL8wqgj2O4nmJdrZGogdNx4mPTexY5ecjdqcdlTLjx4ziGtWYnJqA8JUUNJ/i/KeZ+NzFxhxqhyBQ2Rm1aFu6AA8TE0flAn4rpq1Fa21Xd72N965c/WY5l+C9VDnp1WPD/AA7yHn47NqXCiocujU7HUMagmht8RJIND0mp+1cmNcy5UQZMeNsilbKOqg3z3BBqx6wLE4wzc3A01dspu/qT7zBcTeEgbqOXQkHfc+e5+cg8N22XTCwUBnyDHkU3aNpZjX0BF9DPP2riM57zCuMIjELrZwchFqdl2C86u9xcC0yZdQIAayK3UgC/Mnb6TLOKVeZor0JNAjylLxX2i0Y8OQpQbIceRTuUK3qqvKr9pK7b7X7g4lUBmy5FXfkEJAZtvcfWBK4q3U0GoA9CCSQRQHPqfykjCV3A1f7tX/6lXk7YZRl8AZlyjFjUbFmKqwsnlzJvyEm8Ac+/fd3006NW3OwdXPpuPWBT9qcJkZuK0ox19zpoc9LW1e08PZeReLRVB7gjIwI/AzrTL6Ance5kv/GC3FrgRQU8Ss+/+Yq6io36bX7yV2pxxwFHIHdFtORt7S9lb+W9j7iBE7JzPiVOHfC9qAoyKAcZA5Nd+H2I5zV2FkcYv2dsWVWvJ4mSk8Tuw3vyI6Sy7J4l8uPvGUKrElBvfd/hLX1PP2IkPge0MuXK4XugiOyMhLd6AprUQNhfMCuR5wIPD48rY+G4c4cinC2Mu5rRWPqrX4tVDp1mXFYnGYnDhzY8hcWwI7l0samYXXK+ga5O/bc+VnGBcYTGxUtkJ8Tj4goXkBys/SeHto91/l/fa+67u9u9rV8X7leK/KBEbgct5MipbJxPeKp2Dr3aoaJ+dHzE3cTlycSURcOTGodXd3AWgjB9KizqJIAvlN2bi+IxJqyDESXRRo1UA7hWuzzF85K7X43ucdganY6UX95zyHt1PoDA5/jOy8pw5XxoRkD5Rpr/ADMWQ0R69GHt6zp+BBGJARRCqCPI0JWdn9qvkbhwVUd7id2q9ipQADfl4jLyAiIgct9oMDHicTJh7xgtFmfSiDVsaH4tzv6DYzVj4ZeHIwIH0AHTWMOxciy+pqBI57bbDaXPaXCWysqaixVH3A+7GptyeQBN7bk1K3KzZMpKvpADKrHfSiUHYX1Ztr8lMy/V9N8J5M+mSzyk8N2KCia3yMdWs6gFYnag1dB79TInaXANlXJ3LuzayrWRQDLT6dQrrXte8xx9o5smMMGKEEItVb5Dyux8IG5+cKzhQuNyvi0JVW7A/eZGvpzmzDUsnq5/Nm5dfdzx7UVAeF4olGwsx1KLGQV4RX4WIqjy36ST2bwfFZFwZMaIoyE5cmSlYnVkY6Rqs7KBW3XmJQ/bVw3G5CDYpN/P7tTf6T6L2S5xpw2Cv9EFv9qqPzJM5cWExt1Hq5ZNdXuqcHD6zmd0TCzkMyt94dF7tp6MSR9TtM0ZS2QK7Y3JVnAelSzaOt0CG6i/KW2PjUbiGxgLRBBNbs4qxfUKP1mrtfhsROJe7VmZ1C/yodRsjdlFnY7WZVwt7W+nn125dctt/ST2Qb1tutt8JQJR68viJ85aSt4fhMiZ3c5S2Nxshs6W9D0HOWUumM1HsRENJC7RxhkBPNWUj31ASbIvH/Afdf8AkIHK9tspz+XhFH3BsS1/xAIzLRNM3IixuT15XUrO21Hfc9yoNHkbtbHkfaTUBYA2gO3O9X8VG6539fWaJWXtAaT4bPUXve5H9ZoXjQTWl/mADHE58aJpUrqsc9+nPfmOnzmteLxOQAC4HOzRAHM7f+m/SBA7arw35Hw8/wDUeuUvuEQO2In8KWP5tKg/S5z3aTDVudKrtfMirJA9iSLnScAKKDyx/wDh+cC0kZsaltmKsedEb+4NyTITqn3haq1c/LwLyPQzB6uFQaVyvmARvQrkbo+0HCoNBiu1EAjfmeu97nf1mHZ4arYLzNnrqve57xoFg1+E2eunUmr8rgZY8CgkI5HmAVPUnqCRzmQwqQoBsLsKPTlR+g+k151UICoAP4Krn0quh/SaWFYkKCn0jTQ3Owv3FXz9OsCS+FGez8WmqutrDA15ihvPVxrq3csRyBI29aFfUzW64+7sVXMEc9XQg89V/O5jh8OmwpBOxFWGNk+/UWIFhERAREQEREBERAou2+z2yZcbjDjzKquCrkAWxUg7qfI/WZ5eHzpk7/GqFnVVyYyxAtboq9cxZG43l1ECky8NnGReIRU1sgTJjLGiASylXrmNTDcbgzVn7OzZhmfIFV2xPjxorEhdQ3LNQsk102AnQRA53N2M/fYMiEAKV71b5lFKqw8yLI9qmzBw/E8ODjxImRLJUsxQoGJNEUdQBJ5S+iBzzdhsRiDkP43fKeQJdGU0PLcD2EjY+xM5W8jKzo2NUN/6OPIHJP8AE1X8hOqiBQ5OyXbvSGCv3wy4zzFhAviHkfEPnN5y8U2Nh3eNH2CEPqFnZm+EcuYHWW8QOd4PsFsOXCy5HdE16g5XYsOYoWSSTdmWfbHDNl4fLjStToQL2FkbbyfEDXjFKB5ASh47s/Nlyg93iUqwK51YhwgIOnTVkkbc63nRRAoxw/EYHcYlTJjdi4DOUKM27DkQyk2fMTD/AAfJ3ervF7/vO91UdGsLo0eejTtfPrL+IFHxOHiM2MK+NEZcmNhT6gQrhmPIVy5Tziuy8mbMcj5GxhLXEEK3RHiY6gaJ5bdBL2IHM8P2fxGIcMyIjtjxsjgvpFsUNg6TfwzocJYqCwAatwDYB6i+s2xAREQPCJU9oDEpRCikbk3sFxjdifTlsectpD4rgMeQksCbXSdyPDd/rvNicpbOylz8UpGoYQWI1cyCCxrGNtw7CthXrtMsjIGCphQjXo5kW5vUq1+FQTfTnJ+fFgTZ8ioxYPbOFOoDSDueU5/tjtng+HT7tu9yC9CoxYDVztuQU9d7M25SOc48rezjvtblD8bnI5BgNuXhVU/pPoHE5z37Jj+MoiJ/CCNbN7AVPlORyzFjuSST7nczvfs19peFADZiUzBVQsQWVgoABGkeEkAXflOPHlJbt6ufC3GSLHhtVjHjNByURuqol95k/mYkj/5PMKk5Kxs3jJTGxJYqi13jgnqT/WTuzk4TKQMWYvSkBQ4/yybK1V1fXn6yanYyLVM9KCALAARjZXYcvz9Z36o8Xysoi9iKA7srHuydOMFidRXd2352QZfSBwnZ6Yz4bNWFBOygmyB/7cnya7YTU09iImLJG474G9KPyBBMkzEi4HL/AGh4UsquF1adjRohTuGB8ufPlcreGztjYoQzVzUDVR8wVsA7gVy9J1eThHrSulk6BiVI+YBv8vnIeTsvSoOoK10APEKJs2TVnre00Q8eQNqPLa/EjWW8trF+xkTieMKqSA/L4tBoeoG/1PLy6zziMzo5VWUgEUa81PrJ3AcL3qqTkrVzAA+nP3gUnAcP3uQLRYfiLHZV67DqfWdlg3y3/CfzK1+hmvFwbIfCmMHlqth/20f1+cmcPg0g72x5nz/sJgkTV3K3q0i/Ohf1myas2VUUsxoDmZNsk3Ro4l8WPxsFB86Gon06mV79trz0Gh1YhduvsNpXZcxzuXI8A2USR2r2CM/CZcZ+J08Pow8S/UgT5fH8Ry/E8vTx3WPvp6M8MePDd732Z9ifaHhOJyMmIr3gFmhzF7kNVNzHKb+N7e4LhiQ+TGjdVUam+aoCZ8P7O4jJhcsrNjcAqa8JF7MD1E7z7FfZteI++ypeIfCDtrbqfVR+Zn1+XCYXpl391fD8Ey4vncvaXxJ5ro8X227OZ9nOvz7nJf8AxuXnB8bw+U6sbY2brVavmOY+ckcPwuPGNKIqDyUAD8puqZHHO4X+Ms/bOIiHMiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBA7Q7Lw5x95jRjVBiqlhfkSDOVzf8AT3ESunNkAvxWFYkdAKA0n1o+07iJNxl8qmVnh89yf9PG305wN9gUJ8PqQdz8pc8D9j8Sj71cT7c1RsbX52Hr6KJ1MRMZG3O1pw4VRQq3QFCyWNe5sn5zfESkEREBERAREQE1ZsYZSp5EV9dvrNsQObH2cILfeGibFiz1Hy5yf2P2V3Cm21MfoPb1lrEBERA8lb2j2e2YgF6QfhA5n1Nyyic+TjnJNXw3HKy7iFwvZ6JXUjlfT2EmzwT2MOLHjmsZouVy71Az9lYHfU+DG7fvMik/UiTEUAUBQHSZxOhu3tXsREMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/9k=" alt="" width="462" height="109" /></strong></p>
<p style="text-align: center;"><strong>SUBSECRETAR&Iacute;A DE ATENCI&Oacute;N INTERGENERACIONAL</strong></p>
<p style="text-align: center;"><strong>DIRECCI&Oacute;N DE LA POBLACI&Oacute;N ADULTA MAYOR</strong></p>
<p>&nbsp;</p>
<p><strong>Nombre de la Unidad de Atenci&oacute;n:</strong> ${datosReporte[4]}</p>
<table style="width: 900px; border-color: black; height: 2538px;" border="1" cellspacing="0">
<tbody>
<tr style="height: 110px;">
<td style="width: 919px; height: 110px;" colspan="5">
<p style="text-align: center;"><strong>&Iacute;NDICE DE BARTHEL (IB)</strong></p>
<p style="text-align: center;"><strong>(Versi&oacute;n Original. Actividades B&aacute;sicas de la Vida Diaria)</strong></p>
<p style="text-align: center;"><strong>FICHA N&deg; 3a</strong></p>
</td>
</tr>
<tr style="height: 83px;">
<td style="width: 65px; height: 83px;">
<p style="text-align: center;"><strong>Nombre del Uruario:</strong></p>
</td>
<td style="width: 139px; height: 83px;">${datosReporte[0]}</td>
<td style="width: 118px; height: 83px;">
<p><strong>Zona:</strong></p>
<p>${datosReporte[1]}</p>
</td>
<td style="width: 337px; height: 83px;">
<p><strong>Distrito:</strong></p>
<p>${datosReporte[2]}</p>
</td>
<td style="width: 244px; height: 83px;">
<p><strong>Modalidad de Atencion:</strong></p>
<p>${datosReporte[3]}</p>
</td>
</tr>
<tr style="height: 49.0625px;">
<td style="width: 65px; height: 49.0625px;">
<p style="text-align: center;"><strong>Edad</strong></p>
</td>
<td style="width: 139px; height: 49.0625px;">
<p><strong>A&ntilde;os: </strong></p>
<p>${calcularEdad(datosReporte[5])}</p>
</td>
<td style="width: 118px; height: 49.0625px;">
<p><strong>Meses:</strong></p>
<p>${calcularMes(datosReporte[5])}</p>
</td>
<td style="width: 337px; height: 49.0625px;">
<p><strong>Fecha de aplicaci&oacute;n:</strong></p>
<p>${datosReporte[8]}</p>
<table style="height: 115px; border-color: black;" border="1" width="337" cellspacing="0">
<tbody>
<tr>
<td style="width: 117px;">
<p><strong>Hora inicial:</strong></p>
<p>${datosReporte[21]}</p>
</td>
<td style="width: 98px;">
<p><strong>Hora Final:</strong></p>
<p>${datosReporte[22]}</p>
</td>
<td style="width: 108px;">
<p><strong>Total:</strong></p>
<p>${datosReporte[23]}</p>
</td>
</tr>
</tbody>
</table>
</td>
<td style="width: 244px; height: 49.0625px;">
<p><strong>Aplicado por:</strong></p>
<p>${datosReporte[6]}</p>
</td>
</tr>
<tr style="height: 151px;">
<td style="width: 919px; height: 151px;" colspan="5">
<p>A continuaci&oacute;n encontrar&aacute; 10 &iacute;tems correspondientes a actividades b&aacute;sicas de la vida diaria. Lea en voz alta las alternativas pertenecientes a cada una de ellas y solicite a la persona evaluada que escoja la que m&aacute;s coincida con la realidad de la persona adulta mayor.</p>
<p>La informaci&oacute;n se obtiene preguntando directamente al usuario o a su cuidador principal.</p>
</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>1. COMER</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 129px;">
<td style="width: 671px; text-align: left; height: 129px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Incapaz&nbsp;</p>
<p>5&nbsp; &nbsp; &nbsp;Necesita ayuda para cortar, extender mantequilla, usar condimentos,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;etc.&nbsp;</p>
<p>10&nbsp; &nbsp;Independiente: (puede comer solo)&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[11]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>2. TRASLADARSE ENTRE LA SILLA Y LA CAMA</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 179px;">
<td style="width: 671px; text-align: left; height: 179px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Incapaz, no se mantiene sentado.</p>
<p>5&nbsp; &nbsp; &nbsp;Necesita ayuda importante ( una persona entrenada o dos<br />&nbsp; &nbsp; &nbsp; &nbsp;personas), puede estar sentado&nbsp;</p>
<p>10&nbsp; &nbsp;Necesita algo de ayuda (una peque&ntilde;a ayuda f&iacute;sica o<br />&nbsp; &nbsp; &nbsp; &nbsp;ayuda verbal)&nbsp;</p>
<p>15&nbsp; &nbsp;Independiente&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[12]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>3. ASEO PERSONAL</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 115px;">
<td style="width: 671px; text-align: left; height: 115px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Necesita Ayuda con el Aseo Personal&nbsp;</p>
<p>5&nbsp; &nbsp; &nbsp;Independiente para lavarse la cara, las manos y los dientes, peinarse<br />&nbsp; &nbsp; &nbsp; &nbsp;y afeitarse.&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[13]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>4. USO DEL RETRETE ( ESCUSADO, INODORO )</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 111px;">
<td style="width: 671px; text-align: left; height: 111px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Dependiente</p>
<p>5&nbsp; &nbsp; &nbsp;Necesita alguna ayuda, pero puede hacer algo solo&nbsp;</p>
<p>10&nbsp; &nbsp;Independiente (entrar y salir, limpiarse y vestirse)&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[14]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>5. BA&Ntilde;ARSE/DUCHARSE</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 78px;">
<td style="width: 671px; text-align: left; height: 78px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Dependiente</p>
<p>5&nbsp; &nbsp; &nbsp;Independiente para ba&ntilde;arse o ducharse&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[15]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>6. DESPLAZARSE</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 161px;">
<td style="width: 671px; text-align: left; height: 161px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Inm&oacute;vil&nbsp;</p>
<p>5&nbsp; &nbsp; &nbsp;Independiente en silla de ruedas en 50 metros</p>
<p>10&nbsp; &nbsp;Anda con peque&ntilde;a ayuda de una persona (f&iacute;sica o verbal)&nbsp;</p>
<p>15&nbsp; &nbsp;Independiente al menos 50m con cualquier tipo de muleta excepto<br />&nbsp; &nbsp; &nbsp; &nbsp;andador&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[16]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>7. SUBIR Y BAJAR ESCALERAS</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 111px;">
<td style="width: 671px; text-align: left; height: 111px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;IncapazIncapaz&nbsp;</p>
<p>5&nbsp; &nbsp; &nbsp;Necesita ayuda f&iacute;sica o verbal puede llevar cualquier tipo de muleta</p>
<p>10&nbsp; &nbsp;Independiente para subir y bajar</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[17]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>8. VESTIRSE O DESVERTIRSE</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 147px;">
<td style="width: 671px; text-align: left; height: 147px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Dependiente</p>
<p>5&nbsp; &nbsp; &nbsp;Necesita ayuda, pero puede hacer la mitad aproximadamente sin<br />&nbsp; &nbsp; &nbsp; &nbsp;ayuda&nbsp;</p>
<p>10&nbsp; &nbsp;Independiente incluyendo botones, cremalleras (cierres) y cordones&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[18]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>9. CONTROL DE HECES</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 111px;">
<td style="width: 671px; text-align: left; height: 111px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Incontinente, (o necesita que le suministren enema)&nbsp;</p>
<p>5&nbsp; &nbsp; &nbsp;Accidente excepcional (uno por semana)&nbsp;</p>
<p>10&nbsp; &nbsp;Continente&nbsp;</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[19]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>10. CONTROL DE ORINA</strong></p>
</td>
<td style="width: 244px; height: 46px;">&nbsp;</td>
</tr>
<tr style="height: 111px;">
<td style="width: 671px; text-align: left; height: 111px;" colspan="4">
<p>0&nbsp; &nbsp; &nbsp;Incontinente o sondado incapaz de cambiarse la bolsa</p>
<p>5&nbsp; &nbsp; &nbsp;Accidente excepcional (m&aacute;ximo uno por 24 horas)</p>
<p>10&nbsp; &nbsp;Continente, durante al menos 7 d&iacute;as.</p>
</td>
<td style="width: 244px; height: 129px; text-align: center;">${datosReporte[20]}</td>
</tr>
<tr style="height: 46px;">
<td style="width: 671px; height: 46px;" colspan="4">
<p style="text-align: right;"><strong>TOTAL:</strong></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">
<p>${datosReporte[25]}</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>Puntuaci&oacute;n m&aacute;xima total:</strong> 100 puntos /90 puntos si utiliza silla de ruedas</p>
<p><strong>Puntos de corte:</strong></p>
<table style="height: 253px; border-color: black;" border="1" width="349" cellspacing="0">
<tbody>
<tr>
<td style="width: 169.5px; text-align: center;">0 - 20</td>
<td style="width: 169.5px; text-align: center;"><strong>Dependencia Total</strong></td>
</tr>
<tr>
<td style="width: 169.5px; text-align: center;">21 - 60</td>
<td style="width: 169.5px; text-align: center;"><strong>Dependencia Severa</strong></td>
</tr>
<tr>
<td style="width: 169.5px; text-align: center;">61&nbsp; -90</td>
<td style="width: 169.5px; text-align: center;"><strong>Dependencia Moderada</strong></td>
</tr>
<tr>
<td style="width: 169.5px; text-align: center;">91 - 99</td>
<td style="width: 169.5px; text-align: center;"><strong>Dependencia Escasa</strong></td>
</tr>
<tr>
<td style="width: 169.5px; text-align: center;">100</td>
<td style="width: 169.5px; text-align: center;"><strong>Independencia</strong></td>
</tr>
<tr>
<td style="width: 169.5px; text-align: center;">90</td>
<td style="width: 169.5px; text-align: center;"><strong>Independencia</strong><br /><strong>*Uso de silla de ruedas</strong></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>FIRMA DEL EVALUADOR:</strong></p>
<p><strong>____</strong></p>
<p>Bazt&aacute;n JJ, P&eacute;rez del Molino J, Alarc&oacute;n T, San Crist&oacute;bal E, Izquierdo G, Manzabeitia I. &Iacute;ndice de Barthel: Instrumento v&aacute;lido para la valoraci&oacute;n funcional de pacientes con enfermedad cerebrovascular. Rev EspGeriatr Gerontol 1993.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>INSTRUCTIVO:</strong></p>
<p>&nbsp;</p>
<p>El &iacute;ndice de Barthel (IB) es un instrumento que mide la capacidad de una persona para realizar diez actividades de la vida diaria (AVD), consideradas como b&aacute;sicas, obteni&eacute;ndose una estimaci&oacute;n cuantitativa de su grado de independencia, esto en su versi&oacute;n original.</p>
<p>El IB, se define como: &ldquo;Medida gen&eacute;rica que valora el nivel de independencia del paciente con respecto a la realizaci&oacute;n de algunas actividades de la vida diaria (AVD), mediante la cual se asignan diferentes puntuaciones y ponderaciones seg&uacute;n la capacidad del sujeto examinado para llevar a cabo estas actividades.</p>
<p>Los valores asignados a cada actividad se basan en el tiempo y cantidad de ayuda f&iacute;sica requerida si el paciente no puede realizar dicha actividad. El cr&eacute;dito completo no se otorga para una actividad si el paciente necesita ayuda y/o supervisi&oacute;n m&iacute;nima uniforme; por ejemplo, si &eacute;l no puede realizar con seguridad la actividad sin alguien presente.</p>
<p>Las condiciones ambientales pueden afectar la puntuaci&oacute;n en el IB del paciente; si &eacute;l tiene requerimientos especiales para realizar sus AVD en el hogar (con excepci&oacute;n de adaptaciones generales), su puntuaci&oacute;n ser&aacute; baja cuando &eacute;ste no pueda realizarlas. Los ejemplos son: barandales en ambos lados, pasillos y puertas amplias para el acceso de sillas de ruedas, cuartos en el mismo nivel, barras o agarraderas en el cuarto de<br />ba&ntilde;o, en tina e inodoro. Para ser m&aacute;s valiosa la evaluaci&oacute;n, una explicaci&oacute;n de los requisitos ambientales especiales debe acompa&ntilde;ar el IB de cada paciente cuando &eacute;stos est&eacute;n indicados.</p>
<p>El IB de cada paciente se eval&uacute;a al principio y durante el tratamiento de rehabilitaci&oacute;n, as&iacute; como al momento del alta (m&aacute;ximo avance). De esta manera, es posible determinar cu&aacute;l es el estado funcional del paciente y c&oacute;mo ha progresado hacia la independencia. La carencia de mejor&iacute;a de acuerdo al IB despu&eacute;s de un periodo de tiempo razonable en el tratamiento indica generalmente un potencial pobre para la rehabilitaci&oacute;n.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>____</strong></p>
<p>&Iacute;ndice de Barthel (IB): Un instrumento esencial para la evaluaci&oacute;n funcional y la rehabilitaci&oacute;n- Claudia Lorena Barrero Sol&iacute;s y cols, Derechos reservados, Copyright &copy; 2005: Asociaci&oacute;n Internacional en Pro de la Plasticidad Cerebral.</p>
</body>

</html>
    
    `;
        return html;
    }

    return (
        <View>
            <Button title='Print' onPress={print} />
            <View style={styles8.spacer} />
            <Button title='Print to PDF file' onPress={printToFile} />
            {Platform.OS === 'ios' &&
                <>
                    <View style={styles8.spacer} />
                    <Button title='Select printer' onPress={selectPrinter} />
                    <View style={styles8.spacer} />
                    {selectedPrinter ? <Text style={styles8.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
                </>
            }
        </View>
    );
};
const styles8 = StyleSheet.create({
    spacer: {
        margin: 5,
    },
    dext: {
        backgroundColor: "#080f26",

    },

})
