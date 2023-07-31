

const Navbar=({blog})=>{
console.log('data is',blog)
return (
<nav>
  <h3>test nav  </h3>
  {blog.data.map((item,index)=>{

    return <div><p> {item.attributes.blogTitle}</p>
    <img src={`http://localhost:1337/api/blogs${item.attributes.cover.data.attributes.name}`}/> </div>




  })}
  </nav>
)

}

export default Navbar
