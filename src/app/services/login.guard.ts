import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MusicService } from './music.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class LogInGuard implements CanActivate {

    constructor(private authService: AuthService, private musicService: MusicService,  private router: Router ) { }

    canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // return true;
        const user = this.authService.getUser();
        if ( user != null ) {
            return true;
        } else {
            this.router.navigate(['']);
            this.musicService.msgInfo(`Please log in.`);
        }
    }
}
