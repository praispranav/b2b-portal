import { Injectable } from '@angular/core';
import { MessageService } from '../../@pages/components/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {
  constructor(
    private messageService: MessageService
  ) { }

  removeToast() {
    this.messageService.remove();
  }

  createBasicNotification(res: string, msg: string) {
    const currentTab: number = 0;
    const notificationModel: any = {
      type: 'flip',
      message:'',
      color: 'Success',
      position: 'top-right',
      current: 0
    };
    const nofitcationStrings: any = [
      {
        heading: 'Flip Bar',
        desc: 'Awesome Loading Circle Animation',
        position: 'top-right',
        type: 'flip'
      },
    ];

    if (notificationModel.current != currentTab) {
      notificationModel.current = currentTab;
    }

    notificationModel.position = nofitcationStrings[currentTab]['position'];
    notificationModel.type = nofitcationStrings[currentTab]['type'];
    notificationModel.color = res;
    notificationModel.message = msg;

    this.messageService.create(notificationModel.color, notificationModel.message, {
      Position: nofitcationStrings[currentTab]['position'],
      Style: notificationModel.type,     
      Duration: 0,      
    });

    setTimeout(() => {
      this.removeToast();
    }, 10000);
  }
}


