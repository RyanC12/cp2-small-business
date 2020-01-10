import React from 'react'
import { connect } from 'react-redux'

const LoggedIn = ({user}) => {
    console.log({user})
    return (
        <div style={{backgroundColor: '#D3D3D3', float: 'left'}}>
            <h5>Logged in as: {user.name}</h5>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(LoggedIn)