import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactCompComponent } from './contact-comp/contact-comp.component';

const routes: Routes = [
    {
        path: '',
        component: ContactCompComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactRoutingModule {
    constructor () {}
}