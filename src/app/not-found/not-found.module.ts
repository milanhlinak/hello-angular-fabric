import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        NotFoundComponent
    ],
    providers: []
})
export class NotFoundModule { }
