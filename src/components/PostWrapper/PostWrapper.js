import React from 'react';
import {PostContent} from '../';
import {Content1} from '../';

const PostWrapper = ({handlerClick}) => {
    return (
        <div>
            <PostContent>
                <Content1/>
            </PostContent>
            <button onClick={handlerClick}>Add content</button>
        </div>
    )
}

export default PostWrapper;