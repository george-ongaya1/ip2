import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

 
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

