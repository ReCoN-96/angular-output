import { Component, OnInit } from '@angular/core';
import { Question } from '../common/point.model';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.scss']
})
export class YodaComponent implements OnInit {
  public answer: number[] = [];
  public goodAnswer: number[] = [];
  public isAverage: boolean;
  public average: number;
  public questions: Question[] = [
    {
      id: '1',
      title: 'Aimes-tu les logiciels libres ?',
      answer: true,
      score: 3
    },
    {
      id: '2',
      title: 'La force a-t-elle créé Linux ?',
      answer: true,
      score: 1
    },
    {
      id: '3',
      title: 'Est-ce que le code, c\'est la vie ?',
      answer: true,
      score: 2
    },
    {
      id: '4',
      title: 'Préféres-tu les GUI au CLI ? ',
      answer: false,
      score: 3
    },
    {
      id: '5',
      title: 'L\'histoire de la force a-t-elle écrite par Git ?',
      answer: true,
      score: 2
    },
    {
      id: '6',
      title: 'La documentation est-elle le meilleur ami de la force ?',
      answer: true,
      score: 2
    },
    {
      id: '7',
      title: 'Penses-tu que tester c\'est douter ?',
      answer: false,
      score: 1
    },
    {
      id: '8',
      title: 'Javascript est-il le Java du web ?',
      answer: false,
      score: 1
    },
    {
      id: '9',
      title: 'L\'open source se situe dans les Alpes ?',
      answer: false,
      score: 4
    },
    {
      id: '10',
      title: 'Angular est-il une pierre magique ?',
      answer: false,
      score: 1
    }
  ];

  public checked: boolean;

  constructor() {}

  ngOnInit() {}

  onGetAnswer($event) {
    const questionAnswer: string[] = $event.split('-');
    let isAnswer: boolean;
    const id = Number(questionAnswer[0]) - 1;
    if (questionAnswer[1] === 'true') {
        isAnswer = true;
      } else {
        isAnswer = false;
      }
    if (isAnswer === this.questions[id].answer) {
      this.answer.push(this.questions[id].score);
      this.goodAnswer.push(this.questions[id].score);
    } else {
      this.answer.push(0);
      this.goodAnswer.push(this.questions[id].score);
  }
}

  calculateAverage() {
    const sum = this.answer.reduce((b, a) => b + a, 0);
    const goodSum = this.goodAnswer.reduce((b, a) => b + a, 0);
    this.average = Math.round(sum * 20 / goodSum);
    if (this.average < 12) {
      this.isAverage = false;
    } else {
      this.isAverage = true;
    }
    if (this.average < 12) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }
}
