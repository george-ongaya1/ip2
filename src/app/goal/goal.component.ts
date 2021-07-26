import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Teacher quote by A. P. J. Abdul Kalam', 'Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.', new Date(2022, 7, 20), 0, 0,),
    new Goal(2, 'Wisdom quote by Mark Twain', 'It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt'
      , new Date(2022, 7, 20), 0, 0),
    new Goal(3, 'Oriental quote by Confucious', 'He who learns but does not think, is lost! He who thinks but does not learn is in great danger', new Date(2017, 7, 20), 0, 0,),

    new Goal(4, 'Strategy quote by Sun Tzu', 'If you know the enemy and know yourself you need not fear the results of a hundred battles. ', new Date(2022, 1, 18), 0, 0,),

  ];
  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: any) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }
  deleteGoal(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }
  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  highlighter(index: number) {
    const check = this.goals[index].upvote;
    if (this.goals.length > 0) {

      const votes: number[] = [];
      this.goals.forEach(goals => votes.push(goals.upvote));
      if (check === Math.max(...votes)) {
         
      }
      return;
    }

  }

  constructor() { }

  ngOnInit() {
  }


}
function likeButtonclick(): Goal {
  throw new Error('Function not implemented.');
}

function dislikeButtonclick(): Goal {
  throw new Error('Function not implemented.');
}

