import { Injectable } from '@angular/core';
import { Goals } from '../goal-list/goal-list.component';
@Injectable({
  providedIn: 'root'
})
export class GoalService {
getGoals(){
  return Goals
}
  constructor() { }
}
