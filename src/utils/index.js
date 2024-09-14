
export function filterPosts(posts, term) {
    const regexp = new RegExp(term, "i")

    const filteredPosts = posts.filter((item) => 
        regexp.test(item.title) || regexp.test(item.content) || regexp.test(item.category)
    );

    return filteredPosts
}

