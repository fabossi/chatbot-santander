import { User } from '../components/shared/User.model';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  userSent: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  closeInfo: Subject<boolean> = new Subject<boolean>();
  viewAllImages: Subject<boolean> = new Subject<boolean>();
  loadingMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
  switchTheme: Subject<boolean> = new Subject<boolean>();
  viewRecentMessage: Subject<boolean> = new Subject<boolean>();
  recentMessages = [];
  recentMessagesEvent: BehaviorSubject<Array<[]>> = new BehaviorSubject<[]>([]);
  watsonResult: any;

  private URL = '';

  images: any = [
    {
      src: '../../../../../assets/image1.min.jpg',
      title: 'image 1',
    },
    {
      src: '../../../../../assets/image2.min.jpg',
      title: 'image 2',
    },
    {
      src: '../../../../../assets/image3.min.jpg',
      title: 'image 3',
    },
    {
      src: '../../../../../assets/image4.min.jpg',
      title: 'image 4',
    },
    {
      src: '../../../../../assets/image5.min.jpg',
      title: 'image 5',
    },
    {
      src: '../../../../../assets/image6.min.jpg',
      title: 'image 6',
    },
    {
      src: '../../../../../assets/image3.min.jpg',
      title: 'image 7',
    },
    {
      src: '../../../../../assets/image2.min.jpg',
      title: 'image 8',
    },
    {
      src: '../../../../../assets/image4.min.jpg',
      title: 'image 9',
    },
    {
      src: '../../../../../assets/image3.min.jpg',
      title: 'image 10',
    },
    {
      src: '../../../../../assets/image1.min.jpg',
      title: 'image 11',
    },
    {
      src: '../../../../../assets/image2.min.jpg',
      title: 'image 12',
    },
    {
      src: '../../../../../assets/image5.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image4.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image1.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image2.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image1.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image4.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image6.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image3.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image2.min.jpg',
      title: 'image 13',
    },
    {
      src: '../../../../../assets/image5.min.jpg',
      title: 'image 13',
    },
  ];

  userInfo: User[] = [];

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.URL = 'http://localhost:4000';
    }
  }

  getUserInfo(userInfo: User) {
    this.userInfo.push(userInfo);
    this.userSent.next([...this.userInfo]);
  }

  sendResponseFromWatson(text) {
    this.loadingMessage.next('loading');
    const body = {
      input: {
        text,
      },
      context: {},
    };
    this.http
      .post(this.URL + '/api/v1/assistant/message', body)
      .toPromise()
      .then((data: any) => {
        const now = new Date()
          .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
          .toLowerCase();
        this.watsonResult = data.result;
        this.loadingMessage.next('loaded');
        const watsonResponse: User = {
          text: data.result.output.generic.map((d: any) => {
            return d.text;
          }),
          type: 'watson',
          time: now,
          tempMessage: '',
        };
        this.getUserInfo(watsonResponse);
      })
      .catch((error) => {
        const watsonResponseError: User = {
          text:
            'Ops! Estamos enfrentando problemas técnicos, tente novamente mais tarde.',
          type: 'watson',
          time: '',
          tempMessage: '* Watson Api Error',
        };
        this.getUserInfo(watsonResponseError);
        throw new Error(error);
      });
  }
}
