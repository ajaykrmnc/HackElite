import React, { useState, useEffect } from "react";
import Posts from "./Posts/Posts";
import "./stylehome.css";
import Form from "../Form/Form";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { backend } from "config";
import PostLoad from "Components/Loading/PostLoad";

const Wardrobe = ({ currentUser }) => {
  const url = backend;
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]); 
  const [view, switchView] = useState(true);// Define tags state
  const TagSearch = () => {
    const [tags, setTags] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleTagChange = (e) => {
      setTags(e.target.value);
    };

    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`${url}/tags=${tags}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
  };
  const [clickedTags, setClickedTags] = useState([]);

  // ...

  const handleTagClick = async (tag) => {
    // Check if the tag is already clicked
    if (clickedTags.includes(tag)) {
      // If clicked, remove it from the clickedTags array
      const updatedClickedTags = clickedTags.filter((clickedTag) => clickedTag !== tag);
      setClickedTags(updatedClickedTags);
    } else {
      // If not clicked, add it to the clickedTags array
      setClickedTags([...clickedTags, tag]);
    }

    // Make an API request to fetch posts based on the selected tags
    try {
      const response = await axios.get(`${url}/?tags=${clickedTags.join(",")}`);
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    const updatedPosts = posts.filter((post) => post._id !== id);
    setPosts(updatedPosts);

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (post) => {
    try {
      console.log("Uploaded post:", post);
      const response = await axios.post(url, post);
      setPosts([...posts, response.data]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
        console.log(response.data);
        const allTags = response.data.reduce((acc, post) => {
          return [...acc, ...post.tags];
        }, []);
        console.log(allTags);
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [view]);
  const [cloth, setCloth] = useState('tops');
  const cateogries = {
    items: ['tops','bottoms','accessories']
  }
  const switchCateogries = (e) =>{
     setCloth(e);
  }

  return (
    <>
      <div className="container wardrobe">
      <h1 className = "m-2">Wardrobe</h1>
      <hr className = "text-muted"/>
        <div className="row">
          <div className = "col-lg-3">
            <div className = "cloth-types">
              {
                cateogries.items.map((item) => 
                  <button className = "btn " onClick = {() => {setCloth(item)}}>{item}</button>
                )
              }
            </div>
              <div className="mt-2">
                <h3 className="">Tags</h3>
                <hr/>
                <div className="">
                  {tags.map((tag, index) => (
                    <button key={index} className="btn btn-rounded btn-small btn-primary m-1" onClick={() => handleTagClick(tag)}>
                      {tag}
                    </button>
                  ))}
                </div>
                <hr/>
            </div>
            <h3>Selected Tags</h3> {
              clickedTags.map((tag,index) => (
                <button key = {index} className = "btn btn-primary btn-small btn-rounded m-1" onClick={() => handleTagClick(tag)}>{tag}</button>
              ))
            }
            <hr/>
            <button className = "btn btn-primary" onClick = {() => switchView(!view)}>{(view) ? "Add Items to wardrobe" : "View the wardrobe"}</button>
          </div>
          <div className="col-lg-9">
                { view && <>
                    {
                      (posts.length !== 0) ?  
                        <Posts
                          posts = {posts}
                          cloth={cloth}
                          deletepost={deletePost}
                          currentUser={currentUser}
                        /> : <>
                          <PostLoad/>
                      </>
                    } 
                </>
                }
                {
                  !view && <>
                    <div className="col">
                      <Form addpost={addPost} currentUser={currentUser} />
                    </div>
                  </>
                }
          </div>
        </div>
       </div> 
    </>
  );
};

export default Wardrobe;
