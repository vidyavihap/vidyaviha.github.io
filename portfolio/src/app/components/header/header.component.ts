import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
