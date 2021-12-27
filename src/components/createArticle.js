

const createArticle=()=>{

    return(
        <div className="article">
            <h1>Create a new article</h1>
            <div className="article-form">
            <label>Title</label>
    <input type="text"  />   
   <label>Body</label>
    <textarea type="text"
    cols='30' rows='10'></textarea>
     <label>Author</label>
   <select className="select">
       <option>Dare Omolona</option>
       <option>Zanna</option>
       <option>Kelvin</option>
       <option>Toke Black</option>
       <option>Bishop</option>
   </select>
   </div>
       <button className="reg-btn">Create Article
       </button>

        </div>
    )
}
export default createArticle;