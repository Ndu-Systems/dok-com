import { CommonModule } from '@angular/common'; 
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectService, UserDataService } from './services';
import { AuthenticationService } from './authentication';
import { PrimeNg } from './prime-ng';
 
@NgModule({
    imports:[    
        CommonModule ,
        ... PrimeNg        
    ],
    declarations:[ 
    ],
    exports:[  
        ... PrimeNg  
    ],
    providers:[
        SelectService,      
        UserDataService,
        AuthenticationService
    ],
    schemas:[
        NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA
    ] 
    })
export class SharedModule {
}
