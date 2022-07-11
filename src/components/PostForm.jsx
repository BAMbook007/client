import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import axios from "axios";


const PostForm = ({create}) => {
  const [post, setPost] = useState({title:''})

  const addNewPost = async (e) => {
    
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title:''})
    await axios.post('http://localhost:7000/posts', {
      title: post.title
    })
    
  }

  return (
      <form className="form">
        {/* Управляемый компонент */}
        <input className="input_post" value={post.title} onChange={e=> setPost({...post, title: e.target.value})} type="taxt" placeholder="Название поста" />
        <button onClick={addNewPost}>Создать пост</button>
      </form>
  );
};

export default PostForm;