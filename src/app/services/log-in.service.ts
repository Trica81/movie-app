import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LogInService {
    token = '';
    private _isLoggin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _user: BehaviorSubject<boolean> = new BehaviorSubject<any>(null);
    private _error: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    isLoggin$ = this._isLoggin.asObservable();
    user$ = this._user.asObservable();
    error$ = this._error.asObservable();

    constructor(private router: Router) { }
    signupUser( email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response);
                this.router.navigate(['login']);
            })
            .catch(
                error => {
                    console.log(error);
                    this._error.next({
                        message: error.message,
                        msgClass: 'alert-warning'
                      });
                }
            );
    }

    signinUser( email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                localStorage.setItem('UserId', response.user.uid);
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => {
                            this.token = token;
                            localStorage.setItem('Token', token);
                            this._isLoggin.next(true);
                            this.router.navigate(['']);
                        }
                    );
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        );
    }

    getUserToken () {
        return localStorage.getItem('Token');
    }

    getUserId() {
       const id = localStorage.getItem('UserId');
        return id;
    }

    isLogged () {
        if (localStorage.getItem('Token')) {
            this._isLoggin.next(true);
        } else {
            this._isLoggin.next(false);
        }
    }

    logOut () {
        firebase.auth().signOut();
        localStorage.removeItem('Token');
        localStorage.removeItem('UserId');
        this._isLoggin.next(false);
        this.router.navigate(['']);
    }
}
