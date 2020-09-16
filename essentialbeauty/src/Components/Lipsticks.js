import React, { Component } from 'react'
import {fetchLipstick} from "../Actions/lipstickActions";
import {connect} from 'react-redux';
import Lipstick from "./Lipstick";


class Lipsticks extends Component {

    componentDidMount() {
        this.props.dispatch(fetchLipstick())
    }

    renderLipstick = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display makeup...</p>
        }else {
        return this.props.makeup.map((makeup, name) => <Lipstick key={name} lipstick={makeup}/>)
    }
    }
    render() {
        return(
            <div>
                {this.renderLipstick()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    makeup: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Lipsticks);       

