import { Component } from '@angular/core';
import { ILink } from 'src/app/models/link.model';
import links from '../../utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  links: ILink[] = links;
}
