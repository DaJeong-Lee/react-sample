import React from 'react';
import './PostContent.css'

const PostContent = ({children}) => {
    return (
        <div className="content-align">
            {children}
        </div>
    )
};

export default PostContent;