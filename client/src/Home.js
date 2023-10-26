import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "./Components/Posts/Posts";
import './homepage-style.css';
import Form from "./Components/Form/Form";
import axios from 'axios';
import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/Sidebar'
import { Link } from 'react-router-dom';

const Home = ({ currentUser }) => {
  const url = "http://localhost:5000/posts";
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [accessories, setAccessories] = useState([]);// Define tags state
  const TagSearch = () => {
    const [tags, setTags] = useState('');
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
        console.error('Error fetching search results:', error);
      }
    };
  }
  const handleTagClick = async (tag) => {
    try {
      // Make an API request to fetch posts based on the selected tag
      const response = await axios.get(`${url}/posts?tags=${tag}`);
      setPosts(response.data);
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
  }, []);
  useEffect(() => {
    setTops([]);
    setBottoms([]);
    setAccessories([]);
    const categorizePosts = () => {
      posts.forEach(post => {
        if (post.category === 'tops') {
          setTops(prevTops => [...prevTops, post]);
        } else if (post.category === 'bottoms') {
          setBottoms(prevBottoms => [...prevBottoms, post]);
        } else if (post.category === 'accessories') {
          setAccessories(prevAccessories => [...prevAccessories, post]);
        }
      });
    };
    categorizePosts();
  }, [posts]);
  return (
    <>
      <Navbar user={currentUser} />
      <div>
        <div className="home-page">
          <div className="posts-side">
            <div className="tops">
              <h3 className="text-primary">Tops</h3>
              <hr />
              <Posts posts={tops} deletepost={deletePost} currentUser={currentUser} />
            </div>
            <div className="bottoms">
              <h3 className="text-primary">Bottoms</h3>
              <hr />
              <Posts posts={bottoms} deletepost={deletePost} currentUser={currentUser} />
            </div>
            <div className='accessories'>
              <h3 className="text-primary">Accessories</h3>
              <hr />
              <Posts posts={accessories} deletepost={deletePost} currentUser={currentUser} />
            </div>
            <div className="nice-ui-container">
              <h3>Todays Recommendations </h3>
              <Link to="/recommendation">
                <button className="btn btn-secondary">Go</button>
              </Link>
            </div>
            <div className="nice-ui-container">
              <h3>Calculate your Ecometer results</h3>
              <Link to="/dashboard">
                <button className="btn btn-secondary">Click Here</button>
              </Link>
            </div>
            <div className="nice-ui-container">
              <h3>Create your virtual Avatar</h3>
              <Link to="/map">
                <button className="btn btn-secondary">Click Here</button>
              </Link>
            </div>

          </div>
          <div className="sidebar-a">
            <Sidebar tags={tags} handleTagClick={handleTagClick} />
            <Form addpost={addPost} currentUser={currentUser} />
          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  );
};

export default Home;