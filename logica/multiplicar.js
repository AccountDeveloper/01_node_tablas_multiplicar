const fs = require('fs');

let data = "";

let listarTabla = (base = 1, limite = 10) => {
    try {
        return new Promise((resolve, reject) => {
            if (!Number(base) || !Number(limite)) {
                reject(` la base y el límite deben ser numéricos`);
                return;
            } else {
                for (let i = 1; i <= limite; i++) {
                    data += `${base} * ${i} = ${base * i} \n`;
                }
                resolve(data);
            }
        })
    } catch (error) {
        reject(error);
    }
};

let getTabla = (base = 1, limite = 10) => {
    try {
        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`${base} no es un número`);
                return;
            } else {
                for (let i = 1; i <= limite; i++) {
                    data += `${base} * ${i} = ${base * i} \n`;
                }
                fs.writeFile(`archivo_tablas/tabla_de_${base}`, data, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Se creó archivo tabla de multiplicar del ${base}`);
                    }
                });
            }
        })
    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    getTabla,
    listarTabla

}