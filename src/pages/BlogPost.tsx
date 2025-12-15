import { useParams, Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useContentData'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const blogPosts = useBlogPosts()
  const post = blogPosts.find(p => p.id === slug)

  if (!post) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <Link to="/blog" className="button w-button">Back to blog</Link>
      </div>
    )
  }

  return (
    <div className="blog-content">
      <div className="w-layout-hflex flex-block-2">
        <h1 className="heading-2">{post.title}</h1>
        <h4 className="heading-2">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • {post.author}
        </h4>
      </div>
      {post.image && (
        <img 
          src={encodeURI(post.image)} 
          loading="lazy" 
          width="649" 
          alt={post.title} 
          className="image-8"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/Technology.svg'
          }}
        />
      )}
      <div 
        className="rich-text-block w-richtext"
        dangerouslySetInnerHTML={{ __html: (post as any).content || `<p>${post.excerpt}</p>` }}
      />
    </div>
  )
}

export default BlogPost

