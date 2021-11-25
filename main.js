window.addEventListener("load", () => {
    fetch("library_seoul.json")
        .then((response) => response.json())
        .then((data) => {
            data.DATA.forEach(addToList);
        });
});

import { fs } from "fs";

function GetLbrryName(lbrryNum) {
    fs.readFile("library_seoul.json", "utf-8", (error, jsonString) => {
        if (error) {
            console.log(error);
        } else {
            const strings = JSON.parse(jsonString);
            const data = strings["DATA"];
            const lbrryData = data[lbrryNum];

            console.log(lbrryData["lbrry_name"]);
            document.getElementById("lbrry_name").innerText =
                lbrryData["lbrry_name"];
            console.log(document.getElementById("lbrry_name").innerText);
            console.log("");
        }
    });
}
