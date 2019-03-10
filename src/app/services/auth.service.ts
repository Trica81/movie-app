import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token = '';
    private _isLoggin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _user: BehaviorSubject<boolean> = new BehaviorSubject<any>(null);
    isLoggin$ = this._isLoggin.asObservable();
    user$ = this._user.asObservable();

    constructor(private router: Router) { }
    signupUser( email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['login']);
            })
            .catch(
                error => {
                    console.log(error);
                }
            );
    }

    signinUser( email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => {
                            this.token = token;
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

    getUser () {
        return firebase.auth().currentUser;
    }

    isLogged () {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this._isLoggin.next(true);
            } else {
                this._isLoggin.next(false);
            }
        });
    }

    logOut () {
        firebase.auth().signOut();
        this._isLoggin.next(false);
        this.router.navigate(['']);
    }
}
