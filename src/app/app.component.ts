import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosService } from './servicios.service';

interface Servicio {
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'mi-proyecto-angular';
  servicios: Servicio[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.obtenerServicios().subscribe(data => {
      this.servicios = data;
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.target as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
}
