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
    <div>
      <form>
        {/* Управляемый компонент */}
        <MyInput value={post.title} onChange={e=> setPost({...post, title: e.target.value})} type="taxt" placeholder="Название поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;