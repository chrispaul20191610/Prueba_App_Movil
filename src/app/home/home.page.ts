import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ChatsService, chat } from '../service/chats.service';
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../components/chat/chat.component";







@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chats: any = [];

  constructor(public authservice: AuthService, public chatservice: ChatsService, private modal : ModalController) {}

  onLogout(){
    this.authservice.logout();

  }

  ngOnInit(){
    this.chatservice.getChatRooms().subscribe( chats => {

      this.chats = chats;

    });
  }


  openChat(chat){

    this.modal.create({
      component: ChatComponent,
      componentProps : {
        chat: chat
      }
    }).then( (modal) => modal.present())
  }

}
