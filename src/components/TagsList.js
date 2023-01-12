import React from "react"
import setupTags from "../utils/setupTags"
import {Link} from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes }) =>{
	const newTags = setupTags(recipes)
	console.log(newTags);
	return(
		<div>
		  <h3 className="tags-heading txt">Categories</h3>
		  <div className="tag-container">
        {newTags.map((tag, index) => {
          const [text] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index} className="tag-value txt">
              {text}
            </Link>
          )
        })}
      </div>
		</div>
	)
}

export default TagsList