import { Observable } from 'rxjs';

export interface IBaseCrudService<T> {
  get(id: string): Observable<T>;
  list(): Observable<T[]>;
  add(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): void;
}
