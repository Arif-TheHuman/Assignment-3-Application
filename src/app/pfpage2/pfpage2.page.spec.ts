import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pfpage2Page } from './pfpage2.page';

describe('Pfpage2Page', () => {
  let component: Pfpage2Page;
  let fixture: ComponentFixture<Pfpage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pfpage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
