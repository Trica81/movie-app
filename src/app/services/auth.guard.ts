import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MusicService } from './music.service';
import { Injectable } from '@angular/core';
import { LogInService } from './log-in.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private logInService: LogInService, private musicService: MusicService,  private router: Router ) { }

    canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return true;
        const userToken = this.logInService.getUserToken();
        if ( userToken != null ) {
            return true;
        } else {
            this.router.navigate(['login']);
            this.musicService.msgInfo(`Please log in.`);
            return false;
        }
    }
}
