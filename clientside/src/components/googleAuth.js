import React from 'react';

class GoogleAuth extends React.Component{

    state = { isSignedIn: null };
    componentDidMount(){
        window.gapi.load('client: auth2', () =>{
            window.gapi.client.init({
                clientId : '455743603202-qcjsfnjtclhm99sh9qm15otofbggeu2t.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth =window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.autoChange);
            });
        });
    }

    autoChange = ()  =>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    authSignIn = () =>{
        this.auth.signIn();
    }
    authSignOut = () =>{
        this.auth.signOut();
    }

    renderButton(){
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
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
                    <i className="googleicon" />
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

export default GoogleAuth;