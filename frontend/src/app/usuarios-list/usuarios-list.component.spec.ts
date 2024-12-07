import { TestBed } from '@angular/core/testing';
import { UsuariosListComponent } from './usuarios-list.component'; // Path to your component
import { HttpClientTestingModule } from '@angular/common/http/testing'; // For mocking HttpClient

describe('UsuariosListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsuariosListComponent, HttpClientTestingModule], // Add component to imports
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UsuariosListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
