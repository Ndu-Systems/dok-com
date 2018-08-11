import { CommonModule } from '@angular/common'; 
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccountService } from './account/account.service';
 
@NgModule({
    imports:[    
        CommonModule       
    ],
    declarations:[ 
    ],
    exports:[  
    ],
    providers:[
       AccountService
    ],
    schemas:[
        NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA
    ] 
    })

export class ServiceModule {
}
