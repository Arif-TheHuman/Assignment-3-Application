import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityEgPage } from './community-eg.page';

describe('CommunityEgPage', () => {
  let component: CommunityEgPage;
  let fixture: ComponentFixture<CommunityEgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommunityEgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
