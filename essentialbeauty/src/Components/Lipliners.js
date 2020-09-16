import React, { Component } from 'react'
import {fetchLipliner} from "../Actions/liplinerActions";
import {connect} from 'react-redux';
import Lipliner from "./Lipliner";


class Lipliners extends Component {

    componentDidMount() {
        this.props.dispatch(fetchLipliner())
    }

    renderLipliner = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display makeup...</p>
        }else {
        return this.props.makeup.map((makeup, name) => <Lipliner key={name} lipliner={makeup}/>)
    }
    }
    render() {
        return(
            <div>
                {this.renderLipliner()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    makeup: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Lipliners);