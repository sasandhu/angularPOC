/* tslint:disable:no-unused-variable */
import { AppComponent2 } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent2;
  let fixture: ComponentFixture<AppComponent2>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent2);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
