import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { Common } from '../../models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  @Input()
  isOpened = false;

  title$ = this.route.data.pipe(map(data => data['title']));
  navs$ = this.title$.pipe(
    switchMap(title =>
      of([
        {
          label: 'Home',
          active: title === 'Home',
          route: '/home',
          icon: 'home',
        },
        {
          label: 'Certificates',
          active: title === 'certificates',
          route: '/certificates',
          icon: 'card_membership',
        },
      ] as Common.Nav[])
    )
  );

  constructor(private route: ActivatedRoute) {}
}
