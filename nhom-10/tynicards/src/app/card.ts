export class Card{
  private word: String;
  private meaning: String;

  constructor(word: String, meaning: String){
    this.word = word;
    this.meaning = meaning;
  }
  getWord(){
    return this.word;
  }
  getMeaning(){
    return this.meaning;
  }
}
