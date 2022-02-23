import React from 'react';
import { connect } from 'react-redux';
import { signInAuth, signOutAuth } from '../actions';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client: auth2', () =>{
            window.gapi.client.init({
                clientId : '455743603202-qcjsfnjtclhm99sh9qm15otofbggeu2t.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.autoChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.autoChange);
            });
        });
    }

    autoChange = (isSignedIn)  =>{
        if(isSignedIn){
            this.props.signInAuth();
        }else {
            this.props.signOutAuth();
        }
       
    }

    authSignIn = () =>{
        this.auth.signIn();
    }
    authSignOut = () =>{
        this.auth.signOut();
    }

    renderButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <div>
                    <button className="ui red google button" onClick={this.authSignOut}>
                        <i className="google icon"/>
                        Signout
                    </button>
                </div>
            );
        }else {
            return (
                <button className="ui red google button" onClick={this.authSignIn}>
                    <i className="google icon" />
                    SignIn
                </button>
            )
        }
    }

   

    render(){
        return (
            <div>{this.renderButton() }</div>
        )
    }
};

const mapStateToProps = (state) =>{
 return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signInAuth, signOutAuth}) (GoogleAuth);