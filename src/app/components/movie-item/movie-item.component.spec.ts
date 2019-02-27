import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';

describe('ListOfMoviesComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
