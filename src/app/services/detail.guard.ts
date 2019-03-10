import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MusicService } from './music.service';
import { Injectable } from '@angular/core';

@Injectable()

export class DetailGuard implements CanActivate {
    constructor(private musicService: MusicService, private router: Router ) { }

    canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const id = route.params.id;
        if (true) {
            return true;
        } else {
            this.router.navigate(['error']);
        }
    }
}
