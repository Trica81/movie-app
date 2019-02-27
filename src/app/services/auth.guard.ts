import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from './movie.service';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private movieService: MovieService, private router: Router ) { }

    canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const id = +route.params.id;
        if (this.movieService.movieExiste(id)) {
            return true;
        } else {
            this.router.navigate(['error']);
        }
    }
}
