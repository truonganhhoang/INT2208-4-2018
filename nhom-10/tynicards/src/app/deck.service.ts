import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface updateResponse {
  success: boolean
}

interface newDeckResponse {
  success: boolean,
  deckId: string
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
    return this.http.post<updateResponse>('/api/updatelesson', {
      deckId,
      lessons
    });
  }

  updateDeck(deckId, title, description, lessons) {
    return this.http.post<updateResponse>('/api/updatedeck', {
      deckId,
      title,
      description,
      lessons
    });
  }

  newDeck(title, description, lessons) {
    return this.http.post<newDeckResponse>('/api/newdeck', {
      title,
      description,
      lessons
    });
  }

  deleteDeck(deckId) {
    return this.http.post<updateResponse>('/api/deletedeck', {
      deckId
    });
  }

}
