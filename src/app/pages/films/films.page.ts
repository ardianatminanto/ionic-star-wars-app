import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private navController: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  // buat function openDetails
  openDetails() {
    this.router.navigateByUrl(`/tabs/films/42`);
  }

  // buat function goToPlanets
  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`);
  }

}
