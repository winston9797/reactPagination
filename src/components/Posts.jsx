import React from 'react'
import Post from './Post/Post'

export default function Posts(props) {
    return (
        <div className="col">
            {props.posts.map(post =>{
            const string = post.body.substring(0,100) + ' ...'
            return <Post id={post.id} key={post.id} img={`https://source.unsplash.com/collection/${post.id}/1600x900`} title={post.title} content={string} />
            })}
        </div>
    )
}
