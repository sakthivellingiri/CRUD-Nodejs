
import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";


@Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css',]
})


export class HelloWorldComponent {

    user={
    username: "",
    email: "",
    password: ""
    }

    constructor(private http: HttpClient,private router:Router) { }

    register(){
        this.http.post('http://localhost:3550/register',this.user).subscribe(response=>{
            console.log(response)
        })
    }
    onSubmit(){
        this.router.navigate(['/login'])
        }
}

   
    


    // register() {
    //     const data = {
    //         username: this.username,
    //         email: this.email,
    //         password: this.password,
    //     };
    
    //     this.http.post('http://localhost:3400/register',data)
    //         .subscribe((response) => {
    //             console.log(response);
    //         });
    //     }}
