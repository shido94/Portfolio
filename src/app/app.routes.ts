import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {EducationComponent} from './education/education.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ResumeComponent} from './resume/resume.component';


export const myRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'contact',
    component: ContactsComponent
  }
];
