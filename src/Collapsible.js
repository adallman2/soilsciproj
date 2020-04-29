import React from 'react';
import './Collapsible.css';

class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    
    render() {

        const images = require.context('./images', true);
        let image = images('./' + this.props.image)
        return (
        <div className='holder'>
            <div onClick={(e)=>this.togglePanel(e)} className='header'>
                {this.props.title}
            </div>
            {this.state.open ? (
                <div className='content'>
                    <img className='fillimg' src={image} alt=""/>
                    <p>{this.props.children}</p>
                </div>
                ) : null}
        </div>);
    } 
}
export default Collapsible;
