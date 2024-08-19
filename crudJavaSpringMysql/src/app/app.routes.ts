import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'listar',
        loadComponent: () =>
            import('./Persona/listar/listar.component').then((c) => c.ListarComponent),
    },
    {
        path: 'add',
        loadComponent: () =>
            import('./Persona/add/add.component').then((c) => c.AddComponent),
    },
    {
        path: 'edit',
        loadComponent: () =>
            import('./Persona/edit/edit.component').then((c) => c.EditComponent),
    },
];
