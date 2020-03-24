import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePageComponent } from '../../../components/example-page/example-page.component';
import { ExampleListComponent } from '../../../components/example-page/example-list/example-list.component';
import { ApiListComponent } from '../../../components/example-page/api-list/api-list.component';
import { Route } from '@angular/router';
import { DropdownsComponent } from './examples/dropdowns/dropdowns.component';
import { DropDownModule } from '../../../../../../../lib/src/dropdown';

export const ROUTES: Array<Route> = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ExamplePageComponent,
    children: [
      {
        path: 'examples',
        component: ExampleListComponent,
        children: [
          {
            path: 'dropdown',
            component: DropdownsComponent,
            data: {
              title: 'Dropdown',
              description: 'Additional description for example (optional)',
              sources: [
                {
                  name: 'dropdowns.component.html',
                  src: require('!raw-loader!./examples/dropdowns/dropdowns.component.html'),
                  lang: 'markup',
                },
                {
                  name: 'dropdowns.component.ts',
                  src: require('!raw-loader!./examples/dropdowns/dropdowns.component.ts'),
                  lang: 'ts',
                },
              ],
            },
          },
        ],
      },
      {
        path: 'api',
        component: ApiListComponent,
        data: {
          sources: [
            require('!raw-loader!../../../../../../../lib/src/dropdown/dropdown.module.ts'),
          ],
        },
      },
    ],
  },
];

@NgModule({
  declarations: [DropdownsComponent],
  imports: [CommonModule, DropDownModule],
})
export class DropdownModule {}
