import { useBlogPosts } from '../hooks/useContentData'

export function Blog() {
  const blogPosts = useBlogPosts()
  
  return (
    <div className="w-layout-hflex flex-block-3 page-blog">
      <div className="padding-global home-section-bg home-section-bg--blog-flat">
        <div className="container-large">
          <h1 className="heading-4-center-black">Read the latest from Massa</h1>
          <div className="blog_component home-section-bg home-section-bg--blog">
            <div className="blog_list-wrapper">
              <div className="blog_list">
                {blogPosts.map(post => (
                  <div key={post.id} className="collection-item w-dyn-item">
                    {post.image && (
                      <img 
                        src={encodeURI(post.image)} 
                        alt={post.title} 
                        width="Auto" 
                        className="image-7"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/Technology.svg'
                        }}
                      />
                    )}
                    <div className="text-block">{post.title}</div>
                    <div className="text-block-2">{post.excerpt}</div>
                    <a href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer" className="button-3 w-button">Read more</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

