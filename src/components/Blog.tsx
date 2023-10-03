import classes from './Blog.module.css'
import { BlogDTO } from '../type/dto'
import './Blog.css'

interface IBlogProps {
  blog: BlogDTO
}
const Blog = ({ blog }: IBlogProps) => {
  const { header, description, tags, author, date, readingTime, url } = blog
  return (
    <div className={classes.blogx}>
      <div className={classes.AuthorDate}>
        <p className={classes.author}>{author}</p>
        <p className={classes.date}>
          {date} • {readingTime}
        </p>
      </div>
      <div className={classes.HeaderDescription}>
        <a href={url} className={classes.Header}>
          <p>{header}</p>
        </a>
        <a href={url} className={classes.Description}>
          <p>{description}</p>
        </a>
      </div>
      <div className={classes.tags}>
        {tags.map((e) => (
          <p>#{e}</p>
        ))}
      </div>
    </div>
  )
}

export default Blog
