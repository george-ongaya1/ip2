import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { AlertService } from '../alert-service/alert.service';
import {HttpClient} from '@angular/common/http';
import { Quote } from '../quote-class/quote';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService]
})
export class GoalComponent implements OnInit {
  goals: any;
  alertService: AlertService = new AlertService;
  quote: any;

  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
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
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }



  constructor(goalService: GoalService,alertService:AlertService, private http:HttpClient) {
    this.goals = goalService.getGoals()
    this.alertService = this.alertService;
  }

  ngOnInit() {
    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe((data: { author: string; quote: string; })=>{
      this.quote = new Quote(data.author, data.quote)
    },err=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")
      console.log("An error occurred")
  })
  }


}
function likeButtonclick(): Goal {
  throw new Error('Function not implemented.');
}

function dislikeButtonclick(): Goal {
  throw new Error('Function not implemented.');
}

