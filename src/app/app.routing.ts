import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipeDirectiveComponent } from './pages/pipe-directive/pipe-directive.component';
import { FormComponent } from './pages/form/form.component';

// Route Configuration
export const routes: Routes = [
    {
        path: 'forms',
        component: FormComponent,
    },
    {
        path: 'directives-and-pipes',
        component: PipeDirectiveComponent,
    },
    {
        path: '**',
        redirectTo: '/forms',
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);