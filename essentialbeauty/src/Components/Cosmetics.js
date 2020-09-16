import React, {Component} from 'react';
import Cosmetic from './Cosmetic';
import {fetchMakeup} from '../Actions/makeupActions';

import {connect} from 'react-redux';

class Cosmetics extends Component {

    componentDidMount() {
        this.props.dispatch(fetchMakeup())

    }

    renderCosmetics = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display cosmetics...</p>
        }else {
        return this.props.cosmetics.map((cosmetics, name) => <Cosmetic key={name} beauty={cosmetics}/>)

        }   
    }

    render() {

        return(
            <div>
                {this.renderCosmetics()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cosmetics: state.makeup.makeup,
    loading: state.makeup.loading,
    hasErrors: state.makeup.hasErrors
})


export default connect(mapStateToProps)(Cosmetics);        
       