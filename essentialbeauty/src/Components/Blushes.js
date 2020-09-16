import React, { Component } from 'react'
import {fetchBlush} from "../Actions/blushActions";
import {connect} from 'react-redux';
import Blush from "./Blush";


class Blushes extends Component {

    componentDidMount() {
        this.props.dispatch(fetchBlush())
    }

    renderBlush = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display makeup...</p>
        }else {
        return this.props.makeup.map((makeup, name) => <Blush key={name} blush={makeup}/>)
    }
    }
    render() {
        return(
            <div>
                {this.renderBlush()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    makeup: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Blushes);