import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css' 
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
	const [title,setTitle] = useState('Winston Dev\'s')
	const [posts,setPosts] = useState([])
	const [loading,setLoading] = useState(false)
	const [currentPage,SetCurrentPage] = useState(15)	
	const [PostsPerPage,SetPostsPerPage] = useState(6)

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res=>{
			setLoading(true)
			return res.json()
		}).then(posts =>{
			setPosts(posts)
			setLoading(false)
		})
	},[])

	let lastPostIndex = currentPage * PostsPerPage
	let firstPostIndex = lastPostIndex - PostsPerPage
	const currentPagePosts = posts.slice(firstPostIndex,lastPostIndex)
	const loadingGif = <div className="progress"><div className="determinate" style={{width:"70%"}}></div></div>
	return (
		<>
			<Navbar title={title} />
			<div className="main">
				<div className="row container">
					{loading && loadingGif}
					<Posts  posts={currentPagePosts} loading={loading} />
					<Pagination setPage={SetCurrentPage} postPerPage={PostsPerPage} totalPosts={posts.length} />
				</div>
			</div>
		</>
	);
}

export default App;
