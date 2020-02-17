import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupgraphPage } from './groupgraph.page';

describe('GroupgraphPage', () => {
  let component: GroupgraphPage;
  let fixture: ComponentFixture<GroupgraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupgraphPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupgraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
