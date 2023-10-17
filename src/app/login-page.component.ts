import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./hello-world.component.css']
})


export class LoginPageComponent {
    email: string = '';
    password: string = ''
    constructor(private http: HttpClient, private router: Router) { }

    dashboard(event: Event): void {
        event.preventDefault();
        if (this.email === '') {
            alert("enter your email")
        }
        else if (this.password === '') {
            alert("enter your password")
        }
        else {
            const key = {
                email: this.email,
                password: this.password
            }

            this.http.post('http://localhost:3550/userlogin', key)
                .subscribe((res: any) => {
                    switch (res.status) {
                        case 'empty_set':
                            alert('Please enter the username or register a new one');
                            break;
                        case 'success':
                            alert('Successful login');
                            const id = res.id;
                            // this.router.navigate([`/dashboard/${id}`]);
                            this.router.navigate(['/dashboard/'+id]);
                            // this.router.navigate(['/dashboaard'])
                    }
                })
        }
    }
}
