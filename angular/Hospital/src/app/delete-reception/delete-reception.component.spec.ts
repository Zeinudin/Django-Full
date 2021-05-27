import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReceptionComponent } from './delete-reception.component';

describe('DeleteReceptionComponent', () => {
  let component: DeleteReceptionComponent;
  let fixture: ComponentFixture<DeleteReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
