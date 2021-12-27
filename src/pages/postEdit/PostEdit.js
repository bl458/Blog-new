import "./PostEdit.css";

function PostEdit(props) {
  return (
    <div>
      <h1 className="postEdit__title">Create New Post</h1>
      <h2 className="postEdit__titleSub">Title</h2>
      <input type="text" className="postEdit__titleInput" />
      <h2 className="postEdit__titleSub">Image</h2>
      <button className="postEdit__uploadBtn">Upload</button>
      <h2 className="postEdit__titleSub">Content</h2>
      <textarea rows="40" className="postEdit__contentInput"></textarea>
    </div>
  );
}

export default PostEdit;
