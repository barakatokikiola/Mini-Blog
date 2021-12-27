import ArticleList from './ArticleList';
import useFetch from './Fetch';

const Home=()=>{
const {data:articles, loading,error} =  useFetch('http://localhost:8000/articles')
  
return(
<div className='content'>
  {loading && <p>Loading...</p>}
  {error && <p>{error}</p>}
   {articles &&   <ArticleList articles= {articles} title={'All Articles!'}  />}
</div>

);
}

export default Home;