import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./shared/guard/auth.guard";

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { UsersComponent } from './components/users/users.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { ServProvDetailsComponent } from './components/serv-prov-details/serv-prov-details.component';
import { StepperPageComponent } from './components/stepper-page/stepper-page.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { PendingrequestComponent } from './components/pendingrequest/pendingrequest.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RemoveMemberComponent } from './components/remove-member/remove-member.component';
import { ServiceproviderinfoComponent } from './components/serviceproviderinfo/serviceproviderinfo.component';
import { TabComponent } from './components/tab/tab.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TrackComponent } from './components/track/track.component';

import { HDashboardComponent} from './House_Owner/h-dashboard/h-dashboard.component';
import { HAddmemberComponent} from './House_Owner/h-addmember/h-addmember.component';
import { HChatroomComponent} from './House_Owner/h-chatroom/h-chatroom.component';
import { HDialogboxComponent} from './House_Owner/h-dialogbox/h-dialogbox.component';
import { HPersonaldetailsComponent} from './House_Owner/h-personaldetails/h-personaldetails.component';
import { HProgressComponent} from './House_Owner/h-progress/h-progress.component';
import { HRemovememberComponent} from './House_Owner/h-removemember/h-removemember.component';
import { HSpinfoComponent} from './House_Owner/h-spinfo/h-spinfo.component';
import { HTabsComponent} from './House_Owner/h-tabs/h-tabs.component';
import { HTimelineComponent} from './House_Owner/h-timeline/h-timeline.component';
import { HTrackComponent} from './House_Owner/h-track/h-track.component';

import { SDashboardComponent} from './Service_Provider/s-dashboard/s-dashboard.component';
import { SAddmemberComponent} from './Service_Provider/s-addmember/s-addmember.component';
import { SChatroomComponent} from './Service_Provider/s-chatroom/s-chatroom.component';
import { SDialogboxComponent} from './Service_Provider/s-dialogbox/s-dialogbox.component';
import { SPersonaldetailsComponent} from './Service_Provider/s-personaldetails/s-personaldetails.component';
import { SProgressComponent} from './Service_Provider/s-progress/s-progress.component';
import { SRemovememberComponent} from './Service_Provider/s-removemember/s-removemember.component';
import { STabsComponent} from './Service_Provider/s-tabs/s-tabs.component';
import { STimelineComponent} from './Service_Provider/s-timeline/s-timeline.component';
import { STrackComponent} from './Service_Provider/s-track/s-track.component';
import {SProjectinfoComponent } from './Service_Provider/s-projectinfo/s-projectinfo.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  // children:[
  //   { path: 'hdashboard', component: HDashboardComponent,outlet:'hdashboard'  },
  //   {path:':id',component:SDashboardComponent,outlet:'sdashboard' },]
  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user-role', component: UserRoleComponent }, // , canActivate: [AuthGuard]
  { path: 'owner-details', component: OwnerDetailsComponent }, // , canActivate: [AuthGuard]
  { path: 'servprov-details', component: ServProvDetailsComponent }, // , canActivate: [AuthGuard]
  { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'stepper-page', component: StepperPageComponent }, // , canActivate: [AuthGuard]
  { path: 'edit-profile', component: EditProfileComponent },
  // { path: '', component: ChatroomComponent },
   { path: 'Chatroom', component: ChatroomComponent,
  //  children:[
  //   { path: 'hchatroom', component:HChatroomComponent,outlet:'hchatroom'  },]
  },

  { path: 'timeline', component: TimelineComponent,
  // children:[
  //   { path: 'htimeline', component:HChatroomComponent,outlet:'htimeline'  },]
  },
  { path: 'tab', component: TabComponent },
   { path: 'progress', component: ProgressComponent,
  //  children:[
  //   { path: 'hprogress', component:HChatroomComponent,outlet:'hprogress'  },]
   },
  { path: 'track', component: TrackComponent },

   
  { path: 'hchatroom', component:HChatroomComponent },
    { path: 'htimeline', component:HTimelineComponent  },
    { path: 'hprogress', component:HProgressComponent  },
    
  { path: 'htab', component: HTabsComponent,
  
   },
   
  { path: 'htrack', component: HTrackComponent }, 
   { path: 'h-dashboard', component: HDashboardComponent,
   children:[
    { path: 'h-chatroom', component:HChatroomComponent  },
    { path: 'h-timeline', component:HTimelineComponent  },
    { path: 'h-progress', component:HProgressComponent  },
    
   ], },

   { path: 's-dashboard', component: SDashboardComponent,
   children:[  
     { path: 'schatroom', component:SChatroomComponent },
   { path: 's-timeline', component:STimelineComponent  },
   { path: 's-progress', component:SProgressComponent  },] 
  },

  
    
  { path: 'stab', component: STabsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
