
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService extends BaseCrudService<T> {

  constructor(afs: AngularFirestore) {
    const path = 'T';
    super(path, afs);
  }
}
