import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestesPage } from './testes.page';

describe('TestesPage', () => {
  let component: TestesPage;
  let fixture: ComponentFixture<TestesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
