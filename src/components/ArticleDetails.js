import { useParams} from 'react-router-dom'
import useFetch from './Fetch';
import { useNavigate } from "react-router";

const ArticleDetails=()=>{
    const { id } = useParams();
    const { data: articles, loading, error } = useFetch(' http://localhost:8000/articles/' + id);
    const navigate = useNavigate();
  
    const handleClick = () => {
      fetch('http://localhost:8000/articles/' + articles.id)
      .then(() => {
        navigate('/home');
      })
    }
    return(
        <div className="articles-detail">
       {loading && <div>Loading...</div>} 
        {error && <div>{ error }</div>}
        {articles && (
         <article>
          <h2>{ articles.title }</h2>
        <h4> Author: <span>{ articles.author }</span></h4>
          <div className='article-body'>{ articles.body }</div>
         </article>
        )}
        <button className='reg-btn' onClick={handleClick}>Go back home</button> 
      </div>
    );
}

export default ArticleDetails;