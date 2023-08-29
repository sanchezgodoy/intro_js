// function obtenerUsuario(id) {
// let usuario;

// setTimeout( () => {
// if (id === 1) {
//     usuario = { id: 1, nombre:'john doe' };
// }
// }, 2000);

// return usuario;
// }

// const usuario = obtenerUsuario(1);
// console.log(usuario);

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
setTimeout(() => {
if (id === 1) {
    const usuario = { id:1, nombre: "john doe"};
    resolve(usuario);
}else {
    reject(new error("usuario no encontrado"));
}
}, 2000);
    });
}

obtenerUsuario(1)
.then(usuario => {
    console.log(usuario);
})
.catch(error => {
    console.log(error.message);
});