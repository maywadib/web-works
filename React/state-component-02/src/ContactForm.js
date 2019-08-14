import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class ContactForm extends Component {


    state = {
        name: "",
        email: "",
        phone: "",
        picture: ""
    }


    typing = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    submit =(event) => {
        alert('Name: ' + this.state.name + "\nEmail: " + this.state.email + "\nPhone: " + this.state.phone + "\nPicture: " + this.state.picture);
         event.preventDefault();
    }





    //onclick onsubmit
    // addNewContact = (event) => {
    //     console.log("Adding New Contact");

    //     // const name = this.refs.name.value;
    //     // const email = this.refs.email.value;
    //     // const phone = this.refs.phone.value;
    //     // const picture = this.refs.picture.value;


    //     // this.setState({email: event.target.email})
    //     // this.setState({phone: event.target.phone })
    //     // this.setState({picture: event.target.picture })

    //     // console.log(this.state.name.value);
    //     // const contact = {name, email, phone, picture};
    //     console.log(this.state);

    //     this.refs.name.value = "";
    //     this.refs.email.value = "";
    //     this.refs.phone.value = "";
    //     this.refs.picture.value = "";
    //     //will not submit the form
    //     event.preventDefault();
    // }




    render() {
        return (
            <div className="container">
                <h3>Add New Contact</h3>
                <form className="form" onSubmit={this.submit}>

                    <div className="form-group row">
                        <label className="control-label col-md-4">
                            Name :
                        </label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.typing} ref="name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label col-md-4">
                            Email :
                        </label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.typing} ref="email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label col-md-4">
                            Phone # :
                        </label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.typing} ref="phone" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="control-label col-md-4">
                            Picture :
                        </label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name="picture" value={this.state.picture} onChange={this.typing} ref="picture" />
                        </div>
                    </div>

                    <button className="btn btn-danger">Save Data</button>

                </form>
            </div>
        )
    }
}

export default ContactForm;
