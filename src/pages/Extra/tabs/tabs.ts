import { Component } from '@angular/core';
import { HomePage } from '../../MainTabs/home/home';
import { ExplorePage } from '../../MainTabs/explore/explore';
import { AddPage } from '../../MainTabs/add/add';
import { FavPage } from '../../MainTabs/fav/fav';
import { ProfilePage } from '../../MainTabs/profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = AddPage;
  tab4Root = FavPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
