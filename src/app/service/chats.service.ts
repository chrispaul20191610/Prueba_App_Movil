import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';



export interface chat {
  description: string;
  name: string;
  id: string;
  img: string;
}


@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db: AngularFirestore) { }

  getChatRooms(){

    return this.db.collection('chats').snapshotChanges().pipe(map(chats=>
      {
        return chats.map(a =>
          {
          const data= a.payload.doc.data() as chat;
          data.id = a.payload.doc.id;
          return data;

         })
      }))


}

}
