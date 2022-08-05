import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import axios from "axios";


const PostForm = ({create}) => {
  const [post, setPost] = useState({text:''})

  const addNewPost = async (e) => {
    
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({text:''})
    await axios.post('http://localhost:7000/api/post', {
      text: post.text
    },
    { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    )
  }

  return (
      <form className="form">
        {/* Управляемый компонент */}
        <input className="input_post" value={post.text} onChange={e=> setPost({...post, text: e.target.value})} type="taxt" placeholder="Название поста" />
        <button onClick={addNewPost}>Создать пост</button>
      </form>
  );
};

export default PostForm;