import avatar from '../images/avatar.jpg';
import {Link} from 'react-router-dom';


const ArticleList=({articles,title,handleDelete})=>{

    return(
<div className='content'>
<h1>{title}</h1>
    {articles.map(
        (article)=>(
            <Link className='article-links' to ={`/articles/${article.id}`}>
            <div className='article-preview' key={article.id} >
                        <img src={avatar} alt='avatar' className='avatar' />
                    <div className='article-body'>
                        <h2 className='article-title'>
                            {article.title}
                        </h2>
            <span className='author'>{`Article by ${article.author}`}
                        </span>
                        </div>
            </div>
            
            </Link>
    ))}
</div>
    );
}

export default ArticleList;