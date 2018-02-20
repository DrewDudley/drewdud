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

    describe('Function: getTime()', () => {
        it('should set greeting when time is between 11:01pm and 2:59am', () => {
            expect(component.getTime).toBeDefined();
            const time = new Date(2018, 1, 1, 24, 0);   // 12:00 AM
            jasmine.clock().mockDate(time);
            component.getTime();
            expect(component.greeting).toEqual('Welcome. Where ya headed so late?');
        });
        it('should set greeting when time is between 3am and 5:59am', () => {
            expect(component.getTime).toBeDefined();
            const time = new Date(2018, 1, 1, 4, 0);   // 4:00 AM
            jasmine.clock().mockDate(time);
            component.getTime();
            expect(component.greeting).toEqual('Sure is awfully early. Where to, cap?');
        });
        it('should set greeting when time is between 6am and 11:59am', () => {
            expect(component.getTime).toBeDefined();
            const time = new Date(2018, 1, 1, 9, 0);   // 9:00 AM
            jasmine.clock().mockDate(time);
            component.getTime();
            expect(component.greeting).toEqual('Good morning. Where to, cap?');
        });
        it('should set greeting when time is between 12pm and 4:59am', () => {
            expect(component.getTime).toBeDefined();
            const time = new Date(2018, 1, 1, 14, 0);   // 2:00 PM
            jasmine.clock().mockDate(time);
            component.getTime();
            expect(component.greeting).toEqual('Good afternoon. Where to, cap?');
        });
        it('should set greeting when time is between 5pm and 11pm', () => {
            expect(component.getTime).toBeDefined();
            const time = new Date(2018, 1, 1, 19, 0);   // 7:00 PM
            jasmine.clock().mockDate(time);
            component.getTime();
            expect(component.greeting).toEqual('Good evening. Where to, cap?');
        });
    });
});
