import React, { Component } from 'react'

export default class ComponentA extends Component {

    constructor() {
        super();
        console.log("initialisation constructor");
        this.state = { greeting: 'Learning React' }
    }

    render() {
        console.log('running render');
        console.log(this.props);
        const name = this.props.name;

        // error
        // this.props.name = "something else"

        const greet = () => {
            alert('Hello ' + name)
        }
        // function updateTitle(){

        //     this.setState({title:'Learning React is Fun!!!'})
        // }
        const updateGreeting = ()=>{
            this.setState({greeting:'Learning React is Fun!!!'})
        }


        const titleCode = <h1>{this.state.greeting}</h1>

        return (
            <>
                {titleCode}
                {1 + 1}
                <h2>React is easy</h2>
                <button onClick={() => alert('Hello ' + name)}>Click me</button>
                <button onClick={updateGreeting}>Update Greeting</button>
            </>
        )
    }

    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount');
        console.log('updating title');
        document.title = 'ComponentA'
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('Unmounting');
    }
}
