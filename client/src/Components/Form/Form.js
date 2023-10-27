import React, { Component } from 'react';
import FileBase from 'react-file-base64';
import './style.css';

class AddPost extends Component {
  state = {
    title: '',
    tags: [],
    selectedFile: '',
    creatorId: this.props.currentUser.uid,
    imgUrl: this.props.currentUser.photoURL,
    category: '',
    clothType: ''
  };
  
  handleChange = (name) => (e) => {
    if (name === 'tags') {
      // Convert the comma-separated string to an array
      const tags = e.target.value.split(',').map(tag => tag.trim());
      this.setState({
        ...this.state,
        [name]: tags,
      });
    } else {
      this.setState({
        ...this.state,
        [name]: e.target.value,
      });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ ...this.state, creatorId: this.props.currentUser.uid });
    this.props.addpost(this.state);
    this.clear();
  };
  clear = () => {
    this.setState({ creator: '', title: '', tags: [],category: '' });
  };
  

  render() {
    const { creator,clothType,title, message,tags, category } = this.state;
    return (
      <div className="p-4 m-2 h-custom bg-light form-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group input-group-lg">
            <h3 className="text-center">Add Item to Wardrobe</h3>
            <input
              type="title"
              className="form-control my-3"
              id="title"
              aria-label="Large"
              placeholder="Title"
              value={title}
              onChange={this.handleChange("title")}
            />
            <input
              type="tags" // Input field for tags
              className="form-control my-3"
              id="tags"
              aria-label="Large"
              placeholder="Tags (comma separated)"
              value={tags}
              onChange={this.handleChange('tags')}
            />
            <select
              id="category"
              className="form-control my-3"
              value={category}
              onChange={this.handleChange("category")}
            >
              <option value="">Select Category</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="accessories">Accessories</option>
            </select>
            <select
              id="clothType"
              className="form-control my-3"
              value={clothType}
              onChange={this.handleChange("clothType")}
            >
              <option value="">Select Cloth Type</option>
              <option value="cotton">Cotton</option>
              <option value="nylon">Nylon</option>
              <option value="other">Other</option>
            </select>
            <textarea
              className="form-control my-3"
              id="message"
              placeholder="Message"
              rows="2"
              value={message}
              onChange={this.handleChange("message")}
            ></textarea>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => this.setState({ ...this.state, selectedFile: base64 })} />
          </div>

          <button type="submit" className="btn btn-primary btn-block my-2">
            Submit
          </button>
          <button type="button" className="btn btn-danger btn-block my-1" onClick={this.clear}>
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default AddPost;
