import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayListPage } from './play-list.page';

describe('PlayListPage', () => {
  let component: PlayListPage;
  let fixture: ComponentFixture<PlayListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
