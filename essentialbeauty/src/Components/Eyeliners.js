import React, { Component } from 'react'
import {fetchEyeliner} from "../Actions/eyelinerActions";
import {connect} from 'react-redux';
import Eyeliner from "./Eyeliner";


class Eyeliners extends Component {

    componentDidMount() {
        this.props.dispatch(fetchEyeliner())
    }

    renderEyeliner = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display makeup...</p>
        }else {
        return this.props.makeup.map((makeup, name) => <Eyeliner key={name} eyeliner={makeup}/>)
    }
    }
    render() {
        return(
            <div>
                {this.renderEyeliner()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    makeup: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Eyeliners);