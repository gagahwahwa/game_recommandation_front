import { FormControl } from '@angular/forms';

export class PasswordRepeatValidator {
    static isEqual( control: FormControl ): any | null {
        if( control.get('password').value !== control.get('passwordRepeat').value ) {
            return { isEqual: true };
        } else {
            return null;
        }
    }
}