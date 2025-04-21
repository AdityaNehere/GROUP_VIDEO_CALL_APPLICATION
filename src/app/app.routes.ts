import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserJoinComponent } from './user-join/user-join.component';
import { JoinMeetingComponent } from './join-meeting/join-meeting.component';

export const routes: Routes = [
    { path: '',redirectTo: '/UserJoin',  pathMatch: 'full' },
    { path: 'UserJoin', component: UserJoinComponent },
    { path: 'JoinMeeting', component: JoinMeetingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }