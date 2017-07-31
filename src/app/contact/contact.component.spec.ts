import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Method: ngOnInit()', () => {
    it('should call loadLinks() method', () => {
      expect(component.ngOnInit).toBeDefined();
      component.ngOnInit();
      spyOn(ContactComponent, 'ngOnInit').and.callThrough()
      expect(component.loadLinks).toHaveBeenCalled();
    });
  });
});
