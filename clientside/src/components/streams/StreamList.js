import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component{
 
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderStreams(){
        return this.props.streams.map(stream =>{
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                    </div>
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            )
        })
    }
    render(){
        
        return (
            <div>
                 <h2>Streams </h2>
                 <div className="ui celled list">
                    {this.renderStreams()}
                 </div>
            </div>
        );
    }

}

const mapStaeToProps = (state) => {
    return { streams: Object.values(state.streams)};
}

export default connect(mapStaeToProps, {fetchStreams})(StreamList);