import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityUpdatePage } from './community-update.page';

describe('CommunityUpdatePage', () => {
  let component: CommunityUpdatePage;
  let fixture: ComponentFixture<CommunityUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommunityUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
