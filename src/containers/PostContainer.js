import React, {Component} from 'react';
import {Header, PostWrapper} from '../components';

class PostContainer extends Component{

    constructor(props){
        super();
        this.state = {
           id: 1,
           posts: []
        }
        this.appName = 'ReactApp';
    }

    componentWillMount() {
        this.setState({
            posts: ['Content1', 'Content2']
        })
    }

    handlerAddContent = (e) => {
        alert(this.appName+'에서 아직 지원하지 않는 기능입니다.')
    };

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <h2>List of Content</h2>
                    {this.state.posts.map(
                        (post, index) => (
                            <div key={index}>{index+1}: {post}</div>
                        )
                    )}
                </div>
                <button onClick={this.handlerAddContent}>Add Content</button>
                <PostWrapper handlerClick={this.handlerAddContent} />
            </div>
        )
    }
}

export default PostContainer;
