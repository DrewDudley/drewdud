// NG
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// APP
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
    let component: SkillsComponent;
    let fixture: ComponentFixture<SkillsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SkillsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Function: ngOnInit()', () => {
        it('should call loadSkills function', () => {
            spyOn(component, 'loadSkills');
            component.ngOnInit();
            expect(component.loadSkills).toHaveBeenCalled();
        });
    });

    describe('Function: loadSkills()', () => {
        it('should contain 10 objects in skills array ', () => {
            component.loadSkills();
            expect(component.skills.length).toEqual(10);
        });
        it('should contain 6 objects in learningSkills array ', () => {
            component.loadSkills();
            expect(component.learningSkills.length).toEqual(6);
        });
        it('should contain 4 objects in todoSkills array ', () => {
            component.loadSkills();
            expect(component.todoSkills.length).toEqual(4);
        });
    });
});
