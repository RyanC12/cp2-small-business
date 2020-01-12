import React from 'react'
import { connect } from 'react-redux'

const UserBanner = ({user}) => {
    return (
        <div style={{backgroundColor: '#D3D3D3', width:'100%', height:"40px", fontSize: '12px', color:'black'}}>
            <p>Logged in as: {user}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(UserBanner)