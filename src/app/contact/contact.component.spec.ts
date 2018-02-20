// NG
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// APP
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
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

    describe('Function: ngOnInit()', () => {
        it('should call loadLinks() function', () => {
            expect(component.ngOnInit).toBeDefined();
            spyOn(component, 'loadLinks');
            component.ngOnInit();
            expect(component.loadLinks).toHaveBeenCalled();
        });
    });

    describe('Function: loadLinks()', () => {
        it('should contain 7 link objects in contactLinks array', () => {
            expect(component.loadLinks).toBeDefined();
            component.loadLinks();
            expect(component.contactLinks.length).toEqual(7);
        });
    });
});
