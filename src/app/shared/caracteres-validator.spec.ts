import { VerifierCharacteresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    it('chaîne vide est invalide', () => {
        let control = { value: ''};
        let validator = VerifierCharacteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(false);
    });

    it('chaîne avec 10 espaces est invalide', () => {
        let control = { value: ' '.repeat(10)};
        let validator = VerifierCharacteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(false);
    });

    it('phrase avec des mots est valide', () => {
        let control = { value: 'salut bonjour'};
        let validator = VerifierCharacteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(true);
    });
    
    it('phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = { value: '   comment aller vous   '};
        let validator = VerifierCharacteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(true);
    });
});