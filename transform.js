const datos = [
    {
      id: 1,
      nombre: "juan",
      habilidades: ["javascript", "HTML", "CSS"],
      proyectos: [
          { id: 1, nombre: "proyecto 1" },
          { id: 2, nombre: "proyecyo 2" }
      ]
    },
    {
      id: 2,
      nombre: "Maria",
      habilidades: ["Python", "SQL", "DJANGO"],
      proyectos: [
          { id: 3, nombre: "proyecto 3" },
          { id: 4, nombre: "proyecyo 4" }
      ]
    },
    {
      id: 3,
      nombre: "Pedro",
      habilidades: ["Java", "Spring", "Hibernate"],
      proyectos: [
          { id: 5, nombre: "proyecto 5" },
          { id: 6, nombre: "proyecyo 6" }
      ]
    }
  ];

const desarrolladoresJavascript = datos.filter(desarrollador => desarrollador.habilidades.includes("javascript"));

const nombresProyectos = datos.map(desarrollador => desarrollador.proyectos);

console.log("Listado de desarrolladores con habilidad 'javascript':");
console.log(desarrolladoresJavascript);

console.log("Listado de proyectos en los que trabajan esos desarrolladores:");
console.log(nombresProyectos);
