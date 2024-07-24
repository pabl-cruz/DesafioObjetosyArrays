let especialidad = ['Radiologia','Traumatologia','Dental']
//objetos
let radiologia = [{
  paciente: 'Francisca Rojas',
  rut: '9878782-1',
  especialista: 'Ignacio Schulz',
  hora: '11:00',
  prevision: 'Fonasa'
},
{
  paciente: 'Pamela Estrada',
  rut: '15345241-3',
  especialista: 'Federico Subercaseaux',
  hora: '11:30',
  prevision: 'Isapre'
},
{
  paciente: 'Armando Luna',
  rut: '16445345-9',
  especialista: 'Fernando Wurthz',
  hora: '15:00',
  prevision: 'Isapre'
},
{
  paciente: 'Manuel Godoy',
  rut: '17666419-0',
  especialista: 'Ana Maria Godoy',
  hora: '15:30',
  prevision: 'Fonasa'
},
{
  paciente: 'Ramon Ulloa',
  rut: '14989389-K',
  especialista: 'Patricia Suazo',
  hora: '16:00',
  prevision: 'Fonasa'
}
  ];

let traumatologia = [{
    paciente: 'Paula Sanchez',
    rut: '15554774-5',
    especialista: 'Maria Paz Altuzarra',
    hora: '8:00',
    prevision: 'Fonasa'
  },
  {
    paciente: 'Angélica Navas',
    rut: '15444147-9',
    especialista: 'Raul Araya',
    hora: '10:00',
    prevision: 'Isapre'
  },
  {
    paciente: 'Ana Klapp',
    rut: '17879423-9',
    especialista: 'Maria Arriagada',
    hora: '10:30',
    prevision: 'Isapre'
  },
  {
    paciente: 'Felipe Mardones',
    rut: '1547423-6',
    especialista: 'Alejandro Badilla',
    hora: '11:00',
    prevision: 'Isapre'
  },
  {
    paciente: 'Diego Marre',
    rut: '16554741-K',
    especialista: 'Cecilia Budnik',
    hora: '11:30',
    prevision: 'Fonasa'
  },
  {
    paciente: 'Cecilia Mendez',
    rut: '16554741-K',
    especialista: 'Arturo Cavagnaro',
    hora: '12:00',
    prevision: 'Isapre'
  },
  {
    paciente: 'Marcial Suazo',
    rut: '11254785-5',
    especialista: 'Andres Kanacri',
    hora: '12:30',
    prevision: 'Isapre'
  }
];
let dental = [
  {
    paciente: 'Marcela Retamal',
    rut: '11123425-6',
    especialista: 'Andrea Zuñiga',
    hora: '8:30',
    prevision: 'Isapre'
  },
  {
    paciente: 'Angel Muñoz',
    rut: '9878789-2',
    especialista: 'María Pia Zañartu',
    hora: '11:00',
    prevision: 'Isapre'
  },
  {
    paciente: 'Mario Kast',
    rut: '7998789-5',
    especialista: 'Scarlett Witting',
    hora: '11:00',
    prevision: 'Fonasa'
  },
  {
    paciente: 'Karin Fernandez',
    rut: '18887662-K',
    especialista: 'Francisco Von Teuber',
    hora: '13:00',
    prevision: 'Fonasa'
  },
  {
    paciente: 'Hugo Sanchez',
    rut: '17665461-4',
    especialista: 'Eduardo Viñuela',
    hora: '13:30',
    prevision: 'Fonasa'
  },
  {
    paciente: 'Ana Sepulveda',
    rut: '144441281-0',
    especialista: 'Raquel Villaseca',
    hora: '14:00',
    prevision: 'Isapre'
  },
]

document.write('<h1>Estadisticas centro medico ñuñoa</h1>'); 
document.write(`<h2>Pacientes ${especialidad[0]}</h2><table id='tabla-pacientes-${especialidad[0]}'></table>`)
document.write(`<p><strong>Primera Atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[4].paciente} - ${radiologia[4].prevision}</p></strong>`)
document.write(`<h2>Pacientes ${especialidad[1]}</h2><table id='tabla-pacientes-${especialidad[1]}'></table>`)
document.write(`<p><strong>Primera Atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[6].paciente} - ${traumatologia[6].prevision}</p></strong>`)
document.write(`<h2>Pacientes ${especialidad[2]}</h2><table id='tabla-pacientes-${especialidad[2]}'></table>`)
document.write(`<p><strong>Primera Atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[5].paciente} - ${dental[5].prevision}</p></strong>`)





function tablaRadiografia(){
  let tabla = "<tbody><tr><th>Hora</th><th>Paciente</th><th>Rut</th><th>Especialista</th><th>Previsión</th></tr>";

  for (let i=0; i < radiologia.length; i++){
    tabla += `<tr>
                  <td>${radiologia[i].hora}</td>
                  <td>${radiologia[i].paciente}</td>
                  <td>${radiologia[i].rut}</td>
                  <td>${radiologia[i].especialista}</td>
                  <td>${radiologia[i].prevision}</td>
              </tr>`;
   }

   document.getElementById(`tabla-pacientes-${especialidad[0]}`).innerHTML = tabla+'</tbody>';
}

function tablaTraumatologia(){
  let tabla = "<tbody><tr><th>Hora</th><th>Paciente</th><th>Rut</th><th>Especialista</th><th>Previsión</th></tr>";
  for (let i=0; i < traumatologia.length; i++){
    tabla += `<tr>
                  <td>${traumatologia[i].hora}</td>
                  <td>${traumatologia[i].paciente}</td>
                  <td>${traumatologia[i].rut}</td>
                  <td>${traumatologia[i].especialista}</td>
                  <td>${traumatologia[i].prevision}</td>
              </tr>`;
   }

   document.getElementById(`tabla-pacientes-${especialidad[1]}`).innerHTML = tabla+'</tbody>';
}

function tablaDental(){
  let tabla = "<tbody><tr><th>Hora</th><th>Paciente</th><th>Rut</th><th>Especialista</th><th>Previsión</th></tr>";
  for (let i=0; i < dental.length; i++){
    tabla += `<tr>
                  <td>${dental[i].hora}</td>
                  <td>${dental[i].paciente}</td>
                  <td>${dental[i].rut}</td>
                  <td>${dental[i].especialista}</td>
                  <td>${dental[i].prevision}</td>
              </tr>`;
   }

   document.getElementById(`tabla-pacientes-${especialidad[2]}`).innerHTML = tabla+'</tbody>';
}
 
tablaRadiografia();
tablaTraumatologia();
tablaDental();