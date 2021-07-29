import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Book service 
import { UserServiceService } from '../../src/app/shared/user/user-service.service';


// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AngularMaterialModule } from './angular-material.module';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { StepperPageComponent } from './components/stepper-page/stepper-page.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ServProvDetailsComponent } from './components/serv-prov-details/serv-prov-details.component';
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
import {MatCardModule} from '@angular/material/card';

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
import { HMainscreenComponent} from './House_Owner/h-mainscreen/h-mainscreen.component';

import { SDashboardComponent} from './Service_Provider/s-dashboard/s-dashboard.component';
import { SChatroomComponent} from './Service_Provider/s-chatroom/s-chatroom.component';
import { SDialogboxComponent} from './Service_Provider/s-dialogbox/s-dialogbox.component';
import { SPersonaldetailsComponent} from './Service_Provider/s-personaldetails/s-personaldetails.component';
import { SProgressComponent} from './Service_Provider/s-progress/s-progress.component';
import { STabsComponent} from './Service_Provider/s-tabs/s-tabs.component';
import { STimelineComponent} from './Service_Provider/s-timeline/s-timeline.component';
import { STrackComponent} from './Service_Provider/s-track/s-track.component';
import {SProjectinfoComponent } from './Service_Provider/s-projectinfo/s-projectinfo.component';
import { LeaveProjectComponent} from './Service_Provider/leave-project/leave-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    UsersComponent,
    UserRoleComponent,
    OwnerDetailsComponent,
    StepperPageComponent ,
    EditUserComponent,
    ServProvDetailsComponent,
    EditProfileComponent,
    AddMemberComponent,
    ChatroomComponent,
    DialogboxComponent,
    PendingrequestComponent,
    ProgressComponent,
    RemoveMemberComponent,
    ServiceproviderinfoComponent,
    TabComponent,
    TimelineComponent,
    TrackComponent,
  
    
    HDashboardComponent,
    HAddmemberComponent,
    HChatroomComponent,
    HDialogboxComponent,
    HPersonaldetailsComponent,
    HProgressComponent,
    HRemovememberComponent,
    HSpinfoComponent,
    HTabsComponent,
    HTimelineComponent,
    HTrackComponent,
    HMainscreenComponent,

    SDashboardComponent,
    SChatroomComponent,
    SDialogboxComponent,
    SPersonaldetailsComponent,
    SProgressComponent,
    STabsComponent,
    STimelineComponent,
    STrackComponent,
    SProjectinfoComponent,
    LeaveProjectComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // firebaseConfig
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    AuthService,
    UserServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
