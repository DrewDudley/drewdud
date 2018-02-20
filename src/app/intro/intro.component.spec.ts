// NG
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// APP
import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
    let component: IntroComponent;
    let fixture: ComponentFixture<IntroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IntroComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Function: ngOnInit()', () => {
        it('should call loadLinks() function', () => {
            expect(component.ngOnInit).toBeDefined();
            spyOn(component, 'getTime');
            component.ngOnInit();
            expect(component.getTime).toHaveBeenCalled();
        });
    });

    xdescribe('Function: getTime()', () => {
        it('should set late greeting for time between 11pm and 2am', () => {
            expect(component.getTime).toBeDefined();
            const time = 23;
            component.getTime();
            expect(component.greeting).toEqual('');
        });
    });
});
