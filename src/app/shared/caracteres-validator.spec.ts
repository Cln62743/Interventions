import { VerifierCharacteresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

// Test Unitaitre sans espace
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

// Test Unitaitre longueur minimum
describe('longueur minimum Validator', () => {
    it('Une expression avec 1 espace et 2 caractère est invalide.', () => {
        let control = { value: ' '.repeat(1) + 'x'.repeat(2)};
        let validator = VerifierCharacteresValidator.longueurMinimum();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(false);
    });

    it('Une expression avec 2 espaces et 1 caractère est invalide.', () => {
        let control = { value: ' '.repeat(2) + 'x'.repeat(1)};
        let validator = VerifierCharacteresValidator.longueurMinimum();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(false);
    });

    it('Une phrase avec 3 espaces et 3 caractères est valide.', () => {
        let control = { value: '   abc'};
        let validator = VerifierCharacteresValidator.longueurMinimum();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(true);
    });
    
    it('Une phrase avec 5 espaces, 5 caractères et 5 espaces est valide.', () => {
        let control = { value: '     abcde     '};
        let validator = VerifierCharacteresValidator.longueurMinimum();
        let result = validator(control as AbstractControl);
        expect(result['chaine']).toBe(true);
    });
});