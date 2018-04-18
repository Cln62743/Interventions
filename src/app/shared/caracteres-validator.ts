import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierCharacteresValidator {
    static sansEspaces(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            let result = true;

            if (c.value == null || c.value == ''){
                result = false;
            }else if(c.value.trim().length <= 0){
                result = false;
            }

            return { 'chaine': result };  
        };
    }
    static longueurMinimum(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            let result = true;
            
            if(c.value == null || c.value.trim().length <= 2){
                result = false;
            }

            return { 'chaine': result };  
        };
    }
}