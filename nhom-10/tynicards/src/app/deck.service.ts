import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface updateLessonResponse {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  getDecks() {
    return this.http.get('/api/getdecks');
  }

  getDeckById(id) {
    return this.http.post('/api/getdeckbyid', {
      id
    });
  }

  getLesson(deckId, lessonOrderNum) {
    return this.http.post('/api/getlesson', {
      deckId,
      lessonOrderNum
    });
  }

  updateLesson(deckId, lessons) {
    return this.http.post<updateLessonResponse>('/api/updatelesson', {
      deckId,
      lessons
    });
  }

}
