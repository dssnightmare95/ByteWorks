import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services = [
  {
    title: 'Asesoría en Derecho Laboral',
    description: 'Brindamos orientación a empleadores y trabajadores en temas de contratos, despidos, acoso laboral, y cumplimiento de la legislación laboral costarricense.',
    iconUrl: '/icons/innovation.gif'
  },
  {
    title: 'Derecho de Familia',
    description: 'Asistencia legal en procesos de divorcio, pensión alimentaria, guarda, custodia y régimen de visitas, siempre priorizando el bienestar familiar y de los menores.',
    iconUrl: '/icons/family.gif'
  },
  {
    title: 'Derecho Corporativo y Societario',
    description: 'Constitución de sociedades, redacción de estatutos, asesoría en cumplimiento de obligaciones legales, y apoyo en operaciones comerciales.',
    iconUrl: '/icons/company.gif'
  },
  {
    title: 'Derecho Penal',
    description: 'Defensa técnica en procesos penales, incluyendo delitos económicos, violencia doméstica, delitos contra la propiedad, entre otros.',
    iconUrl: '/icons/laws.gif'
  },
  {
    title: 'Derecho Inmobiliario y Notarial',
    description: 'Asesoramos en compraventa de propiedades, inscripción en el Registro Nacional, estudios registrales, elaboración de escrituras y trámites notariales.',
    iconUrl: '/icons/build.gif'
  },
  {
    title: 'Cobro Judicial',
    description: 'Gestionamos el cobro de deudas a través de procesos judiciales, con eficiencia y respeto a la legalidad costarricense.',
    iconUrl: '/icons/money.gif'
  }
];

}
