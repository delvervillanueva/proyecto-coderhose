import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CursosComponent } from './cursos.component';
import { CursosService } from 'src/app/servicios/cursos.service';
//import { CursosServiceMock } from 'src/app/mocks/cursos.service.mock';

fdescribe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;
  let cursosService: CursosService;
  let spyLoadCursos: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosComponent ],
      imports: [ MatSnackBarModule ],
    /*   providers: [
        {
          provide: CursosService,
          useClass: CursosServiceMock
        }
      ] */
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    cursosService = TestBed.inject(CursosService)
    spyLoadCursos = spyOn(cursosService, 'getCursos').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar los cursos al inicio', () => {
    component.ngOnInit();
    expect(spyLoadCursos).toHaveBeenCalled()
  });

});
