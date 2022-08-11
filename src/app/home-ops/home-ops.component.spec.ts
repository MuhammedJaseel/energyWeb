import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOpsComponent } from './home-ops.component';

describe('HomeOpsComponent', () => {
  let component: HomeOpsComponent;
  let fixture: ComponentFixture<HomeOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
