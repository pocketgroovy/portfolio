import { Component } from "react";

class Contact extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
        }
    }
