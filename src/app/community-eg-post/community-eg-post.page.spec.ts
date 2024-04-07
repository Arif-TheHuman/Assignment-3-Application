import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityEgPostPage } from './community-eg-post.page';

describe('CommunityEgPostPage', () => {
  let component: CommunityEgPostPage;
  let fixture: ComponentFixture<CommunityEgPostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommunityEgPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
