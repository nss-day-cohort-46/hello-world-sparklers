/**
 *  LocationList which renders individual blog objects as HTML
 */

import { useBlog } from './BlogDataProvider.js'
import { Blog } from './Blog.js'

export const BlogList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".landmarksHead")
    const blogs = useBlog()

    let blogHTMLRepresentations = ""
    for (const blog of blogs) {
        blogHTMLRepresentations += Blog(blog)

    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <div class="blogCards">
        ${blogHTMLRepresentations}
        </div>
    `
}
