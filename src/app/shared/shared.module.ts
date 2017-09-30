import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MODULES = [
    CommonModule,
    FormsModule
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [],
    exports: [
        ...MODULES
    ],
    providers: [],
})
export class SharedModule {
}
