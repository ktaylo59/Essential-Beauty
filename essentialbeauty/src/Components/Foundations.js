import React, { Component } from 'react'
import {fetchFoundation} from "../Actions/foundationActions";
import {connect} from 'react-redux';
import Foundation from "./Foundation";


class Foundations extends Component {

    componentDidMount() {
        this.props.dispatch(fetchFoundation())
    }

    renderFoundation = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display makeup...</p>
        }else {
        return this.props.makeup.map((makeup, name) => <Foundation key={name} foundation={makeup}/>)
    }
    }
    render() {
        return(
            <div>
                {this.renderFoundation()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    makeup: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Foundations);