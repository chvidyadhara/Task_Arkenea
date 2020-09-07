import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { LazyheadComponent } from './lazyhead/lazyhead.component';
import { Lazy1Component } from './lazy1/lazy1.component';
import { Lazy2Component } from './lazy2/lazy2.component';
import { Routperameters } from '../Routperameters.service';

import { StudentlistdataComponent } from './studentlistdata/studentlistdata.component';
import { SearchListComponent } from './search-list/search-list.component';
import { FormsModule } from '@angular/forms';
import { SearchpipePipe } from '../searchpipe.pipe';
import { EditlistComponent } from './editlist/editlist.component';

const rout:Routes = [
  {path:"Lazyhead",component:LazyheadComponent,
     children:[ {path:'lazy1',component:Lazy1Component},
             {path:'lazy1/:ide',component:StudentlistdataComponent},
     {path:'lazy2',component:Lazy2Component},
     {path:'editlist',component:EditlistComponent}
   ]

   },
 
]
@NgModule({
  declarations: [LazyheadComponent, Lazy1Component, Lazy2Component, StudentlistdataComponent, SearchListComponent,SearchpipePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(rout),
    FormsModule,
   
  ],
  exports:[RouterModule,LazyheadComponent,],
  providers:[Routperameters]
})
export class LazynotwModule { }
