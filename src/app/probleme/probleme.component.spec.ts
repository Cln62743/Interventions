         import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
   /*it('should create', () => {
     expect(component).toBeTruthy();
   });*/

  it('Zone prénom invalide avec 2 caractères', () =>{
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
  })

  it('Zone prénom valide avec 3 caractères', () =>{
    let errors = {};
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  })

  it('Zone prénom valide avec 200 caractères', () =>{
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(200));
    expect(zone.valid).toBeTruthy();
  })

  it('Zone prénom invalide avec aucune valeur', () =>{
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue(null);
    expect(zone.valid).toBeFalsy();
  })

  it('Zone prénom invalide avec 1 caractères', () =>{
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a');
    expect(zone.valid).toBeFalsy();
  })

  it('Zone prénom invalide avec 50 espaces', () =>{
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue(' '.repeat(50));
    expect(zone.valid).toBeFalsy();
  })

  it('Zone prénom invalide avec 2 espaces 1 caractère', () =>{
    let zone = component.problemeForm.controls['prenomProbleme'];
    zone.setValue(' '.repeat(2) + 'a');
    expect(zone.valid).toBeFalsy();
  })
});
