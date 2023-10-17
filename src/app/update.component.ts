import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { NgModel } from "@angular/forms";

@Component({
    selector: 'app-update-component',
    templateUrl: './update.component.html',
    styleUrls: ['./hello-world.component.css']

})
export class UpdateComponent implements OnInit {
    id: any;
    username: string = '';
    email: string = '';
    password: string = '';

    constructor(private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.fetchdata();
        // console.log(this.id)
    }

    fetchdata() {
        this.http.get(`http://localhost:3550/client/${this.id}`)
            .subscribe((data: any) => {
                // this.id = data[0].id;
                this.username = data[0].username;
                this.email = data[0].email;
                this.password = data[0].password;
            });
    }

    // handleUpdate() {
    //     const key = {

    //         username: this.username,
    //         email: this.email,
    //         password: this.password
    //     };

    //     if (!this.username) {
    //         alert('Enter the username');
    //     } else if (!this.email) {
    //         alert('Enter the email');
    //     } else if (!this.password) {
    //         alert('Enter the password');
    //     } else {
    //         this.http.post(`http://localhost:3350/update/:id${this.id}`, key)
    //             .subscribe((res: any) => {
    //                 if (res.status === 'error') {
    //                     alert('Data are not updated');
    //                 } else if (res.status === 'success') {
    //                     alert('Data are updated');
    //                 }
    //             });
    //     }
    // }
    handleUpdate(): void {
        const key = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        if (!this.username) {
            alert('Enter the username');
        } else if (!this.email) {
            alert('Enter the email');
        } else if (!this.password) {
            alert('Enter the password');
        } else {
            this.http.put(`http://localhost:3350/updateuser/${this.id}`, key)
                .subscribe((res: any) => {
                    // console.log('Received response:',res);
                    if (res.status === "error") {
                        alert('Data was not updated');
                    } else if (res.status === "success") {
                        alert('Data was updated');
                    }
                });
        }
    }



}

