 
import { CommonModule } from '@angular/common'; 
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectService } from './services';
@NgModule({
    imports:[    
        CommonModule       
    ],
    declarations:[ 
    ],
    exports:[  
    ],
    providers:[
        SelectService
    ],
    schemas:[
        NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA
    ] 
    })
export class SharedModule {
}
