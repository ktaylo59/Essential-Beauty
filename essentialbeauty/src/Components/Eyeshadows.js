import React, { Component } from 'react'
import {fetchEyeshadow} from "../Actions/eyeshadowActions";
import {connect} from 'react-redux';
import Eyeshadow from "./Eyeshadow";


class Eyeshadows extends Component {

    componentDidMount() {
        this.props.dispatch(fetchEyeshadow())
    }

    renderEyeshadow = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display makeup...</p>
        }else {
        return this.props.makeup.map((makeup, name) => <Eyeshadow key={name} eyeshadow={makeup}/>)
    }
    }
    render() {
        return(
            <div>
                {this.renderEyeshadow()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    makeup: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Eyeshadows);